import Image from 'next/image';
import { useState } from 'react';
import './Projects.scss';

const dots = [0, 1, 2];

function Projects() {
  const [active, setActive] = useState<number>(1);

  const handleDotClick = (index: number) => {
    const carousel = document.querySelector('.carousel') as HTMLDivElement;
    // If the index is not 1 (i.e 0 and 2), scroll to the index * carousel width
    if (index !== 1) {
      carousel?.scrollTo({ left: index * (carousel?.offsetWidth || 0), behavior: 'smooth' });
    // Else, scroll to the center of the carousel
    } else {
      const scrollWidth = carousel?.scrollWidth || 0;
      const clientWidth = carousel?.clientWidth || 0;
      carousel.scrollLeft = (scrollWidth - clientWidth) / 2;
      // carousel?.scrollTo({ left: (scrollWidth - clientWidth / 2), behavior: 'smooth' });
    }

    console.log(carousel?.scrollLeft);

    setActive(index);
  };
  return (
    <section id='projects' className='section projects'>
      <div className="container">
        <div className='section__header'>
          <div>
            <h2 className="section__header__title">
              <span className="rectangle-shape"></span>
              <span className='text-primary'>Projects</span>
            </h2>
            <h3 className="section__header__tagline section__header__tagline--hidden">
              See Some Of My Works
            </h3>
          </div>
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
                    <span className="text">Coming Soon</span>
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
                    <span className="text">Coming Soon</span>
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
                    <span className="text">Coming Soon</span>
                  </span>
              </a>
              <a
                href="#"
                className="carousel__item"
              >
                <Image
                  src="/images/projects/aron-visuals-bZZp1PmHI0E-unsplash.jpg"
                  alt="Peoject 4"
                  className="carousel__item__image"
                  width={200}
                  height={200}
                />
                  <span className="overlay">
                    <span className="text">Coming Soon</span>
                  </span>
              </a>
              <a
                href="#"
                className="carousel__item"
              >
                <Image
                  src="/images/projects/eberhard-grossgasteiger-xC7Ho08RYF4-unsplash.jpg"
                  alt="Peoject 5"
                  className="carousel__item__image"
                  width={200}
                  height={200}
                />
                  <span className="overlay">
                    <span className="text">Coming Soon</span>
                  </span>
              </a>
              <a
                href="#"
                className="carousel__item"
              >
                <Image
                  src="/images/projects/hao-wang-pVq6YhmDPtk-unsplash.jpg"
                  alt="Peoject 6"
                  className="carousel__item__image"
                  width={200}
                  height={200}
                />
                  <span className="overlay">
                    <span className="text">Coming Soon</span>
                  </span>
              </a>
              <a
                href="#"
                className="carousel__item"
              >
                <Image
                  src="/images/projects/aron-visuals-bZZp1PmHI0E-unsplash.jpg"
                  alt="Peoject 7"
                  className="carousel__item__image"
                  width={200}
                  height={200}
                />
                  <span className="overlay">
                    <span className="text">Coming Soon</span>
                  </span>
              </a>
              <a
                href="#"
                className="carousel__item"
              >
                <Image
                  src="/images/projects/eberhard-grossgasteiger-xC7Ho08RYF4-unsplash.jpg"
                  alt="Peoject 8"
                  className="carousel__item__image"
                  width={200}
                  height={200}
                />
                  <span className="overlay">
                    <span className="text">Coming Soon</span>
                  </span>
              </a>
            </div>
            <div className="cta">
              <a href="#" className='button button-primary'>
                See More Works
              </a>
              <a
                href="#contact"
                className="button button-primary button-outline "
              >
                Contact Me
              </a>
            </div>
            <div className="controls">
              {/* Create an array with 3 items */}
              {dots.map((index) => (
                <button
                key={index}
                className={`controls__dots round-shape controls__dots${index === active ? '--active': ''}`}
                onClick={() => handleDotClick(index)}
                />
              ))}
              {/* <button
              className="controls__dots round-shape controls__dots--active"
              onClick={() => handleDotClick(1)}
              />
              <button
              className="controls__dots round-shape"
              onClick={() => handleDotClick(2)}
              /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects