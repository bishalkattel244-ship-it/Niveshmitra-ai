"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AIPage() {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const data = [
    {
      q: "Can I invest in gold?",
      a: "Yes, but limit it to 5–10%. Gold protects wealth but doesn’t grow fast. Prefer SGB or ETFs."
    },
    {
      q: "I have 3 acres of agricultural land, how should I generate income?",
      a: "Use mixed strategy: farming + leasing + dairy/poultry. Combine active + passive income."
    },
    {
      q: "I want to buy a ₹20 lakh car in 4 years, help me plan",
      a: "Invest ₹30–35k/month in equity mutual funds (SIP). Starting early reduces pressure."
    },
    {
      q: "How to invest in bonds? Is it safe?",
      a: "Yes, bonds are safer. Use govt bonds or debt funds. Expect 6–8% returns."
    },
    {
      q: "I earn ₹30k/month, how should I start investing?",
      a: "Start ₹5–6k SIP monthly. Build emergency fund first, then invest consistently."
    },
    {
      q: "Where should I invest for long-term wealth?",
      a: "Equity mutual funds + index funds. Stay invested for 5+ years."
    },
    {
      q: "How much should I save vs invest?",
      a: "Save 20–30%, invest ~20%. First secure, then grow."
    },
    {
      q: "Is SIP better than lump sum?",
      a: "For beginners → SIP. For large capital → lump sum."
    },
    {
      q: "How to build passive income?",
      a: "Use dividends, REITs, and long-term compounding. It takes time."
    },
    {
      q: "Best low-risk investment options?",
      a: "FD, debt funds, govt bonds, SGB. Returns ~5–7%."
    },
    {
      q: "How to create an emergency fund?",
      a: "Save 3–6 months expenses in liquid funds or savings account."
    }
  ];

  return (
    <div style={container}>

      {/* HEADER */}
      <h1 style={title}>🤖 AI Investment Assistant</h1>
      <p style={subtitle}>
        Tap a question to see answer 👇
      </p>

      {/* QUESTIONS */}
      <div style={{ marginTop: 20 }}>
        {data.map((item, index) => (
          <div key={index} style={{ marginBottom: 10 }}>

            {/* QUESTION */}
            <button
              style={questionBtn}
              onClick={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
            >
              {item.q}
            </button>

            {/* ANSWER */}
            {activeIndex === index && (
              <div style={answerBox}>
                {item.a}
              </div>
            )}

          </div>
        ))}
      </div>

      {/* BOTTOM BUTTONS */}
      <div style={bottomBtns}>
        <button style={skipBtn} onClick={() => router.push("/chat")}>
          Skip →
        </button>

        <button style={nextBtn} onClick={() => router.push("/chat")}>
          Next →
        </button>
      </div>

    </div>
  );
}

/* ---------- STYLES ---------- */

const container = {
  padding: 20,
  maxWidth: 500,
  margin: "0 auto",
  background: "#0f172a",
  minHeight: "100vh",
  color: "white"
};

const title = {
  fontSize: 26,
  fontWeight: "bold",
  textAlign: "center" as const
};

const subtitle = {
  textAlign: "center" as const,
  color: "#94a3b8",
  marginTop: 10
};

const questionBtn = {
  width: "100%",
  padding: 12,
  textAlign: "left" as const,
  background: "#1e293b",
  borderRadius: 10,
  border: "none",
  color: "white",
  cursor: "pointer"
};

const answerBox = {
  marginTop: 6,
  padding: 12,
  background: "#162033",
  borderRadius: 10,
  color: "#cbd5f5",
  fontSize: 14,
  lineHeight: 1.5
};

const bottomBtns = {
  display: "flex",
  justifyContent: "space-between",
  marginTop: 25,
  gap: 10
};

const skipBtn = {
  flex: 1,
  padding: 12,
  background: "#334155",
  borderRadius: 10,
  border: "none",
  color: "white",
  cursor: "pointer"
};

const nextBtn = {
  flex: 1,
  padding: 12,
  background: "#22c55e",
  borderRadius: 10,
  border: "none",
  color: "white",
  fontWeight: "bold",
  cursor: "pointer"
};