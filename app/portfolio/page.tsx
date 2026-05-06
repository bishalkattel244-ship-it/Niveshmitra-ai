"use client";

import { useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#22c55e", "#3b82f6", "#eab308"];

export default function Portfolio() {
  const [mounted, setMounted] = useState(false);

  const [userData, setUserData] = useState<any>(null);

  const [allocation, setAllocation] = useState([
    { name: "Equity", value: 60 },
    { name: "Debt", value: 30 },
    { name: "Gold", value: 10 },
  ]);

  useEffect(() => {
    setMounted(true);

    try {
      const stored = localStorage.getItem("userData");

      if (stored) {
        const data = JSON.parse(stored);

        setUserData(data);

        if (data.risk === "Low Risk") {
          setAllocation([
            { name: "Equity", value: 30 },
            { name: "Debt", value: 60 },
            { name: "Gold", value: 10 },
          ]);
        }

        if (data.risk === "High Risk") {
          setAllocation([
            { name: "Equity", value: 80 },
            { name: "Debt", value: 10 },
            { name: "Gold", value: 10 },
          ]);
        }
      }
    } catch (err) {
      console.log(err);
    }
  }, []);

  if (!mounted) return null;

  return (
    <div style={container}>
      <h1 style={heading}>📊 Portfolio Dashboard</h1>

      <p style={subheading}>
        AI-generated portfolio based on your financial profile
      </p>

      <div style={grid}>
        {/* LEFT SECTION */}
        <div style={leftSection}>
          {/* USER SUMMARY */}
          <div style={card}>
            <h2 style={cardTitle}>Investment Summary</h2>

            <div style={infoItem}>
              💰 Monthly Investment:
              <span style={highlight}>
                ₹{userData?.income || 5000}
              </span>
            </div>

            <div style={infoItem}>
              🎯 Goal:
              <span style={highlight}>
                {userData?.goal || "Wealth Creation"}
              </span>
            </div>

            <div style={infoItem}>
              ⚖️ Risk Profile:
              <span style={highlight}>
                {userData?.risk || "Moderate"}
              </span>
            </div>
          </div>

          {/* AI INSIGHTS */}
          <div style={card}>
            <h2 style={cardTitle}>AI Insights</h2>

            <p style={insight}>
              ✔ Diversified portfolio reduces long-term risk
            </p>

            <p style={insight}>
              ✔ Equity exposure improves growth potential
            </p>

            <p style={insight}>
              ✔ Debt allocation stabilizes volatility
            </p>

            <p style={warning}>
              ⚠ Delaying investment may reduce future returns
            </p>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div style={rightSection}>
          <div style={card}>
            <h2 style={cardTitle}>Portfolio Allocation</h2>

            <div style={{ width: "100%", height: 320 }}>
              <ResponsiveContainer>
                <PieChart>
                  <Pie
                    data={allocation}
                    cx="50%"
                    cy="50%"
                    outerRadius={110}
                    innerRadius={55}
                    dataKey="value"
                    paddingAngle={5}
                  >
                    {allocation.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>

                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* LEGEND */}
            <div style={legendContainer}>
              {allocation.map((item, index) => (
                <div key={index} style={legendItem}>
                  <div
                    style={{
                      ...legendColor,
                      background: COLORS[index],
                    }}
                  />

                  <span>
                    {item.name}: {item.value}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- STYLES ---------------- */

const container = {
  minHeight: "100vh",
  background: "#020c1b",
  color: "white",
  padding: "40px",
};

const heading = {
  fontSize: "42px",
  fontWeight: "bold" as const,
  marginBottom: "10px",
};

const subheading = {
  color: "#94a3b8",
  marginBottom: "35px",
  fontSize: "16px",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "25px",
};

const leftSection = {
  display: "flex",
  flexDirection: "column" as const,
  gap: "25px",
};

const rightSection = {
  display: "flex",
  flexDirection: "column" as const,
};

const card = {
  background: "#1e293b",
  borderRadius: "18px",
  padding: "25px",
  boxShadow: "0 8px 24px rgba(0,0,0,0.35)",
};

const cardTitle = {
  fontSize: "24px",
  marginBottom: "20px",
};

const infoItem = {
  marginBottom: "18px",
  fontSize: "18px",
};

const highlight = {
  color: "#22c55e",
  marginLeft: "10px",
  fontWeight: "bold" as const,
};

const insight = {
  marginBottom: "15px",
  color: "#cbd5e1",
  lineHeight: 1.6,
};

const warning = {
  marginTop: "25px",
  color: "#f87171",
  fontWeight: "bold" as const,
};

const legendContainer = {
  display: "flex",
  justifyContent: "center",
  gap: "20px",
  marginTop: "15px",
  flexWrap: "wrap" as const,
};

const legendItem = {
  display: "flex",
  alignItems: "center",
  gap: "8px",
};

const legendColor = {
  width: "14px",
  height: "14px",
  borderRadius: "50%",
};