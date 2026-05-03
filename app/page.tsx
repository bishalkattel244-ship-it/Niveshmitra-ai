"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div style={container}>

      {/* CARD (adds structure) */}
      <div style={card}>

        {/* TITLE */}
        <h1 style={title}>💰 NiveshMitra</h1>

        {/* TAGLINE */}
        <p style={tagline}>
          Your AI Investment Companion
        </p>

        {/* DESCRIPTION */}
        <p style={desc}>
          Plan smarter. Invest confidently.  
          Build your wealth step by step.
        </p>

        {/* FEATURE POINTS */}
        <div style={features}>
          <p>✔ Personalized investment plans</p>
          <p>✔ Risk-based recommendations</p>
          <p>✔ Future wealth projection</p>
        </div>

        {/* CTA */}
        <button
          style={btn}
          onClick={() => router.push("/ai")}  // 🔥 UPDATED HERE
        >
          Start Your Journey →
        </button>

      </div>

    </div>
  );
}

/* ---------- STYLES ---------- */

const container = {
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "#0f172a",
  padding: 20
};

const card = {
  background: "#1e293b",
  padding: 30,
  borderRadius: 20,
  textAlign: "center" as const,
  maxWidth: 420,
  width: "100%",
  boxShadow: "0 10px 30px rgba(0,0,0,0.4)"
};

const title = {
  fontSize: 32,
  fontWeight: "bold",
  color: "white"
};

const tagline = {
  color: "#22c55e",
  marginTop: 8,
  fontWeight: "bold"
};

const desc = {
  marginTop: 10,
  color: "#94a3b8",
  lineHeight: 1.5
};

const features = {
  marginTop: 20,
  fontSize: 14,
  color: "#cbd5f5",
  lineHeight: 1.6
};

const btn = {
  marginTop: 25,
  padding: "14px",
  width: "100%",
  background: "#22c55e",
  borderRadius: 12,
  border: "none",
  color: "white",
  fontWeight: "bold",
  cursor: "pointer",
  fontSize: 16
};