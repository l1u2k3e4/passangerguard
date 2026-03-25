import { useEffect } from 'react'
import DOMPurify from 'dompurify'
import { marked } from 'marked'

// ====== Konfigurationstypen ======
interface ChatWidgetConfig {
  webhook: { url: string; route: string }
  branding: { logo: string; name: string; welcomeText: string; responseTimeText: string }
  style: { primaryColor: string; secondaryColor: string; position: string; backgroundColor: string; fontColor: string }
}

// ====== Sicherheits-Hilfsfunktionen ======
const HEX_COLOR_RE = /^#[0-9a-fA-F]{3,8}$/
const MAX_MESSAGE_LENGTH = 1000
const RATE_LIMIT_MS = 2000

function sanitizeColor(value: string, fallback: string): string {
  return HEX_COLOR_RE.test(value) ? value : fallback
}

function renderMarkdown(text: string): string {
  try {
    const raw = marked.parse(text, { breaks: true, async: false }) as string
    return DOMPurify.sanitize(raw, {
      ALLOWED_TAGS: ['p', 'br', 'strong', 'em', 'a', 'ul', 'ol', 'li', 'code', 'pre', 'h1', 'h2', 'h3', 'blockquote'],
      ALLOWED_ATTR: ['href', 'target', 'rel'],
    })
  } catch {
    return DOMPurify.sanitize(text)
  }
}

function injectChatWidget(config: ChatWidgetConfig) {
  // Verhindere doppeltes Laden
  if (document.querySelector('.af-chat')) return

  const esc = (s: string) =>
    String(s).replaceAll("&","&amp;").replaceAll("<","&lt;")
    .replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")

  const $ = (sel: string, root: Element | Document = document) => root.querySelector(sel)

  const webhookUrl   = config.webhook.url
  const webhookRoute = config.webhook.route
  const brandName    = config.branding.name
  const logoUrl      = config.branding.logo
  const welcomeText  = config.branding.welcomeText
  const responseTime = config.branding.responseTimeText

  // Farben validieren (CSS-Injection verhindern)
  const primary = sanitizeColor(config.style.primaryColor, '#2563EB')
  const accent  = sanitizeColor(config.style.secondaryColor, '#06B6D4')
  const bgColor = sanitizeColor(config.style.backgroundColor, '#f4f5f7')
  const font    = sanitizeColor(config.style.fontColor, '#0F172A')
  const pos     = config.style.position.toLowerCase() === "left" ? "left" : "right"

  // ====== CSS ======
  const css = `
.af-chat *,.af-chat *::before,.af-chat *::after{box-sizing:border-box;margin:0;padding:0}
.af-chat{--af-primary:${primary};--af-accent:${accent};--af-bg:${bgColor};--af-font:${font};font-family:'Jost',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;font-size:14px;line-height:1.5;color:var(--af-font)}
.af-chat .af-container{position:fixed;bottom:24px;${pos}:24px;z-index:2147483647;display:flex;flex-direction:column;align-items:${pos==="right"?"flex-end":"flex-start"}}
.af-chat .af-fab{width:62px;height:62px;border-radius:50%;border:0;cursor:pointer;display:grid;place-items:center;background:var(--af-primary);box-shadow:0 6px 24px rgba(37,99,235,0.35);transition:transform 0.2s,box-shadow 0.2s;position:relative}
.af-chat .af-fab:hover{transform:scale(1.07);box-shadow:0 8px 30px rgba(37,99,235,0.45)}
.af-chat .af-fab svg{width:28px;height:28px;fill:#fff;transition:opacity 0.2s,transform 0.2s}
.af-chat .af-fab .af-icon-close{position:absolute;opacity:0;transform:rotate(-90deg)}
.af-chat .af-fab.active .af-icon-chat{opacity:0;transform:rotate(90deg)}
.af-chat .af-fab.active .af-icon-close{opacity:1;transform:rotate(0deg)}
.af-chat .af-fab::before{content:'';position:absolute;inset:-4px;border-radius:50%;border:2px solid var(--af-accent);opacity:0;animation:afPulse 2.5s ease-out infinite}
.af-chat .af-fab.active::before{animation:none;opacity:0}
@keyframes afPulse{0%{transform:scale(1);opacity:0.6}100%{transform:scale(1.35);opacity:0}}
.af-chat .af-panel{width:min(390px,calc(100vw - 48px));height:min(580px,calc(100vh - 120px));border-radius:18px;overflow:hidden;display:none;flex-direction:column;margin-bottom:14px;background:var(--af-bg);box-shadow:0 20px 60px rgba(37,99,235,0.25);animation:afSlideUp 0.3s cubic-bezier(0.22,0.68,0,1)}
.af-chat .af-panel.open{display:flex}
@keyframes afSlideUp{from{opacity:0;transform:translateY(20px) scale(0.97)}to{opacity:1;transform:translateY(0) scale(1)}}
.af-chat .af-header{display:flex;align-items:center;gap:12px;padding:18px 20px;background:var(--af-primary);color:#fff;flex-shrink:0;position:relative}
.af-chat .af-header::after{content:'';position:absolute;bottom:0;left:0;right:0;height:3px;background:var(--af-accent)}
.af-chat .af-header-logo{width:40px;height:40px;border-radius:10px;object-fit:cover;background:rgba(255,255,255,0.1);flex-shrink:0;border:1.5px solid rgba(6,182,212,0.4)}
.af-chat .af-header-info{display:flex;flex-direction:column;gap:2px;min-width:0}
.af-chat .af-header-info strong{font-size:16px;font-weight:700;letter-spacing:0.3px}
.af-chat .af-header-info span{font-size:11px;opacity:0.85;font-weight:600;letter-spacing:0.8px;text-transform:uppercase;color:var(--af-accent)}
.af-chat .af-status{display:inline-block;width:8px;height:8px;border-radius:50%;background:#4ade80;margin-right:6px;box-shadow:0 0 0 2px rgba(74,222,128,0.3);animation:afBlink 2s ease infinite}
@keyframes afBlink{0%,100%{opacity:1}50%{opacity:0.5}}
.af-chat .af-close{margin-left:auto;background:transparent;border:0;color:#fff;cursor:pointer;width:34px;height:34px;border-radius:10px;display:grid;place-items:center;font-size:18px;transition:background 0.15s}
.af-chat .af-close:hover{background:rgba(255,255,255,0.12)}
.af-chat .af-messages{flex:1;overflow-y:auto;padding:8px 16px 14px;display:flex;flex-direction:column;gap:10px;min-height:0}
.af-chat .af-msg{max-width:84%;padding:11px 15px;font-size:14px;line-height:1.55;word-wrap:break-word;animation:afFadeIn 0.25s ease}
@keyframes afFadeIn{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}
.af-chat .af-msg.bot{align-self:flex-start;background:#fff;border:1px solid rgba(37,99,235,0.07);border-radius:4px 16px 16px 16px;color:var(--af-font)}
.af-chat .af-msg.bot p{margin:0 0 8px}.af-chat .af-msg.bot p:last-child{margin-bottom:0}
.af-chat .af-msg.bot ul,.af-chat .af-msg.bot ol{margin:4px 0 8px 18px}
.af-chat .af-msg.bot strong{font-weight:700}
.af-chat .af-msg.bot a{color:var(--af-primary);text-decoration:underline;text-underline-offset:2px}
.af-chat .af-msg.bot code{background:rgba(37,99,235,0.06);padding:1px 5px;border-radius:4px;font-size:13px}
.af-chat .af-msg.user{align-self:flex-end;background:var(--af-primary);color:#fff;border-radius:16px 16px 4px 16px;white-space:pre-wrap}
.af-chat .af-typing{align-self:flex-start;display:none;gap:5px;padding:14px 20px;background:#fff;border:1px solid rgba(37,99,235,0.07);border-radius:4px 16px 16px 16px}
.af-chat .af-typing.visible{display:flex}
.af-chat .af-typing span{width:7px;height:7px;border-radius:50%;background:var(--af-primary);opacity:0.3;animation:afDot 1.2s infinite ease-in-out}
.af-chat .af-typing span:nth-child(2){animation-delay:0.15s}
.af-chat .af-typing span:nth-child(3){animation-delay:0.3s}
@keyframes afDot{0%,60%,100%{transform:translateY(0);opacity:0.3}30%{transform:translateY(-5px);opacity:0.9}}
.af-chat .af-composer{display:flex;gap:10px;padding:14px 16px;background:#fff;border-top:1px solid rgba(37,99,235,0.06);flex-shrink:0}
.af-chat .af-input{flex:1;border:1.5px solid rgba(37,99,235,0.12);border-radius:12px;padding:11px 14px;outline:none;font-size:14px;color:var(--af-font);font-family:'Jost',sans-serif;transition:border-color 0.15s,box-shadow 0.15s;background:#fff}
.af-chat .af-input::placeholder{color:#999}
.af-chat .af-input:focus{border-color:var(--af-primary);box-shadow:0 0 0 3px rgba(37,99,235,0.12)}
.af-chat .af-send{border:0;border-radius:12px;padding:11px 20px;cursor:pointer;font-weight:700;font-size:14px;font-family:'Jost',sans-serif;letter-spacing:0.3px;background:var(--af-primary);color:#fff;transition:filter 0.15s,transform 0.1s}
.af-chat .af-send:hover{filter:brightness(1.15)}.af-chat .af-send:active{transform:scale(0.96)}
.af-chat .af-footer{text-align:center;padding:6px 0 10px;font-size:10.5px;color:#b0b0b0;background:#fff;flex-shrink:0}
.af-chat .af-messages::-webkit-scrollbar{width:5px}
.af-chat .af-messages::-webkit-scrollbar-thumb{background:rgba(37,99,235,0.12);border-radius:9px}
.af-chat .af-messages::-webkit-scrollbar-track{background:transparent}
@media(max-width:500px){
.af-chat .af-container{bottom:0!important;left:0!important;right:0!important;padding:0;align-items:stretch}
.af-chat .af-panel{position:fixed;bottom:0;left:0;right:0;width:100%;height:50vh;max-height:none;border-radius:16px 16px 0 0;margin-bottom:0;box-shadow:0 -10px 40px rgba(37,99,235,0.3)}
.af-chat .af-panel.af-keyboard-open{height:auto;top:0;border-radius:0}
.af-chat .af-header{padding:12px 16px}.af-chat .af-header-info strong{font-size:15px}
.af-chat .af-messages{flex:1;min-height:80px;padding:8px 12px 10px}
.af-chat .af-composer{padding:10px 12px;padding-bottom:max(10px,env(safe-area-inset-bottom));gap:8px}
.af-chat .af-input{font-size:16px;padding:10px 12px}
.af-chat .af-send{padding:10px 16px;font-size:13px}
.af-chat .af-footer{display:none}
.af-chat .af-fab{position:fixed;bottom:16px;right:16px;width:56px;height:56px;z-index:2147483647}
.af-chat .af-fab svg{width:24px;height:24px}
}`

  // ====== Style injizieren ======
  const styleEl = document.createElement("style")
  styleEl.id = "af-chat-styles"
  styleEl.textContent = css
  document.head.appendChild(styleEl)

  // ====== DOM aufbauen ======
  const root = document.createElement("div")
  root.className = "af-chat"
  root.innerHTML = `
    <div class="af-container">
      <div class="af-panel" role="dialog" aria-label="Chat">
        <div class="af-header">
          ${logoUrl ? `<img class="af-header-logo" src="${esc(logoUrl)}" alt="Logo" />` : ""}
          <div class="af-header-info">
            <strong>${esc(brandName)}</strong>
            <span><span class="af-status"></span>${esc(responseTime)}</span>
          </div>
          <button class="af-close" type="button" aria-label="Chat schließen">&#10005;</button>
        </div>
        <div class="af-messages">
          <div class="af-typing" aria-label="Schreibt\u2026"><span></span><span></span><span></span></div>
        </div>
        <div class="af-composer">
          <input class="af-input" type="text" placeholder="Deine Frage zu Flugangst \u2026" aria-label="Nachricht eingeben" maxlength="${MAX_MESSAGE_LENGTH}" />
          <button class="af-send" type="button">Senden</button>
        </div>
        <div class="af-footer">Powered by ${esc(brandName)}</div>
      </div>
      <button class="af-fab" type="button" aria-label="Chat \u00f6ffnen">
        <svg class="af-icon-chat" viewBox="0 0 24 24"><path d="M20 2H4a2 2 0 0 0-2 2v14l4-4h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"/></svg>
        <svg class="af-icon-close" viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" fill="none"/></svg>
      </button>
    </div>`

  document.body.appendChild(root)

  // ====== Referenzen ======
  const panel    = $(".af-panel", root) as HTMLElement
  const fab      = $(".af-fab", root) as HTMLElement
  const closeBtn = $(".af-close", root) as HTMLElement
  const messages = $(".af-messages", root) as HTMLElement
  const typing   = $(".af-typing", root) as HTMLElement
  const input    = $(".af-input", root) as HTMLInputElement
  const sendBtn  = $(".af-send", root) as HTMLElement

  // ====== Session ======
  let sessionId = sessionStorage.getItem("af_session")
  if (!sessionId) {
    sessionId = crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(36) + Math.random().toString(36).slice(2)
    sessionStorage.setItem("af_session", sessionId)
  }

  // ====== Message hinzufügen ======
  function addMsg(text: string, who: string) {
    const div = document.createElement("div")
    div.className = `af-msg ${who}`
    if (who === "bot") {
      div.innerHTML = renderMarkdown(text)
    } else {
      div.textContent = text
    }
    messages.insertBefore(div, typing)
    messages.scrollTop = messages.scrollHeight
  }

  // Welcome Message
  addMsg(welcomeText, "bot")

  // ====== Open / Close ======
  function open() { panel.classList.add("open"); fab.classList.add("active"); input.focus() }
  function close() { panel.classList.remove("open"); fab.classList.remove("active"); input.blur() }
  function toggle() { panel.classList.contains("open") ? close() : open() }

  fab.addEventListener("click", toggle)
  closeBtn.addEventListener("click", close)

  // ====== Mobile Keyboard Handling ======
  if (window.visualViewport) {
    const ih = window.innerHeight
    function hvr() {
      if (!panel.classList.contains("open")) return
      const vv = window.visualViewport!
      const ko = (ih - vv.height) > 100
      if (ko && window.innerWidth <= 500) {
        panel.classList.add("af-keyboard-open")
        panel.style.height = vv.height + "px"
        panel.style.top = vv.offsetTop + "px"
      } else {
        panel.classList.remove("af-keyboard-open")
        panel.style.height = ""
        panel.style.top = ""
      }
      messages.scrollTop = messages.scrollHeight
    }
    window.visualViewport.addEventListener("resize", hvr)
    window.visualViewport.addEventListener("scroll", hvr)
  }

  // ====== Rate Limiting ======
  let lastSentAt = 0

  // ====== Message senden ======
  async function sendMessage() {
    const now = Date.now()
    if (now - lastSentAt < RATE_LIMIT_MS) return

    const text = input.value.trim().slice(0, MAX_MESSAGE_LENGTH)
    if (!text) return

    lastSentAt = now
    addMsg(text, "user")
    input.value = ""
    input.focus()
    typing.classList.add("visible")
    messages.scrollTop = messages.scrollHeight

    try {
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "sendMessage",
          sessionId,
          route: webhookRoute,
          chatInput: text
        })
      })
      if (!res.ok) throw new Error("HTTP " + res.status)
      const data = await res.json()

      let reply: string
      if (Array.isArray(data) && data[0]?.output) {
        reply = data[0].output
      } else if (typeof data?.output === "string") {
        reply = data.output
      } else if (typeof data?.text === "string") {
        reply = data.text
      } else if (typeof data === "string") {
        reply = data
      } else {
        reply = "Entschuldigung, ich konnte die Antwort nicht verarbeiten."
      }
      addMsg(reply, "bot")
    } catch (err) {
      console.error("Chat Error:", err)
      addMsg("Entschuldigung – die Verbindung konnte nicht hergestellt werden. Bitte versuche es erneut.", "bot")
    } finally {
      typing.classList.remove("visible")
    }
  }

  sendBtn.addEventListener("click", sendMessage)
  input.addEventListener("keydown", (e: KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendMessage() }
    if (e.key === "Escape") close()
  })
}

export default function ChatWidget() {
  useEffect(() => {
    // 1. Google Font "Jost" laden (falls nicht schon geladen)
    if (!document.querySelector('link[href*="Jost"]')) {
      const preconnect1 = document.createElement('link')
      preconnect1.rel = 'preconnect'
      preconnect1.href = 'https://fonts.googleapis.com'
      document.head.appendChild(preconnect1)

      const preconnect2 = document.createElement('link')
      preconnect2.rel = 'preconnect'
      preconnect2.href = 'https://fonts.gstatic.com'
      preconnect2.crossOrigin = 'anonymous'
      document.head.appendChild(preconnect2)

      const fontLink = document.createElement('link')
      fontLink.rel = 'stylesheet'
      fontLink.href = 'https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600;700&display=swap'
      document.head.appendChild(fontLink)
    }

    // 2. Widget-Config (frozen, nicht manipulierbar)
    const config: ChatWidgetConfig = Object.freeze({
      webhook: Object.freeze({
        url: import.meta.env.VITE_WEBHOOK_URL || 'https://n8n.srv1233417.hstgr.cloud/webhook/ec82e229-3374-4837-b059-25cb28cf9d02/chat',
        route: 'general'
      }),
      branding: Object.freeze({
        logo: 'https://www.passengerguard.com/wp-content/uploads/2024/04/PG-Logo_600x600.png',
        name: 'PassengerGuard',
        welcomeText: 'Hallo! \u{1F44B} Wie kann ich dir bei deiner Flugangst helfen?',
        responseTimeText: 'Dein Flugangst-Assistent'
      }),
      style: Object.freeze({
        primaryColor: '#2563EB',
        secondaryColor: '#06B6D4',
        position: 'right',
        backgroundColor: '#f4f5f7',
        fontColor: '#0F172A'
      })
    })

    // 3. Widget direkt injizieren (marked ist jetzt gebundelt, kein CDN nötig)
    injectChatWidget(config)

    return () => {
      const widgetRoot = document.querySelector('.af-chat')
      if (widgetRoot) widgetRoot.remove()
      const styleTag = document.getElementById('af-chat-styles')
      if (styleTag) styleTag.remove()
    }
  }, [])

  return null
}
