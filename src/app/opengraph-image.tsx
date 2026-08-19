import { ImageResponse } from "next/og";

export const alt = "Kaio Vinicius — Redes, Desenvolvimento e DevOps";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#09090b", color: "#fafafa", padding: 72 }}>
      <div style={{ display: "flex", fontSize: 28, fontWeight: 700 }}>KV.</div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", maxWidth: 900, fontSize: 70, lineHeight: 1.05, letterSpacing: "-3px", fontWeight: 650 }}>Software com visão de infraestrutura.</div>
        <div style={{ display: "flex", marginTop: 30, fontSize: 25, color: "#a1a1aa" }}>Kaio Vinicius · Redes · Desenvolvimento · DevOps</div>
      </div>
    </div>,
    size,
  );
}
