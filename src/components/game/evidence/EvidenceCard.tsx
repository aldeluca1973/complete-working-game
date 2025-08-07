// Simple component to display evidence
import React from 'react';

interface EvidenceCardProps {
  evidence: any;
  isSelected: boolean;
  onSelect: () => void;
}

export function EvidenceCard({ evidence, isSelected, onSelect }: EvidenceCardProps) {
  if (!evidence) return null;
  
  return (
    <div 
      className={`p-3 rounded-lg border ${isSelected ? 'border-verdict-gold bg-gavel-blue-600' : 'border-gavel-blue-500 bg-gavel-blue-700'} cursor-pointer transition-colors hover:bg-gavel-blue-600`}
      onClick={onSelect}
    >
      <div className="font-medium mb-1">{evidence.evidence_name || 'Evidence Item'}</div>
      <div className="text-sm text-gray-300 mb-2">{evidence.evidence_type || 'Document'}</div>
      <p className="text-sm">{evidence.description || 'Evidence description would appear here.'}</p>
      
      {evidence.impact_strength && (
        <div className="flex items-center mt-2">
          <span className="text-xs mr-2">Impact:</span>
          <div className="h-2 bg-gray-700 rounded-full flex-grow">
            <div 
              className={`h-full rounded-full ${evidence.impact_strength > 70 ? 'bg-green-500' : evidence.impact_strength > 40 ? 'bg-yellow-500' : 'bg-red-500'}`}
              style={{ width: `${evidence.impact_strength}%` }}
            ></div>
          </div>
        </div>
      )}
      
      {isSelected && (
        <div className="mt-3 pt-2 border-t border-gavel-blue-500">
          <button className="text-xs text-verdict-gold hover:text-verdict-gold/80">
            Present to Court
          </button>
        </div>
      )}
    </div>
  );
}