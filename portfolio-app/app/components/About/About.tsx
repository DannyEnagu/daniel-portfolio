import Image from 'next/image';
import './About.scss';

function About() {
  return (
    <section id='about' className='about container'>
      <div className='section__header'>
        <h2 className="section__header__title">
          <span className="rectangle-shape"></span>
          <span className='text-primary'>About</span>
        </h2>
        <h3 className="section__header__tagline section__header__tagline--hidden">
          I am Daniel Enagu, a passionate Frontend Developer
        </h3>
      </div>
      <div className="section__body">
        <div className='about-content'>
          <article className="about__me">
            <div className="about__me__img-wrapper left">
              <Image
                src='/images/about.jpg'
                alt='Daniel Enagu'
                className='about__me__img-wrapper__img'
                width={200}
                height={200}
              />
            </div>
            <div className='about__me__intro'>
              <h3 className="about__me__intro__heading right">
                I am Daniel Enagu, a passionate Frontend Developer.
              </h3>
              <p className="about__me__intro__text">
                I am dedicated to crafting seamless and engaging digital experiences. With a keen eye for detail and a love for innovation, I specialize in transforming creative ideas into visually stunning and functional websites.
              </p>
              <div className="about__skills skills-inner">
                <h4 className='text-primary'>Skiled In</h4>
                <div className="about__skills__list">
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>JavaScript</span>
                  <span>Angular</span>
                  <span>Vue</span>
                  <span>React</span>
                  <span>Git</span>
                </div>
                <div className="about__skills__actions">
                  <button className='button button-primary'>
                    Download CV
                  </button>
                  <a
                    href="#contact"
                    className="button button-primary button-outline "
                  >
                    Contact Me
                  </a>
                </div>
              </div>
            </div>
          </article>
          <div className="about__skills skills-outer">
            <h4 className='text-primary text-center'>Skiled In</h4>
            <div className="about__skills__list">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>Angular</span>
              <span>Vue</span>
              <span>React</span>
              <span>Git</span>
            </div>
            <div className="about__skills__actions">
              <button className='button button-primary'>
                Download CV
              </button>
              <a
                href="#contact"
                className="button button-primary button-outline "
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    // <div className="container">
    // </div>
  )
}

export default About