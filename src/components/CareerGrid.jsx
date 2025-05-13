import CareerCard from "./CareerCard";
const CareerGrid = ({ title, data, setSelected, cardsRef, headingRef }) => {
  return (
    <div>
      <h3
        ref={headingRef}
        className="text-2xl font-bold text-center sm:text-left text-[var(--neon-cyan)] T2 pb-5 md:pb-5 neon-text-glow-cyan"
      >
        {title}
      </h3>
      <div className="flex flex-col gap-6">
        {data.map((item, index) => (
          <div key={index} ref={(el) => (cardsRef.current[index] = el)}>
            <CareerCard {...item} onClick={() => setSelected(item)} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareerGrid;
