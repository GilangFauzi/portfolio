export default function AuroraBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      <div className="absolute -top-1/2 -left-1/4 w-[800px] h-[800px] rounded-full bg-cyan-500/8 blur-[120px] animate-aurora1" />
      <div className="absolute top-0 -right-1/4 w-[700px] h-[700px] rounded-full bg-blue-600/6 blur-[100px] animate-aurora2" />
      <div className="absolute -bottom-1/3 left-1/3 w-[600px] h-[600px] rounded-full bg-purple-600/5 blur-[110px] animate-aurora3" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full bg-cyan-400/5 blur-[130px] animate-aurora4" />
      <style>{`
        @keyframes aurora1 { 0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); } 33% { transform: translate(15%, -10%) scale(1.1) rotate(5deg); } 66% { transform: translate(-5%, 15%) scale(0.9) rotate(-3deg); } }
        @keyframes aurora2 { 0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); } 33% { transform: translate(-10%, 15%) scale(1.15) rotate(-4deg); } 66% { transform: translate(10%, -5%) scale(0.95) rotate(3deg); } }
        @keyframes aurora3 { 0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); } 50% { transform: translate(-15%, -10%) scale(1.2) rotate(2deg); } }
        @keyframes aurora4 { 0%, 100% { transform: translate(-50%, -50%) scale(1) rotate(0deg); } 25% { transform: translate(-45%, -55%) scale(1.05) rotate(-2deg); } 75% { transform: translate(-55%, -45%) scale(0.95) rotate(2deg); } }
        .animate-aurora1 { animation: aurora1 20s ease-in-out infinite; }
        .animate-aurora2 { animation: aurora2 25s ease-in-out infinite; }
        .animate-aurora3 { animation: aurora3 18s ease-in-out infinite; }
        .animate-aurora4 { animation: aurora4 22s ease-in-out infinite; }
      `}</style>
    </div>
  );
}
