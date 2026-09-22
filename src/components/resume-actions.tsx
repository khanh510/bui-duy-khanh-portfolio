"use client";

export function ResumeActions() {
  return (
    <button className="button-primary" type="button" onClick={() => window.print()}>
      Print / Save as PDF
    </button>
  );
}
