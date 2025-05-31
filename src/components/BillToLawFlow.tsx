
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, FileText, Users, Vote, CheckCircle, XCircle } from 'lucide-react';

interface Step {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  details: string;
}

const BillToLawFlow = () => {
  const [selectedStep, setSelectedStep] = useState<number | null>(null);

  const steps: Step[] = [
    {
      id: 1,
      title: "Introduction",
      description: "Bill introduced in House or Senate",
      icon: <FileText className="w-6 h-6" />,
      details: "Any member of Congress can introduce a bill. It gets assigned a number (H.R. for House, S. for Senate) and referred to the appropriate committee."
    },
    {
      id: 2,
      title: "Committee Review",
      description: "Committee examines and marks up bill",
      icon: <Users className="w-6 h-6" />,
      details: "The committee studies the bill, holds hearings, and may make changes (markup). They can approve, reject, or table the bill."
    },
    {
      id: 3,
      title: "Floor Vote",
      description: "Full chamber debates and votes",
      icon: <Vote className="w-6 h-6" />,
      details: "If approved by committee, the bill goes to the full House or Senate for debate and voting. Simple majority needed to pass."
    },
    {
      id: 4,
      title: "Other Chamber",
      description: "Same process in other chamber",
      icon: <Users className="w-6 h-6" />,
      details: "The bill goes through the same committee and floor vote process in the other chamber. Both chambers must pass identical versions."
    },
    {
      id: 5,
      title: "President's Desk",
      description: "President signs or vetoes",
      icon: <FileText className="w-6 h-6" />,
      details: "The President has 10 days to sign the bill into law or veto it. If Congress is in session and the President takes no action, it becomes law automatically."
    },
    {
      id: 6,
      title: "Law or Override",
      description: "Becomes law or Congress overrides veto",
      icon: <CheckCircle className="w-6 h-6" />,
      details: "If signed, it becomes law. If vetoed, Congress can override with a 2/3 majority in both chambers. If override succeeds, it becomes law without presidential signature."
    }
  ];

  return (
    <div className="my-6 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl border border-blue-200 dark:border-blue-800">
      <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-4 text-center">
        How a Bill Becomes Law
      </h3>
      
      {/* Visual Flow */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mb-6">
        {steps.map((step, index) => (
          <div key={step.id} className="flex flex-col items-center">
            <Button
              variant={selectedStep === step.id ? "default" : "outline"}
              size="lg"
              className={`w-16 h-16 rounded-full p-0 mb-2 transition-all duration-200 ${
                selectedStep === step.id 
                  ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg' 
                  : 'bg-white dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-blue-900/50 border-blue-200 dark:border-blue-700'
              }`}
              onClick={() => setSelectedStep(selectedStep === step.id ? null : step.id)}
            >
              <div className={selectedStep === step.id ? 'text-white' : 'text-blue-600 dark:text-blue-400'}>
                {step.icon}
              </div>
            </Button>
            <p className="text-xs text-center text-gray-700 dark:text-gray-300 font-medium">
              {step.title}
            </p>
            {index < steps.length - 1 && (
              <ArrowRight className="w-4 h-4 text-blue-400 dark:text-blue-500 mt-2 hidden md:block" />
            )}
          </div>
        ))}
      </div>

      {/* Step Details */}
      {selectedStep && (
        <Card className="bg-white/80 dark:bg-gray-800/80 border-blue-200 dark:border-blue-700 shadow-md animate-fade-in">
          <CardContent className="p-4">
            <div className="flex items-start space-x-3">
              <div className="text-blue-600 dark:text-blue-400 mt-1">
                {steps.find(step => step.id === selectedStep)?.icon}
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
                  Step {selectedStep}: {steps.find(step => step.id === selectedStep)?.title}
                </h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  {steps.find(step => step.id === selectedStep)?.details}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="text-center mt-4">
        <p className="text-xs text-gray-600 dark:text-gray-400">
          Click on any step to learn more details
        </p>
      </div>
    </div>
  );
};

export default BillToLawFlow;
