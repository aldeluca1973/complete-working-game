// Simple component to show case strength meter
import React from 'react';

interface CaseStrengthMeterProps {
  strength: number;
}

export function CaseStrengthMeter({ strength }: CaseStrengthMeterProps) {
  // Calculate color based on strength
  const getColor = () => {
    if (strength < 30) return 'bg-red-500';
    if (strength < 60) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm mb-1">
        <span>Weak</span>
        <span>Strong</span>
      </div>
      <div className="w-full bg-gavel-blue-700 h-4 rounded-full overflow-hidden">
        <div 
          className={`h-full ${getColor()}`}
          style={{ width: `${strength}%` }}
        ></div>
      </div>
      <div className="text-center mt-1">
        <span className="text-sm">Strength: {strength}%</span>
      </div>
    </div>
  );
}