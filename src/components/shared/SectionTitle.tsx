type Alignment = "left" | "center";

type Props = {
  label?: string;
  heading: string;
  subText?: string;
  align?: Alignment;
  light?: boolean;
  showLine?: boolean;
  className?: string;
};

export default function SectionTitle({
  label,
  heading,
  subText,
  align = "left",
  light = false,
  showLine = true,
  className = "",
}: Props) {
  const isCenter = align === "center";
  const headingColor = light
    ? "text-[var(--color-text-light)]"
    : "text-[var(--color-text-primary)]";
  const subColor = light
    ? "text-[var(--color-text-light)] opacity-70"
    : "text-[var(--color-text-secondary)]";
  const labelColor = light
    ? "text-[var(--color-accent-light)]"
    : "text-[var(--color-accent)]";

  return (
    <div
      className={`${isCenter ? "text-center flex flex-col items-center" : ""} ${className}`}
    >
      {label && (
        <span className={`text-label ${labelColor} block mb-4`}>{label}</span>
      )}
      <h2
        className={`font-display font-normal ${headingColor} leading-tight text-[var(--text-h2)]`}
      >
        {heading}
      </h2>
      {showLine && (
        <span
          className={`block h-px w-10 mt-5 bg-[var(--color-accent)] ${isCenter ? "mx-auto" : ""}`}
        />
      )}
      {subText && (
        <p
          className={`mt-6 max-w-xl leading-relaxed text-base ${subColor} ${isCenter ? "mx-auto" : ""}`}
        >
          {subText}
        </p>
      )}
    </div>
  );
}
