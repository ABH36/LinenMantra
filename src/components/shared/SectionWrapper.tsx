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
      className={`w-full ${bg} ${noPadding ? "" : "section-py"} ${className}`}
    >
      <div className="container-site">{children}</div>
    </section>
  );
}
