type Props = {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
  cream?: boolean;
  noPadding?: boolean;
  id?: string;
};

export default function SectionWrapper({
  children,
  className = "",
  dark = false,
  cream = false,
  noPadding = false,
  id,
}: Props) {
  const bg = dark
    ? "bg-[var(--color-bg-dark)]"
    : cream
    ? "bg-[var(--color-bg-secondary)]"
    : "bg-[var(--color-bg-primary)]";

  return (
    <section
      id={id}
      className={`w-full ${bg} ${noPadding ? "" : "section-py"} ${dark ? "relative overflow-hidden" : ""} ${className}`}
    >
      {dark && (
        <div
          className="absolute inset-0 pointer-events-none select-none"
          aria-hidden="true"
          style={{
            backgroundImage: "url('/images/about/footer/fabric.png')",
            backgroundSize: "400px auto",
            backgroundRepeat: "repeat",
            opacity: 0.09,
          }}
        />
      )}
      <div className={`container-site ${dark ? "relative" : ""}`}>{children}</div>
    </section>
  );
}
