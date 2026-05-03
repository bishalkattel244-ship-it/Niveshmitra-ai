"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// ✅ Fix Recharts SSR issue
const LineChart = dynamic(() => import("recharts").then(m => m.LineChart), { ssr: false });
const Line = dynamic(() => import("recharts").then(m => m.Line), { ssr: false });
const XAxis = dynamic(() => import("recharts").then(m => m.XAxis), { ssr: false });
const YAxis = dynamic(() => import("recharts").then(m => m.YAxis), { ssr: false });
const Tooltip = dynamic(() => import("recharts").then(m => m.Tooltip), { ssr: false });
const ResponsiveContainer = dynamic(() => import("recharts").then(m => m.ResponsiveContainer), { ssr: false });

export default function Portfolio() {
  const [userData, setUserData] = useState<any>(null);
  const [projection, setProjection] = useState<any[]>([]);
  const [allocation, setAllocation] = useState({
    equity: 60,
    debt: 30,
    gold: 10
  });

  useEffect(() => {
    try {
      const stored = localStorage.getItem("userData");
      if (!stored) return;

      const data = JSON.parse(stored);
      setUserData(data);

      const monthly = Number(data.income) || 5000;

      // 📈 Growth Projection
      let temp: any[] = [];
      let total = 0;

      for (let i = 1; i <= 12; i++) {
        total += monthly + total * 0.01;
        temp.push({
          month: `M${i}`, // ✅ FIXED
          value: Math.round(total)
        });
      }

      setProjection(temp);

      // 📊 Allocation logic
      if (data.risk === "Low Risk") {
        setAllocation({ equity: 30, debt: 60, gold: 10 });
      } else if (data.risk === "High Risk") {
        setAllocation({ equity: 80, debt: 10, gold: 10 });
      } else {
        setAllocation({ equity: 60, debt: 30, gold: 10 });
      }

    } catch (err) {
      console.log("Error reading localStorage", err);
    }
  }, []);

  return (
    <div style={container}>

      {/* HEADER */}
      <h2 style={heading}>📊 Your Portfolio</h2>
      <p style={sub}>Personalized based on your inputs</p>

      <div style={grid}>

        {/* LEFT SIDE */}
        <div style={leftCol}>

          {/* SUMMARY */}
          <div style={card}>
            <h3 style={cardTitle}>Summary</h3>
            <p>💰 Monthly Investment: ₹{userData?.income || 0}</p>
            <p>🎯 Goal: {userData?.goal || "Wealth Creation"}</p>
            <p>⚖️ Risk Level: {userData?.risk || "Moderate"}</p>
          </div>

          {/* ALLOCATION */}
          <div style={card}>
            <h3 style={cardTitle}>Portfolio Allocation</h3>

            <p>🟢 Equity: {allocation.equity}%</p>
            <p>🔵 Debt: {allocation.debt}%</p>
            <p>🟡 Gold: {allocation.gold}%</p>

            <p style={highlight}>
              Balanced as per your risk profile
            </p>
          </div>

          {/* GOAL TRACK */}
          <div style={card}>
            <h3 style={cardTitle}>Goal Progress</h3>

            <p>🎯 Target: ₹10,00,000</p>
            <p>
              📈 Invested (1 year): ₹
              {(userData?.income ? Number(userData.income) * 12 : 0).toLocaleString()}
            </p>

            <p style={highlight}>
              🚀 You are on track
            </p>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div style={rightCol}>

          {/* CHART */}
          <div style={card}>
            <h3 style={cardTitle}>Growth Projection</h3>

            <div style={{ width: "100%", height: 260 }}>
              <ResponsiveContainer>
                <LineChart data={projection}>
                  <XAxis dataKey="month" stroke="#94a3b8" />
                  <YAxis stroke="#94a3b8" />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#22c55e"
                    strokeWidth={3}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <p style={insight}>
              ⚠ Delaying investment reduces long-term gains significantly
            </p>
          </div>

          {/* INSIGHT */}
          <div style={card}>
            <h3 style={cardTitle}>Why this plan?</h3>

            <p>✔ Based on your income</p>
            <p>✔ Based on your goal</p>
            <p>✔ Based on your risk level</p>
          </div>

        </div>

      </div>
    </div>
  );
}

/* ---------- STYLES ---------- */

const container = {
  padding: 20,
  maxWidth: 1100,
  margin: "0 auto",
  color: "white"
};

const heading = {
  fontSize: 28,
  fontWeight: "bold"
};

const sub = {
  color: "#94a3b8",
  marginTop: 6
};

const grid = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: 20,
  marginTop: 20
};

const leftCol = {
  display: "flex",
  flexDirection: "column" as const,
  gap: 16
};

const rightCol = {
  display: "flex",
  flexDirection: "column" as const,
  gap: 16
};

const card = {
  background: "#1e293b",
  padding: 18,
  borderRadius: 14,
  boxShadow: "0 4px 12px rgba(0,0,0,0.3)"
};

const cardTitle = {
  marginBottom: 10,
  fontWeight: "bold",
  fontSize: 16
};

const highlight = {
  marginTop: 10,
  color: "#22c55e",
  fontSize: 14
};

const insight = {
  marginTop: 10,
  color: "#f87171",
  fontSize: 13
};