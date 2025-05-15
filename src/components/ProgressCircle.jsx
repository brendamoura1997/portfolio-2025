import { useEffect, useState } from "react";

const ProgressCircle = ({
  label,
  percent,
  color,
  skillName,
  colorTitle,
  isVisible,
}) => {
  const dots = 70; // Total de pontos
  const rotate = 360 / dots;
  const [marked, setMarked] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const step = Math.max(1, percent / 90);

    const animate = () => {
      start += step;
      setMarked(Math.min(Math.floor((dots * start) / 100), dots));

      if (start < percent) {
        requestAnimationFrame(animate);
      }
    };

    // Reset antes de animar
    setMarked(0);
    requestAnimationFrame(animate);
  }, [isVisible, percent]);

  return (
    <div className="relative flex flex-col items-center m-4 sm:m-10 scale-75 sm:scale-95 tablet-scale">
      {/* Círculo parte de fora */}
      <div className="relative w-[min(40vw,200px)] h-[min(40vw,55px)] flex justify-center items-center">
        {/* Pontos */}
        {[...Array(dots)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-[15px] h-[3px] rounded-sm ${
              i < marked ? "animate-glow" : "bg-[#0007]"
            }`}
            style={{
              transform: `rotate(${i * rotate}deg) translateY(-2760%)`,
              backgroundColor: i < marked ? color : undefined,
              boxShadow: i < marked ? `0 0 10px ${color}` : undefined,
            }}
          />
        ))}
        {/* Texto central dentro do círculo */}
        <div className="absolute flex flex-col items-center text-white">
          <h2
            style={{ color: `${colorTitle}` }}
            className="text-2xl md:text-xl T2 whitespace-pre-line"
          >
            {label}
          </h2>
          <small
            style={{ color: `${color}` }}
            className="text-lg md:text-sm BODY1 block"
          >
            {skillName}
          </small>
        </div>
      </div>
    </div>
  );
};

export default ProgressCircle;
