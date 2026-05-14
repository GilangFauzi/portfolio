export default function WaveDivider({ variant = "default" }) {
  const paths = {
    default: "M0 60 C240 120 480 0 720 60 C960 120 1200 0 1440 60 L1440 120 L0 120 Z",
    flip: "M0 60 C240 0 480 120 720 60 C960 0 1200 120 1440 60 L1440 120 L0 120 Z",
    shelf: "M0 60 C240 60 480 0 720 40 C960 80 1200 20 1440 60 L1440 120 L0 120 Z",
    steep: "M0 20 C240 60 480 120 720 80 C960 40 1200 100 1440 50 L1440 120 L0 120 Z",
  };
  const heights = { default: "h-20 sm:h-28", flip: "h-20 sm:h-28", shelf: "h-16 sm:h-24", steep: "h-24 sm:h-32" };
  return (
    <div className={`relative ${heights[variant]} overflow-hidden`} aria-hidden="true">
      <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 1440 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d={paths[variant] || paths.default} className="fill-surface-alt" />
      </svg>
    </div>
  );
}
