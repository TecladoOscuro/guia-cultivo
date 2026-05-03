// Helper components for Cannabis guide (green theme)

const Step = ({ num, text, why, warning }) => (
  <div style={{
    background: "#0d1f14",
    border: `1px solid ${warning ? "#4a1010" : "#1b4332"}`,
    borderRadius: "10px", padding: "14px", marginBottom: "10px",
  }}>
    <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
      <div style={{
        width: "26px", height: "26px", borderRadius: "50%",
        background: warning ? "#4a1010" : "#1b4332",
        color: warning ? "#ff6b6b" : "#52b788",
        fontSize: "12px", fontWeight: "bold",
        display: "flex", alignItems: "center", justifyContent: "center",
        flexShrink: 0, marginTop: "1px",
      }}>{warning ? "!" : num}</div>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: "14px", color: "#d8f3dc", lineHeight: "1.5", marginBottom: why ? "8px" : "0" }}>
          {text}
        </div>
        {why && (
          <div style={{
            background: "#162a1e", borderLeft: "3px solid #40916c",
            padding: "8px 10px", borderRadius: "0 6px 6px 0",
            fontSize: "12px", color: "#74c69d", lineHeight: "1.5",
          }}>
            <span style={{ color: "#52b788", fontWeight: "bold" }}>¿Por qué? </span>{why}
          </div>
        )}
      </div>
    </div>
  </div>
);

const ErrorCard = ({ error, consecuencia, fix }) => (
  <div style={{
    background: "#1a0a0a", border: "1px solid #4a1010",
    borderRadius: "10px", padding: "14px", marginBottom: "10px",
  }}>
    <div style={{ fontSize: "13px", fontWeight: "bold", color: "#ff6b6b", marginBottom: "6px" }}>✗ {error}</div>
    <div style={{ fontSize: "12px", color: "#c9a0a0", marginBottom: "8px", lineHeight: "1.4" }}>{consecuencia}</div>
    <div style={{
      background: "#0d2a14", border: "1px solid #2d6a4f",
      borderRadius: "6px", padding: "8px 10px",
      fontSize: "12px", color: "#95d5b2", lineHeight: "1.4",
    }}>✓ {fix}</div>
  </div>
);

const SectionTitle = ({ children, color = "#52b788" }) => (
  <div style={{
    fontSize: "10px", letterSpacing: "3px", color,
    margin: "24px 0 12px", paddingBottom: "6px",
    borderBottom: `1px solid ${color}33`,
  }}>{children}</div>
);

const StatBox = ({ label, value }) => (
  <div style={{
    background: "#0d1f14", border: "1px solid #1b4332",
    borderRadius: "8px", padding: "12px",
  }}>
    <div style={{ fontSize: "10px", color: "#52b788", letterSpacing: "1px", marginBottom: "4px" }}>{label.toUpperCase()}</div>
    <div style={{ fontSize: "13px", color: "#d8f3dc", fontWeight: "bold" }}>{value}</div>
  </div>
);

const InfoBox = ({ children }) => (
  <div style={{ background: "#162a1e", border: "1px solid #2d6a4f", borderRadius: "10px", padding: "14px", marginBottom: "20px" }}>
    <p style={{ margin: 0, fontSize: "13px", color: "#95d5b2", lineHeight: "1.7" }}>{children}</p>
  </div>
);

// Helper components for Mushroom guide (brown theme)

const StepM = ({ num, text, why, warning }) => (
  <div style={{
    background: MUSHROOM_COLORS.bg2,
    border: `1px solid ${warning ? MUSHROOM_COLORS.errorBorder : MUSHROOM_COLORS.border1}`,
    borderRadius: "10px", padding: "14px", marginBottom: "10px",
  }}>
    <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
      <div style={{
        width: "26px", height: "26px", borderRadius: "50%",
        background: warning ? MUSHROOM_COLORS.errorBorder : MUSHROOM_COLORS.border1,
        color: warning ? MUSHROOM_COLORS.error : MUSHROOM_COLORS.accent1,
        fontSize: "12px", fontWeight: "bold",
        display: "flex", alignItems: "center", justifyContent: "center",
        flexShrink: 0, marginTop: "1px",
      }}>{warning ? "!" : num}</div>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: "14px", color: MUSHROOM_COLORS.textBright, lineHeight: "1.5", marginBottom: why ? "8px" : "0" }}>
          {text}
        </div>
        {why && (
          <div style={{
            background: MUSHROOM_COLORS.bg3, borderLeft: `3px solid ${MUSHROOM_COLORS.accent1}`,
            padding: "8px 10px", borderRadius: "0 6px 6px 0",
            fontSize: "12px", color: MUSHROOM_COLORS.accent2, lineHeight: "1.5",
          }}>
            <span style={{ color: MUSHROOM_COLORS.accent1, fontWeight: "bold" }}>¿Por qué? </span>{why}
          </div>
        )}
      </div>
    </div>
  </div>
);

const GlossaryLink = ({ term, children, guide = "mushroom" }) => (
  <button
    onClick={() => window.navigateToGlossary && window.navigateToGlossary(term, guide)}
    onMouseEnter={(e) => { e.currentTarget.style.color = "#93c5fd"; }}
    onMouseLeave={(e) => { e.currentTarget.style.color = "#60a5fa"; }}
    style={{
      background: "none",
      border: "none",
      padding: "0",
      color: "#60a5fa",
      textDecoration: "underline",
      cursor: "pointer",
      fontSize: "inherit",
      fontFamily: "inherit",
      fontWeight: "inherit",
    }}
    title={`Ver definición de "${term}" en glosario`}
  >
    {children || term}
  </button>
);

const SectionTitleM = ({ children, color = MUSHROOM_COLORS.accent1 }) => (
  <div style={{
    fontSize: "10px", letterSpacing: "3px", color,
    margin: "24px 0 12px", paddingBottom: "6px",
    borderBottom: `1px solid ${color}33`,
  }}>{children}</div>
);

const StatBoxM = ({ label, value }) => (
  <div style={{
    background: MUSHROOM_COLORS.bg2, border: `1px solid ${MUSHROOM_COLORS.border1}`,
    borderRadius: "8px", padding: "12px",
  }}>
    <div style={{ fontSize: "10px", color: MUSHROOM_COLORS.accent1, letterSpacing: "1px", marginBottom: "4px" }}>{label.toUpperCase()}</div>
    <div style={{ fontSize: "13px", color: MUSHROOM_COLORS.textBright, fontWeight: "bold" }}>{value}</div>
  </div>
);

const InfoBoxM = ({ children }) => (
  <div style={{ background: MUSHROOM_COLORS.bg3, border: `1px solid ${MUSHROOM_COLORS.border2}`, borderRadius: "10px", padding: "14px", marginBottom: "20px" }}>
    <p style={{ margin: 0, fontSize: "13px", color: MUSHROOM_COLORS.accent3, lineHeight: "1.7" }}>{children}</p>
  </div>
);

const ErrorCardM = ({ error, consecuencia, fix }) => (
  <div style={{
    background: MUSHROOM_COLORS.errorBg, border: `1px solid ${MUSHROOM_COLORS.errorBorder}`,
    borderRadius: "10px", padding: "14px", marginBottom: "10px",
  }}>
    <div style={{ fontSize: "13px", fontWeight: "bold", color: MUSHROOM_COLORS.error, marginBottom: "6px" }}>✗ {error}</div>
    <div style={{ fontSize: "12px", color: "#cba89a", marginBottom: "8px", lineHeight: "1.4" }}>{consecuencia}</div>
    <div style={{
      background: MUSHROOM_COLORS.bg3, border: `1px solid ${MUSHROOM_COLORS.accent1}`,
      borderRadius: "6px", padding: "8px 10px",
      fontSize: "12px", color: MUSHROOM_COLORS.accent2, lineHeight: "1.4",
    }}>✓ {fix}</div>
  </div>
);

// Generic helper components — accept colors prop (c). Used by new guides
// (cactus, ferment, plantas, amanita) so we don't duplicate per-palette helpers.

const StepX = ({ num, text, why, warning, c }) => (
  <div style={{
    background: c.bg2,
    border: `1px solid ${warning ? c.errorBorder : c.border1}`,
    borderRadius: "10px", padding: "14px", marginBottom: "10px",
  }}>
    <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
      <div style={{
        width: "26px", height: "26px", borderRadius: "50%",
        background: warning ? c.errorBorder : c.border1,
        color: warning ? c.error : c.accent1,
        fontSize: "12px", fontWeight: "bold",
        display: "flex", alignItems: "center", justifyContent: "center",
        flexShrink: 0, marginTop: "1px",
      }}>{warning ? "!" : num}</div>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: "14px", color: c.textBright, lineHeight: "1.5", marginBottom: why ? "8px" : "0" }}>
          {text}
        </div>
        {why && (
          <div style={{
            background: c.bg3, borderLeft: `3px solid ${c.accent1}`,
            padding: "8px 10px", borderRadius: "0 6px 6px 0",
            fontSize: "12px", color: c.accent2, lineHeight: "1.5",
          }}>
            <span style={{ color: c.accent1, fontWeight: "bold" }}>¿Por qué? </span>{why}
          </div>
        )}
      </div>
    </div>
  </div>
);

const InfoBoxX = ({ children, c }) => (
  <div style={{ background: c.bg3, border: `1px solid ${c.border2}`, borderRadius: "10px", padding: "14px", marginBottom: "20px" }}>
    <p style={{ margin: 0, fontSize: "13px", color: c.accent3, lineHeight: "1.7" }}>{children}</p>
  </div>
);

const SectionTitleX = ({ children, c }) => (
  <div style={{
    fontSize: "10px", letterSpacing: "3px", color: c.accent1,
    margin: "24px 0 12px", paddingBottom: "6px",
    borderBottom: `1px solid ${c.accent1}33`,
  }}>{children}</div>
);

const StatBoxX = ({ label, value, c }) => (
  <div style={{
    background: c.bg2, border: `1px solid ${c.border1}`,
    borderRadius: "8px", padding: "12px",
  }}>
    <div style={{ fontSize: "10px", color: c.accent1, letterSpacing: "1px", marginBottom: "4px" }}>{label.toUpperCase()}</div>
    <div style={{ fontSize: "13px", color: c.textBright, fontWeight: "bold" }}>{value}</div>
  </div>
);

const ErrorCardX = ({ error, consecuencia, fix, c }) => (
  <div style={{
    background: c.errorBg, border: `1px solid ${c.errorBorder}`,
    borderRadius: "10px", padding: "14px", marginBottom: "10px",
  }}>
    <div style={{ fontSize: "13px", fontWeight: "bold", color: c.error, marginBottom: "6px" }}>✗ {error}</div>
    <div style={{ fontSize: "12px", color: c.accent3, marginBottom: "8px", lineHeight: "1.4", opacity: 0.85 }}>{consecuencia}</div>
    <div style={{
      background: c.bg3, border: `1px solid ${c.accent1}`,
      borderRadius: "6px", padding: "8px 10px",
      fontSize: "12px", color: c.accent2, lineHeight: "1.4",
    }}>✓ {fix}</div>
  </div>
);

const WarningBoxX = ({ children, c }) => (
  <div style={{
    background: c.errorBg, border: `1.5px solid ${c.error}`,
    borderRadius: "10px", padding: "14px", marginBottom: "16px",
  }}>
    <div style={{ fontSize: "13px", color: c.textBright, lineHeight: "1.6" }}>{children}</div>
  </div>
);
