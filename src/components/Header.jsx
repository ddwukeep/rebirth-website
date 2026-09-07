export default function Header() {
  return (
    <header className="header">
      <a className="wordmark" href="#top" aria-label="Rebirth home">REBIRTH<span>®</span></a>
      <nav aria-label="Primary navigation">
        <a href="#works">WORKS</a>
        <a href="#about">ABOUT</a>
        <a href="#contact">CONTACT</a>
      </nav>
      <a className="index-link" href="#works">INDEX <span>↘</span></a>
    </header>
  )
}
