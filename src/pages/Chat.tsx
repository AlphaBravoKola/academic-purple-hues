
import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, ArrowLeft, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Link } from 'react-router-dom';

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
  isTyping?: boolean;
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content: 'Welcome to PoliChat! I\'m your AI guide to understanding government, policy, and political processes. I can help you explore topics like:\n\n• How laws are made\n• Understanding the Constitution\n• Government structure and roles\n• Policy analysis and impacts\n• Voting and elections\n• International relations\n\nWhat would you like to learn about today?',
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
    
    // More sophisticated response logic
    if (message.includes('how') && (message.includes('bill') || message.includes('law'))) {
      return 'Great question! The process of how a bill becomes law involves several important steps:\n\n🏛️ **Introduction**: A bill can be introduced in either the House or Senate by a member of Congress.\n\n📋 **Committee Review**: The bill goes to the relevant committee where experts examine it, hold hearings, and may make changes.\n\n🗳️ **Floor Vote**: If approved by committee, the full chamber debates and votes on the bill.\n\n🔄 **Other Chamber**: If passed, it goes to the other chamber (House→Senate or Senate→House) for the same process.\n\n📝 **President\'s Desk**: If both chambers pass identical versions, it goes to the President who can sign it into law or veto it.\n\n⚖️ **Override**: Congress can override a presidential veto with a 2/3 majority in both chambers.\n\nWould you like me to explain any of these steps in more detail?';
    }
    
    if (message.includes('congress') || message.includes('senate') || message.includes('house')) {
      return 'Congress is the legislative branch of the U.S. government, consisting of two chambers:\n\n🏛️ **House of Representatives**:\n• 435 voting members\n• 2-year terms\n• Representation based on state population\n• Led by the Speaker of the House\n\n🏛️ **Senate**:\n• 100 members (2 per state)\n• 6-year terms\n• Equal representation for all states\n• Led by the Vice President (as President of the Senate)\n\n⚖️ **Key Powers**:\n• Pass federal laws\n• Control government spending\n• Regulate interstate commerce\n• Declare war\n• Impeach federal officials\n\nWhat specific aspect of Congress would you like to explore further?';
    }
    
    if (message.includes('constitution')) {
      return 'The U.S. Constitution is the supreme law of our nation! Here\'s what makes it special:\n\n📜 **Structure**:\n• Preamble (the famous "We the People...")\n• 7 Articles establishing government framework\n• 27 Amendments (including the Bill of Rights)\n\n⚖️ **Three Branches of Government**:\n• **Legislative** (Congress) - Makes laws\n• **Executive** (President) - Enforces laws\n• **Judicial** (Courts) - Interprets laws\n\n🛡️ **Key Principles**:\n• Separation of powers\n• Checks and balances\n• Federalism\n• Individual rights protection\n\n🔄 **Amendment Process**: The Constitution can be changed, but it requires broad consensus.\n\nWhich aspect of the Constitution interests you most?';
    }
    
    if (message.includes('vote') || message.includes('voting') || message.includes('election')) {
      return 'Voting is the cornerstone of democracy! Here\'s how it works:\n\n🗳️ **Types of Elections**:\n• **Presidential**: Every 4 years\n• **Congressional**: House every 2 years, Senate every 6 years (staggered)\n• **State/Local**: Varies by location\n\n📋 **How to Vote**:\n1. Register to vote in your state\n2. Research candidates and issues\n3. Find your polling location\n4. Vote on Election Day or by absentee/mail-in ballot\n\n🏛️ **Electoral College**: Presidential elections use this system where states get electoral votes based on their representation in Congress.\n\n🛡️ **Voting Rights**: Protected by federal laws including the Voting Rights Act.\n\nDo you have questions about voter registration, the electoral process, or voting rights?';
    }
    
    if (message.includes('policy') || message.includes('policies')) {
      return 'Policy analysis is crucial for understanding how government decisions affect our lives:\n\n🔍 **What is Policy Analysis?**\nThe systematic study of government actions, their costs, benefits, and impacts on society.\n\n📊 **Key Components**:\n• **Problem Definition**: What issue needs addressing?\n• **Options Analysis**: What are the possible solutions?\n• **Cost-Benefit Analysis**: What are the trade-offs?\n• **Implementation**: How will it work in practice?\n• **Evaluation**: Is it achieving its goals?\n\n🎯 **Types of Policies**:\n• Economic (taxes, spending)\n• Social (healthcare, education)\n• Environmental (climate, conservation)\n• Foreign (trade, diplomacy)\n\nWhat type of policy would you like to explore?';
    }
    
    if (message.includes('supreme court') || message.includes('judicial')) {
      return 'The Supreme Court is the highest court in the land! Here\'s what you should know:\n\n⚖️ **Composition**:\n• 9 Justices (1 Chief Justice, 8 Associate Justices)\n• Appointed by the President, confirmed by Senate\n• Life tenure (until death, retirement, or impeachment)\n\n🔍 **Key Powers**:\n• **Judicial Review**: Can declare laws unconstitutional\n• **Final Appeals**: Last stop for legal disputes\n• **Constitutional Interpretation**: Decides what the Constitution means\n\n📋 **How Cases Reach the Court**:\n• Writ of Certiorari (\"cert petition\")\n• Court chooses which cases to hear\n• Only hears ~70 cases per year\n\n🏛️ **Impact**: Supreme Court decisions become the law of the land and set precedents for all other courts.\n\nWould you like to know about famous cases or how the Court operates?';
    }

    if (message.includes('impeachment')) {
      return 'Impeachment is how Congress can remove federal officials for serious misconduct:\n\n⚖️ **The Process**:\n• **House**: Investigates and votes to impeach (simple majority)\n• **Senate**: Holds trial and votes to convict (2/3 majority required)\n\n📋 **Grounds for Impeachment**:\n"Treason, Bribery, or other high Crimes and Misdemeanors"\n\n🏛️ **Who Can Be Impeached**:\n• President, Vice President\n• Federal judges\n• Other federal officials\n\n📊 **Historical Context**:\n• Only 3 presidents have been impeached by the House\n• No president has ever been convicted by the Senate\n• Several federal judges have been removed\n\nInterested in learning about specific impeachment cases?';
    }
    
    // More contextual and helpful responses
    if (message.includes('thank') || message.includes('thanks')) {
      return 'You\'re very welcome! I\'m here to help you understand our government and political system. Feel free to ask about anything from local politics to international relations. What else would you like to explore?';
    }

    if (message.includes('hello') || message.includes('hi ')) {
      return 'Hello! I\'m excited to help you learn about government and politics. Whether you\'re curious about how laws work, want to understand elections, or explore policy issues, I\'m here to guide you. What interests you most?';
    }
    
    // Default response with suggestions
    return 'That\'s an interesting question! I\'d love to help you explore that topic further. Here are some ways I can assist:\n\n🏛️ **Government Structure**: How the three branches work together\n📜 **Legislative Process**: How bills become laws\n🗳️ **Elections & Voting**: Understanding our democratic process\n⚖️ **Constitutional Law**: Your rights and protections\n🌍 **Policy Analysis**: How government decisions affect you\n\nCould you tell me more specifically what you\'d like to learn about? Or feel free to ask any question about government, politics, or policy!';
  };

  const suggestedQuestions = [
    "How does a bill become law?",
    "What are the three branches of government?",
    "How does the electoral college work?",
    "What is the difference between the House and Senate?",
    "How are Supreme Court justices chosen?"
  ];

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
    }, 1500 + Math.random() * 1500);
  };

  const handleSuggestedQuestion = (question: string) => {
    setInputValue(question);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Feed
                </Button>
              </Link>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900 dark:text-white">PoliChat</h1>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Your AI Government Guide</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Container */}
      <div className="max-w-4xl mx-auto px-4 py-6">
        <Card className="h-[calc(100vh-200px)] flex flex-col bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
          {/* Messages */}
          <ScrollArea className="flex-1 p-6">
            <div className="space-y-6">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex items-start space-x-3 max-w-[80%] ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.type === 'user' 
                        ? 'bg-purple-600' 
                        : 'bg-gray-100 dark:bg-gray-700'
                    }`}>
                      {message.type === 'user' ? (
                        <User className="w-4 h-4 text-white" />
                      ) : (
                        <Bot className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                      )}
                    </div>
                    <div
                      className={`rounded-lg p-4 ${
                        message.type === 'user'
                          ? 'bg-purple-600 text-white'
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100'
                      }`}
                    >
                      <div className="text-sm leading-relaxed whitespace-pre-line">{message.content}</div>
                      <div className={`text-xs mt-2 opacity-70 ${
                        message.type === 'user' ? 'text-purple-100' : 'text-gray-500 dark:text-gray-400'
                      }`}>
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex items-start space-x-3 max-w-[80%]">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 bg-gray-100 dark:bg-gray-700">
                      <Bot className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div ref={messagesEndRef} />
          </ScrollArea>
          
          {/* Suggested Questions */}
          {messages.length === 1 && (
            <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Try asking:</p>
              <div className="flex flex-wrap gap-2">
                {suggestedQuestions.map((question, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    onClick={() => handleSuggestedQuestion(question)}
                    className="text-xs h-8 bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    {question}
                  </Button>
                ))}
              </div>
            </div>
          )}
          
          {/* Input */}
          <div className="p-6 border-t border-gray-200 dark:border-gray-700">
            <div className="flex space-x-3">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything about government, laws, or politics..."
                className="flex-1 bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 focus:border-purple-500 dark:focus:border-purple-400"
                disabled={isTyping}
              />
              <Button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isTyping}
                className="bg-purple-600 hover:bg-purple-700 text-white px-6"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Chat;
