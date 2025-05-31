
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content: 'Hello! I\'m your political knowledge assistant. I can help you understand government processes, laws, policy analysis, and political concepts. What would you like to learn about?',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    // Simple keyword-based responses for demonstration
    if (message.includes('how') && (message.includes('bill') || message.includes('law'))) {
      return 'A bill becomes law through several steps: 1) Introduction in either House or Senate, 2) Committee review and markup, 3) Floor debate and voting, 4) If passed, sent to other chamber for same process, 5) If both chambers pass it, sent to President, 6) President signs it into law or vetoes it. Congress can override a veto with a 2/3 majority in both chambers.';
    }
    
    if (message.includes('congress') || message.includes('senate') || message.includes('house')) {
      return 'Congress consists of two chambers: the House of Representatives (435 members, 2-year terms) and the Senate (100 members, 6-year terms). The House represents districts based on population, while each state gets 2 senators regardless of population. Both chambers must pass identical versions of bills for them to become law.';
    }
    
    if (message.includes('constitution')) {
      return 'The U.S. Constitution is the supreme law of the land, establishing the framework of government with three branches: Legislative (Congress), Executive (President), and Judicial (Supreme Court). It includes the Bill of Rights (first 10 amendments) and has been amended 27 times since 1787.';
    }
    
    if (message.includes('vote') || message.includes('voting') || message.includes('election')) {
      return 'Voting is a fundamental democratic right. Federal elections include presidential elections (every 4 years), House elections (every 2 years), and Senate elections (every 6 years, staggered). Each state manages its own election process, but all must comply with federal voting rights laws.';
    }
    
    if (message.includes('policy') || message.includes('policies')) {
      return 'Policy analysis involves examining proposed or existing government actions to understand their potential impacts, costs, benefits, and effectiveness. Good policy considers stakeholder input, evidence-based research, implementation feasibility, and long-term consequences.';
    }
    
    if (message.includes('supreme court') || message.includes('judicial')) {
      return 'The Supreme Court is the highest judicial authority, consisting of 9 justices appointed for life by the President and confirmed by the Senate. It interprets the Constitution, resolves disputes between states, and can declare laws unconstitutional through judicial review.';
    }
    
    // Default response
    return 'That\'s an interesting question about government and politics! While I have knowledge about many political topics including legislative processes, constitutional law, policy analysis, and government structure, I\'d be happy to provide more specific information if you could clarify what aspect you\'d like to explore further.';
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: generateBotResponse(inputValue),
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 2000); // Random delay between 1-3 seconds
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-purple-600 hover:bg-purple-700 shadow-lg z-50"
        size="icon"
      >
        <MessageCircle className="w-6 h-6" />
      </Button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 w-80 h-96 z-50">
      <Card className="h-full flex flex-col shadow-xl">
        <CardHeader className="pb-3 bg-purple-600 text-white rounded-t-lg">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg flex items-center">
              <Bot className="w-5 h-5 mr-2" />
              Political AI Assistant
            </CardTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-purple-700 h-8 w-8 p-0"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </CardHeader>
        
        <CardContent className="flex-1 flex flex-col p-0">
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.type === 'user'
                        ? 'bg-purple-600 text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100'
                    }`}
                  >
                    <div className="flex items-start space-x-2">
                      {message.type === 'bot' && (
                        <Bot className="w-4 h-4 mt-0.5 text-purple-600 dark:text-purple-400" />
                      )}
                      {message.type === 'user' && (
                        <User className="w-4 h-4 mt-0.5" />
                      )}
                      <div className="text-sm">{message.content}</div>
                    </div>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3 max-w-[80%]">
                    <div className="flex items-center space-x-2">
                      <Bot className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div ref={messagesEndRef} />
          </ScrollArea>
          
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex space-x-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about laws, policies, government..."
                className="flex-1"
                disabled={isTyping}
              />
              <Button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isTyping}
                size="sm"
                className="bg-purple-600 hover:bg-purple-700"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ChatBot;
