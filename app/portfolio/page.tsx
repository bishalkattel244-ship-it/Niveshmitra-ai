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

  /* REAL SIP CALCULATION */

  const monthlyInvestment = Number(userData?.income || 5000);

  const annualReturn = 0.12;

  const monthlyRate = annualReturn / 12;

  const months = 10 * 12;

  const futureValue =
    monthlyInvestment *
    (((Math.pow(1 + monthlyRate, months) - 1) /
      monthlyRate) *
      (1 + monthlyRate));

  const projectedWealth =
    futureValue.toLocaleString("en-IN", {
      maximumFractionDigits: 0,
    });

  /* FINANCIAL HEALTH SCORE */

  let healthScore = 74;

  if (userData?.risk === "Low Risk") {
    healthScore = 82;
  }

  if (userData?.risk === "High Risk") {
    healthScore = 68;
  }

  if (!mounted) return null;

  return (
    <div style={container}>
      {/* HEADER */}

      <div style={topBanner}>
        <div>
          <h1 style={heading}>
            📊 NiveshMitra Portfolio
          </h1>

          <p style={subheading}>
            AI-powered investment intelligence
            for your financial future
          </p>
        </div>

        <div style={riskBadge}>
          {userData?.risk || "Moderate"} Investor
        </div>
      </div>

      {/* WEALTH PROJECTION */}

      <div style={wealthCard}>
        <p style={wealthLabel}>
          PROJECTED WEALTH
        </p>

        <h2 style={wealthAmount}>
          ₹{projectedWealth}
        </h2>

        <p style={wealthText}>
          If you consistently invest ₹
          {monthlyInvestment.toLocaleString("en-IN")}
          monthly for 10 years,
          your projected wealth may reach
          ₹{projectedWealth}.
        </p>

        <div style={wealthBadge}>
          🚀 You are ahead of 68% beginner investors
        </div>
      </div>

      {/* GRID */}

      <div style={grid}>
        {/* LEFT */}

        <div style={leftSection}>
          {/* FINANCIAL HEALTH */}

          <div style={healthCard}>
            <h2 style={cardTitle}>
              💎 Financial Health Score
            </h2>

            <div style={scoreCircle}>
              {healthScore}
            </div>

            <p style={healthText}>
              Your financial profile is stronger
              than 62% beginner investors.
            </p>
          </div>

          {/* SUMMARY */}

          <div style={card}>
            <h2 style={cardTitle}>
              Investment Summary
            </h2>

            <div style={infoItem}>
              💰 Monthly Investment:
              <span style={highlight}>
                ₹
                {monthlyInvestment.toLocaleString(
                  "en-IN"
                )}
              </span>
            </div>

            <div style={infoItem}>
              🎯 Goal:
              <span style={highlight}>
                {userData?.goal ||
                  "Wealth Creation"}
              </span>
            </div>

            <div style={infoItem}>
              ⚖️ Risk Profile:
              <span style={highlight}>
                {userData?.risk || "Moderate"}
              </span>
            </div>
          </div>

          {/* AI REASONING */}

          <div style={card}>
            <h2 style={cardTitle}>
              🧠 Why NiveshMitra Suggested This
            </h2>

            <p style={insight}>
              Because your investment horizon
              is long-term and your risk profile is
              {userData?.risk || " Moderate"},
              NiveshMitra recommends diversified
              exposure to equity, debt, and gold
              for sustainable wealth growth.
            </p>

            <div style={reasonGrid}>
              <div style={reasonCardGreen}>
                <p style={reasonLabel}>
                  Equity Exposure
                </p>

                <h3 style={reasonValue}>
                  {allocation[0].value}%
                </h3>

                <p style={reasonText}>
                  Long-term growth strategy
                </p>
              </div>

              <div style={reasonCardOrange}>
                <p style={reasonLabel}>
                  Emergency Coverage
                </p>

                <h3 style={reasonValue}>
                  3.2 Months
                </h3>

                <p style={reasonText}>
                  Recommended: 6 months
                </p>
              </div>
            </div>
          </div>

          {/* PORTFOLIO INTELLIGENCE */}

          <div style={card}>
            <h2 style={cardTitle}>
              📈 Portfolio Intelligence
            </h2>

            <div style={insightCardRed}>
              <h3 style={miniTitle}>
                ⚠️ Risk Observation
              </h3>

              <p style={miniText}>
                Higher equity allocation may
                increase short-term volatility.
              </p>
            </div>

            <div style={insightCardGreen}>
              <h3 style={miniTitle}>
                🔥 Strong Wealth Discipline
              </h3>

              <p style={miniText}>
                Consistent investing habits improve
                long-term compounding potential.
              </p>
            </div>

            <div style={insightCardBlue}>
              <h3 style={miniTitle}>
                🛡 Diversification Strength
              </h3>

              <p style={miniText}>
                Debt and gold allocation reduce
                excessive portfolio risk.
              </p>
            </div>
          </div>

          {/* TRUST */}

          <div style={card}>
            <h2 style={cardTitle}>
              🔒 Trust & Transparency
            </h2>

            <p style={trustText}>
              • This portfolio is AI-simulated for
              educational purposes only.
            </p>

            <p style={trustText}>
              • NiveshMitra does not execute trades
              or manage real investments.
            </p>

            <p style={trustText}>
              • Recommendations are based on risk
              profiling and asset allocation logic.
            </p>
          </div>
        </div>

        {/* RIGHT */}

        <div style={rightSection}>
          {/* PIE CHART */}

          <div style={card}>
            <h2 style={cardTitle}>
              Portfolio Allocation
            </h2>

            <div
              style={{
                width: "100%",
                height: 320,
              }}
            >
              <ResponsiveContainer>
                <PieChart>
                  <Pie
                    data={allocation}
                    cx="50%"
                    cy="50%"
                    outerRadius={110}
                    innerRadius={60}
                    dataKey="value"
                    paddingAngle={5}
                  >
                    {allocation.map(
                      (entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={
                            COLORS[
                              index % COLORS.length
                            ]
                          }
                        />
                      )
                    )}
                  </Pie>

                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* LEGEND */}

            <div style={legendContainer}>
              {allocation.map((item, index) => (
                <div
                  key={index}
                  style={legendItem}
                >
                  <div
                    style={{
                      ...legendColor,
                      background:
                        COLORS[index],
                    }}
                  />

                  <span>
                    {item.name}: {item.value}%
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* JOURNEY */}

          <div style={card}>
            <h2 style={cardTitle}>
              🚀 Your Wealth Journey
            </h2>

            <div style={journeyStep}>
              <div style={stepCircle}>1</div>

              <div>
                <h3 style={stepTitle}>
                  Financial Profiling
                </h3>

                <p style={stepText}>
                  Understanding your goals and income
                </p>
              </div>
            </div>

            <div style={journeyStep}>
              <div style={stepCircle}>2</div>

              <div>
                <h3 style={stepTitle}>
                  AI Investment Guidance
                </h3>

                <p style={stepText}>
                  Personalized allocation strategy
                </p>
              </div>
            </div>

            <div style={journeyStep}>
              <div style={stepCircle}>3</div>

              <div>
                <h3 style={stepTitle}>
                  Wealth Discipline
                </h3>

                <p style={stepText}>
                  Building long-term investing habits
                </p>
              </div>
            </div>

            <div style={journeyStep}>
              <div style={stepCircle}>4</div>

              <div>
                <h3 style={stepTitle}>
                  Future Wealth Growth
                </h3>

                <p style={stepText}>
                  Long-term compounding and financial progress
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* STYLES */

const container = {
  minHeight: "100vh",
  background: "#020c1b",
  color: "white",
  padding: "40px",
};

const topBanner = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "30px",
  flexWrap: "wrap" as const,
  gap: "20px",
};

const heading = {
  fontSize: "42px",
  fontWeight: "bold" as const,
  marginBottom: "10px",
};

const subheading = {
  color: "#94a3b8",
  fontSize: "16px",
};

const riskBadge = {
  background: "#22c55e",
  padding: "12px 20px",
  borderRadius: "999px",
  fontWeight: "bold" as const,
};

const wealthCard = {
  background: "linear-gradient(to right, #16a34a, #059669)",
  padding: "35px",
  borderRadius: "24px",
  marginBottom: "35px",
};

const wealthLabel = {
  opacity: 0.8,
  letterSpacing: "1px",
};

const wealthAmount = {
  fontSize: "56px",
  fontWeight: "bold" as const,
  marginTop: "10px",
};

const wealthText = {
  marginTop: "15px",
  lineHeight: 1.7,
  color: "white",
};

const wealthBadge = {
  marginTop: "20px",
  background: "rgba(255,255,255,0.2)",
  padding: "14px",
  borderRadius: "14px",
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
  gap: "25px",
};

const card = {
  background: "#1e293b",
  borderRadius: "22px",
  padding: "25px",
  boxShadow: "0 8px 24px rgba(0,0,0,0.35)",
};

const healthCard = {
  background:
    "linear-gradient(to right, #2563eb, #1d4ed8)",
  borderRadius: "22px",
  padding: "30px",
  textAlign: "center" as const,
};

const scoreCircle = {
  width: "120px",
  height: "120px",
  borderRadius: "50%",
  background: "white",
  color: "#2563eb",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "42px",
  fontWeight: "bold" as const,
  margin: "25px auto",
};

const healthText = {
  lineHeight: 1.7,
};

const cardTitle = {
  fontSize: "26px",
  marginBottom: "22px",
  fontWeight: "bold" as const,
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
  marginBottom: "20px",
  color: "#cbd5e1",
  lineHeight: 1.7,
};

const reasonGrid = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "16px",
};

const reasonCardGreen = {
  background: "#14532d",
  padding: "20px",
  borderRadius: "18px",
};

const reasonCardOrange = {
  background: "#7c2d12",
  padding: "20px",
  borderRadius: "18px",
};

const reasonLabel = {
  color: "#cbd5e1",
};

const reasonValue = {
  fontSize: "34px",
  fontWeight: "bold" as const,
  marginTop: "10px",
};

const reasonText = {
  marginTop: "10px",
  color: "#cbd5e1",
};

const insightCardRed = {
  background: "#450a0a",
  padding: "18px",
  borderRadius: "18px",
  marginBottom: "15px",
};

const insightCardGreen = {
  background: "#052e16",
  padding: "18px",
  borderRadius: "18px",
  marginBottom: "15px",
};

const insightCardBlue = {
  background: "#082f49",
  padding: "18px",
  borderRadius: "18px",
};

const miniTitle = {
  fontSize: "18px",
  fontWeight: "bold" as const,
};

const miniText = {
  marginTop: "10px",
  color: "#cbd5e1",
  lineHeight: 1.6,
};

const trustText = {
  marginBottom: "14px",
  color: "#cbd5e1",
  lineHeight: 1.6,
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

const journeyStep = {
  display: "flex",
  gap: "16px",
  marginBottom: "24px",
  alignItems: "flex-start",
};

const stepCircle = {
  width: "42px",
  height: "42px",
  borderRadius: "50%",
  background: "#22c55e",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: "bold" as const,
};

const stepTitle = {
  fontSize: "18px",
  fontWeight: "bold" as const,
};

const stepText = {
  marginTop: "6px",
  color: "#cbd5e1",
};