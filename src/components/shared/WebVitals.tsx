"use client";

import { useReportWebVitals } from "next/web-vitals";
import { sendGAEvent } from "@next/third-parties/google";

type ReportWebVitalsCallback = Parameters<typeof useReportWebVitals>[0];

const TRACKED = new Set(["LCP", "INP", "CLS", "FCP", "TTFB"]);

// Stable module-level reference so each metric is reported once per page load.
const reportToGA: ReportWebVitalsCallback = (metric) => {
  if (!TRACKED.has(metric.name)) return;
  sendGAEvent("event", metric.name, {
    // GA4 values must be integers; CLS is a unitless score, so scale it up.
    value: Math.round(metric.name === "CLS" ? metric.value * 1000 : metric.value),
    metric_id: metric.id,
    metric_value: metric.value,
    metric_delta: metric.delta,
    metric_rating: metric.rating,
    navigation_type: metric.navigationType,
    non_interaction: true,
  });
};

/** Real-user Core Web Vitals → GA4 (field data, by page and device in GA reports). */
export default function WebVitals() {
  useReportWebVitals(reportToGA);
  return null;
}
