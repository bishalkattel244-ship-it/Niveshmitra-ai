"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Plan() {
  const router = useRouter();

  const [profession, setProfession] = useState("");
  const [income, setIncome] = useState(25000);
  const [goal, setGoal] = useState("");

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("userData") || "{}");

    if (data?.income) setIncome(Number(data.income));
    if (data?.goal) setGoal(data.goal);
  }, []);

  return (
    <div style={container}>

      {/* Heading */}
      <h2 style={heading}>
        Tell us about you 👇
      </h2>

      <p style={subText}>
        We’ll personalize your financial plan based on this
      </p>

      {/* Profession */}
      <div style={card}>
        <p style={label}>👨‍💼 Profession</p>
        <input
          placeholder="e.g. Student / Engineer"
          value={profession}
          onChange={(e) => setProfession(e.target.value)}
          style={input}
        />
      </div>

      {/* Income */}
      <div style={card}>
        <p style={label}>💰 Monthly Investment</p>
        <p style={value}>₹{income}</p>

        <input
          type="range"
          min="5000"
          max="100000"
          value={income}
          onChange={(e) => setIncome(Number(e.target.value))}
          style={slider}
        />
      </div>

      {/* Goal */}
      <div style={card}>
        <p style={label}>🎯 Your Goal</p>

        <div style={btnGroup}>
          <button
            onClick={() => setGoal("Wealth")}
            style={goal === "Wealth" ? activeBtn : btn}
          >
            Wealth
          </button>

          <button
            onClick={() => setGoal("Savings")}
            style={goal === "Savings" ? activeBtn : btn}
          >
            Savings
          </button>
        </div>
      </div>

      {/* CTA */}
      <button
        style={mainBtn}
        onClick={() => router.push("/advice")}
      >
        Create My Investment Plan →
      </button>

    </div>
  );
}

/* ---------- STYLES ---------- */

const container = {
  padding: 20,
  maxWidth: 500,
  margin: "0 auto",
  color: "white"
};

const heading = {
  fontSize: 24,
  fontWeight: "bold",
  color: "white"
};

const subText = {
  color: "#94a3b8",
  marginTop: 5
};

const card = {
  background: "#1e293b",
  padding: 16,
  borderRadius: 14,
  marginTop: 15
};

const label = {
  fontWeight: "bold",
  marginBottom: 8,
  color: "white"
};

const value = {
  fontSize: 18,
  marginBottom: 8,
  color: "#22c55e"
};

const input = {
  width: "100%",
  padding: 10,
  borderRadius: 8,
  border: "none",
  background: "#334155",
  color: "white"
};

const slider = {
  width: "100%"
};

const btnGroup = {
  display: "flex",
  gap: 10
};

const btn = {
  padding: "8px 14px",
  background: "#334155",
  borderRadius: 8,
  border: "none",
  color: "white"
};

const activeBtn = {
  ...btn,
  background: "#22c55e"
};

const mainBtn = {
  marginTop: 25,
  padding: "14px",
  background: "#22c55e",
  borderRadius: 12,
  border: "none",
  width: "100%",
  color: "white",
  fontWeight: "bold",
  cursor: "pointer"
};