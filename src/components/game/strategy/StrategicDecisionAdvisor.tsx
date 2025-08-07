// Simple component to provide strategic advice
import React from 'react';

interface StrategicDecisionAdvisorProps {
  phase: string;
  caseData: any;
  juryScore: number;
}

export function StrategicDecisionAdvisor({ phase, caseData, juryScore }: StrategicDecisionAdvisorProps) {
  // Generate advice based on phase and jury score
  const getAdvice = () => {
    if (phase === 'pretrial') {
      return "Review case materials thoroughly before beginning trial.";
    }
    
    if (phase === 'opening') {
      return "Establish a clear narrative and legal theory in your opening statement.";
    }
    
    if (phase === 'evidence') {
      if (juryScore < 40) {
        return "Focus on presenting stronger evidence. The jury appears skeptical of your case.";
      } else if (juryScore > 60) {
        return "Continue building on your narrative with supporting evidence.";
      } else {
        return "Present evidence that directly addresses the central legal question.";
      }
    }
    
    if (phase === 'witness') {
      if (juryScore < 40) {
        return "Use witness testimony to address weaknesses in your case.";
      } else if (juryScore > 60) {
        return "Elicit testimony that reinforces your strongest arguments.";
      } else {
        return "Focus questioning on key facts that support your legal theory.";
      }
    }
    
    if (phase === 'closing') {
      if (juryScore < 40) {
        return "Address perceived weaknesses and emphasize reasonable doubt.";
      } else if (juryScore > 60) {
        return "Reinforce the strength of your evidence and the clarity of your case.";
      } else {
        return "Summarize the most compelling points and address any lingering concerns.";
      }
    }
    
    if (phase === 'verdict') {
      return "Await the jury's decision with confidence in your presentation.";
    }
    
    return "Consider your next strategic move carefully.";
  };
  
  return (
    <div className="space-y-3">
      <p className="text-sm">{getAdvice()}</p>
      
      <div className="mt-3">
        <h3 className="font-semibold text-sm">Strategic Focus</h3>
        <ul className="list-disc list-inside text-sm mt-1">
          <li>Present a coherent narrative</li>
          <li>Address opposing arguments</li>
          <li>Maintain credibility with the court</li>
          <li>Focus on legally relevant facts</li>
        </ul>
      </div>
    </div>
  );
}