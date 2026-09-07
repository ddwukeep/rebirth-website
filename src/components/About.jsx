import Reveal from './Reveal.jsx'

export default function About() {
  return (
    <section className="about section" id="about">
      <Reveal className="section-heading"><p>ABOUT / MANIFESTO</p><span>( 05 )</span><p>THE IDEA</p></Reveal>
      <Reveal className="manifesto">
        <span className="manifesto-mark">*</span>
        <p>WE EXIST IN THE SPACE<br />BETWEEN <em>WHAT WAS</em><br />AND WHAT WILL BE.</p>
      </Reveal>
      <div className="about-copy">
        <Reveal><p>REBIRTH IS A DIGITAL EXHIBITION EXPLORING THE BEAUTY OF TRANSFORMATION. A STUDY OF FORM, MEMORY, AND THE INFINITE POTENTIAL WITHIN EVERY ENDING.</p></Reveal>
        <Reveal><p>WE BELIEVE CREATION IS NOT A LINEAR ACT. IT IS A CYCLE — A CONTINUOUS RETURN TO THE UNKNOWN, WHERE OLD IDENTITIES DISSOLVE AND NEW ONES TAKE SHAPE.</p></Reveal>
      </div>
    </section>
  )
}
