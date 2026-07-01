export type NavLink = {
  label: string;
  href: string;
  external?: boolean;
};

export const navLinks: NavLink[] = [
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Export", href: "/export" },
  { label: "Contact Us", href: "/contact" },
];

export const footerLinks: NavLink[] = [
  { label: "About Us",       href: "/about" },
  { label: "Our Story",      href: "/about#story" },
  { label: "Infrastructure", href: "/about#infrastructure" },
  { label: "Sustainability", href: "/about#sustainability" },
  { label: "Blog",           href: "/blog" },
  { label: "Careers",        href: "/careers" },
  { label: "Contact Us",     href: "/contact" },
];

export const productCategoryLinks: NavLink[] = [
  { label: "Pure Linen",       href: "/products#pure-linen" },
  { label: "Linen Blends",     href: "/products#linen-blends" },
  { label: "Shirting Fabrics", href: "/products#shirting" },
  { label: "Suiting Fabrics",  href: "/products#suiting" },
  { label: "New Arrivals",     href: "/products#new-arrivals" },
  { label: "Export",           href: "/export" },
];
