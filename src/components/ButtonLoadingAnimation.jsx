const ButtonLoadingAnimation = ({ text }) => {
  return (
    <span className="flex items-center justify-center gap-1 pulse-glow-text font-semibold text-[var(--light-cyan)]">
      {text}
      <span className="inline-block w-[1.5ch] text-left dot-animation"></span>
    </span>
  );
};
export default ButtonLoadingAnimation;
