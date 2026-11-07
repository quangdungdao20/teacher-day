import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useInView, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight, ChevronLeft, ChevronRight, Flower2, Maximize, Music2, Pause, Play, RotateCcw, Sparkles } from 'lucide-react'
import { Bouquet, HeroFlower, SakuraSprig } from './components/FlowerIllustrations'
import './App.css'
import { backgroundMusicFallbackUrl, backgroundMusicUrl, backgroundMusicTitle } from './config/music'

const sections = ['opening-greeting', 'gratitude-message', 'teachers', 'korean-message', 'finale']

const teachers = [
  { number: '04', title: '교수님', name: 'OH SU YEAN' },
  { number: '05', title: '교수님', name: 'LEE YONG SIK' },
  { number: '01', title: '교수님', name: 'PARK MIYOUNG' },
  { number: '02', title: '교수님', name: 'CHANG MINHEE' },
  { number: '03', title: '교수님', name: 'SEOK SUK HEE' },
]

const gratitudeMessage = [
  '베트남 스승의 날 11월 20일을 맞아, 우리 반 학생들을 대표하여 교수님께 진심 어린 축하와 깊은 감사의 마음을 전합니다.',
  '소중한 지식을 아낌없이 가르쳐 주시고, 늘 따뜻한 마음으로 이끌어 주셔서 감사합니다. 교수님의 격려와 믿음은 우리가 매일 더 배우고 성장할 수 있는 큰 힘이 되었습니다.',
  '언제나 건강하고 행복하시며 하시는 모든 일에 기쁨과 성공이 함께하기를 바랍니다. 변함없는 열정으로 앞으로도 많은 제자에게 꿈과 희망을 전해 주세요.',
  '진심으로 감사드리며, 늘 존경하고 사랑합니다! ❤️🌷',
]

const koreanMessage = [
  '베트남 스승의 날 11월 20일을 맞아\n저희 반 학생들을 대표하여, 교수님께 진심으로 축하와 감사의 마음을 전합니다.',
  '항상 따뜻한 마음과 열정으로 소중한 지식을 가르쳐 주시고, 저희 한 사람 한 사람에게 아낌없는 관심과 격려를 보내주신 교수님께 진심으로 감사드립니다.',
  '교수님의 가르침은 단순한 지식을 넘어 저희가 앞으로 나아갈 수 있는 용기와 자신감, 그리고 더 큰 꿈을 향해 도전할 수 있는 힘이 되었습니다. 교수님과 함께한 소중한 시간과 가르침을 저희는 오래도록 기억하겠습니다.',
  '베트남 스승의 날을 맞아 교수님께서 항상 건강하시고 행복하시며, 앞으로도 모든 날들이 기쁨과 웃음으로 가득하시기를 진심으로 기원합니다.',
  '교수님, 진심으로 존경하고 감사드립니다.\n항상 건강하시고 행복하세요! ❤️🌷',
]

const petals = Array.from({ length: 36 }, (_, index) => ({
  left: `${(index * 37 + 7) % 100}%`,
  delay: `${(index % 12) * -1.2}s`,
  duration: `${10 + (index % 8) * 1.4}s`,
  size: `${5 + (index % 4) * 2}px`,
}))

const blossoms = Array.from({ length: 7 }, (_, index) => ({
  left: `${(index * 43 + 19) % 100}%`,
  delay: `${(index % 7) * -1.8}s`,
  duration: `${15 + (index % 4) * 2}s`,
  size: `${9 + (index % 3) * 3}px`,
}))

const openingPetals = Array.from({ length: 12 }, (_, index) => ({
  left: `${(index * 41 + 3) % 100}%`,
  delay: `${(index % 6) * -2.1}s`,
  duration: `${11 + (index % 4) * 1.5}s`,
  size: `${5 + (index % 4) * 2}px`,
}))

const sparkles = Array.from({ length: 14 }, (_, index) => ({
  left: `${(index * 61 + 13) % 100}%`,
  top: `${(index * 43 + 17) % 100}%`,
  delay: `${(index % 7) * -0.8}s`,
  duration: `${2.8 + (index % 4) * 0.7}s`,
}))

function TypingMessage({ paragraphs, className, finalParagraphClassName, lang, reduceMotion, nextSectionId, onTypingChange }: {
  paragraphs: string[]
  className?: string
  finalParagraphClassName?: string
  lang?: string
  reduceMotion: boolean | null
  nextSectionId: string
  onTypingChange: (isTyping: boolean) => void
}) {
  const messageRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(messageRef, { once: true, amount: 0.15 })
  const hasStartedRef = useRef(Boolean(reduceMotion))
  const [visibleCounts, setVisibleCounts] = useState(() => paragraphs.map((text) => reduceMotion ? Array.from(text).length : 0))
  const [activeParagraph, setActiveParagraph] = useState(0)

  useEffect(() => {
    if (!reduceMotion) return
    setVisibleCounts(paragraphs.map((text) => Array.from(text).length))
    setActiveParagraph(paragraphs.length)
  }, [paragraphs, reduceMotion])

  useEffect(() => {
    if (reduceMotion !== false || !isInView || hasStartedRef.current) return

    hasStartedRef.current = true
    onTypingChange(true)
    let paragraphIndex = 0
    let characterIndex = 0
    const counts = paragraphs.map(() => 0)
    let timeout: number

    const typeNextCharacter = () => {
      if (paragraphIndex >= paragraphs.length) {
        onTypingChange(false)
        timeout = window.setTimeout(() => {
          document.getElementById(nextSectionId)?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          })
        }, 500)
        return
      }

      const characters = Array.from(paragraphs[paragraphIndex])
      characterIndex += 1
      counts[paragraphIndex] = characterIndex
      setVisibleCounts([...counts])

      if (characterIndex >= characters.length) {
        paragraphIndex += 1
        characterIndex = 0
        setActiveParagraph(paragraphIndex)
        timeout = window.setTimeout(typeNextCharacter, 300)
      } else {
        timeout = window.setTimeout(typeNextCharacter, 16)
      }
    }

    timeout = window.setTimeout(typeNextCharacter, 300)
    return () => {
      window.clearTimeout(timeout)
      hasStartedRef.current = false
      onTypingChange(false)
    }
  }, [isInView, nextSectionId, onTypingChange, paragraphs, reduceMotion])

  return (
    <div ref={messageRef} className={className} lang={lang}>
      {paragraphs.map((text, index) => {
        const characters = Array.from(text)
        const isComplete = visibleCounts[index] >= characters.length
        const isCurrent = isInView && reduceMotion === false && activeParagraph === index
        return (
          <p key={text} className={`${index === paragraphs.length - 1 ? finalParagraphClassName ?? '' : ''}${isComplete ? '' : ' is-typing'}`} lang={lang} aria-label={text}>
            <span aria-hidden="true">{characters.slice(0, visibleCounts[index]).join('')}</span>
            {!isComplete && isCurrent && <span className="typing-cursor" aria-hidden="true" />}
          </p>
        )
      })}
    </div>
  )
}

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
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMessageTyping, setIsMessageTyping] = useState(false)
  const [isSectionTransitioning, setIsSectionTransitioning] = useState(false)
  const slideDuration = 8
  const [musicEnabled, setMusicEnabled] = useState(false)
  const [notice, setNotice] = useState('')
  const audioRef = useRef<HTMLAudioElement>(null)
  const musicFallbackAttempted = useRef(false)
  const scrollFrameRef = useRef<number | null>(null)

  const goToSection = (index: number, automatic = false) => {
    const nextIndex = Math.max(0, Math.min(sections.length - 1, index))
    if (!automatic) setIsPlaying(false)
    setActiveSection(nextIndex)
    if (scrollFrameRef.current !== null) {
      window.cancelAnimationFrame(scrollFrameRef.current)
      scrollFrameRef.current = null
    }

    const section = document.getElementById(sections[nextIndex])
    if (!section) return

    const start = window.scrollY
    const target = section.getBoundingClientRect().top + start
    const distance = target - start
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || Math.abs(distance) < 2) {
      window.scrollTo({ top: target, behavior: 'instant' })
      setIsSectionTransitioning(false)
      return
    }

    setIsSectionTransitioning(true)
    const startedAt = performance.now()
    const duration = Math.min(1400, Math.max(700, Math.abs(distance) * 0.35))
    const animateScroll = (now: number) => {
      const progress = Math.min((now - startedAt) / duration, 1)
      const eased = progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2
      window.scrollTo({ top: start + distance * eased, behavior: 'instant' })
      if (progress < 1) {
        scrollFrameRef.current = window.requestAnimationFrame(animateScroll)
      } else {
        scrollFrameRef.current = null
        setIsSectionTransitioning(false)
      }
    }
    scrollFrameRef.current = window.requestAnimationFrame(animateScroll)
  }

  const startMusic = async () => {
    if (!backgroundMusicUrl) {
      setNotice('배경 음악이 설정되지 않았습니다.')
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
      setNotice('브라우저에서 음악을 재생할 수 없습니다. 음악 버튼을 눌러 다시 시도해 주세요.')
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
      setNotice('배경 음악이 설정되지 않았습니다.')
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
    if (!isOpen || !isPlaying || isMessageTyping || isSectionTransitioning) return
    const timeout = window.setTimeout(() => {
      if (activeSection >= sections.length - 1) {
        setIsPlaying(false)
      } else {
        goToSection(activeSection + 1, true)
      }
    }, slideDuration * 1000)
    return () => window.clearTimeout(timeout)
  }, [activeSection, isMessageTyping, isOpen, isPlaying, isSectionTransitioning, slideDuration])

  useEffect(() => {
    if (!isOpen || !isPlaying) return
    const pauseOnInput = (event: Event) => {
      if (!(event.target instanceof Element) || !event.target.closest('.presentation-bar')) {
        if (scrollFrameRef.current !== null) {
          window.cancelAnimationFrame(scrollFrameRef.current)
          scrollFrameRef.current = null
          setIsSectionTransitioning(false)
        }
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
      setNotice('이 기기에서는 전체 화면을 사용할 수 없습니다.')
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
        <section className="scene hero-scene" id="opening-greeting" aria-label="감사 인사">
          <motion.div className="hero-glow" aria-hidden="true" animate={shouldReduceMotion ? undefined : { scale: [1, 1.025, 1], opacity: [0.65, 1, 0.65] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }} />
          <motion.div className="hero-copy" initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ amount: 0.3 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>
            <p className="eyebrow"><span /> 11월 20일 · 감사와 사랑의 날 <span /></p>
            <h1>감사의 마음을<br /><em>전하는 스승의 날</em></h1>
            <p className="hero-subtitle">오늘, 교수님께 감사의 마음을 전합니다</p>
          </motion.div>
          <motion.a className="scroll-cue" href="#gratitude-message" aria-label="감사 편지 보기">
            <span>감사와 존경을 담아</span><i />
          </motion.a>
          <motion.div ref={heroArtRef} className="hero-art" aria-hidden="true" initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.94, y: 18 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} viewport={{ amount: 0.25 }} transition={{ duration: 1.1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}>
            <motion.div className="art-halo" animate={shouldReduceMotion ? undefined : { scale: [1, 1.06, 1], opacity: [0.55, 0.85, 0.55] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }} />
            <motion.div className="hero-flower-float" animate={shouldReduceMotion ? undefined : { y: [0, -9, 0], rotate: [0, 0.8, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}>
              <HeroFlower style={{ x: shouldReduceMotion ? 0 : heroFlowerX, y: shouldReduceMotion ? 0 : heroFlowerY, scale: shouldReduceMotion ? 1 : heroFlowerScale }} />
            </motion.div>
            <span className="art-caption">감사와 사랑을 담은<br />작은 꽃 정원</span>
          </motion.div>
          <span className="side-note">감사의 마음을 담아</span>
        </section>

        <section className="scene letter-scene" id="gratitude-message" lang="ko">
          <motion.div className="section-intro" initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ amount: 0.25 }} transition={{ duration: 0.8 }}>
            <p className="eyebrow"><span /> 사랑하는 교수님께 <span /></p>
            <h2>감사의 한마디,<br /><em>가득 담은 사랑.</em></h2>
          </motion.div>
          <motion.article className="letter-card" initial={shouldReduceMotion ? false : { opacity: 0, y: 28, scale: 0.98 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ amount: 0.18 }} transition={{ duration: 0.9, delay: 0.12 }}>
            <div className="letter-top"><span>11월 20일</span><Flower2 className="letter-flower" aria-hidden="true" /><span>감사한 마음을 담아</span></div>
            <TypingMessage
              className="letter-copy"
              paragraphs={gratitudeMessage}
              finalParagraphClassName="letter-signoff"
              lang="ko"
              reduceMotion={shouldReduceMotion}
              nextSectionId="teachers"
              onTypingChange={setIsMessageTyping}
            />
            <div className="letter-footer">제자들의 작은 마음을 담아</div>
            <SakuraSprig className="letter-sprig" />
          </motion.article>
        </section>

        <section className="scene teachers-scene" id="teachers" lang="ko">
          <motion.div className="section-intro" initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ amount: 0.25 }} transition={{ duration: 0.8 }}>
            <p className="eyebrow"><span /> 우리에게 영감을 주신 분들 <span /></p>
            <h2>지식의 정원에 핀<br /><em>소중한 꽃들.</em></h2>
            <p className="section-note">교수님께 진심 어린 감사의 마음을 전합니다.</p>
          </motion.div>
          <div className="teacher-layout">
            <motion.div ref={teacherArtRef} className="teacher-art" initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.92 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ amount: 0.2 }} transition={{ duration: 0.9 }}>
              <motion.div className="teacher-flower-float" animate={shouldReduceMotion ? undefined : { y: [0, -8, 0], rotate: [0, 1.2, 0] }} transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}>
                <Bouquet label="감사의 꽃다발" style={{ x: shouldReduceMotion ? 0 : teacherFlowerX, y: shouldReduceMotion ? 0 : teacherFlowerY, scale: shouldReduceMotion ? 1 : teacherFlowerScale }} />
              </motion.div>
                <span>우리의 꿈을 피워 주셔서<br />감사합니다</span>
            </motion.div>
            <div className="teacher-list">
              {teachers.map((teacher, index) => (
                <motion.article className="teacher-card" key={teacher.name} initial={shouldReduceMotion ? false : { opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ amount: 0.25 }} whileHover={shouldReduceMotion ? undefined : { x: 5, scale: 1.01 }} transition={{ duration: 0.45, delay: index * 0.08 }}>
                  <span className="teacher-index">{teacher.number}</span>
                  <div><span className="teacher-title">{teacher.title}</span><h3>{teacher.name}</h3></div>
                  <Sparkles className="teacher-star" aria-hidden="true" />
                </motion.article>
              ))}
            </div>
          </div>
          <div className="teacher-moments">
            <h3>교수님과 함께한 소중한 순간</h3>
            <div className="teacher-gallery">
              <figure>
                <img src="/image/1.jpg" alt="교수님 인물 사진" loading="lazy" />
                <figcaption>따뜻한 미소로 함께해 주신 교수님</figcaption>
              </figure>
              <figure>
                <img src="/image/2.jpg" alt="교수님들과 함께한 단체 사진" loading="lazy" />
                <figcaption>함께여서 더욱 빛나는 순간</figcaption>
              </figure>
              <figure>
                <img src="/image/3.jpg" alt="한국어 행사에서 교수님들과 함께한 모습" loading="lazy" />
                <figcaption>오래도록 간직할 감사의 추억</figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="scene korean-scene" id="korean-message">
          <motion.div ref={koreanArtRef} className="korean-art" aria-hidden="true" initial={shouldReduceMotion ? false : { opacity: 0, x: -28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ amount: 0.2 }} transition={{ duration: 0.9 }}>
            <motion.div className="korean-flower-float" animate={shouldReduceMotion ? undefined : { y: [0, -7, 0] }} transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}>
              <SakuraSprig style={{ x: shouldReduceMotion ? 0 : koreanFlowerX, y: shouldReduceMotion ? 0 : koreanFlowerY, scale: shouldReduceMotion ? 1 : koreanFlowerScale, rotate: shouldReduceMotion ? -15 : koreanFlowerRotate }} />
            </motion.div>
          </motion.div>
          <motion.div className="korean-content" initial={shouldReduceMotion ? false : { opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ amount: 0.2 }} transition={{ duration: 0.8 }}>
            <p className="eyebrow"><span /> 마음을 담아 <span /></p>
            <h2 lang="ko">감사와 존경의<br /><em>마음을 전합니다</em></h2>
            <motion.article className="korean-letter" lang="ko" initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ amount: 0.15 }} transition={{ duration: 0.8, delay: 0.15 }}>
              <TypingMessage
                paragraphs={koreanMessage}
                lang="ko"
                reduceMotion={shouldReduceMotion}
                nextSectionId="finale"
                onTypingChange={setIsMessageTyping}
              />
            </motion.article>
            <span className="korean-signature">고맙습니다 · 감사합니다</span>
          </motion.div>
        </section>

        <section className="scene finale-scene" id="finale">
          <motion.div className="finale-content" initial={shouldReduceMotion ? false : { opacity: 0, y: 28, scale: 0.97 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ amount: 0.25 }} transition={{ duration: 1 }}>
            <p className="eyebrow"><span /> 사랑과 감사의 마음을 담아 <span /></p>
            <div className="finale-bloom" ref={finaleArtRef}>
              <motion.div className="finale-flower-float" animate={shouldReduceMotion ? undefined : { y: [0, -9, 0], rotate: [0, -0.8, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}>
                <Bouquet label="교수님께 드리는 감사의 꽃다발" style={{ x: shouldReduceMotion ? 0 : finaleFlowerX, y: shouldReduceMotion ? 0 : finaleFlowerY, scale: shouldReduceMotion ? 1 : finaleFlowerScale }} />
              </motion.div>
            </div>
            <h2>교수님, 감사합니다<br /><em>늘 존경하고 사랑합니다</em></h2>
            <p className="final-date">11월 20일</p>
            <p className="final-thanks">언제나 우리의 큰 힘이 되어 주셔서 감사합니다.<br />사랑과 존경을 담아.</p>
            <motion.button className="replay-button" onClick={() => goToSection(0)} whileHover={shouldReduceMotion ? undefined : { y: -3, scale: 1.03 }} whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }} transition={{ type: 'spring', stiffness: 360, damping: 22 }}><RotateCcw aria-hidden="true" /><span>처음부터 다시 보기</span></motion.button>
          </motion.div>
          <span className="finale-footer">사랑과 감사의 마음으로 · 11.20</span>
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
          <motion.div
            className="opening-flower"
            aria-hidden="true"
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.92, y: 22 }}
            animate={isOpening ? { opacity: 0, scale: 1.06, y: -12 } : shouldReduceMotion ? { opacity: [0.94, 1, 0.94] } : { opacity: 1, scale: [1, 1.025, 1], y: [0, -8, 0] }}
            transition={isOpening ? { duration: 0.7 } : { duration: shouldReduceMotion ? 5 : 6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <HeroFlower label="분홍 꽃이 담긴 화병" />
          </motion.div>
          <motion.div className="opening-card" initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: shouldReduceMotion ? 0 : 0.75, delay: shouldReduceMotion ? 0 : 0.15 }}>
            <p className="eyebrow"><span /> 사랑과 존경을 담아 <span /></p>
            <h1>스승의 날<br /><em>감사와 사랑을 담아</em></h1>
            <p className="opening-date">11월 20일</p>
            <p className="opening-caption">언제나 우리의 영감이 되어 주신 교수님, 감사합니다.</p>
            <motion.button
              className="open-button whitespace-nowrap flex items-center gap-2"
              onClick={openCard}
              disabled={isOpening}
              animate={{ opacity: isOpening ? 0 : 1 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              편지 열기<ArrowUpRight aria-hidden="true" />
            </motion.button>
            <p className="opening-signoff">사랑과 감사의 마음으로</p>
          </motion.div>
        </motion.div>
      )}
      </AnimatePresence>

      {isOpen && (
        <nav className="presentation-bar" aria-label="편지 장면 제어">
          <button className="control-icon" onClick={() => goToSection(activeSection - 1)} aria-label="이전 장면" title="이전 장면"><ChevronLeft aria-hidden="true" /></button>
          <button className="play-control" onClick={() => setIsPlaying((playing) => !playing)} aria-label={isPlaying ? '자동 재생 일시 정지' : '자동 재생 시작'} title={isPlaying ? '일시 정지' : '자동 재생'}>
            {isPlaying ? <Pause aria-hidden="true" /> : <Play aria-hidden="true" />}
          </button>
          <button className="control-icon" onClick={() => goToSection(activeSection + 1)} aria-label="다음 장면" title="다음 장면"><ChevronRight aria-hidden="true" /></button>
          <button className={musicEnabled ? 'control-icon music-control is-active' : 'control-icon music-control'} onClick={() => void toggleMusic()} aria-label={musicEnabled ? '음악 끄기' : '음악 켜기'} title={backgroundMusicTitle}><Music2 aria-hidden="true" /></button>
          <button className="control-icon" onClick={() => void toggleFullscreen()} aria-label="전체 화면 전환" title="전체 화면"><Maximize aria-hidden="true" /></button>
          <button className="control-icon restart-control" onClick={() => { setIsPlaying(false); goToSection(0) }} aria-label="처음부터 다시 보기" title="처음부터"><RotateCcw aria-hidden="true" /></button>
        </nav>
      )}

      {notice && <div className="notice" role="status">{notice}</div>}
      {backgroundMusicUrl && <audio ref={audioRef} src={backgroundMusicUrl} loop preload="none" onError={() => {
        const audio = audioRef.current
        if (audio && !musicFallbackAttempted.current) {
          musicFallbackAttempted.current = true
          audio.src = backgroundMusicFallbackUrl
          audio.load()
          setNotice('음악을 불러오지 못해 예비 음악을 재생합니다.')
          void audio.play().then(() => setMusicEnabled(true)).catch(() => {
            setMusicEnabled(false)
            setNotice('음악 버튼을 눌러 예비 음악을 재생해 주세요.')
          })
          return
        }
        setMusicEnabled(false)
        setNotice('배경 음악을 불러올 수 없습니다.')
      }} />}
    </>
  )
}

export default App
