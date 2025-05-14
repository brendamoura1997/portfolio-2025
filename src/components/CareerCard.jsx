const CareerCard = ({ title, subtitle, duration, description, onClick }) => {
  return (
    <div
      className="max-w-xl p-5 rounded-lg relative bg-[#000]/20 backdrop-blur-sm shadow-[-0px_-0px_10px_5px_#013880] 
      sm:shadow-[-0px_-0px_20px_0px_#013880] hover:animate-[pulse-glow-button_1.5s_ease-in-out_infinite] 
      border-[0.5px] border-transparent hover:border-[var(--light-cyan)] transition-all cursor-pointer "
      onClick={onClick}
    >
      <div className="flex flex-wrap justify-between items-center gap-2">
        <h3 className="text-l font-bold text-[var(--light-cyan-title)]">
          {title}
        </h3>
        <p className="text-gray-400 text-sm whitespace-normal">{subtitle}</p>
      </div>
      <p className="text-gray-500 text-xs italic whitespace-normal">
        {duration}
      </p>
      <p className="mt-2 text-[var(--text-light-gray)] BODY1 text-justify break-words text-sm md:text-md leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default CareerCard;
