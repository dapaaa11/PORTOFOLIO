"use client";

import { useReportWebVitals } from "next/web-vitals";

export function WebVitalsReporter() {
  useReportWebVitals((metric) => {
    const { name, value, delta, id } = metric;
    
    // Performance benchmarks categorized dynamically inside log loops
    let status = "OPTIMIZED";
    if (name === "CLS" && value > 0.1) status = "NEEDS-IMPROVEMENT";
    if (name === "LCP" && value > 2500) status = "NEEDS-IMPROVEMENT";
    if (name === "FID" && value > 100) status = "NEEDS-IMPROVEMENT";

    console.log(
      `%c[Telemetry Performance KPI]%c ${name} - id: ${id} | Value: ${value.toFixed(2)} | Delta: ${delta.toFixed(2)} | Status: ${status}`,
      "color: #10b981; font-weight: bold;",
      "color: #a1a1aa;"
    );
  });

  return null;
}
export default WebVitalsReporter;
