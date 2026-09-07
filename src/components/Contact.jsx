import Reveal from './Reveal.jsx'

export default function Contact() {
  const address = '0x0000...REBIRTH'
  return (
    <section className="contact section" id="contact">
      <Reveal className="section-heading"><p>CONTRACT</p><span>( 06 )</span><p>ETHEREUM</p></Reveal>
      <Reveal className="contract-row">
        <p>{address}</p>
        <button onClick={() => navigator.clipboard?.writeText(address)} type="button" aria-label="Copy contract address">COPY ↗</button>
      </Reveal>
      <Reveal className="social-row">
        <p>FOLLOW THE PROCESS</p>
        <div><a href="https://x.com" target="_blank" rel="noreferrer">X / TWITTER ↗</a><a href="https://telegram.org" target="_blank" rel="noreferrer">TELEGRAM ↗</a></div>
      </Reveal>
    </section>
  )
}
