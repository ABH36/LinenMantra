import { sendGAEvent } from "@next/third-parties/google";

/**
 * Type-safe Google Analytics 4 event helpers for Linen Mantra.
 * Emits GA4 recommended event names (e.g. 'generate_lead') so they populate
 * standard conversion reports in Google Analytics 4 and Google Ads.
 */

interface LeadEventParams {
  lead_type?: string;
  method?: "enquiry_form" | "whatsapp" | "email" | "phone" | "swatch_request";
  product_name?: string;
  category?: string;
  value?: number;
  currency?: string;
}

/**
 * Track a business lead generation event
 * Maps to standard GA4 'generate_lead' event
 */
export function trackLead(params: LeadEventParams = {}) {
  try {
    sendGAEvent("event", "generate_lead", {
      event_category: "Leads",
      event_label: params.lead_type || params.product_name || "General Lead",
      method: params.method || "enquiry_form",
      lead_type: params.lead_type || "Commercial Enquiry",
      product_name: params.product_name,
      category: params.category,
      value: params.value ?? 1,
      currency: params.currency || "INR",
    });
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.debug("[Analytics] Failed to send generate_lead event:", error);
    }
  }
}

/**
 * Track user requesting fabric swatches
 */
export function trackSwatchRequest(productName: string, category?: string) {
  try {
    sendGAEvent("event", "request_swatch", {
      event_category: "Samples",
      event_label: productName,
      product_name: productName,
      category: category,
    });
  } catch {
    // Silent fail
  }
}

/**
 * Track direct contact channel clicks (WhatsApp, Phone, Direct Email)
 */
export function trackContactClick(channel: "whatsapp" | "phone" | "email", destination?: string) {
  try {
    sendGAEvent("event", "contact_click", {
      event_category: "Contact",
      event_label: channel,
      channel: channel,
      destination: destination,
    });
  } catch {
    // Silent fail
  }
}
