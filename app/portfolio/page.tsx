"use client";

export default function Portfolio() {
  return (
    <div
      style={{
        padding: "40px",
        color: "white",
        background: "#020c1b",
        minHeight: "100vh",
      }}
    >
      <h1>📊 Portfolio Page</h1>

      <div
        style={{
          background: "#1e293b",
          padding: "20px",
          borderRadius: "12px",
          marginTop: "20px",
        }}
      >
        <p>Monthly Investment: ₹5000</p>
        <p>Risk Level: Moderate</p>
        <p>Goal: Wealth Creation</p>
      </div>
    </div>
  );
}