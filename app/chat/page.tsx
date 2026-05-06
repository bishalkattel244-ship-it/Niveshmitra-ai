"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Chat() {
  const router = useRouter();

  const [messages, setMessages] = useState<any[]>([]);
  const [step, setStep] = useState(0);

  const [incomeInput, setIncomeInput] =
    useState("");

  const [userData, setUserData] = useState({
    investorType: "",
    income: 0,
    goal: "",
    risk: "",
  });

  /* INITIAL BOT MESSAGE */

  useEffect(() => {
    setMessages([
      {
        sender: "bot",
        text:
          "👋 Hey, I’m NiveshMitra AI.\n\nI’ll help create a personalized investment portfolio based on your financial profile.",
      },
    ]);
  }, []);

  /* HANDLE ANSWERS */

  const handleAnswer = (
    answer: string | number
  ) => {
    let updatedData = { ...userData };

    const newMessages = [
      ...messages,
      {
        sender: "user",
        text: String(answer),
      },
    ];

    /* STEP 0 */

    if (step === 0) {
      updatedData.investorType =
        String(answer);

      newMessages.push({
        sender: "bot",
        text:
          "💰 How much can you comfortably invest every month?",
      });

      setStep(1);
    }

    /* STEP 1 */

    else if (step === 1) {
      updatedData.income = Number(answer);

      newMessages.push({
        sender: "bot",
        text:
          "🎯 What is your primary financial goal?",
      });

      setStep(2);
    }

    /* STEP 2 */

    else if (step === 2) {
      updatedData.goal = String(answer);

      newMessages.push({
        sender: "bot",
        text:
          "⚖️ How comfortable are you with investment risk?",
      });

      setStep(3);
    }

    /* STEP 3 */

    else if (step === 3) {
      updatedData.risk = String(answer);

      newMessages.push({
        sender: "bot",
        text:
          "🧠 Analyzing your financial profile...\n\n📊 Building diversified allocation...\n\n🚀 Generating your AI portfolio...",
      });

      localStorage.setItem(
        "userData",
        JSON.stringify(updatedData)
      );

      setMessages(newMessages);

      setTimeout(() => {
        router.push("/portfolio");
      }, 2500);

      return;
    }

    setUserData(updatedData);
    setMessages(newMessages);
  };

  /* HANDLE INCOME */

  const handleIncomeSubmit = () => {
    if (!incomeInput) return;

    handleAnswer(Number(incomeInput));

    setIncomeInput("");
  };

  return (
    <div style={container}>
      {/* HEADER */}

      <div style={header}>
        <h1 style={title}>
          🤖 NiveshMitra AI
        </h1>

        <p style={subtitle}>
          AI-powered investment onboarding
        </p>
      </div>

      {/* CHAT AREA */}

      <div style={chatArea}>
        {messages.map((msg, index) => (
          <div
            key={index}
            style={{
              textAlign:
                msg.sender === "user"
                  ? "right"
                  : "left",
              marginBottom: 14,
            }}
          >
            <div
              style={{
                ...bubble,
                background:
                  msg.sender === "user"
                    ? "#22c55e"
                    : "#1e293b",
              }}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* INPUT AREA */}

      <div style={inputArea}>
        {/* STEP 0 */}

        {step === 0 && (
          <>
            <button
              style={btn}
              onClick={() =>
                handleAnswer(
                  "New Investor"
                )
              }
            >
              New Investor
            </button>

            <button
              style={btn}
              onClick={() =>
                handleAnswer(
                  "Some Experience"
                )
              }
            >
              Some Experience
            </button>

            <button
              style={btn}
              onClick={() =>
                handleAnswer(
                  "Safe Investor"
                )
              }
            >
              Safe Investor
            </button>
          </>
        )}

        {/* STEP 1 */}

        {step === 1 && (
          <>
            <input
              type="number"
              placeholder="Monthly investment amount (₹)"
              value={incomeInput}
              onChange={(e) =>
                setIncomeInput(
                  e.target.value
                )
              }
              style={input}
            />

            <button
              style={btn}
              onClick={
                handleIncomeSubmit
              }
            >
              Submit
            </button>
          </>
        )}

        {/* STEP 2 */}

        {step === 2 && (
          <>
            <button
              style={btn}
              onClick={() =>
                handleAnswer(
                  "Wealth Creation"
                )
              }
            >
              Wealth
            </button>

            <button
              style={btn}
              onClick={() =>
                handleAnswer(
                  "Retirement"
                )
              }
            >
              Retirement
            </button>

            <button
              style={btn}
              onClick={() =>
                handleAnswer(
                  "Emergency Fund"
                )
              }
            >
              Emergency
            </button>
          </>
        )}

        {/* STEP 3 */}

        {step === 3 && (
          <>
            <button
              style={btn}
              onClick={() =>
                handleAnswer(
                  "Low Risk"
                )
              }
            >
              Low Risk
            </button>

            <button
              style={btn}
              onClick={() =>
                handleAnswer(
                  "Medium Risk"
                )
              }
            >
              Medium Risk
            </button>

            <button
              style={btn}
              onClick={() =>
                handleAnswer(
                  "High Risk"
                )
              }
            >
              High Risk
            </button>
          </>
        )}
      </div>
    </div>
  );
}

/* ---------------- STYLES ---------------- */

const container = {
  display: "flex",
  flexDirection: "column" as const,
  height: "100vh",
  maxWidth: "650px",
  margin: "0 auto",
  background: "#020c1b",
  color: "white",
};

const header = {
  padding: "24px 20px 10px",
  textAlign: "center" as const,
};

const title = {
  fontSize: "36px",
  fontWeight: "bold" as const,
};

const subtitle = {
  marginTop: "10px",
  color: "#94a3b8",
};

const chatArea = {
  flex: 1,
  overflowY: "auto" as const,
  padding: "20px",
};

const bubble = {
  padding: "14px 18px",
  borderRadius: "18px",
  maxWidth: "82%",
  display: "inline-block",
  whiteSpace: "pre-line" as const,
  lineHeight: 1.6,
};

const inputArea = {
  borderTop: "1px solid #1e293b",
  padding: "18px",
  display: "flex",
  flexWrap: "wrap" as const,
  gap: "10px",
  background: "#020c1b",
};

const btn = {
  padding: "14px 18px",
  background: "#22c55e",
  color: "white",
  borderRadius: "14px",
  border: "none",
  cursor: "pointer",
  fontWeight: "bold" as const,
};

const input = {
  padding: "14px",
  borderRadius: "14px",
  border: "1px solid #334155",
  background: "#1e293b",
  color: "white",
  flex: 1,
  minWidth: "220px",
};