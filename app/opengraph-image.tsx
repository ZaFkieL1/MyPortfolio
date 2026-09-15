import { ImageResponse } from "next/og";

export const alt = "Henry Gonzalez — Full-Stack Product Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "64px", background: "#F3F3F0", color: "#0A0A0A", fontFamily: "Arial, sans-serif" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: 24 }}>
        <strong>HG</strong>
        <span style={{ display: "flex", alignItems: "center", gap: 12 }}><i style={{ width: 12, height: 12, borderRadius: 999, background: "#C6F63D" }} />Product engineering</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", maxWidth: 980 }}>
        <span style={{ fontSize: 24, marginBottom: 22 }}>Henry Gonzalez</span>
        <strong style={{ fontSize: 88, lineHeight: 0.96, letterSpacing: "-4px" }}>Digital products businesses can depend on.</strong>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22 }}>
        <span>Full-Stack Developer / Product Engineer</span>
        <span>Preview</span>
      </div>
    </div>,
    size,
  );
}
