import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const EmailForm = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/resume-form", { state: { email } });
  };

  return (
    <div
      style={{
        position: "fixed",       // stays fixed to viewport
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#1e1e1e",
      }}
    >
      <div
        style={{
          background: "#2a2a2a",
          padding: "30px 40px",
          borderRadius: "10px",
          boxShadow: "0 6px 18px rgba(0,0,0,0.4)",
          textAlign: "center",
          width: "350px",
        }}
      >
        <h2 style={{ color: "#fff", marginBottom: "20px" }}>Enter User Email</h2>
        <form onSubmit={handleSubmit}>
          <label
            htmlFor="email"
            style={{
              display: "block",
              marginBottom: "8px",
              color: "#ddd",
              fontSize: "14px",
              textAlign: "left",
            }}
          >
            User Email ID:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="e.g., user@example.com"
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #444",
              borderRadius: "6px",
              marginBottom: "15px",
              fontSize: "14px",
              backgroundColor: "#333",
              color: "#fff",
            }}
          />
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "10px",
              border: "none",
              borderRadius: "6px",
              backgroundColor: "#ff9800",
              color: "#fff",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "0.3s",
            }}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmailForm;
