
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, FileText, Users, Vote, CheckCircle, Crown, Building2, ArrowDown, Maximize2, Minimize2, X } from 'lucide-react';

interface Step {
  id: number;
  title: string;
  description: string;
  icon: React.ReactElement;
  details: {
    overview: string;
    keyPoints: string[];
    funFact: string;
  };
  color: string;
  bgColor: string;
}

const BillToLawFlow = () => {
  const [selectedStep, setSelectedStep] = useState<number | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const steps: Step[] = [
    {
      id: 1,
      title: "Introduction",
      description: "Bill introduced in House or Senate",
      icon: <FileText className="w-6 h-6" />,
      details: {
        overview: "The legislative journey begins when any member of Congress introduces a bill.",
        keyPoints: [
          "📝 Bills get assigned numbers (H.R. for House bills, S. for Senate bills)",
          "🏛️ Can start in either chamber (except revenue bills must start in House)",
          "📋 Referred to appropriate committee based on subject matter",
          "⏰ Thousands of bills are introduced each session",
          "🎯 Bill sponsor becomes the primary advocate"
        ],
        funFact: "💡 Did you know? About 10,000-15,000 bills are introduced in each Congress, but only about 3-5% become law!"
      },
      color: "text-purple-600",
      bgColor: "from-purple-100 to-purple-200"
    },
    {
      id: 2,
      title: "Committee Review",
      description: "Committee examines and marks up bill",
      icon: <Users className="w-6 h-6" />,
      details: {
        overview: "Committees are the workhorses of Congress where detailed examination happens.",
        keyPoints: [
          "🔍 Committee studies bill line by line",
          "👥 Public hearings with expert witnesses",
          "✏️ Markup sessions to make changes and amendments",
          "📊 Research and analysis of potential impacts",
          "🗳️ Committee votes to approve, reject, or table the bill",
          "📝 Committee report explains their decision and reasoning"
        ],
        funFact: "⚡ Most bills die in committee - it's the biggest filter in the legislative process!"
      },
      color: "text-indigo-600",
      bgColor: "from-indigo-100 to-indigo-200"
    },
    {
      id: 3,
      title: "Floor Vote",
      description: "Full chamber debates and votes",
      icon: <Vote className="w-6 h-6" />,
      details: {
        overview: "If the committee approves, the bill goes to the full House or Senate for consideration.",
        keyPoints: [
          "🎤 Floor debate with time limits for speaking",
          "📝 Members can propose amendments",
          "🗳️ Simple majority (51%) needed to pass",
          "📱 House uses electronic voting, Senate often uses voice votes",
          "⏱️ Voting procedures differ between chambers",
          "📊 Roll call votes are recorded and public"
        ],
        funFact: "🔔 House votes are usually 15 minutes, but members often rush from offices when the bells ring!"
      },
      color: "text-blue-600",
      bgColor: "from-blue-100 to-blue-200"
    },
    {
      id: 4,
      title: "Other Chamber",
      description: "Same process in other chamber",
      icon: <Building2 className="w-6 h-6" />,
      details: {
        overview: "The bill must go through the exact same process in the other chamber of Congress.",
        keyPoints: [
          "🔄 Complete committee review process repeats",
          "📝 Other chamber can make their own changes",
          "⚖️ Both chambers must pass identical versions",
          "🔀 If changes are made, bill returns to first chamber",
          "🤝 Conference committee may be needed to resolve differences",
          "✅ Final passage requires both chambers to agree"
        ],
        funFact: "🏛️ This 'bicameral' system ensures thorough review - the Founders wanted to prevent hasty legislation!"
      },
      color: "text-violet-600",
      bgColor: "from-violet-100 to-violet-200"
    },
    {
      id: 5,
      title: "President's Desk",
      description: "President signs or vetoes",
      icon: <Crown className="w-6 h-6" />,
      details: {
        overview: "The President has several options when a bill reaches their desk.",
        keyPoints: [
          "✍️ Sign the bill - it immediately becomes law",
          "❌ Veto the bill - sends it back to Congress with objections",
          "⏰ Take no action for 10 days while Congress is in session (becomes law)",
          "📋 'Pocket veto' if Congress adjourns within 10 days",
          "💭 President considers political, legal, and policy implications",
          "📢 Signing ceremonies for major legislation"
        ],
        funFact: "🖊️ Presidents often use multiple pens when signing important bills, giving them away as souvenirs!"
      },
      color: "text-pink-600",
      bgColor: "from-pink-100 to-pink-200"
    },
    {
      id: 6,
      title: "Law or Override",
      description: "Becomes law or Congress overrides veto",
      icon: <CheckCircle className="w-6 h-6" />,
      details: {
        overview: "The final step determines whether the bill becomes law.",
        keyPoints: [
          "✅ If signed, becomes law immediately (unless specified otherwise)",
          "🔄 If vetoed, Congress can attempt to override",
          "⅔️ Override requires 2/3 majority in BOTH chambers",
          "📊 Veto overrides are rare - only about 7% succeed historically",
          "📅 New laws get assigned public law numbers",
          "📚 Laws are compiled into the U.S. Code"
        ],
        funFact: "🏆 Franklin D. Roosevelt holds the record with 635 vetoes, while 9 presidents never vetoed a single bill!"
      },
      color: "text-emerald-600",
      bgColor: "from-emerald-100 to-emerald-200"
    }
  ];

  const FlowContent = ({ isFullscreenMode = false }) => (
    <div className={`p-8 bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 dark:from-purple-900/30 dark:via-indigo-900/30 dark:to-blue-900/30 rounded-3xl border-2 border-purple-200 dark:border-purple-700 shadow-xl ${isFullscreenMode ? 'h-full overflow-y-auto' : ''}`}>
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full mb-4 shadow-lg">
          <Building2 className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-2">
          How a Bill Becomes Law
        </h3>
        <p className="text-purple-700 dark:text-purple-300 text-lg">
          🏛️ Interactive guide through the legislative process
        </p>
        
        {/* Fullscreen Toggle Button - only show in normal mode */}
        {!isFullscreenMode && (
          <div className="flex justify-center mt-4">
            <Button
              onClick={() => setIsFullscreen(true)}
              variant="outline"
              size="sm"
              className="text-purple-600 border-purple-300 hover:bg-purple-50 dark:hover:bg-purple-900/20"
            >
              <Maximize2 className="w-4 h-4 mr-2" />
              View Fullscreen
            </Button>
          </div>
        )}
      </div>
      
      {/* Layout switches based on fullscreen mode */}
      {isFullscreenMode ? (
        // Horizontal Grid Layout for Fullscreen
        <div className="grid grid-cols-3 gap-6 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.id} className="group relative">
              {/* Step Component */}
              <div className="flex flex-col items-center space-y-4">
                <div className="relative flex-shrink-0">
                  <Button
                    variant={selectedStep === step.id ? "default" : "outline"}
                    size="lg"
                    className={`w-24 h-24 rounded-2xl p-0 transition-all duration-300 transform group-hover:scale-110 shadow-lg ${
                      selectedStep === step.id 
                        ? 'bg-gradient-to-br from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white shadow-purple-300 dark:shadow-purple-800' 
                        : `bg-gradient-to-br ${step.bgColor} hover:from-purple-100 hover:to-purple-200 dark:hover:from-purple-800 dark:hover:to-purple-700 border-2 border-purple-200 dark:border-purple-600`
                    }`}
                    onClick={() => setSelectedStep(selectedStep === step.id ? null : step.id)}
                  >
                    <div className={selectedStep === step.id ? 'text-white' : step.color}>
                      {React.cloneElement(step.icon, { className: "w-8 h-8" })}
                    </div>
                  </Button>
                  
                  {/* Step number badge */}
                  <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-700 text-white text-sm font-bold rounded-full flex items-center justify-center shadow-lg">
                    {step.id}
                  </div>
                </div>
                
                <div className="text-center">
                  <h4 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-2">
                    {step.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {step.description}
                  </p>
                </div>
                
                {/* Horizontal Arrow - only show between steps in same row */}
                {index < steps.length - 1 && (index + 1) % 3 !== 0 && (
                  <div className="absolute -right-8 top-12 flex items-center">
                    <ArrowRight className="w-12 h-12 text-purple-500 dark:text-purple-400 animate-pulse drop-shadow-md" strokeWidth={3} />
                  </div>
                )}
                
                {/* Vertical Arrow - show at end of first row */}
                {index === 2 && (
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                    <ArrowDown className="w-12 h-12 text-purple-500 dark:text-purple-400 animate-pulse drop-shadow-md" strokeWidth={3} />
                  </div>
                )}
                
                {/* Reverse horizontal arrow for second row */}
                {index >= 3 && index < steps.length - 1 && (index - 2) % 3 !== 0 && (
                  <div className="absolute -left-8 top-12 flex items-center">
                    <ArrowRight className="w-12 h-12 text-purple-500 dark:text-purple-400 animate-pulse drop-shadow-md rotate-180" strokeWidth={3} />
                  </div>
                )}
              </div>
              
              {/* Expanded Details */}
              {selectedStep === step.id && (
                <Card className="absolute top-32 left-1/2 transform -translate-x-1/2 w-96 z-10 bg-gradient-to-br from-white to-purple-50 dark:from-gray-800 dark:to-purple-900/30 border-2 border-purple-200 dark:border-purple-700 shadow-xl animate-fade-in">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                        {step.details.overview}
                      </p>
                      
                      <div>
                        <h5 className="text-base font-semibold text-purple-700 dark:text-purple-300 mb-3">Key Points:</h5>
                        <ul className="space-y-2">
                          {step.details.keyPoints.map((point, pointIndex) => (
                            <li key={pointIndex} className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed pl-2">
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="bg-gradient-to-r from-purple-100 to-indigo-100 dark:from-purple-900/40 dark:to-indigo-900/40 rounded-lg p-4 border border-purple-200 dark:border-purple-700">
                        <p className="text-sm text-purple-700 dark:text-purple-300 font-medium">
                          {step.details.funFact}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          ))}
        </div>
      ) : (
        // Vertical Flow Layout for Normal Mode
        <div className="space-y-6 max-w-2xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.id} className="group">
              {/* Step Component */}
              <div className="flex items-center space-x-4">
                <div className="relative flex-shrink-0">
                  <Button
                    variant={selectedStep === step.id ? "default" : "outline"}
                    size="lg"
                    className={`w-20 h-20 rounded-2xl p-0 transition-all duration-300 transform group-hover:scale-110 shadow-lg ${
                      selectedStep === step.id 
                        ? 'bg-gradient-to-br from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white shadow-purple-300 dark:shadow-purple-800' 
                        : `bg-gradient-to-br ${step.bgColor} hover:from-purple-100 hover:to-purple-200 dark:hover:from-purple-800 dark:hover:to-purple-700 border-2 border-purple-200 dark:border-purple-600`
                    }`}
                    onClick={() => setSelectedStep(selectedStep === step.id ? null : step.id)}
                  >
                    <div className={selectedStep === step.id ? 'text-white' : step.color}>
                      {step.icon}
                    </div>
                  </Button>
                  
                  {/* Step number badge */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-700 text-white text-sm font-bold rounded-full flex items-center justify-center shadow-lg">
                    {step.id}
                  </div>
                </div>
                
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-1">
                    {step.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {step.description}
                  </p>
                </div>
              </div>
              
              {/* Expanded Details */}
              {selectedStep === step.id && (
                <Card className="mt-4 ml-24 bg-gradient-to-br from-white to-purple-50 dark:from-gray-800 dark:to-purple-900/30 border-2 border-purple-200 dark:border-purple-700 shadow-xl animate-fade-in">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                        {step.details.overview}
                      </p>
                      
                      <div>
                        <h5 className="text-base font-semibold text-purple-700 dark:text-purple-300 mb-3">Key Points:</h5>
                        <ul className="space-y-2">
                          {step.details.keyPoints.map((point, pointIndex) => (
                            <li key={pointIndex} className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed pl-2">
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="bg-gradient-to-r from-purple-100 to-indigo-100 dark:from-purple-900/40 dark:to-indigo-900/40 rounded-lg p-4 border border-purple-200 dark:border-purple-700">
                        <p className="text-sm text-purple-700 dark:text-purple-300 font-medium">
                          {step.details.funFact}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
              
              {/* Enhanced Vertical Arrow */}
              {index < steps.length - 1 && (
                <div className="flex justify-center my-6">
                  <div className="flex flex-col items-center">
                    <div className="w-1 h-8 bg-gradient-to-b from-purple-500 to-purple-300 dark:from-purple-400 dark:to-purple-600 rounded-full"></div>
                    <ArrowDown className="w-10 h-10 text-purple-500 dark:text-purple-400 animate-pulse drop-shadow-md my-2" strokeWidth={3} />
                    <div className="w-1 h-8 bg-gradient-to-b from-purple-300 to-purple-500 dark:from-purple-600 dark:to-purple-400 rounded-full"></div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Footer with emojis and call to action */}
      <div className="text-center mt-8 p-6 bg-gradient-to-r from-purple-100 to-indigo-100 dark:from-purple-900/40 dark:to-indigo-900/40 rounded-2xl border border-purple-200 dark:border-purple-700">
        <p className="text-lg text-purple-700 dark:text-purple-300 font-semibold mb-3">
          🗳️ Click on any step above to explore detailed information! 🏛️
        </p>
        <p className="text-sm text-purple-600 dark:text-purple-400 mb-3">
          Understanding how laws are made helps you become a more informed citizen
        </p>
        <div className="flex justify-center space-x-3 text-3xl">
          <span>📜</span>
          <span>⚖️</span>
          <span>🇺🇸</span>
          <span>🏛️</span>
          <span>📊</span>
        </div>
      </div>
    </div>
  );

  if (isFullscreen) {
    return (
      <div className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-sm flex items-center justify-center p-6">
        <div className="relative w-full h-full max-w-7xl bg-white dark:bg-gray-900 rounded-3xl shadow-2xl overflow-hidden">
          <Button
            onClick={() => setIsFullscreen(false)}
            className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-red-500 hover:bg-red-600 text-white shadow-lg"
            size="icon"
          >
            <X className="w-6 h-6" />
          </Button>
          <FlowContent isFullscreenMode={true} />
        </div>
      </div>
    );
  }

  return (
    <div className="my-8">
      <FlowContent />
    </div>
  );
};

export default BillToLawFlow;
