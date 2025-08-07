// Simple component to track credibility
import React from 'react';

interface CredibilityTrackerProps {
  actions: any[];
  phase: string;
}

export function CredibilityTracker({ actions, phase }: CredibilityTrackerProps) {
  // Calculate credibility score based on actions
  const credibilityScore = Math.min(100, 65 + (actions.length * 5));
  
  return (
    <div className="space-y-3">
      <div className="space-y-2">
        <div className="w-full bg-gavel-blue-700 h-3 rounded-full overflow-hidden">
          <div 
            className="h-full bg-blue-400"
            style={{ width: `${credibilityScore}%` }}
          ></div>
        </div>
        <div className="text-center">
          <span className="text-sm">Credibility Score: {credibilityScore}</span>
        </div>
      </div>
      
      <div className="mt-3 text-sm">
        <p>Your credibility with the court is {
          credibilityScore > 80 ? 'excellent' :
          credibilityScore > 60 ? 'good' :
          credibilityScore > 40 ? 'moderate' : 'concerning'
        }.</p>
        {phase === 'opening' && <p className="mt-1">Focus on establishing facts and legal foundations.</p>}
        {phase === 'evidence' && <p className="mt-1">Present evidence that supports your case theory.</p>}
        {phase === 'witness' && <p className="mt-1">Maintain respectful questioning of witnesses.</p>}
        {phase === 'closing' && <p className="mt-1">Summarize your strongest points for maximum impact.</p>}
      </div>
    </div>
  );
}