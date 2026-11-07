import { useId } from 'react'
import { motion, type MotionStyle } from 'framer-motion'

type IllustrationProps = {
  className?: string
  style?: MotionStyle
  label?: string
}

export function HeroFlower({ className, style, label }: IllustrationProps) {
  const id = useId().replaceAll(':', '')
  return (
    <motion.svg className={`floral-illustration hero-flower ${className ?? ''}`} viewBox="0 0 640 760" fill="none" style={style} role={label ? 'img' : undefined} aria-label={label} aria-hidden={label ? undefined : true}>
      <defs>
        <linearGradient id={`${id}-hero-vase`} x1="258" y1="490" x2="397" y2="718" gradientUnits="userSpaceOnUse"><stop stopColor="#E8D4CD" /><stop offset="1" stopColor="#C99D91" /></linearGradient>
        <linearGradient id={`${id}-hero-petal`} x1="264" y1="150" x2="377" y2="324" gradientUnits="userSpaceOnUse"><stop stopColor="#F5D5D4" /><stop offset="1" stopColor="#C97983" /></linearGradient>
        <linearGradient id={`${id}-hero-leaf`} x1="169" y1="286" x2="458" y2="470" gradientUnits="userSpaceOnUse"><stop stopColor="#A7AA85" /><stop offset="1" stopColor="#64775D" /></linearGradient>
        <filter id={`${id}-hero-soft`} x="48" y="42" width="550" height="690" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse"><feGaussianBlur stdDeviation="13" /></filter>
      </defs>
      <ellipse cx="327" cy="678" rx="190" ry="24" fill="#8C645B" opacity=".11" filter={`url(#${id}-hero-soft)`} />
      <g stroke="#758466" strokeLinecap="round" strokeWidth="5">
        <path d="M325 504C312 392 306 288 263 186" /><path d="M331 511C339 387 379 301 411 221" /><path d="M315 509C278 403 207 350 166 293" /><path d="M338 510C375 413 436 361 480 320" /><path d="M321 509C322 375 326 267 327 112" />
      </g>
      <g fill={`url(#${id}-hero-leaf)`}>
        <path className="wind-leaf" d="M273 384c-71-9-112-47-114-103 69 5 111 42 114 103Z" /><path d="M274 387c-1-63-43-103-102-106" />
        <path className="wind-leaf wind-delay-2" d="M373 402c69-15 104-58 99-112-68 11-104 54-99 112Z" /><path d="M372 405c7-62 53-98 112-96" />
        <path className="wind-leaf wind-delay-1" d="M218 439c-63 7-103-16-124-64 61-9 105 13 124 64Z" /><path d="M219 441c-21-51-66-72-119-66" />
        <path className="wind-leaf wind-delay-3" d="M423 448c61 4 100-21 117-69-60-6-102 18-117 69Z" /><path d="M421 449c18-52 62-76 116-73" />
        <path className="wind-leaf wind-delay-2" d="M293 302c-54-26-77-68-65-111 53 24 78 64 65 111Z" />
      </g>
      <g fill={`url(#${id}-hero-petal)`} stroke="#BB7780" strokeOpacity=".35" strokeWidth="2">
        <ellipse className="wind-petal wind-delay-1" cx="327" cy="145" rx="38" ry="59" />
        <ellipse className="wind-petal wind-delay-2" cx="294" cy="165" rx="37" ry="57" transform="rotate(-43 294 165)" />
        <ellipse className="wind-petal wind-delay-3" cx="360" cy="165" rx="37" ry="57" transform="rotate(43 360 165)" />
        <ellipse className="wind-petal wind-delay-2" cx="301" cy="205" rx="37" ry="57" transform="rotate(-76 301 205)" />
        <ellipse className="wind-petal wind-delay-1" cx="353" cy="205" rx="37" ry="57" transform="rotate(76 353 205)" />
        <ellipse className="wind-petal wind-delay-3" cx="327" cy="205" rx="35" ry="48" />
        <ellipse className="wind-petal" cx="263" cy="235" rx="28" ry="43" fill="#E8AEB1" transform="rotate(-40 263 235)" />
        <ellipse className="wind-petal wind-delay-2" cx="411" cy="258" rx="27" ry="40" fill="#F0C1C1" transform="rotate(35 411 258)" />
        <ellipse className="wind-petal" cx="169" cy="281" rx="17" ry="24" fill="#F1C9C5" /><ellipse className="wind-petal wind-delay-1" cx="163" cy="268" rx="15" ry="22" fill="#E9B1B3" />
        <ellipse className="wind-petal wind-delay-3" cx="480" cy="306" rx="18" ry="25" fill="#F2C9C2" /><ellipse className="wind-petal" cx="489" cy="290" rx="15" ry="22" fill="#E8ACAE" />
      </g>
      <circle cx="327" cy="199" r="13" fill="#D6B77A" /><circle cx="327" cy="199" r="5" fill="#F7E5B8" />
      <g fill="#D4B77F"><circle cx="206" cy="220" r="4" /><circle cx="223" cy="202" r="3" /><circle cx="433" cy="198" r="4" /><circle cx="451" cy="214" r="3" /><circle cx="501" cy="266" r="3" /><circle cx="141" cy="258" r="3" /></g>
      <path d="M246 475h176l-17 215c-1 18-16 31-34 31h-75c-18 0-33-13-34-31l-16-215Z" fill={`url(#${id}-hero-vase)`} />
      <path d="M246 475h176l-4 44H250l-4-44Z" fill="#C18F83" opacity=".42" />
      <path d="M262 526c38 17 102 17 142 0" stroke="#F7E7DF" strokeOpacity=".65" strokeWidth="3" />
      <path d="M277 590c30 13 81 13 112 0" stroke="#F7E7DF" strokeOpacity=".45" strokeWidth="2" />
      <ellipse cx="334" cy="475" rx="88" ry="16" fill="#F2DDD5" />
    </motion.svg>
  )
}

export function Bouquet({ className, style, label }: IllustrationProps) {
  const id = useId().replaceAll(':', '')
  return (
    <motion.svg className={`floral-illustration bouquet-illustration ${className ?? ''}`} viewBox="0 0 500 560" fill="none" style={style} role={label ? 'img' : undefined} aria-label={label} aria-hidden={label ? undefined : true}>
      <defs>
        <linearGradient id={`${id}-bouquet-wrap`} x1="119" y1="310" x2="372" y2="486" gradientUnits="userSpaceOnUse"><stop stopColor="#EED9D1" /><stop offset="1" stopColor="#C9968D" /></linearGradient>
        <linearGradient id={`${id}-bouquet-rose`} x1="172" y1="71" x2="275" y2="220" gradientUnits="userSpaceOnUse"><stop stopColor="#F6D6D1" /><stop offset=".55" stopColor="#D89196" /><stop offset="1" stopColor="#B56874" /></linearGradient>
        <linearGradient id={`${id}-bouquet-leaf`} x1="124" y1="199" x2="386" y2="333" gradientUnits="userSpaceOnUse"><stop stopColor="#AFB38C" /><stop offset="1" stopColor="#687B61" /></linearGradient>
      </defs>
      <g stroke="#718064" strokeLinecap="round" strokeWidth="4">
        <path d="M248 326C242 252 239 168 233 108" /><path d="M240 327c-40-71-91-118-140-152" /><path d="M260 326c28-81 85-145 127-179" /><path d="M246 327c-11-81-47-153-70-195" /><path d="M259 327c12-72 39-129 66-188" />
      </g>
      <g fill={`url(#${id}-bouquet-leaf)`}>
        <path className="wind-leaf" d="M176 269c-59-5-95-33-102-81 57 1 94 29 102 81Z" /><path d="M177 271c-7-53-44-81-93-82" />
        <path className="wind-leaf wind-delay-2" d="M307 268c58-13 88-47 83-94-57 9-89 43-83 94Z" /><path d="M306 271c8-53 46-80 95-77" />
        <path className="wind-leaf wind-delay-1" d="M218 230c-53-19-80-56-73-100 53 18 80 53 73 100Z" /><path d="M219 232c-12-52-49-82-98-87" />
        <path className="wind-leaf wind-delay-3" d="M281 229c51-24 74-63 63-106-51 23-76 61-63 106Z" /><path d="M280 231c17-50 56-75 105-75" />
        <path className="wind-leaf" d="M139 316c-51 7-83-11-98-50 49-9 84 9 98 50Z" /><path className="wind-leaf wind-delay-2" d="M354 318c50 3 81-18 93-57-49-6-83 15-93 57Z" />
      </g>
      <g fill={`url(#${id}-bouquet-rose)`} stroke="#B96F78" strokeOpacity=".35" strokeWidth="1.5">
        <ellipse className="wind-petal wind-delay-1" cx="235" cy="94" rx="32" ry="48" /><ellipse className="wind-petal wind-delay-2" cx="208" cy="112" rx="31" ry="45" transform="rotate(-43 208 112)" />
        <ellipse className="wind-petal wind-delay-3" cx="262" cy="112" rx="31" ry="45" transform="rotate(43 262 112)" /><ellipse className="wind-petal wind-delay-2" cx="211" cy="145" rx="30" ry="43" transform="rotate(-75 211 145)" />
        <ellipse className="wind-petal wind-delay-1" cx="259" cy="145" rx="30" ry="43" transform="rotate(75 259 145)" /><ellipse className="wind-petal wind-delay-3" cx="235" cy="144" rx="26" ry="37" />
        <ellipse className="wind-petal" cx="94" cy="146" rx="19" ry="29" fill="#EAB9B7" transform="rotate(-25 94 146)" />
        <ellipse className="wind-petal wind-delay-2" cx="386" cy="141" rx="19" ry="29" fill="#EDC6BB" transform="rotate(28 386 141)" />
        <ellipse className="wind-petal wind-delay-1" cx="171" cy="45" rx="15" ry="22" fill="#F1C9BF" /><ellipse className="wind-petal wind-delay-3" cx="328" cy="126" rx="15" ry="22" fill="#F0C7BF" />
      </g>
      <circle cx="235" cy="139" r="9" fill="#D6B77A" />
      <g fill="#D8BB83"><circle cx="123" cy="114" r="4" /><circle cx="135" cy="98" r="3" /><circle cx="344" cy="91" r="4" /><circle cx="359" cy="104" r="3" /><circle cx="150" cy="193" r="3" /><circle cx="316" cy="190" r="3" /><circle cx="411" cy="181" r="4" /></g>
      <path d="M125 300 376 300 326 471 250 516 174 471 125 300Z" fill={`url(#${id}-bouquet-wrap)`} />
      <path d="M125 300c80 49 169 50 251 0" stroke="#FAEEE8" strokeOpacity=".8" strokeWidth="4" />
      <path d="m174 471 76 45 76-45" stroke="#B9857D" strokeWidth="3" />
      <path d="m229 499-13 40 34-22 34 22-13-40" fill="#BD7880" /><path d="m250 516-4 25 4-2 4 2-4-25Z" fill="#A86068" />
    </motion.svg>
  )
}

export function SakuraSprig({ className, style, label }: IllustrationProps) {
  const id = useId().replaceAll(':', '')
  return (
    <motion.svg className={`floral-illustration sakura-illustration ${className ?? ''}`} viewBox="0 0 360 500" fill="none" style={style} role={label ? 'img' : undefined} aria-label={label} aria-hidden={label ? undefined : true}>
      <defs>
        <linearGradient id={`${id}-sakura-branch`} x1="113" y1="402" x2="273" y2="72" gradientUnits="userSpaceOnUse"><stop stopColor="#81765E" /><stop offset="1" stopColor="#9B806E" /></linearGradient>
        <radialGradient id={`${id}-sakura-flower`} cx="0" cy="0" r="1" gradientTransform="matrix(38 32 -32 38 221 159)" gradientUnits="userSpaceOnUse"><stop stopColor="#FFF8F4" /><stop offset=".57" stopColor="#F5D3D7" /><stop offset="1" stopColor="#D894A0" /></radialGradient>
      </defs>
      <g className="wind-branch" stroke={`url(#${id}-sakura-branch)`} strokeLinecap="round" strokeWidth="5">
        <path d="M90 445C153 353 183 259 222 80" /><path d="M144 354c-51-53-83-94-97-147" /><path d="M171 287c71-43 110-83 140-136" /><path d="M197 199c-3-60-20-103-51-145" /><path d="M190 238c-48-13-81-12-121 2" /><path d="M224 124c49-9 79-3 110 18" />
      </g>
      <g fill={`url(#${id}-sakura-flower)`} stroke="#CE909A" strokeOpacity=".35" strokeWidth="1">
        <g transform="translate(95 205)">
          <ellipse className="wind-petal" cy="-19" rx="11" ry="18" /><ellipse className="wind-petal wind-delay-1" cx="18" cy="-6" rx="11" ry="18" transform="rotate(72 18 -6)" /><ellipse className="wind-petal wind-delay-2" cx="11" cy="15" rx="11" ry="18" transform="rotate(144 11 15)" /><ellipse className="wind-petal wind-delay-3" cx="-11" cy="15" rx="11" ry="18" transform="rotate(216 -11 15)" /><ellipse className="wind-petal wind-delay-2" cx="-18" cy="-6" rx="11" ry="18" transform="rotate(288 -18 -6)" /><circle r="5" fill="#D5B171" />
        </g>
        <g transform="translate(301 149) scale(.8)">
          <ellipse className="wind-petal" cy="-19" rx="11" ry="18" /><ellipse className="wind-petal wind-delay-1" cx="18" cy="-6" rx="11" ry="18" transform="rotate(72 18 -6)" /><ellipse className="wind-petal wind-delay-2" cx="11" cy="15" rx="11" ry="18" transform="rotate(144 11 15)" /><ellipse className="wind-petal wind-delay-3" cx="-11" cy="15" rx="11" ry="18" transform="rotate(216 -11 15)" /><ellipse className="wind-petal wind-delay-2" cx="-18" cy="-6" rx="11" ry="18" transform="rotate(288 -18 -6)" /><circle r="5" fill="#D5B171" />
        </g>
        <g transform="translate(154 54) scale(.72)">
          <ellipse className="wind-petal wind-delay-1" cy="-19" rx="11" ry="18" /><ellipse className="wind-petal wind-delay-2" cx="18" cy="-6" rx="11" ry="18" transform="rotate(72 18 -6)" /><ellipse className="wind-petal wind-delay-3" cx="11" cy="15" rx="11" ry="18" transform="rotate(144 11 15)" /><ellipse className="wind-petal wind-delay-2" cx="-11" cy="15" rx="11" ry="18" transform="rotate(216 -11 15)" /><ellipse className="wind-petal" cx="-18" cy="-6" rx="11" ry="18" transform="rotate(288 -18 -6)" /><circle r="5" fill="#D5B171" />
        </g>
        <g transform="translate(326 142) scale(.55)">
          <ellipse className="wind-petal" cy="-19" rx="11" ry="18" /><ellipse className="wind-petal wind-delay-1" cx="18" cy="-6" rx="11" ry="18" transform="rotate(72 18 -6)" /><ellipse className="wind-petal wind-delay-2" cx="11" cy="15" rx="11" ry="18" transform="rotate(144 11 15)" /><ellipse className="wind-petal wind-delay-3" cx="-11" cy="15" rx="11" ry="18" transform="rotate(216 -11 15)" /><ellipse className="wind-petal wind-delay-2" cx="-18" cy="-6" rx="11" ry="18" transform="rotate(288 -18 -6)" /><circle r="5" fill="#D5B171" />
        </g>
      </g>
      <g fill="#D8B875"><circle cx="206" cy="82" r="3" /><circle cx="112" cy="168" r="3" /><circle cx="286" cy="177" r="2.5" /><circle cx="252" cy="103" r="2.5" /></g>
    </motion.svg>
  )
}
