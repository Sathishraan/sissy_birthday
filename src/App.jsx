import { useEffect, useRef, useState } from 'react'
import memory01 from './image/WhatsApp Image 2026-10-01 at 10.30.56 PM.jpeg'
import memory02 from './image/WhatsApp Image 2026-10-01 at 10.30.56 PM (1).jpeg'
import memory03 from './image/WhatsApp Image 2026-10-01 at 10.30.56 PM (2).jpeg'
import memory04 from './image/WhatsApp Image 2026-10-01 at 10.30.56 PM (3).jpeg'
import memory05 from './image/WhatsApp Image 2026-10-01 at 10.30.56 PM (4).jpeg'
import memory06 from './image/WhatsApp Image 2026-10-01 at 10.30.56 PM (5).jpeg'
import memory07 from './image/WhatsApp Image 2026-10-01 at 10.30.56 PM (6).jpeg'
import memory08 from './image/WhatsApp Image 2026-10-01 at 10.30.56 PM (7).jpeg'
import memory09 from './image/WhatsApp Image 2026-10-01 at 10.30.56 PM (8).jpeg'

const birthdaySong = new URL('./image/bg song.mp3', import.meta.url).href

const reasons = [
  { number: '01', title: 'Your big heart', text: 'You make the people around you feel seen, safe, and so loved.', color: 'bg-rose-100', mark: '♡', image: memory03 },
  { number: '02', title: 'Your kind of fun', text: 'Ordinary days turn into the best stories whenever you are there.', color: 'bg-butter', mark: '✷', image: memory09 },
  { number: '03', title: 'Simply you', text: 'There is nobody else I would choose to laugh with, learn from, and call my sister.', color: 'bg-mint', mark: '✿', image: memory06 },
]

const memories = [
  { image: memory01, alt: 'Sujatha among leafy green plants', note: 'You make everything around you bloom.' },
  { image: memory03, alt: 'Sujatha in her white clinic coat', note: 'A heart that always shows up for others.' },
  { image: memory04, alt: 'Sujatha smiling in her clinic coat', note: 'So much kindness in one lovely person.' },
  { image: memory05, alt: 'Sujatha standing in her clinic uniform', note: 'A little courage in every step.' },
  { image: memory06, alt: 'Sujatha in a cream saree outdoors', note: 'Grace follows wherever you go.' },
  { image: memory07, alt: 'A cozy hoodie selfie of Sujatha', note: 'My comfort person, always.' },
  { image: memory08, alt: 'Sujatha with a heart filter', note: 'There is no such thing as too many hearts.' },
  { image: memory09, alt: 'Sujatha with her hair in two braids', note: 'Your playful side brightens every day.' },
]

function getTimeLived() {
  const birthday = new Date(2004, 9, 5).getTime()
  const totalSeconds = Math.max(0, Math.floor((Date.now() - birthday) / 1000))
  const days = Math.floor(totalSeconds / 86400)

  return {
    days,
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  }
}

function App() {
  const [splashOpen, setSplashOpen] = useState(true)
  const [splashClosing, setSplashClosing] = useState(false)
  const [timeLived, setTimeLived] = useState(getTimeLived)
  const [likedMemories, setLikedMemories] = useState({})
  const [musicOn, setMusicOn] = useState(false)
  const audioRef = useRef(null)

  useEffect(() => {
    if (splashOpen) document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [splashOpen])

  useEffect(() => {
    const timer = window.setInterval(() => setTimeLived(getTimeLived()), 1000)
    return () => window.clearInterval(timer)
  }, [])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    audio.loop = true
    audio.volume = 0.45

    if (musicOn) {
      audio.currentTime = 0
      audio.play().catch(() => undefined)
      return
    }

    audio.pause()
    audio.currentTime = 0
  }, [musicOn])

  useEffect(() => {
    return () => {
      const audio = audioRef.current
      if (audio) {
        audio.pause()
        audio.currentTime = 0
      }
    }
  }, [])

  function openBirthdayPage() {
    setSplashClosing(true)
    setMusicOn(true)
    window.setTimeout(() => setSplashOpen(false), 650)
  }

  function toggleMemoryLike(image) {
    setLikedMemories((current) => ({ ...current, [image]: !current[image] }))
  }

  function toggleMusic() {
    setMusicOn((current) => !current)
  }

  return (
    <div className="min-h-screen overflow-hidden bg-[#fff8f8] text-rose-950">
      <audio ref={audioRef} src={birthdaySong} preload="auto" />
      <div className="birthday-piano-overlay" aria-hidden="true">
        {Array.from({ length: 18 }).map((_, index) => (
          <span key={index} className="piano-key" style={{ animationDelay: `${index * 0.18}s` }} />
        ))}
      </div>
      {splashOpen && (
        <section className={`birthday-splash${splashClosing ? ' splash-closing' : ''}`} aria-label="Birthday greeting for Sujatha">
          <div className="splash-confetti confetti-one" />
          <div className="splash-confetti confetti-two" />
          <div className="splash-confetti confetti-three" />
          <div className="splash-confetti confetti-four" />
          <div className="splash-confetti confetti-five" />
          <div className="splash-confetti confetti-six" />
          <div className="splash-confetti confetti-seven" />
          <div className="splash-confetti confetti-eight" />
          <div className="splash-confetti confetti-nine" />
          <div className="splash-confetti confetti-ten" />
          <div className="splash-confetti confetti-eleven" />
          <div className="splash-confetti confetti-twelve" />
          <div className="splash-content">
            <span className="splash-eyebrow"><i>✦</i> A little birthday magic <i>✦</i></span>
            <h1 className="splash-title">For <span>Sujatha</span></h1>
            <p className="splash-date">October 5 <span>·</span> Your special day</p>
            <div className="splash-present" aria-hidden="true">
              <span className="splash-sparkle sparkle-left">✧</span>
              <span className="splash-sparkle sparkle-right">✦</span>
              <div className="gift-balloon gift-balloon-yellow" />
              <div className="gift-balloon gift-balloon-pink" />
              <div className="gift-balloon gift-balloon-mint" />
              <div className="gift-strings"><i /><i /><i /></div>
              <div className="gift-box"><i className="gift-ribbon" /><i className="gift-bow bow-left" /><i className="gift-bow bow-right" /></div>
              <span className="gift-shadow" />
            </div>
            <p className="splash-note">There’s a whole lot of love waiting inside.</p>
            <button className="splash-open" type="button" onClick={openBirthdayPage}>
              Open your surprise <span aria-hidden="true">↓</span>
            </button>
          </div>
          <span className="splash-footer">MADE WITH LOVE <b>♡</b></span>
        </section>
      )}
      <header className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-6 py-6 sm:px-10 lg:px-14">
        <a href="#home" className="flex items-center gap-3" aria-label="Birthday wishes home">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-rose-100 text-xl text-rose-700">♡</span>
          <span className="text-sm font-bold tracking-wide text-rose-900">A LITTLE NOTE FOR YOU</span>
        </a>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleMusic}
            className="rounded-full border border-rose-300 bg-white/70 px-3 py-2 text-[10px] font-bold uppercase tracking-[.18em] text-rose-700 shadow-sm transition hover:-translate-y-0.5 hover:bg-rose-50"
          >
            {musicOn ? 'Pause music' : 'Play tune'}
          </button>
          <span className="hidden text-sm text-rose-900/55 sm:block">For my favorite sister <span className="text-rose-500">✿</span></span>
        </div>
      </header>

      <main id="home">
        <section className="hero relative mx-auto grid min-h-[650px] max-w-7xl items-center gap-6 px-6 pb-12 pt-5 sm:px-10 sm:pb-20 sm:pt-8 lg:min-h-[720px] lg:grid-cols-[1.02fr_.98fr] lg:px-14 lg:pb-24 lg:pt-4">
          <span className="section-heart corner-top-left" aria-hidden="true">♡</span>
          <span className="section-bow corner-top-right" aria-hidden="true">🎀</span>
          <div className="hero-copy relative z-10 mx-auto max-w-xl lg:mx-0">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white/75 px-4 py-2 text-[11px] font-bold uppercase tracking-[.19em] text-rose-700 shadow-sm sm:mb-7">
              <span className="text-base">✷</span> today is all about you
            </div>
            <h1 className="birthday-heading font-display text-[2.8rem] leading-[.98] tracking-[-.055em] text-rose-950 md:text-7xl lg:text-[5.4rem]">
              <span className="birthday-heading-line">Happy Birthday,</span><br /><span className="title-highlight">Sujatha! Thangameyyy 💖🎂🎈🥰</span>
            </h1>
            <p className="mt-5 max-w-lg text-base leading-7 text-rose-950/65 sm:mt-7 sm:text-xl sm:leading-8">
              To the one who makes life brighter just by being in it: I hope your day is as lovely, loud, and wonderfully you as you are.
            </p>
            <div className="mt-7 flex flex-col items-stretch gap-4 sm:mt-9 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6 sm:gap-y-4">
              <a className="w-full rounded-full bg-rose-700 px-6 py-3.5 text-center text-sm font-bold text-white shadow-lg shadow-rose-700/20 transition hover:-translate-y-0.5 hover:bg-rose-900 focus:outline-none focus:ring-4 focus:ring-rose-200 sm:w-auto" href="#reasons">
                Open your birthday note <span aria-hidden="true" className="ml-2">→</span>
              </a>
              <a className="learn-link self-center sm:self-auto" href="#reasons"><span>Learn</span><span aria-hidden="true">↗</span></a>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-rose-950/55 sm:mt-12">
              <span className="flex text-lg tracking-[-.2em] text-amber-500" aria-hidden="true">★★★★★</span>
              <span>my forever favorite person</span>
            </div>
          </div>

          <div className="hero-art relative mx-auto flex h-[370px] w-full max-w-[520px] items-center justify-center sm:h-[450px] lg:h-[540px]">
            <div className="orbit orbit-one" /><div className="orbit orbit-two" />
            <div className="art-card absolute inset-x-3 inset-y-5 rounded-[48%_48%_42%_42%] bg-[#ffedf3] sm:inset-x-9 sm:inset-y-8" />
            <div className="hero-photo-frame">
              <img src={memory01} alt="Sujatha among leafy green plants" fetchPriority="high" />
            </div>
            <div className="balloon balloon-pink"><i /></div><div className="balloon balloon-yellow"><i /></div><div className="balloon balloon-lilac"><i /></div>
            <div className="floating-heart heart-one">♡</div><div className="floating-heart heart-two">✦</div><div className="floating-heart heart-three">✧</div>
            <div className="birthday-sticker"><span>make</span><b>a wish</b><span>today!</span><i>✷</i></div>
          </div>
          <div className="absolute -left-20 top-24 h-56 w-56 rounded-full bg-[#ffe6ef] blur-3xl" />
          <div className="absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-[#fff2bf]/70 blur-3xl" />
        </section>

        <section className="life-days-section" aria-labelledby="life-days-heading">
          <span className="section-heart corner-top-left" aria-hidden="true">♡</span>
          <span className="section-bow corner-bottom-right" aria-hidden="true">🎀</span>
          <div className="life-days-inner">
            <div className="life-days-copy">
              <span className="life-days-kicker">SINCE OCTOBER 5, 2004</span>
              <h2 id="life-days-heading">Every day has been a gift.</h2>
              <p>Since you arrived, you’ve made the world brighter. Here’s to every lovely day that made you, you.</p>
            </div>
            <div className="life-days-number" aria-label={`${timeLived.days.toLocaleString('en-US')} days lived so far`}>
              <span className="life-days-value">{timeLived.days.toLocaleString('en-US')}</span>
              <span className="life-days-label">days on Earth</span>
              <div className="life-clock" role="timer" aria-live="off" aria-label={`${timeLived.hours} hours, ${timeLived.minutes} minutes, ${timeLived.seconds} seconds`}>
                <span className="life-clock-unit"><b>{String(timeLived.hours).padStart(2, '0')}</b><small>HRS</small></span>
                <span className="life-clock-separator" aria-hidden="true">:</span>
                <span className="life-clock-unit"><b>{String(timeLived.minutes).padStart(2, '0')}</b><small>MIN</small></span>
                <span className="life-clock-separator" aria-hidden="true">:</span>
                <span className="life-clock-unit"><b>{String(timeLived.seconds).padStart(2, '0')}</b><small>SEC</small></span>
              </div>
              <span className="life-days-tail">and counting <i aria-hidden="true">✦</i></span>
            </div>
          </div>
        </section>

        <section className="memory-gallery" aria-labelledby="memory-gallery-title">
          <span className="section-bow corner-top-left" aria-hidden="true">🎀</span>
          <span className="section-heart corner-bottom-right" aria-hidden="true">♡</span>
          <div className="memory-gallery-inner">
            <div className="memory-gallery-heading">
              <span className="memory-gallery-kicker">LITTLE MOMENTS, LOTS OF LOVE</span>
              <h2 id="memory-gallery-title">Sujatha’s photo booth <span aria-hidden="true">♡</span></h2>
              <p>Little memories, clipped up with love.</p>
            </div>
            <div className="memory-grid">
              {memories.map((memory, index) => {
                const isLiked = Boolean(likedMemories[memory.image])

                return (
                  <article className="memory-hanging-post" key={memory.image}>
                    <div className="memory-wire" aria-hidden="true"><span>🎀</span></div>
                    <figure className="memory-photo-paper">
                      <img src={memory.image} alt={memory.alt} loading="lazy" />
                      <figcaption className="memory-paper-caption">{memory.note}</figcaption>
                    </figure>
                    <div className="memory-print-actions">
                      <button
                        className={`memory-like${isLiked ? ' is-liked' : ''}`}
                        type="button"
                        aria-label={isLiked ? 'Remove heart from this memory' : 'Send a heart to this memory'}
                        aria-pressed={isLiked}
                        onClick={() => toggleMemoryLike(memory.image)}
                      >
                        {isLiked ? '♥' : '♡'}
                      </button>
                      <span className="memory-post-number">{String(index + 1).padStart(2, '0')} / {String(memories.length).padStart(2, '0')}</span>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section id="reasons" className="reasons-section relative px-6 py-20 sm:px-10 sm:py-24 lg:px-14">
          <span className="section-heart corner-top-right" aria-hidden="true">♡</span>
          <span className="section-bow corner-bottom-left" aria-hidden="true">🎀</span>
          <div className="reasons-inner mx-auto max-w-7xl">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-bold uppercase tracking-[.22em] text-rose-600">a few of my favorite things</span>
              <h2 className="mt-4 font-display text-4xl tracking-tight text-rose-950 sm:text-5xl">Reasons you make life sweeter</h2>
              <p className="mx-auto mt-4 max-w-xl leading-7 text-rose-950/60">I could fill a whole book with them, but here are three for your birthday.</p>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {reasons.map((reason) => (
                <article
                  key={reason.number}
                  className="reason-card reason-photo-card"
                  style={{ backgroundImage: `linear-gradient(180deg,rgba(32,24,34,.04) 5%,rgba(32,24,34,.1) 38%,rgba(32,24,34,.88) 100%),url("${reason.image}")` }}
                >
                  <span className={`reason-photo-mark ${reason.color}`} aria-hidden="true">{reason.mark}</span>
                  <div className="reason-photo-copy">
                    <span className="reason-photo-number">{reason.number}</span>
                    <h3>{reason.title}</h3>
                    <p>{reason.text}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="letter-note mx-auto mt-14 max-w-4xl rounded-[30px] bg-rose-950 px-7 py-10 text-center text-white sm:px-14 sm:py-12">
              <span className="text-3xl text-[#ffc7db]">♡</span>
              <p className="mx-auto mt-4 max-w-2xl font-display text-2xl leading-relaxed sm:text-3xl">I’m so lucky I get to call you my sister. Here’s to your brightest year yet.</p>
              <p className="mt-6 text-sm font-semibold tracking-wide text-white/65">All my love, always <span className="text-[#ffc7db]">✿</span></p>
            </div>
          </div>
        </section>
      </main>
      <section className="love-note-section" aria-labelledby="love-note-heading">
        <span className="section-heart corner-top-left" aria-hidden="true">♡</span>
        <span className="section-bow corner-bottom-right" aria-hidden="true">🎀</span>
        <div className="love-note-inner">
          <span className="love-note-kicker">A LITTLE EXTRA LOVE</span>
          <div className="love-note-hearts" aria-hidden="true"><span>♥</span><span>♡</span><span>♥</span></div>
          <h2 id="love-note-heading">You make every day brighter.</h2>
          <p>Thank you for being wonderfully, unmistakably you. You are loved in every season, every silly moment, every single day.</p>
          <span className="love-note-signoff">All my love, always</span>
        </div>
      </section>
      <footer className="birthday-footer">
        <span className="section-heart corner-top-left" aria-hidden="true">♡</span>
        <span className="section-bow corner-bottom-left" aria-hidden="true">🎀</span>
        <div className="birthday-footer-inner">
          <span className="footer-photo" style={{ backgroundImage: `url("${memory02}")` }} aria-hidden="true" />
          <p>Made with extra love <span aria-hidden="true">♡</span> just for you</p>
        </div>
      </footer>
    </div>
  )
}

export default App
