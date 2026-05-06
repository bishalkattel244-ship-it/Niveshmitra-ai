"use client";

import { useEffect, useState } from "react";

export default function Portfolio() {
  const [mounted, setMounted] = useState(false);
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    setMounted(true);

    try {
      const stored = localStorage.getItem("userData");

      if (stored) {
        setUserData(JSON.parse(stored));
      }
    } catch (err) {
      console.log(err);
    }
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div
      style={{
        background: "#020c1b",
        minHeight: "100vh",
        color: "white",
        padding: "40px",
      }}
    >
      <h1 style={{ fontSize: "32px", marginBottom: "20px" }}>
        📊 Portfolio Dashboard
      </h1>

      <div
        style={{
          background: "#1e293b",
          padding: "20px",
          borderRadius: "14px",
        }}
      >
        <p>💰 Income: ₹{userData?.income || 5000}</p>
        <p>🎯 Goal: {userData?.goal || "Wealth Creation"}</p>
        <p>⚖️ Risk: {userData?.risk || "Moderate"}</p>
      </div>
    </div>
  );
}