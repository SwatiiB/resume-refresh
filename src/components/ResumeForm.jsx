import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const ResumeForm = () => {
  const { state } = useLocation();
  const email = state?.email || "";

  const initialFormData = {
    sameCompany: "",
    skills: [],
    role: "",
    experience: "",
    info: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        skills: checked
          ? [...prev.skills, value]
          : prev.skills.filter((s) => s !== value),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Form submitted successfully!");
  };

  const handleReset = () => {
    setFormData(initialFormData);
  };

  return (
    // Wrapper: centers on both axes; scrolls when content is taller
    <div
      style={{
        minHeight: "100svh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "24px",
        backgroundColor: "#1e1e1e",
        boxSizing: "border-box",
      }}
    >
      {/* Card */}
      <div
        style={{
          width: "clamp(320px, 92vw, 720px)",
          background: "#2a2a2a",
          color: "#fff",
          borderRadius: "12px",
          border: "1px solid rgba(255,255,255,0.18)",
          boxShadow: "0 10px 30px rgba(0,0,0,0.45)",
          padding: "28px",
        }}
      >
        <h2 style={{ textAlign: "center", margin: 0, marginBottom: "10px" }}>
          Resume Refreshment Form
        </h2>
        <p style={{ textAlign: "center", color: "#bbb", marginTop: 0 }}>
          Fill in the details below to help us refresh your resume quickly.
        </p>

        <form
          onSubmit={handleSubmit}
          style={{ display: "grid", gap: "14px" }}
        >
          {/* Same Company */}
          <div>
            <label style={{ display: "block", marginBottom: 6 }}>
              Are you working in the same company? *
            </label>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <label>
                <input
                  type="radio"
                  name="sameCompany"
                  value="Yes"
                  checked={formData.sameCompany === "Yes"}
                  onChange={handleChange}
                />{" "}
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="sameCompany"
                  value="No"
                  checked={formData.sameCompany === "No"}
                  onChange={handleChange}
                />{" "}
                No
              </label>
            </div>
          </div>

          {/* Skills */}
          <div>
            <label style={{ display: "block", marginBottom: 6 }}>
              Some random new skills (select any)
            </label>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              {[
                "React",
                "Node.js",
                "MongoDB",
                "Big Data",
                "Docker",
                "Kubernetes",
                "Python",
                "Data Engineering",
              ].map((skill) => (
                <label key={skill}>
                  <input
                    type="checkbox"
                    value={skill}
                    checked={formData.skills.includes(skill)}
                    onChange={handleChange}
                  />{" "}
                  {skill}
                </label>
              ))}
            </div>
          </div>

          {/* Current Role */}
          <div>
            <label style={{ display: "block", marginBottom: 6 }}>
              Current Role / Position *
            </label>
            <input
              type="text"
              name="role"
              value={formData.role}
              onChange={handleChange}
              placeholder="e.g., Software Engineer"
              required
              style={inputStyle}
            />
          </div>

          {/* Experience */}
          <div>
            <label style={{ display: "block", marginBottom: 6 }}>
              Years of Experience *
            </label>
            <input
              type="number"
              name="experience"
              step="0.5"
              value={formData.experience}
              onChange={handleChange}
              placeholder="e.g., 2.5"
              required
              style={inputStyle}
            />
            <small style={{ color: "#aaa" }}>
              Use decimals for half-years (e.g., 1.5)
            </small>
          </div>

          {/* Additional Info */}
          <div>
            <label style={{ display: "block", marginBottom: 6 }}>
              Any relevant info you want to showcase
            </label>
            <textarea
              name="info"
              value={formData.info}
              onChange={handleChange}
              placeholder="Achievements, certifications, etc..."
              maxLength={1200}
              style={{ ...inputStyle, minHeight: 100, resize: "vertical" }}
            />
            <small style={{ color: "#aaa" }}>Max 1200 characters.</small>
          </div>

          {/* Actions */}
          <div
            style={{
              display: "flex",
              gap: 12,
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            <button type="submit" style={primaryBtn}>
              Submit
            </button>
            <button
              type="button"
              onClick={handleReset}
              style={secondaryBtn}
            >
              Reset
            </button>
          </div>
        </form>

        {email && (
          <p
            style={{
              marginTop: 14,
              textAlign: "center",
              fontSize: 14,
              color: "#bbb",
            }}
          >
            User Email: <strong>{email}</strong>
          </p>
        )}
      </div>
    </div>
  );
};

// tiny shared styles
const inputStyle = {
  width: "100%",
  padding: "10px 12px",
  borderRadius: 8,
  border: "1px solid #444",
  background: "#333",
  color: "#fff",
  outline: "none",
};

const primaryBtn = {
  background: "#ff9800",
  border: "none",
  padding: "10px 18px",
  borderRadius: 8,
  color: "#fff",
  fontWeight: 700,
  cursor: "pointer",
  flex: "1 1 140px",
};

const secondaryBtn = {
  background: "#444",
  border: "none",
  padding: "10px 18px",
  borderRadius: 8,
  color: "#fff",
  cursor: "pointer",
  flex: "1 1 140px",
};

export default ResumeForm;
