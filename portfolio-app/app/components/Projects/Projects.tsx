import Image from 'next/image';
import './Projects.scss';

function Projects() {
  return (
    <section id='projects' className='section projects'>
      <div className="container">
        <div className='section__header'>
          <h2 className="section__header__title">
            <span className="rectangle-shape"></span>
            <span className='text-primary'>Projects</span>
          </h2>
          <h3 className="section__header__tagline section__header__tagline--hidden">
            See Some Of My Works
          </h3>
        </div>
        <div className="section__body">
          <div className="projects__container">
            <div className="carousel">
              <a
                href="#"
                className="carousel__item"
              >
                <Image
                  src="/images/projects/aron-visuals-bZZp1PmHI0E-unsplash.jpg"
                  alt="Peoject 1"
                  className="carousel__item__image"
                  width={200}
                  height={200}
                />
                  <span className="overlay">
                    <span className="text">Hello World</span>
                  </span>
              </a>
              <a
                href="#"
                className="carousel__item"
              >
                <Image
                  src="/images/projects/eberhard-grossgasteiger-xC7Ho08RYF4-unsplash.jpg"
                  alt="Peoject 2"
                  className="carousel__item__image"
                  width={200}
                  height={200}
                />
                  <span className="overlay">
                    <span className="text">Hello World</span>
                  </span>
              </a>
              <a
                href="#"
                className="carousel__item"
              >
                <Image
                  src="/images/projects/hao-wang-pVq6YhmDPtk-unsplash.jpg"
                  alt="Peoject 3"
                  className="carousel__item__image"
                  width={200}
                  height={200}
                />
                  <span className="overlay">
                    <span className="text">Hello World</span>
                  </span>
              </a>
            </div>
            <div className="controls">
              <div className="controls__dots round-shape"></div>
              <div className="controls__dots round-shape bg-primary"></div>
              <div className="controls__dots round-shape"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects