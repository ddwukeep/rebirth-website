import Reveal from './Reveal.jsx'
import { artworks } from '../data/artworks.js'

export default function Gallery() {
  return (
    <section className="gallery section" id="works">
      <Reveal className="section-heading">
        <p>SELECTED WORKS</p><span>( 04 )</span><p>2026 — ONGOING</p>
      </Reveal>
      <div className="art-grid">
        {artworks.map((art) => (
          <Reveal className={`art-card art-card-${art.id}`} key={art.id}>
            <article>
              <div className={`artwork ${art.className}`} role="img" aria-label={`Abstract artwork titled ${art.title}`}>
                <div className="art-shape" />
                <span className="art-number">{art.id}</span>
              </div>
              <div className="art-caption">
                <div><h2>{art.title}</h2><p>{art.medium}</p></div><span>{art.year}</span>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
