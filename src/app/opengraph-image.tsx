import { ImageResponse } from "next/og";

export const alt = "Bùi Duy Khánh — Backend Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#0c1110",
        color: "#eff5f1",
        padding: "72px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "14px", color: "#5ee0bc", fontSize: 24 }}>
        <div style={{ width: 12, height: 12, borderRadius: 999, background: "#5ee0bc" }} />
        BACKEND SYSTEMS / API / INTEGRATION
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ fontSize: 82, fontWeight: 700, letterSpacing: "-4px" }}>BÙI DUY KHÁNH</div>
        <div style={{ marginTop: 18, fontSize: 38, color: "#bdc9c3" }}>Backend Developer</div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid #28322f", paddingTop: 28, fontSize: 25, color: "#82928b" }}>
        <span>PHP · Laravel · WordPress · REST API</span>
        <span style={{ color: "#5ee0bc" }}>PORTFOLIO / 2026</span>
      </div>
    </div>,
    size,
  );
}
