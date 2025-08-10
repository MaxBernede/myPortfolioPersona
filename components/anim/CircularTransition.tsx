import { useEffect } from "react";

interface Props {
  isActive: boolean;
  onComplete: () => void;
}

export default function CircularTransition({ isActive, onComplete }: Props) {
  useEffect(() => {
    if (isActive) {
      const timer = setTimeout(onComplete, 800);
      return () => clearTimeout(timer);
    }
  }, [isActive, onComplete]);

  if (!isActive) return null;

  return (
    <div className="fixed inset-0 z-50 pointer-events-none">
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-0 h-0 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full animate-expand-circle" />
        </div>
      </div>
    </div>
  );
}
