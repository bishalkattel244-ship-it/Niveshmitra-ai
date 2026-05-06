export default function PortfolioInsights() {
  return (
    <div style={{ marginTop: "40px" }}>
      <h2
        style={{
          fontSize: "32px",
          fontWeight: "bold",
          marginBottom: "20px",
        }}
      >
        Portfolio Intelligence
      </h2>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        <div
          style={{
            background: "#fef2f2",
            padding: "20px",
            borderRadius: "24px",
          }}
        >
          <h3
            style={{
              fontWeight: "bold",
              fontSize: "20px",
            }}
          >
            ⚠️ High Small-Cap Exposure
          </h3>

          <p
            style={{
              marginTop: "10px",
              color: "#555",
            }}
          >
            Your portfolio may become volatile due
            to higher small-cap allocation.
          </p>
        </div>

        <div
          style={{
            background: "#ecfdf5",
            padding: "20px",
            borderRadius: "24px",
          }}
        >
          <h3
            style={{
              fontWeight: "bold",
              fontSize: "20px",
            }}
          >
            🔥 Excellent SIP Discipline
          </h3>

          <p
            style={{
              marginTop: "10px",
              color: "#555",
            }}
          >
            You invested consistently for 8 months.
          </p>
        </div>
      </div>
    </div>
  );
}