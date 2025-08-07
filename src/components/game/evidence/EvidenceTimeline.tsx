// Simple component to display evidence timeline
import React from 'react';
import { EvidenceCard } from './EvidenceCard';

interface EvidenceTimelineProps {
  evidenceItems: any[];
  onEvidenceSelect: (evidence: any) => void;
  selectedEvidence: any;
}

export function EvidenceTimeline({ evidenceItems, onEvidenceSelect, selectedEvidence }: EvidenceTimelineProps) {
  if (!evidenceItems || evidenceItems.length === 0) {
    return (
      <div className="p-4 text-center text-gray-400">
        No evidence items available for this case.
      </div>
    );
  }
  
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {evidenceItems.map((evidence, index) => (
          <EvidenceCard
            key={evidence.id || index}
            evidence={evidence}
            isSelected={selectedEvidence && selectedEvidence.id === evidence.id}
            onSelect={() => onEvidenceSelect(evidence)}
          />
        ))}
      </div>
      
      {selectedEvidence && (
        <div className="mt-4 p-3 bg-gavel-blue-600/50 rounded-md border border-gavel-blue-400">
          <h3 className="font-medium text-sm mb-2">Selected Evidence: {selectedEvidence.evidence_name}</h3>
          <p className="text-sm">{selectedEvidence.description}</p>
          
          {selectedEvidence.legal_foundation && (
            <div className="mt-2">
              <h4 className="text-xs font-medium">Legal Foundation:</h4>
              <p className="text-xs mt-1">{selectedEvidence.legal_foundation}</p>
            </div>
          )}
          
          {selectedEvidence.presentation_risks && selectedEvidence.presentation_risks.length > 0 && (
            <div className="mt-2">
              <h4 className="text-xs font-medium">Presentation Risks:</h4>
              <ul className="text-xs mt-1 list-disc list-inside">
                {selectedEvidence.presentation_risks.map((risk: string, i: number) => (
                  <li key={i}>{risk}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}