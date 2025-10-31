export default function Logo({ className = "h-14" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 60" role="img" aria-label="VerdeIA Logo">
      {/* Folha */}
      <path 
        d="M25 10 Q30 5, 35 10 L42 30 Q43 35, 40 38 L35 45 Q32 48, 28 45 L20 35 Q18 30, 20 25 Z" 
        fill="#22c55e"
        className="drop-shadow-lg"
      />
      <path 
        d="M28 15 L28 42 M28 22 L23 27 M28 28 L33 33 M28 35 L24 39" 
        stroke="#86efac" 
        strokeWidth="1.5" 
        fill="none" 
        strokeLinecap="round"
      />
      <circle cx="28" cy="15" r="2" fill="#4ade80" />
      <circle cx="23" cy="27" r="2" fill="#4ade80" />
      <circle cx="33" cy="33" r="2" fill="#4ade80" />
      <circle cx="28" cy="42" r="2" fill="#4ade80" />
      <path 
        d="M28 45 Q26 50, 28 55" 
        stroke="#16a34a" 
        strokeWidth="2.5" 
        fill="none" 
        strokeLinecap="round"
      />
      {/* Texto */}
      <text 
        x="55" 
        y="38" 
        fontFamily="system-ui, sans-serif" 
        fontSize="24" 
        fontWeight="700" 
        fill="#22c55e"
      >
        Verde
      </text>
      <text 
        x="122" 
        y="38" 
        fontFamily="system-ui, sans-serif" 
        fontSize="24" 
        fontWeight="700" 
        fill="#ffffff"
      >
        IA
      </text>
      <text 
        x="55" 
        y="50" 
        fontFamily="system-ui, sans-serif" 
        fontSize="8" 
        fontWeight="400" 
        fill="#a1a1aa" 
        letterSpacing="0.5"
      >
        TECNOLOGIA + NATUREZA
      </text>
    </svg>
  );
}
