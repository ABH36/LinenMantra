"use client";

import { useEffect } from "react";
import { trackContactClick, trackSwatchRequest } from "@/lib/analytics";

/**
 * One delegated listener for every WhatsApp / phone / email link and the product-page
 * "Request Swatches" CTA, so server components (Footer, Contact page) need no onClick.
 */
export default function ContactClickTracker() {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const a = (e.target as Element | null)?.closest?.("a");
      if (!a) return;
      const href = a.getAttribute("href") ?? "";

      if (href.startsWith("tel:")) trackContactClick("phone", href.slice(4));
      else if (href.startsWith("mailto:")) trackContactClick("email", href.slice(7));
      else if (/^https:\/\/(wa\.me|api\.whatsapp\.com)\//.test(href)) trackContactClick("whatsapp", href);
      else if (a.dataset.swatchProduct) trackSwatchRequest(a.dataset.swatchProduct, a.dataset.swatchCategory);
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
