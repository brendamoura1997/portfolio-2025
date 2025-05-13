const ImageCard = ({ imageSrc, title }) => {
  return (
    <div
      className="relative w-[55vw] sm:w-[45vw] sm:h-[75vw] max-w-[210px] sm:max-w-[190px]
    sm:max-h-[280px] rounded-md clip-diagonal-top-right flex flex-col items-center
    "
    >
      <img
        src={imageSrc}
        alt={title}
        className="w-[60vw] sm:w-[40vw] h-[70vw] sm:h-[55vw] 
             max-w-[195px] sm:max-w-[187px] max-h-[220px] sm:max-h-[220px] 
             object-cover rounded-md overflow-hidden"
      />

      <div className="flex justify-center">
        <h3 className="pt-4 sm:py-4 T1 md:py-1 text-[var(--light-cyan)] text-xl font-bold">
          {title}
        </h3>
      </div>
    </div>
  );
};
export default ImageCard;
