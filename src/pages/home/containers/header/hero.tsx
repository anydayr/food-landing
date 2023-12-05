import BackgroundHeader from '../../../../assets/images/background-hero.png'
function Hero() {
  return (
    <header className="header__container">
      <img
        src={BackgroundHeader}
        alt="Hero image"
        className="header__img"
        loading="lazy"
      />
      <h1 className="header__title h1">El secreto de tu cocina</h1>
    </header>
  )
}

export default Hero
