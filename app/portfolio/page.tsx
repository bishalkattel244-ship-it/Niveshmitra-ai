"use client";
import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

export default function Portfolio() {
  const [userData, setUserData] = useState<any>(null);
  const [projection, setProjection] = useState<any[]>([]);
  const [allocation, setAllocation] = useState({
    equity: 60,
    debt: 30,
    gold: 10
  });

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("userData") || "{}");

    if (data) {
      setUserData(data);

      const monthly = Number(data.income) || 5000;

      // 📈 Growth Projection
      let temp = [];
      let total = 0;

      for (let i = 1; i <= 12; i++) {
        total += monthly + total * 0.01;
        temp.push({
          month: `M${i}`,
          value: Math.round(total)
        });
      }

      setProjection(temp);

      // 📊 Allocation based on risk
      if (data.risk === "Low Risk") {
        setAllocation({ equity: 30, debt: 60, gold: 10 });
      } else if (data.risk === "High Risk") {
        setAllocation({ equity: 80, debt: 10, gold: 10 });
      } else {
        setAllocation({ equity: 60, debt: 30, gold: 10 });
      }
    }
  }, []);

  return (
    <div style={container}>

      {/* HEADER */}
      <h2 style={heading}>📊 Your Portfolio</h2>
      <p style={sub}>Based on your inputs 👇</p>

      <div style={grid}>

        {/* LEFT SIDE */}
        <div style={leftCol}>

          {/* SUMMARY */}
          <div style={card}>
            <h3 style={cardTitle}>Summary</h3>
            <p>💰 Monthly Investment: ₹{userData?.income}</p>
            <p>🎯 Goal: {userData?.goal}</p>
            <p>⚖️ Risk Level: {userData?.risk}</p>
          </div>

          {/* ALLOCATION */}
          <div style={card}>
            <h3 style={cardTitle}>Portfolio Allocation</h3>

            <p>🟢 Equity: {allocation.equity}%</p>
            <p>🔵 Debt: {allocation.debt}%</p>
            <p>🟡 Gold: {allocation.gold}%</p>

            <p style={highlight}>
              Balanced for your risk profile
            </p>
          </div>

          {/* GOAL PROGRESS */}
          <div style={card}>
            <h3 style={cardTitle}>Goal Progress</h3>

            <p>Target: ₹10,00,000</p>
            <p>
              Invested (1 yr): ₹
              {userData?.income ? Number(userData.income) * 12 : 0}
            </p>

            <p style={highlight}>
              You are on track 🚀
            </p>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div style={rightCol}>

          {/* CHART */}
          <div style={card}>
            <h3 style={cardTitle}>Growth Projection</h3>

            <div style={{ width: "100%", height: 250 }}>
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
              ⚠ If you delay investing by 2 years, you may lose ₹2–3L.
            </p>
          </div>

          {/* WHY */}
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
  maxWidth: 1000,
  margin: "0 auto",
  color: "white"
};

const heading = {
  fontSize: 26,
  fontWeight: "bold"
};

const sub = {
  color: "#94a3b8",
  marginTop: 5
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
  gap: 15
};

const rightCol = {
  display: "flex",
  flexDirection: "column" as const,
  gap: 15
};

const card = {
  background: "#1e293b",
  padding: 18,
  borderRadius: 14,
  boxShadow: "0 4px 12px rgba(0,0,0,0.3)"
};

const cardTitle = {
  marginBottom: 10,
  fontWeight: "bold"
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