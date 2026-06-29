import type { ProductCategory } from "@/data/products";
import { productCategories } from "@/data/products";

type Props = {
  active: ProductCategory;
  onChange: (cat: ProductCategory) => void;
};

export default function ProductFilter({ active, onChange }: Props) {
  return (
    <div
      className="w-full sticky top-20 z-20"
      style={{
        backgroundColor: "var(--color-bg-primary)",
        borderBottom: "1px solid var(--color-border)",
      }}
    >
      <div className="container-site">
        <div className="flex items-center gap-0 overflow-x-auto no-scrollbar">
          {productCategories.map((cat) => {
            const isActive = cat.value === active;
            return (
              <button
                key={cat.value}
                onClick={() => onChange(cat.value)}
                className="relative shrink-0 px-5 py-4 text-sm font-medium tracking-wide transition-all duration-200 cursor-pointer"
                style={{
                  color: isActive
                    ? "var(--color-text-primary)"
                    : "var(--color-text-muted)",
                  fontWeight: isActive ? 500 : 400,
                }}
              >
                {cat.label}

                {/* Active underline */}
                <span
                  className="absolute bottom-0 left-0 right-0 h-px transition-all duration-300"
                  style={{
                    backgroundColor: "var(--color-accent)",
                    opacity: isActive ? 1 : 0,
                    transform: isActive ? "scaleX(1)" : "scaleX(0)",
                    transformOrigin: "left",
                  }}
                />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
