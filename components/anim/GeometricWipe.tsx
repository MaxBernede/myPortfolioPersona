interface Props {
  isActive: boolean;
  direction?: "left" | "right";
}

export default function GeometricWipe({ isActive, direction = "left" }: Props) {
  if (!isActive) return null;

  return (
    <div className="fixed inset-0 z-40 pointer-events-none overflow-hidden">
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className={`absolute h-full bg-gradient-to-r from-cyan-500 to-blue-600 transform transition-transform duration-700 ease-in-out ${
            direction === "left" ? "animate-wipe-left" : "animate-wipe-right"
          }`}
          style={{
            width: "15%",
            left: `${i * 12.5}%`,
            animationDelay: `${i * 50}ms`,
            clipPath: "polygon(0 0, 100% 0, 85% 100%, 0% 100%)",
          }}
        />
      ))}
    </div>
  );
}
