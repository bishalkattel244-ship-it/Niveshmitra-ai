export default function AIReasoningCard() {
  return (
    <div
      style={{
        background: "white",
        borderRadius: "24px",
        padding: "24px",
        marginTop: "30px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
      }}
    >
      <h2
        style={{
          fontSize: "28px",
          fontWeight: "bold",
          marginBottom: "20px",
        }}
      >
        🧠 Why This Investment Plan?
      </h2>

      <p
        style={{
          color: "#555",
          lineHeight: 1.7,
        }}
      >
        Based on your income, financial goals,
        and moderate risk profile,
        NiveshMitra recommends a diversified
        investment strategy for long-term growth.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "16px",
          marginTop: "24px",
        }}
      >
        <div
          style={{
            background: "#ecfdf5",
            padding: "20px",
            borderRadius: "20px",
          }}
        >
          <p style={{ color: "#666" }}>
            Equity Allocation
          </p>

          <h3
            style={{
              fontSize: "32px",
              fontWeight: "bold",
            }}
          >
            65%
          </h3>
        </div>

        <div
          style={{
            background: "#fff7ed",
            padding: "20px",
            borderRadius: "20px",
          }}
        >
          <p style={{ color: "#666" }}>
            Emergency Fund
          </p>

          <h3
            style={{
              fontSize: "32px",
              fontWeight: "bold",
            }}
          >
            3.2 Months
          </h3>
        </div>
      </div>
    </div>
  );
}