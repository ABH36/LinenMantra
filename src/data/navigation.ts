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
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Export", href: "/export" },
  { label: "Contact Us", href: "/contact" },
];
