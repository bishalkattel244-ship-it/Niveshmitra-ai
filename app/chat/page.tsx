"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Chat() {
  const router = useRouter();

  const [messages, setMessages] = useState<any[]>([]);
  const [step, setStep] = useState(0);
  const [incomeInput, setIncomeInput] = useState("");

  const [userData, setUserData] = useState({
    investorType: "",
    income: "",
    goal: "",
    risk: ""
  });

  /* ---------- LOAD SELECTED QUESTION ---------- */
  useEffect(() => {
    const saved = localStorage.getItem("selectedQuestion");

    if (saved) {
      const data = JSON.parse(saved);

      setMessages([
        { sender: "user", text: data.q },
        { sender: "bot", text: data.a }
      ]);

      localStorage.removeItem("selectedQuestion");
    } else {
      setMessages([
        {
          sender: "bot",
          text:
            "Hey 👋 I’m NiveshMitra.\n\nLet’s understand you better to create your plan 👇"
        }
      ]);
    }
  }, []);

  /* ---------- HANDLE ANSWERS ---------- */
  const handleAnswer = (answer: string) => {
    let updatedData = { ...userData };

    const newMessages = [...messages, { sender: "user", text: answer }];

    if (step === 0) {
      updatedData.investorType = answer;
      newMessages.push({
        sender: "bot",
        text: "How much can you invest monthly? 💰"
      });
      setStep(1);
    }

    else if (step === 1) {
      updatedData.income = answer;
      newMessages.push({
        sender: "bot",
        text: "What is your main goal? 🎯"
      });
      setStep(2);
    }

    else if (step === 2) {
      updatedData.goal = answer;
      newMessages.push({
        sender: "bot",
        text: "How comfortable are you with risk? ⚖️"
      });
      setStep(3);
    }

    else if (step === 3) {
      updatedData.risk = answer;

      newMessages.push({
        sender: "bot",
        text:
          "Got it 👍\n\nCreating your personalized investment plan..."
      });

      localStorage.setItem("userData", JSON.stringify(updatedData));

      setMessages(newMessages);

      setTimeout(() => {
        router.push("/plan");
      }, 1500);

      return;
    }

    setUserData(updatedData);
    setMessages(newMessages);
  };

  const handleIncomeSubmit = () => {
    if (!incomeInput) return;
    handleAnswer(`₹${incomeInput}`);
    setIncomeInput("");
  };

  return (
    <div style={container}>

      {/* CHAT AREA */}
      <div style={chatArea}>
        {messages.map((msg, index) => (
          <div
            key={index}
            style={{
              textAlign: msg.sender === "user" ? "right" : "left",
              marginBottom: 12
            }}
          >
            <div
              style={{
                ...bubble,
                background:
                  msg.sender === "user" ? "#22c55e" : "#1e293b"
              }}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* INPUT AREA (MOVED UP VISUALLY) */}
      <div style={inputArea}>

        {/* STEP 0 */}
        {step === 0 && (
          <>
            <button style={btn} onClick={() => handleAnswer("New Investor")}>
              New Investor
            </button>

            <button style={btn} onClick={() => handleAnswer("Some Experience")}>
              Some Experience
            </button>

            <button style={btn} onClick={() => handleAnswer("Safe Returns")}>
              Safe Returns
            </button>
          </>
        )}

        {/* STEP 1 */}
        {step === 1 && (
          <>
            <input
              type="number"
              placeholder="Enter monthly investment (₹)"
              value={incomeInput}
              onChange={(e) => setIncomeInput(e.target.value)}
              style={input}
            />

            <button style={btn} onClick={handleIncomeSubmit}>
              Submit
            </button>
          </>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <>
            <button style={btn} onClick={() => handleAnswer("Wealth Creation")}>
              Wealth
            </button>

            <button style={btn} onClick={() => handleAnswer("Retirement")}>
              Retirement
            </button>

            <button style={btn} onClick={() => handleAnswer("Emergency Fund")}>
              Emergency
            </button>
          </>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <>
            <button style={btn} onClick={() => handleAnswer("Low Risk")}>
              Low
            </button>

            <button style={btn} onClick={() => handleAnswer("Medium Risk")}>
              Medium
            </button>

            <button style={btn} onClick={() => handleAnswer("High Risk")}>
              High
            </button>
          </>
        )}

      </div>
    </div>
  );
}

/* ---------- STYLES ---------- */

const container = {
  display: "flex",
  flexDirection: "column" as const,
  height: "100vh",
  maxWidth: 500,
  margin: "0 auto",
  background: "#0f172a",
  color: "white"
};

const chatArea = {
  flex: 1,
  overflowY: "auto" as const,
  padding: 16
};

const bubble = {
  padding: "10px 14px",
  borderRadius: 12,
  maxWidth: "80%",
  whiteSpace: "pre-line" as const
};

const inputArea = {
  borderTop: "1px solid #334155",
  padding: 12,
  display: "flex",
  flexWrap: "wrap" as const,
  gap: 8,
  background: "#0f172a"
};

const btn = {
  padding: "10px 14px",
  background: "#22c55e",
  color: "white",
  borderRadius: 10,
  border: "none",
  cursor: "pointer"
};

const input = {
  padding: 10,
  borderRadius: 10,
  border: "1px solid #334155",
  background: "#1e293b",
  color: "white",
  flex: 1
};