"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AIPage() {
  const router = useRouter();

  const [activeIndex, setActiveIndex] =
    useState<number | null>(null);

  const data = [
    {
      q: "Can I invest in gold?",
      a: "Yes. Gold helps protect wealth and reduce volatility. Limit allocation to around 5–10% of your portfolio.",
    },

    {
      q: "I earn ₹30k/month. How should I start investing?",
      a: "First build an emergency fund. Then start a monthly SIP in diversified equity mutual funds.",
    },

    {
      q: "Is SIP better than lump sum?",
      a: "For beginners and salaried investors, SIP is usually safer and more disciplined.",
    },

    {
      q: "How do I create long-term wealth?",
      a: "Long-term wealth is built through consistency, compounding, and disciplined investing over years.",
    },

    {
      q: "What are low-risk investments?",
      a: "Government bonds, debt funds, fixed deposits, and SGBs are comparatively lower-risk options.",
    },

    {
      q: "How much emergency fund should I keep?",
      a: "Ideally maintain 3–6 months of expenses in liquid savings before aggressive investing.",
    },
  ];

  return (
    <div style={container}>
      {/* HEADER */}

      <div style={hero}>
        <h1 style={title}>
          🤖 NiveshMitra AI
        </h1>

        <p style={subtitle}>
          Your AI-powered investment companion
          for smarter financial decisions.
        </p>

        <div style={badge}>
          AI-guided wealth onboarding
        </div>
      </div>

      {/* QUESTIONS */}

      <div style={questionContainer}>
        {data.map((item, index) => (
          <div
            key={index}
            style={questionCard}
          >
            <button
              style={questionBtn}
              onClick={() =>
                setActiveIndex(
                  activeIndex === index
                    ? null
                    : index
                )
              }
            >
              <span>{item.q}</span>

              <span>
                {activeIndex === index
                  ? "−"
                  : "+"}
              </span>
            </button>

            {activeIndex === index && (
              <div style={answerBox}>
                {item.a}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* CTA */}

      <div style={ctaCard}>
        <h2 style={ctaTitle}>
          Ready to build your portfolio?
        </h2>

        <p style={ctaText}>
          NiveshMitra AI will now understand
          your financial profile and generate
          a personalized investment portfolio.
        </p>

        <button
          style={continueBtn}
          onClick={() =>
            router.push("/chat")
          }
        >
          Continue →
        </button>
      </div>
    </div>
  );
}

/* ---------------- STYLES ---------------- */

const container = {
  padding: "30px 20px",
  maxWidth: "700px",
  margin: "0 auto",
  background: "#020c1b",
  minHeight: "100vh",
  color: "white",
};

const hero = {
  textAlign: "center" as const,
  marginBottom: "35px",
};

const title = {
  fontSize: "42px",
  fontWeight: "bold" as const,
};

const subtitle = {
  marginTop: "14px",
  color: "#94a3b8",
  lineHeight: 1.7,
};

const badge = {
  marginTop: "20px",
  display: "inline-block",
  background: "#1e293b",
  color: "#22c55e",
  padding: "10px 18px",
  borderRadius: "999px",
  fontSize: "14px",
};

const questionContainer = {
  marginTop: "30px",
};

const questionCard = {
  marginBottom: "16px",
};

const questionBtn = {
  width: "100%",
  padding: "18px",
  textAlign: "left" as const,
  background: "#1e293b",
  borderRadius: "18px",
  border: "1px solid #334155",
  color: "white",
  cursor: "pointer",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  fontWeight: "bold" as const,
};

const answerBox = {
  marginTop: "8px",
  padding: "18px",
  background: "#111827",
  borderRadius: "16px",
  color: "#cbd5e1",
  lineHeight: 1.7,
};

const ctaCard = {
  marginTop: "40px",
  background:
    "linear-gradient(to right, #16a34a, #059669)",
  padding: "30px",
  borderRadius: "24px",
  textAlign: "center" as const,
};

const ctaTitle = {
  fontSize: "28px",
  fontWeight: "bold" as const,
};

const ctaText = {
  marginTop: "14px",
  lineHeight: 1.7,
};

const continueBtn = {
  marginTop: "24px",
  background: "white",
  color: "#059669",
  padding: "14px 22px",
  borderRadius: "14px",
  border: "none",
  fontWeight: "bold" as const,
  cursor: "pointer",
  fontSize: "15px",
};