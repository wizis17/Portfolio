// Original anime-style avatar. Swap for a photo by replacing this component.
export function Avatar({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 440" role="img" aria-label="Anime-style illustration of Tenji" className={className}>
      <defs>
        <linearGradient id="hair" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#2E2C4A" />
          <stop offset="1" stopColor="#14132A" />
        </linearGradient>
        <linearGradient id="iris" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#2A1A10" />
          <stop offset=".55" stopColor="#5B3A22" />
          <stop offset="1" stopColor="#A9743F" />
        </linearGradient>
        <clipPath id="eyeL">
          <path d="M146 212C150 194 190 192 194 210C190 228 152 230 146 212Z" />
        </clipPath>
        <clipPath id="eyeR">
          <path d="M206 210C210 192 250 194 254 212C248 230 210 228 206 210Z" />
        </clipPath>
      </defs>
      <path d="M116 192C98 118 134 50 205 48C278 48 308 120 288 194L262 140H140Z" fill="url(#hair)" />
      <path d="M118 302C130 272 160 262 200 262S270 272 282 302L292 370H108Z" fill="#2B2E42" />
      <path d="M178 266H222L226 332C210 342 190 342 174 332Z" fill="#EDBA93" />
      <path d="M178 268C190 290 210 290 222 268V290C210 300 190 300 178 290Z" fill="#D69A72" />
      <path d="M38 440C46 360 100 322 165 318C180 338 220 338 235 318C300 322 354 360 362 440Z" fill="#1F2233" />
      <path d="M165 318C148 332 140 352 142 384M235 318C252 332 260 352 258 384" stroke="#353A52" strokeWidth="10" fill="none" strokeLinecap="round" />
      <path d="M182 336L178 394M218 336L222 394" stroke="#F5F1EA" strokeWidth="5" strokeLinecap="round" />
      <rect x="172" y="392" width="12" height="16" rx="3" fill="#A6D84A" />
      <rect x="216" y="392" width="12" height="16" rx="3" fill="#A6D84A" />
      <text x="300" y="400" fontFamily="ui-monospace,Menlo,monospace" fontSize="22" fontWeight="700" fill="#A6D84A" textAnchor="middle">
        {'</>'}
      </text>
      <ellipse cx="133" cy="202" rx="11" ry="19" fill="#EDBA93" />
      <ellipse cx="267" cy="202" rx="11" ry="19" fill="#EDBA93" />
      <path d="M132 165C132 222 156 268 200 292C244 268 268 222 268 165C268 108 238 86 200 86S132 108 132 165Z" fill="#F7CFAC" />
      <ellipse cx="158" cy="240" rx="14" ry="6" fill="#FF8A8A" opacity=".35" />
      <ellipse cx="242" cy="240" rx="14" ry="6" fill="#FF8A8A" opacity=".35" />
      <path d="M150 190C160 184 176 184 186 188M214 188C224 184 240 184 250 190" stroke="#22213A" strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M146 212C150 194 190 192 194 210C190 228 152 230 146 212Z" fill="#fff" />
      <g clipPath="url(#eyeL)">
        <ellipse cx="172" cy="212" rx="13" ry="16" fill="url(#iris)" />
        <ellipse cx="172" cy="214" rx="6" ry="8" fill="#140B06" />
      </g>
      <circle cx="177" cy="205" r="4.5" fill="#fff" />
      <circle cx="166" cy="219" r="2" fill="#fff" opacity=".85" />
      <path d="M206 210C210 192 250 194 254 212C248 230 210 228 206 210Z" fill="#fff" />
      <g clipPath="url(#eyeR)">
        <ellipse cx="228" cy="212" rx="13" ry="16" fill="url(#iris)" />
        <ellipse cx="228" cy="214" rx="6" ry="8" fill="#140B06" />
      </g>
      <circle cx="233" cy="205" r="4.5" fill="#fff" />
      <circle cx="222" cy="219" r="2" fill="#fff" opacity=".85" />
      <path d="M142 208C150 192 190 190 197 206M142 208L135 201M203 206C210 190 250 192 258 208M258 208L265 201" stroke="#1B1A2C" strokeWidth="5" fill="none" strokeLinecap="round" />
      <path d="M152 224C162 230 182 230 190 222M210 222C218 230 238 230 248 224" stroke="#C48A6A" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M200 232L196 246L202 247" stroke="#D69A72" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M184 262C194 272 208 272 218 262" stroke="#9C4A3A" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M124 184C116 112 152 62 205 60C264 60 294 108 282 184L270 150L262 186L246 138L232 178L214 126L198 170L182 130L166 176L154 144L138 188Z" fill="url(#hair)" />
      <path d="M160 90C186 76 226 76 250 90" stroke="#5A5882" strokeWidth="5" fill="none" strokeLinecap="round" opacity=".7" />
      <path d="M206 62C204 34 226 20 248 26C230 32 220 44 214 62Z" fill="#22213A" />
    </svg>
  )
}
