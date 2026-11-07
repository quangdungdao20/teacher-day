import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { Bouquet, HeroFlower, SakuraSprig } from './components/FlowerIllustrations'
import './App.css'
import { backgroundMusicFallbackUrl, backgroundMusicUrl, backgroundMusicTitle } from './config/music'

const sections = ['opening-greeting', 'vietnamese-message', 'teachers', 'korean-message', 'finale']

const teachers = [
  { title: 'Cô', name: 'PARK MIYOUNG' },
  { title: 'Cô', name: 'CHANG MINHEE' },
  { title: 'Cô', name: 'SEOK SUK HEE' },
  { title: 'Cô', name: 'OH SU YEAN' },
  { title: 'Thầy', name: 'LEE YONG SIK' },
]

const vietnameseMessage = [
  'Nhân ngày Nhà giáo Việt Nam 20/11, thay mặt toàn thể các bạn trong lớp, chúng em xin gửi đến thầy/cô lời chúc mừng cùng lòng biết ơn chân thành và sâu sắc nhất.',
  'Chúng em xin chân thành cảm ơn thầy/cô vì đã luôn tận tâm truyền đạt những kiến thức quý báu, kiên nhẫn hướng dẫn và đồng hành cùng chúng em trong suốt quá trình học tập. Không chỉ là người truyền đạt kiến thức, thầy/cô còn mang đến cho chúng em sự động viên, niềm tin và nguồn cảm hứng để không ngừng cố gắng và trưởng thành hơn mỗi ngày.',
  'Nhân ngày đặc biệt này, chúng em kính chúc thầy/cô luôn mạnh khỏe, hạnh phúc và thành công. Mong rằng thầy/cô sẽ luôn giữ vững ngọn lửa nhiệt huyết với nghề và tiếp tục truyền cảm hứng đến thật nhiều thế hệ học trò.',
  'Chúng em xin chân thành cảm ơn và luôn kính trọng thầy/cô! ❤️🌷',
]

const koreanMessage = [
  '베트남 스승의 날 11월 20일을 맞아\n저희 반 학생들을 대표하여, 교수님께 진심으로 축하와 감사의 마음을 전합니다.',
  '항상 따뜻한 마음과 열정으로 소중한 지식을 가르쳐 주시고, 저희 한 사람 한 사람에게 아낌없는 관심과 격려를 보내주신 교수님께 진심으로 감사드립니다.',
  '교수님의 가르침은 단순한 지식을 넘어 저희가 앞으로 나아갈 수 있는 용기와 자신감, 그리고 더 큰 꿈을 향해 도전할 수 있는 힘이 되었습니다. 교수님과 함께한 소중한 시간과 가르침을 저희는 오래도록 기억하겠습니다.',
  '베트남 스승의 날을 맞아 교수님께서 항상 건강하시고 행복하시며, 앞으로도 모든 날들이 기쁨과 웃음으로 가득하시기를 진심으로 기원합니다.',
  '교수님, 진심으로 존경하고 감사드립니다.\n항상 건강하시고 행복하세요! ❤️🌷',
]

const petals = Array.from({ length: 72 }, (_, index) => ({
  left: `${(index * 37 + 7) % 100}%`,
  delay: `${(index % 18) * -0.8}s`,
  duration: `${10 + (index % 8) * 1.4}s`,
  size: `${5 + (index % 4) * 2}px`,
}))

const blossoms = Array.from({ length: 14 }, (_, index) => ({
  left: `${(index * 43 + 19) % 100}%`,
  delay: `${(index % 7) * -1.8}s`,
  duration: `${15 + (index % 4) * 2}s`,
  size: `${9 + (index % 3) * 3}px`,
}))

const openingPetals = Array.from({ length: 24 }, (_, index) => ({
  left: `${(index * 41 + 3) % 100}%`,
  delay: `${(index % 12) * -1.1}s`,
  duration: `${11 + (index % 4) * 1.5}s`,
  size: `${5 + (index % 4) * 2}px`,
}))

const sparkles = Array.from({ length: 14 }, (_, index) => ({
  left: `${(index * 61 + 13) % 100}%`,
  top: `${(index * 43 + 17) % 100}%`,
  delay: `${(index % 7) * -0.8}s`,
  duration: `${2.8 + (index % 4) * 0.7}s`,
}))

function App() {
  const shouldReduceMotion = useReducedMotion()
  const heroArtRef = useRef<HTMLDivElement>(null)
  const teacherArtRef = useRef<HTMLDivElement>(null)
  const koreanArtRef = useRef<HTMLDivElement>(null)
  const finaleArtRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroArtRef,
    offset: ['start end', 'end start'],
  })
  const { scrollYProgress: teacherProgress } = useScroll({
    target: teacherArtRef,
    offset: ['start end', 'end start'],
  })
  const { scrollYProgress: koreanProgress } = useScroll({
    target: koreanArtRef,
    offset: ['start end', 'end start'],
  })
  const { scrollYProgress: finaleProgress } = useScroll({
    target: finaleArtRef,
    offset: ['start end', 'end start'],
  })
  const heroFlowerX = useTransform(heroProgress, [0, 0.42, 1], ['-16vw', '0vw', '8vw'])
  const heroFlowerY = useTransform(heroProgress, [0, 0.48, 1], ['8vh', '0vh', '-6vh'])
  const heroFlowerScale = useTransform(heroProgress, [0, 0.42, 1], [0.68, 1, 1.08])
  const teacherFlowerX = useTransform(teacherProgress, [0, 0.38, 1], ['-14vw', '0vw', '7vw'])
  const teacherFlowerY = useTransform(teacherProgress, [0, 0.45, 1], ['7vh', '0vh', '-5vh'])
  const teacherFlowerScale = useTransform(teacherProgress, [0, 0.4, 1], [0.62, 1, 1.06])
  const koreanFlowerX = useTransform(koreanProgress, [0, 0.4, 1], ['-12vw', '0vw', '6vw'])
  const koreanFlowerY = useTransform(koreanProgress, [0, 0.5, 1], ['6vh', '0vh', '-4vh'])
  const koreanFlowerScale = useTransform(koreanProgress, [0, 0.45, 1], [0.7, 1, 1.08])
  const koreanFlowerRotate = useTransform(koreanProgress, [0, 0.5, 1], [-24, -15, -5])
  const finaleFlowerX = useTransform(finaleProgress, [0, 0.5, 1], ['-12vw', '0vw', '6vw'])
  const finaleFlowerY = useTransform(finaleProgress, [0, 0.5, 1], ['8vh', '0vh', '-4vh'])
  const finaleFlowerScale = useTransform(finaleProgress, [0, 0.5, 1], [0.66, 1, 1.06])
  const [isOpen, setIsOpen] = useState(false)
  const [isOpening, setIsOpening] = useState(false)
  const [activeSection, setActiveSection] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const slideDuration = 8
  const [musicEnabled, setMusicEnabled] = useState(false)
  const [notice, setNotice] = useState('')
  const audioRef = useRef<HTMLAudioElement>(null)
  const musicFallbackAttempted = useRef(false)

  const goToSection = (index: number, automatic = false) => {
    const nextIndex = Math.max(0, Math.min(sections.length - 1, index))
    if (!automatic) setIsPlaying(false)
    setActiveSection(nextIndex)
    document.getElementById(sections[nextIndex])?.scrollIntoView({
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
      block: 'start',
    })
  }

  const startMusic = async () => {
    if (!backgroundMusicUrl) {
      setNotice('Nhạc nền chưa được cấu hình. Hãy thêm URL vào src/config/music.ts.')
      return
    }

    const audio = audioRef.current
    if (!audio) return
    try {
      audio.volume = 0.45
      await audio.play()
      setMusicEnabled(true)
    } catch {
      setMusicEnabled(false)
      setNotice('Trình duyệt chưa thể phát nhạc. Bạn có thể bật nhạc bằng nút điều khiển.')
    }
  }

  const openCard = () => {
    if (isOpening) return
    setIsOpening(true)
    window.setTimeout(() => {
      setIsOpen(true)
      window.setTimeout(() => goToSection(0, true), 120)
    }, 850)
    if (backgroundMusicUrl) void startMusic()
  }

  const toggleMusic = async () => {
    const audio = audioRef.current
    if (!backgroundMusicUrl || !audio) {
      setNotice('Nhạc nền chưa được cấu hình. Hãy thêm URL vào src/config/music.ts.')
      return
    }
    if (musicEnabled) {
      audio.pause()
      setMusicEnabled(false)
      return
    }
    await startMusic()
  }

  useEffect(() => {
    document.body.style.overflow = isOpen ? '' : 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    if (!notice) return
    const timeout = window.setTimeout(() => setNotice(''), 4200)
    return () => window.clearTimeout(timeout)
  }, [notice])

  useEffect(() => {
    if (!isOpen) return
    const targets = sections
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null)
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActiveSection(sections.indexOf(visible.target.id))
      },
      { threshold: [0.35, 0.55, 0.75] },
    )
    targets.forEach((target) => observer.observe(target))
    return () => {
      observer.disconnect()
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen || !isPlaying) return
    const timeout = window.setTimeout(() => {
      if (activeSection >= sections.length - 1) {
        setIsPlaying(false)
      } else {
        goToSection(activeSection + 1, true)
      }
    }, slideDuration * 1000)
    return () => window.clearTimeout(timeout)
  }, [activeSection, isOpen, isPlaying, slideDuration])

  useEffect(() => {
    if (!isOpen || !isPlaying) return
    const pauseOnInput = (event: Event) => {
      if (!(event.target instanceof Element) || !event.target.closest('.presentation-bar')) {
        setIsPlaying(false)
      }
    }
    window.addEventListener('wheel', pauseOnInput, { passive: true })
    window.addEventListener('touchstart', pauseOnInput, { passive: true })
    return () => {
      window.removeEventListener('wheel', pauseOnInput)
      window.removeEventListener('touchstart', pauseOnInput)
    }
  }, [isOpen, isPlaying])

  const toggleFullscreen = async () => {
    try {
      if (document.fullscreenElement) await document.exitFullscreen()
      else await document.documentElement.requestFullscreen()
    } catch {
      setNotice('Không thể bật toàn màn hình trên thiết bị này.')
    }
  }

  return (
    <>
      {isOpen && !shouldReduceMotion && <div className="petal-layer" aria-hidden="true">
        {petals.map((petal, index) => (
          <motion.span
            className="petal"
            key={index}
            style={{
              left: petal.left,
              animationDelay: petal.delay,
              animationDuration: petal.duration,
              width: petal.size,
              height: `calc(${petal.size} * 1.45)`,
            }}
            animate={{
              x: [0, `${index % 2 ? 5 : -3}vw`, `${index % 2 ? -4 : 4}vw`, `${index % 2 ? 3 : 8}vw`],
              y: ['-5vh', '31vh', '66vh', '110vh'],
              rotate: [0, index % 2 ? -150 : 150, index % 2 ? -340 : 300, index % 2 ? -540 : 520],
              opacity: [0, 0.7, 0.55, 0],
            }}
            transition={{ duration: Number.parseFloat(petal.duration), delay: Number.parseFloat(petal.delay), repeat: Infinity, ease: 'linear' }}
          />
        ))}
        {blossoms.map((blossom, index) => (
          <motion.span
            className="falling-blossom"
            key={`blossom-${index}`}
            style={{
              left: blossom.left,
              animationDelay: blossom.delay,
              animationDuration: blossom.duration,
              width: blossom.size,
              height: blossom.size,
            }}
            animate={{
              x: [0, '5vw', '-4vw', '6vw', '1vw'],
              y: ['-4vh', '29vh', '57vh', '84vh', '110vh'],
              rotate: [0, 110, 245, 380, 540],
              scale: [0.8, 1, 0.92, 0.85, 0.75],
              opacity: [0, 0.8, 0.72, 0.5, 0],
            }}
            transition={{ duration: Number.parseFloat(blossom.duration), delay: Number.parseFloat(blossom.delay), repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
        {sparkles.map((sparkle, index) => (
          <motion.span
            className="sparkle"
            key={`sparkle-${index}`}
            style={{
              left: sparkle.left,
              top: sparkle.top,
              animationDelay: sparkle.delay,
              animationDuration: sparkle.duration,
            }}
            animate={{ opacity: [0, 0.8, 0], scale: [0.35, 1.15, 0.35] }}
            transition={{ duration: Number.parseFloat(sparkle.duration), delay: Number.parseFloat(sparkle.delay), repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </div>}

      <motion.main className={isOpen ? 'journey is-open' : 'journey'} animate={{ opacity: isOpen ? 1 : 0 }} transition={{ duration: shouldReduceMotion ? 0 : 0.8 }}>
        <section className="scene hero-scene" id="opening-greeting" aria-label="Lời chúc mở đầu">
          <motion.div className="hero-glow" aria-hidden="true" animate={shouldReduceMotion ? undefined : { scale: [1, 1.025, 1], opacity: [0.65, 1, 0.65] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }} />
          <motion.div className="hero-copy" initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>
            <p className="eyebrow"><span /> 20 · 11 · A DAY TO CELEBRATE <span /></p>
            <h1>Tri ân những<br /><em>người gieo nắng</em></h1>
            <p className="hero-subtitle">Nhân ngày Nhà giáo Việt Nam</p>
            <motion.a className="scroll-cue" href="#vietnamese-message" aria-label="Cuộn đến lời tri ân" whileHover={shouldReduceMotion ? undefined : { x: 8 }} transition={{ duration: 0.25 }}>
              <span>Cuộn để khám phá</span><i />
            </motion.a>
          </motion.div>
          <motion.div ref={heroArtRef} className="hero-art" aria-hidden="true" initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.94, y: 18 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 1.1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}>
            <motion.div className="art-halo" animate={shouldReduceMotion ? undefined : { scale: [1, 1.06, 1], opacity: [0.55, 0.85, 0.55] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }} />
            <motion.div className="hero-flower-float" animate={shouldReduceMotion ? undefined : { y: [0, -9, 0], rotate: [0, 0.8, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}>
              <HeroFlower style={{ x: shouldReduceMotion ? 0 : heroFlowerX, y: shouldReduceMotion ? 0 : heroFlowerY, scale: shouldReduceMotion ? 1 : heroFlowerScale }} />
            </motion.div>
            <span className="art-caption">a little garden<br />of gratitude</span>
          </motion.div>
          <span className="side-note">A LETTER OF GRATITUDE</span>
        </section>

        <section className="scene letter-scene" id="vietnamese-message">
          <motion.div className="section-intro" initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.8 }}>
            <p className="eyebrow"><span /> GỬI THẦY CÔ THÂN YÊU <span /></p>
            <h2>Một lời cảm ơn,<br /><em>ngàn điều thương mến.</em></h2>
          </motion.div>
          <motion.article className="letter-card" initial={shouldReduceMotion ? false : { opacity: 0, y: 28, scale: 0.98 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, amount: 0.18 }} transition={{ duration: 0.9, delay: 0.12 }}>
            <div className="letter-top"><span>20 / 11</span><span className="letter-flower">✿</span><span>Với tất cả lòng biết ơn</span></div>
            <div className="letter-copy">
              {vietnameseMessage.map((paragraph, index) => (
                <p key={paragraph} className={index === vietnameseMessage.length - 1 ? 'letter-signoff' : ''}>
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="letter-footer">TỪ NHỮNG HỌC TRÒ NHỎ, VỚI TÌNH YÊU LỚN</div>
            <SakuraSprig className="letter-sprig" />
          </motion.article>
        </section>

        <section className="scene teachers-scene" id="teachers">
          <motion.div className="section-intro" initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.8 }}>
            <p className="eyebrow"><span /> NHỮNG NGƯỜI TRUYỀN CẢM HỨNG <span /></p>
            <h2>Những đóa hoa<br /><em>trong khu vườn tri thức.</em></h2>
            <p className="section-note">Xin gửi đến thầy cô lời tri ân chân thành nhất.</p>
          </motion.div>
          <div className="teacher-layout">
            <motion.div ref={teacherArtRef} className="teacher-art" initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.92 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.9 }}>
              <motion.div className="teacher-flower-float" animate={shouldReduceMotion ? undefined : { y: [0, -8, 0], rotate: [0, 1.2, 0] }} transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}>
                <Bouquet label="Bó hoa hồng và hoa nhỏ được vẽ minh họa" style={{ x: shouldReduceMotion ? 0 : teacherFlowerX, y: shouldReduceMotion ? 0 : teacherFlowerY, scale: shouldReduceMotion ? 1 : teacherFlowerScale }} />
              </motion.div>
              <span>Thank you<br />for helping us bloom</span>
            </motion.div>
            <div className="teacher-list">
              {teachers.map((teacher, index) => (
                <motion.article className="teacher-card" key={teacher.name} initial={shouldReduceMotion ? false : { opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.25 }} whileHover={shouldReduceMotion ? undefined : { x: 5, scale: 1.01 }} transition={{ duration: 0.45, delay: index * 0.08 }}>
                  <span className="teacher-index">0{index + 1}</span>
                  <div><span className="teacher-title">{teacher.title}</span><h3>{teacher.name}</h3></div>
                  <span className="teacher-star">✳</span>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="scene korean-scene" id="korean-message">
          <motion.div ref={koreanArtRef} className="korean-art" aria-hidden="true" initial={shouldReduceMotion ? false : { opacity: 0, x: -28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.9 }}>
            <motion.div className="korean-flower-float" animate={shouldReduceMotion ? undefined : { y: [0, -7, 0] }} transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}>
              <SakuraSprig style={{ x: shouldReduceMotion ? 0 : koreanFlowerX, y: shouldReduceMotion ? 0 : koreanFlowerY, scale: shouldReduceMotion ? 1 : koreanFlowerScale, rotate: shouldReduceMotion ? -15 : koreanFlowerRotate }} />
            </motion.div>
          </motion.div>
          <motion.div className="korean-content" initial={shouldReduceMotion ? false : { opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.8 }}>
            <p className="eyebrow"><span /> 마음을 담아 <span /></p>
            <h2 lang="ko">감사와 존경의<br /><em>마음을 전합니다</em></h2>
            <motion.article className="korean-letter" lang="ko" initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.8, delay: 0.15 }}>
              {koreanMessage.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </motion.article>
            <span className="korean-signature">고맙습니다 · 감사합니다</span>
          </motion.div>
        </section>

        <section className="scene finale-scene" id="finale">
          <motion.div className="finale-content" initial={shouldReduceMotion ? false : { opacity: 0, y: 28, scale: 0.97 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 1 }}>
            <p className="eyebrow"><span /> WITH LOVE & GRATITUDE <span /></p>
            <div className="finale-bloom" ref={finaleArtRef}>
              <motion.div className="finale-flower-float" animate={shouldReduceMotion ? undefined : { y: [0, -9, 0], rotate: [0, -0.8, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}>
                <Bouquet label="Bó hoa tri ân thầy cô" style={{ x: shouldReduceMotion ? 0 : finaleFlowerX, y: shouldReduceMotion ? 0 : finaleFlowerY, scale: shouldReduceMotion ? 1 : finaleFlowerScale }} />
              </motion.div>
            </div>
            <h2>Happy Vietnamese<br /><em>Teachers' Day</em></h2>
            <p className="final-date">20 November</p>
            <p className="final-thanks">Thank you for being our inspiration.<br />With love and gratitude.</p>
            <motion.button className="replay-button" onClick={() => goToSection(0)} whileHover={shouldReduceMotion ? undefined : { y: -3, scale: 1.03 }} whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }} transition={{ type: 'spring', stiffness: 360, damping: 22 }}>↺ <span>Đọc lại lời chúc</span></motion.button>
          </motion.div>
          <span className="finale-footer">MADE WITH LOVE · 20.11</span>
        </section>
      </motion.main>

      <AnimatePresence>
      {!isOpen && (
        <motion.div className={isOpening ? 'opening-overlay is-opening' : 'opening-overlay'} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.75 }}>
          {!shouldReduceMotion && <div className="opening-rain" aria-hidden="true">
            {openingPetals.map((petal, index) => (
              <motion.span
                className="petal opening-rain-petal"
                key={`opening-petal-${index}`}
                style={{ left: petal.left, width: petal.size, height: `calc(${petal.size} * 1.45)` }}
                animate={{ x: [0, index % 2 ? '-3vw' : '3vw', index % 2 ? '3vw' : '-3vw', 0], y: ['-5vh', '32vh', '68vh', '110vh'], rotate: [0, index % 2 ? -220 : 220, index % 2 ? -420 : 420, index % 2 ? -600 : 600], opacity: [0, 0.58, 0.48, 0] }}
                transition={{ duration: Number.parseFloat(petal.duration), delay: Number.parseFloat(petal.delay), repeat: Infinity, ease: 'linear' }}
              />
            ))}
          </div>}
          <motion.div className="opening-petal opening-petal-one" aria-hidden="true" animate={shouldReduceMotion ? undefined : { y: [0, -14, 8, 0], x: [0, 9, -6, 0], rotate: [42, 130, 245, 402] }} transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }} />
          <motion.div className="opening-petal opening-petal-two" aria-hidden="true" animate={shouldReduceMotion ? undefined : { y: [0, 12, -9, 0], x: [0, -7, 8, 0], rotate: [42, -80, -200, -318] }} transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }} />
          <motion.div className="opening-card" initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: shouldReduceMotion ? 0 : 0.75, delay: shouldReduceMotion ? 0 : 0.15 }}>
            <p className="eyebrow"><span /> A LITTLE NOTE FOR YOU <span /></p>
            <div className="envelope" aria-hidden="true">
              <motion.div className="envelope-letter" animate={{ y: isOpening ? -38 : 0 }} transition={{ duration: 0.65, delay: isOpening ? 0.2 : 0 }}><span>With love<br />& gratitude</span><i>✿</i></motion.div>
              <div className="envelope-back" />
              <div className="envelope-front" />
              <motion.div className="envelope-flap" animate={{ rotateX: isOpening ? 180 : 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} />
              <motion.span className="envelope-seal" animate={{ opacity: isOpening ? 0 : 1, scale: isOpening ? 0.6 : 1 }} transition={{ duration: 0.25 }}>✿</motion.span>
            </div>
            <p className="opening-date">20 NOVEMBER</p>
            <h1>Happy Vietnamese<br /><em>Teachers' Day</em></h1>
            <p className="opening-caption">Một món quà nhỏ gửi đến những người thầy, người cô tuyệt vời.</p>
            <motion.button className="open-button" onClick={openCard} disabled={isOpening} whileHover={shouldReduceMotion || isOpening ? undefined : { y: -3, scale: 1.04 }} whileTap={shouldReduceMotion || isOpening ? undefined : { scale: 0.96 }} transition={{ type: 'spring', stiffness: 350, damping: 20 }}>Mở thiệp <span>↗</span></motion.button>
            <p className="opening-signoff">WITH LOVE & GRATITUDE</p>
          </motion.div>
          <motion.div className="opening-bouquet" animate={shouldReduceMotion ? undefined : { y: [0, -12, 0], rotate: [14, 10, 14], scale: [0.98, 1.02, 0.98] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}>
            <Bouquet />
          </motion.div>
          <motion.div className="opening-sprig" animate={shouldReduceMotion ? undefined : { y: [0, 10, 0], rotate: [188, 193, 188], scale: [1, 1.04, 1] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}>
            <SakuraSprig />
          </motion.div>
        </motion.div>
      )}
      </AnimatePresence>

      {isOpen && (
        <nav className="presentation-bar" aria-label="Điều khiển trình chiếu">
          <button className="control-icon" onClick={() => goToSection(activeSection - 1)} aria-label="Phân cảnh trước" title="Phân cảnh trước">‹</button>
          <button className="play-control" onClick={() => setIsPlaying((playing) => !playing)} aria-label={isPlaying ? 'Tạm dừng trình chiếu' : 'Bắt đầu trình chiếu'} title={isPlaying ? 'Tạm dừng' : 'Trình chiếu'}>
            {isPlaying ? 'Ⅱ' : '▶'}
          </button>
          <button className="control-icon" onClick={() => goToSection(activeSection + 1)} aria-label="Phân cảnh tiếp theo" title="Phân cảnh tiếp theo">›</button>
          <div className="progress-wrap" aria-label={`Phân cảnh ${activeSection + 1} trên ${sections.length}`}>
            <div className="progress-track"><span style={{ width: `${((activeSection + 1) / sections.length) * 100}%` }} /></div>
            <span className="progress-count">0{activeSection + 1} / 0{sections.length}</span>
          </div>
          <button className={musicEnabled ? 'control-icon music-control is-active' : 'control-icon music-control'} onClick={() => void toggleMusic()} aria-label={musicEnabled ? 'Tắt nhạc' : 'Bật nhạc'} title={backgroundMusicTitle}>{musicEnabled ? '♫' : '♬'}</button>
          <button className="control-icon" onClick={() => void toggleFullscreen()} aria-label="Bật hoặc tắt toàn màn hình" title="Toàn màn hình">⛶</button>
          <button className="control-icon restart-control" onClick={() => { setIsPlaying(false); goToSection(0) }} aria-label="Chạy lại từ đầu" title="Chạy lại">↺</button>
        </nav>
      )}

      {notice && <div className="notice" role="status">{notice}</div>}
      {backgroundMusicUrl && <audio ref={audioRef} src={backgroundMusicUrl} loop preload="none" onError={() => {
        const audio = audioRef.current
        if (audio && !musicFallbackAttempted.current) {
          musicFallbackAttempted.current = true
          audio.src = backgroundMusicFallbackUrl
          audio.load()
          setNotice('Bản nhạc trực tuyến không truy cập được; đang thử bản sáo dự phòng.')
          void audio.play().then(() => setMusicEnabled(true)).catch(() => {
            setMusicEnabled(false)
            setNotice('Hãy nhấn nút nhạc để phát bản dự phòng.')
          })
          return
        }
        setMusicEnabled(false)
        setNotice('Không thể tải nhạc nền hoặc bản dự phòng.')
      }} />}
    </>
  )
}

export default App
