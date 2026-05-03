"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Advice() {
  const router = useRouter();

  const [userData, setUserData] = useState({
    income: 25000,
    goal: "Wealth Creation",
    risk: "Medium Risk"
  });

  const [plan, setPlan] = useState({
    invest: 5000,
    returnRate: "10–12%",
    riskLabel: "Moderate",
    score: 68
  });

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("userData") || "{}");

    if (data) {
      const income = Number(data.income?.replace("₹", "")) || 25000;
      const goal = data.goal || "Wealth Creation";
      const risk = data.risk || "Medium Risk";

      setUserData({ income, goal, risk });

      let invest = Math.round(income * 0.2);
      let returnRate = "10–12%";
      let riskLabel = "Moderate";
      let score = 60;

      if (risk === "Low Risk") {
        returnRate = "6–8%";
        riskLabel = "Low";
        score = 72;
      }

      if (risk === "High Risk") {
        returnRate = "12–15%";
        riskLabel = "High";
        score = 65;
      }

      if (goal.includes("Emergency")) {
        invest = Math.round(income * 0.1);
      }

      if (goal.includes("Retirement")) {
        invest = Math.round(income * 0.25);
      }

      setPlan({ invest, returnRate, riskLabel, score });
    }
  }, []);

  return (
    <div style={container}>

      {/* HEADER */}
      <h2 style={heading}>📊 Your Personalized Financial Plan</h2>

      <p style={sub}>
        Based on your income ₹{userData.income}, goal and risk profile 👇
      </p>

      {/* HERO SCORE */}
      <div style={scoreCard}>
        <p style={label}>Financial Health Score</p>
        <h1 style={bigNumber}>{plan.score} / 100</h1>
      </div>

      {/* SMART INSIGHT */}
      <div style={smartCard}>
        💡 If you increase your investment by ₹1,000/month,
        you could gain <b>₹2–3L extra</b> in the long run.
      </div>

      {/* KEY INSIGHTS */}
      <div style={card}>
        <p style={label}>Key Insights</p>
        <p>⚠ You should invest at least ₹{plan.invest}/month</p>
        <p>⚠ Your risk profile: {plan.riskLabel}</p>
        <p style={{ color: "#22c55e" }}>
          ✔ You are working towards {userData.goal}
        </p>
      </div>

      {/* PLAN */}
      <div style={highlightCard}>
        <p style={label}>💰 Suggested Plan</p>
        <p style={bigValue}>₹{plan.invest}/month</p>
        <p>Expected Return: {plan.returnRate}</p>
        <p>Risk Level: {plan.riskLabel}</p>
      </div>

      {/* WHY */}
      <div style={card}>
        <p style={label}>Why this plan?</p>
        <p>
          Based on your income, goal ({userData.goal}) and risk ({userData.risk})
        </p>
      </div>

      {/* CTA */}
      <button
        style={btn}
        onClick={() => router.push("/portfolio")}
      >
        See My Future Wealth →
      </button>

    </div>
  );
}

/* ---------- STYLES ---------- */

const container = {
  padding: 20,
  maxWidth: 500,
  margin: "0 auto",
  color: "white",
  background: "#0f172a",
  minHeight: "100vh"
};

const heading = {
  fontSize: 24,
  fontWeight: "bold"
};

const sub = {
  color: "#94a3b8",
  marginTop: 5
};

const scoreCard = {
  background: "#22c55e",
  padding: 20,
  borderRadius: 16,
  marginTop: 20,
  textAlign: "center" as const,
  color: "white"
};

const bigNumber = {
  fontSize: 34,
  fontWeight: "bold",
  marginTop: 10
};

const smartCard = {
  background: "#1e293b",
  padding: 12,
  borderRadius: 10,
  marginTop: 12,
  borderLeft: "4px solid #22c55e"
};

const card = {
  background: "#1e293b",
  padding: 15,
  borderRadius: 12,
  marginTop: 15
};

const highlightCard = {
  ...card,
  border: "2px solid #22c55e"
};

const label = {
  fontWeight: "bold",
  marginBottom: 5
};

const bigValue = {
  fontSize: 20,
  fontWeight: "bold",
  marginBottom: 5
};

const btn = {
  marginTop: 25,
  padding: 14,
  background: "#22c55e",
  borderRadius: 10,
  border: "none",
  color: "white",
  width: "100%",
  cursor: "pointer",
  fontWeight: "bold"
};