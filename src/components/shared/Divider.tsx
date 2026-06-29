type Props = {
  className?: string;
  light?: boolean;
};

export default function Divider({ className = "", light = false }: Props) {
  return (
    <hr
      className={`border-0 h-px ${className}`}
      style={{
        backgroundColor: light
          ? "var(--color-border-dark)"
          : "var(--color-border)",
      }}
    />
  );
}
