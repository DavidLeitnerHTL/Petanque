import { useEffect, useState } from "react";

export function IntroSplash() {
  const [fading, setFading] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const t1 = setTimeout(() => setFading(true), 4400);
    const t2 = setTimeout(() => {
      setGone(true);
      document.body.style.overflow = "";
    }, 5200);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      document.body.style.overflow = "";
    };
  }, []);

  if (gone) return null;

  return (
    <>
      <style>{`
        @keyframes sp-rollInRed {
          0%   { opacity: 0; transform: translateX(200px) rotate(360deg); }
          10%  { opacity: 1; }
          100% { opacity: 1; transform: translateX(0) rotate(0deg); }
        }
        @keyframes sp-dropLeft {
          0%   { opacity: 0; transform: translate(-100px, -150px) rotate(-90deg); }
          10%  { opacity: 1; }
          100% { opacity: 1; transform: translate(0,0) rotate(0deg); }
        }
        @keyframes sp-dropRight {
          0%   { opacity: 0; transform: translate(100px, -150px) rotate(90deg); }
          10%  { opacity: 1; }
          100% { opacity: 1; transform: translate(0,0) rotate(0deg); }
        }
        @keyframes sp-dropMiddle {
          0%   { opacity: 0; transform: translateY(-200px) scale(1.05); }
          10%  { opacity: 1; }
          80%  { transform: translateY(4px) scale(0.98); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes sp-bumpLeft {
          0%, 100% { transform: translate(0,0) rotate(0deg); }
          50%       { transform: translate(-4px, 2px) rotate(-2deg); }
        }
        @keyframes sp-bumpRight {
          0%, 100% { transform: translate(0,0) rotate(0deg); }
          50%       { transform: translate(4px, 2px) rotate(2deg); }
        }

        .sp-red-ball    { opacity: 0; animation: sp-rollInRed  0.9s cubic-bezier(0.25,1,0.5,1)    0.5s forwards; }
        .sp-drop-left   { opacity: 0; animation: sp-dropLeft   0.7s cubic-bezier(0.34,1.56,0.64,1) 1.5s forwards; }
        .sp-drop-right  { opacity: 0; animation: sp-dropRight  0.7s cubic-bezier(0.34,1.56,0.64,1) 2.3s forwards; }
        .sp-drop-middle { opacity: 0; animation: sp-dropMiddle 0.6s cubic-bezier(0.4,0,0.2,1)      3.1s forwards; }
        .sp-bump-left   {             animation: sp-bumpLeft   0.3s ease-out                        3.5s forwards; }
        .sp-bump-right  {             animation: sp-bumpRight  0.3s ease-out                        3.5s forwards; }
      `}</style>

      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9999,
          backgroundColor: "#f9f6ef",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "opacity 0.8s ease",
          opacity: fading ? 0 : 1,
          pointerEvents: fading ? "none" : "auto",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>

          {/* Boules graphic */}
          <div style={{ position: "relative", width: 280, height: 130, marginBottom: 16 }}>

            {/* Left boule */}
            <div className="sp-drop-left" style={{ position: "absolute", left: 15, top: 22, width: 95, height: 95, zIndex: 10 }}>
              <div className="sp-bump-left" style={{ width: "100%", height: "100%" }}>
                <svg viewBox="0 0 100 100" style={{ width: "100%", height: "100%" }}>
                  <defs>
                    <clipPath id="sp-clipL"><circle cx="50" cy="50" r="49" /></clipPath>
                  </defs>
                  <circle cx="50" cy="50" r="49" fill="#9a9c9b" />
                  <g clipPath="url(#sp-clipL)" transform="rotate(35 50 50)">
                    <ellipse cx="50" cy="50" rx="20" ry="60" fill="none" stroke="#fff" strokeWidth="1.5" transform="translate(-12,0)" />
                    <ellipse cx="50" cy="50" rx="20" ry="60" fill="none" stroke="#fff" strokeWidth="1.5" transform="translate(4,0)" />
                    <ellipse cx="50" cy="50" rx="60" ry="20" fill="none" stroke="#fff" strokeWidth="1.5" transform="translate(0,-12)" />
                    <ellipse cx="50" cy="50" rx="60" ry="20" fill="none" stroke="#fff" strokeWidth="1.5" transform="translate(0,4)" />
                  </g>
                </svg>
              </div>
            </div>

            {/* Right boule */}
            <div className="sp-drop-right" style={{ position: "absolute", right: 20, top: 22, width: 95, height: 95, zIndex: 10 }}>
              <div className="sp-bump-right" style={{ width: "100%", height: "100%" }}>
                <svg viewBox="0 0 100 100" style={{ width: "100%", height: "100%" }}>
                  <defs>
                    <clipPath id="sp-clipR"><circle cx="50" cy="50" r="49" /></clipPath>
                  </defs>
                  <circle cx="50" cy="50" r="49" fill="#9a9c9b" />
                  <g clipPath="url(#sp-clipR)" transform="rotate(-40 50 50)">
                    <ellipse cx="50" cy="50" rx="20" ry="60" fill="none" stroke="#fff" strokeWidth="1.5" transform="translate(-8,0)" />
                    <ellipse cx="50" cy="50" rx="20" ry="60" fill="none" stroke="#fff" strokeWidth="1.5" transform="translate(8,0)" />
                    <ellipse cx="50" cy="50" rx="60" ry="20" fill="none" stroke="#fff" strokeWidth="1.5" transform="translate(0,-8)" />
                    <ellipse cx="50" cy="50" rx="60" ry="20" fill="none" stroke="#fff" strokeWidth="1.5" transform="translate(0,8)" />
                  </g>
                </svg>
              </div>
            </div>

            {/* Middle boule (largest, in front) */}
            <div className="sp-drop-middle" style={{ position: "absolute", left: 78, top: 14, width: 115, height: 115, zIndex: 20 }}>
              <svg viewBox="0 0 100 100" style={{ width: "100%", height: "100%" }}>
                <defs>
                  <clipPath id="sp-clipM"><circle cx="50" cy="50" r="49" /></clipPath>
                </defs>
                <circle cx="50" cy="50" r="49" fill="#9a9c9b" />
                <g clipPath="url(#sp-clipM)" transform="rotate(-15 50 50)">
                  <ellipse cx="50" cy="50" rx="22" ry="65" fill="none" stroke="#fff" strokeWidth="1.5" transform="translate(-10,0)" />
                  <ellipse cx="50" cy="50" rx="22" ry="65" fill="none" stroke="#fff" strokeWidth="1.5" transform="translate(6,0)" />
                  <ellipse cx="50" cy="50" rx="65" ry="22" fill="none" stroke="#fff" strokeWidth="1.5" transform="translate(0,-10)" />
                  <ellipse cx="50" cy="50" rx="65" ry="22" fill="none" stroke="#fff" strokeWidth="1.5" transform="translate(0,6)" />
                </g>
              </svg>
            </div>

            {/* Red cochonnet */}
            <div
              className="sp-red-ball"
              style={{
                position: "absolute", right: 45, bottom: 0,
                width: 22, height: 22, zIndex: 30,
                borderRadius: "50%", backgroundColor: "#bb133e",
              }}
            />
          </div>

          {/* Typography */}
          <div style={{ textAlign: "center" }}>
            <p style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontSize: "1.65rem",
              letterSpacing: "0.12em",
              color: "#bb133e",
              margin: 0,
              lineHeight: 1,
              fontWeight: 500,
            }}>
              PÉTANQUE SPORT VEREIN
            </p>
            <p style={{
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: "1.1rem",
              color: "#4a4a4a",
              marginTop: 6,
              marginBottom: 0,
              letterSpacing: "0.05em",
            }}>
              Bad Leonfelden
            </p>
          </div>

        </div>
      </div>
    </>
  );
}
