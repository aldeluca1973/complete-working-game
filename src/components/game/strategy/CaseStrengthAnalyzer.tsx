// Simple component to analyze case strength
import React from 'react';

interface CaseStrengthAnalyzerProps {
  caseData: any;
  phase: string;
  selectedEvidence: any;
}

export function CaseStrengthAnalyzer({ caseData, phase, selectedEvidence }: CaseStrengthAnalyzerProps) {
  return (
    <div className="mt-4 space-y-3 text-sm">
      <h3 className="font-semibold">Case Analysis</h3>
      
      {phase === 'pretrial' && (
        <p>Analyze the case details and prepare your strategy before beginning trial.</p>
      )}
      
      {phase === 'opening' && (
        <p>Your opening statement should establish the facts and legal theory of your case.</p>
      )}
      
      {phase === 'evidence' && (
        <>
          <p>Present evidence that strengthens your narrative and undermines opposing arguments.</p>
          {selectedEvidence && (
            <div className="p-2 bg-gavel-blue-600/50 rounded mt-2 border border-gavel-blue-400">
              <p className="font-medium">{selectedEvidence.evidence_name || 'Selected Evidence'}</p>
              <p className="mt-1 text-xs">Impact: {selectedEvidence.impact_strength || 'Moderate'}</p>
            </div>
          )}
        </>
      )}
      
      {phase === 'witness' && (
        <p>Questioning should elicit testimony that supports your case theory.</p>
      )}
      
      {phase === 'closing' && (
        <p>Summarize the evidence and testimony that best supports your position.</p>
      )}
      
      {phase === 'verdict' && (
        <p>The jury is now deliberating based on all presented evidence and arguments.</p>
      )}
    </div>
  );
}