import Image from "next/image";

type Props = {
  className?: string;
};

export default function AccentDivider({ className = "" }: Props) {
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <span className="block h-px w-10 bg-[var(--color-accent)]" />
      <Image
        src="/images/about/footer/leaf.webp"
        alt=""
        width={20}
        height={17}
        className="w-5 h-auto object-contain opacity-85"
        aria-hidden="true"
      />
      <span className="block h-px w-10 bg-[var(--color-accent)]" />
    </div>
  );
}
