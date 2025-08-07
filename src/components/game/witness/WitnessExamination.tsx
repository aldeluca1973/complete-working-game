// Simple component for witness examination
import React from 'react';
import { CourtroomCard, CourtroomCardContent, CourtroomCardHeader, CourtroomCardTitle } from '@/components/ui/courtroom-card';

interface WitnessExaminationProps {
  currentWitness: any;
  phase: string;
}

export function WitnessExamination({ currentWitness, phase }: WitnessExaminationProps) {
  if (!currentWitness) {
    return (
      <div className="p-4 text-center text-gray-400">
        No witness currently on the stand.
      </div>
    );
  }
  
  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div>
          <h3 className="font-bold">{currentWitness.name || 'Witness Name'}</h3>
          <p className="text-sm text-gray-300">{currentWitness.title || 'Witness Title'}</p>
        </div>
        <div className="mt-2 md:mt-0">
          <span className="px-2 py-1 bg-gavel-blue-500 rounded-full text-xs">
            {currentWitness.party === 'prosecution' ? 'Prosecution Witness' : 'Defense Witness'}
          </span>
        </div>
      </div>
      
      <div className="bg-gavel-blue-700 p-3 rounded-md">
        <h4 className="font-medium text-sm mb-2">Testimony</h4>
        <p className="text-sm italic">{currentWitness.testimony || 'Witness testimony would appear here.'}</p>
      </div>
      
      <div className="space-y-2">
        <h4 className="font-medium text-sm">Examination Options</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <button className="bg-gavel-blue-600 hover:bg-gavel-blue-500 text-sm p-2 rounded">
            Ask about involvement
          </button>
          <button className="bg-gavel-blue-600 hover:bg-gavel-blue-500 text-sm p-2 rounded">
            Challenge timeline
          </button>
          <button className="bg-gavel-blue-600 hover:bg-gavel-blue-500 text-sm p-2 rounded">
            Establish credibility
          </button>
          <button className="bg-gavel-blue-600 hover:bg-gavel-blue-500 text-sm p-2 rounded">
            Conclude examination
          </button>
        </div>
      </div>
      
      <div className="mt-4 bg-gavel-blue-600/50 p-3 rounded-md border border-gavel-blue-400">
        <h4 className="font-medium text-sm mb-1">Strategic Notes</h4>
        <p className="text-xs">
          {currentWitness.party === 'prosecution' 
            ? 'This witness supports the prosecution\'s case. Consider how their testimony affects your position.'
            : 'This witness supports the defense\'s case. Consider how their testimony affects your position.'
          }
        </p>
      </div>
    </div>
  );
}