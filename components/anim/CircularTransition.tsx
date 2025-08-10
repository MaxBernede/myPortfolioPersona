import { useEffect } from "react";

interface Props {
  isActive: boolean;
  onComplete: () => void;
}

export default function CircularTransition({ isActive, onComplete }: Props) {
  useEffect(() => {
    if (isActive) {
      // Durée légèrement plus longue pour plus de fluidité
      const timer = setTimeout(onComplete, 1000);
      return () => clearTimeout(timer);
    }
  }, [isActive, onComplete]);

  if (!isActive) return null;

  return (
    <div className="fixed inset-0 z-50 pointer-events-none">
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Transition plus fluide avec ease-in-out et multiple cercles */}
          <div className="w-0 h-0 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full animate-expand-circle-smooth" />
          {/* Cercle secondaire pour effet de profondeur */}
          <div className="absolute w-0 h-0 bg-gradient-to-br from-blue-500/70 to-cyan-500/70 rounded-full animate-expand-circle-smooth-delayed" />
          {/* Cercle tertiaire pour encore plus de fluidité */}
          <div className="absolute w-0 h-0 bg-gradient-to-br from-cyan-300/50 to-blue-400/50 rounded-full animate-expand-circle-smooth-late" />
        </div>
      </div>
    </div>
  );
}