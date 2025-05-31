
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, FileText, Users, Vote, CheckCircle, Crown, Building2 } from 'lucide-react';

interface Step {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  details: string;
  color: string;
  bgColor: string;
}

const BillToLawFlow = () => {
  const [selectedStep, setSelectedStep] = useState<number | null>(null);

  const steps: Step[] = [
    {
      id: 1,
      title: "Introduction",
      description: "Bill introduced in House or Senate",
      icon: <FileText className="w-6 h-6" />,
      details: "Any member of Congress can introduce a bill. It gets assigned a number (H.R. for House, S. for Senate) and referred to the appropriate committee. Bills can start in either chamber, except revenue bills which must start in the House.",
      color: "text-purple-600",
      bgColor: "from-purple-100 to-purple-200"
    },
    {
      id: 2,
      title: "Committee Review",
      description: "Committee examines and marks up bill",
      icon: <Users className="w-6 h-6" />,
      details: "The committee studies the bill, holds hearings, and may make changes (markup). They can approve, reject, or table the bill. Committees are the workhorses of Congress where most detailed work happens.",
      color: "text-indigo-600",
      bgColor: "from-indigo-100 to-indigo-200"
    },
    {
      id: 3,
      title: "Floor Vote",
      description: "Full chamber debates and votes",
      icon: <Vote className="w-6 h-6" />,
      details: "If approved by committee, the bill goes to the full House or Senate for debate and voting. Simple majority needed to pass. The House uses electronic voting while the Senate often uses voice votes.",
      color: "text-blue-600",
      bgColor: "from-blue-100 to-blue-200"
    },
    {
      id: 4,
      title: "Other Chamber",
      description: "Same process in other chamber",
      icon: <Building2 className="w-6 h-6" />,
      details: "The bill goes through the same committee and floor vote process in the other chamber. Both chambers must pass identical versions. If changes are made, it goes back to the first chamber.",
      color: "text-violet-600",
      bgColor: "from-violet-100 to-violet-200"
    },
    {
      id: 5,
      title: "President's Desk",
      description: "President signs or vetoes",
      icon: <Crown className="w-6 h-6" />,
      details: "The President has 10 days to sign the bill into law or veto it. If Congress is in session and the President takes no action, it becomes law automatically. If Congress adjourns, it's a 'pocket veto'.",
      color: "text-pink-600",
      bgColor: "from-pink-100 to-pink-200"
    },
    {
      id: 6,
      title: "Law or Override",
      description: "Becomes law or Congress overrides veto",
      icon: <CheckCircle className="w-6 h-6" />,
      details: "If signed, it becomes law immediately (unless specified otherwise). If vetoed, Congress can override with a 2/3 majority in both chambers. If override succeeds, it becomes law without presidential signature.",
      color: "text-emerald-600",
      bgColor: "from-emerald-100 to-emerald-200"
    }
  ];

  return (
    <div className="my-8 p-8 bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 dark:from-purple-900/30 dark:via-indigo-900/30 dark:to-blue-900/30 rounded-3xl border-2 border-purple-200 dark:border-purple-700 shadow-xl">
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
      </div>
      
      {/* Visual Flow */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-6 mb-8">
        {steps.map((step, index) => (
          <div key={step.id} className="flex flex-col items-center group">
            <div className="relative">
              <Button
                variant={selectedStep === step.id ? "default" : "outline"}
                size="lg"
                className={`w-20 h-20 rounded-2xl p-0 mb-4 transition-all duration-300 transform group-hover:scale-110 shadow-lg ${
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
            
            <div className="text-center max-w-24">
              <p className="text-sm font-bold text-gray-800 dark:text-gray-200 mb-1">
                {step.title}
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400 leading-tight">
                {step.description}
              </p>
            </div>
            
            {index < steps.length - 1 && (
              <div className="hidden md:flex items-center justify-center mt-4">
                <ArrowRight className="w-6 h-6 text-purple-400 dark:text-purple-500 animate-pulse" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Step Details */}
      {selectedStep && (
        <Card className="bg-gradient-to-br from-white to-purple-50 dark:from-gray-800 dark:to-purple-900/30 border-2 border-purple-200 dark:border-purple-700 shadow-xl animate-fade-in">
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <div className={`${steps.find(step => step.id === selectedStep)?.color} mt-1 p-3 bg-gradient-to-br ${steps.find(step => step.id === selectedStep)?.bgColor} rounded-xl`}>
                {steps.find(step => step.id === selectedStep)?.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-700 text-white text-sm font-bold rounded-full flex items-center justify-center mr-3">
                    {selectedStep}
                  </div>
                  <h4 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                    {steps.find(step => step.id === selectedStep)?.title}
                  </h4>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base">
                  {steps.find(step => step.id === selectedStep)?.details}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Footer with emojis and call to action */}
      <div className="text-center mt-8 p-4 bg-gradient-to-r from-purple-100 to-indigo-100 dark:from-purple-900/40 dark:to-indigo-900/40 rounded-2xl border border-purple-200 dark:border-purple-700">
        <p className="text-sm text-purple-700 dark:text-purple-300 font-medium mb-2">
          🗳️ Click on any step above to explore the details! 🏛️
        </p>
        <div className="flex justify-center space-x-2 text-2xl">
          <span>📜</span>
          <span>⚖️</span>
          <span>🇺🇸</span>
        </div>
      </div>
    </div>
  );
};

export default BillToLawFlow;
