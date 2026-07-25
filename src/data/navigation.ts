export type NavLink = {
  label: string;
  href: string;
  external?: boolean;
};

/**
 * Nav links point at a default route (e.g. /products/all) but must stay
 * highlighted on sibling routes (/products/shirting) too.
 */
export function isNavLinkActive(pathname: string, href: string) {
  const section = href.split("/")[1] ?? "";
  return section !== "" && (pathname === `/${section}` || pathname.startsWith(`/${section}/`));
}

export const navLinks: NavLink[] = [
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/products/all" },
  { label: "Export", href: "/export" },
  { label: "Contact Us", href: "/contact" },
];

export const footerLinks: NavLink[] = [
  { label: "About Us",   href: "/about" },
  { label: "Products",   href: "/products/all" },
  { label: "Export",     href: "/export" },
  { label: "Contact Us", href: "/contact" },
];

export const productCategoryLinks: NavLink[] = [
  { label: "Shirting Fabrics", href: "/products/shirting" },
  { label: "Suiting Fabrics",  href: "/products/suiting" },
  { label: "Gift Packing",     href: "/products/gift-packing" },
];
