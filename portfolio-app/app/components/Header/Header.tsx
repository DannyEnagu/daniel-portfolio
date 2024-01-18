
import { useState } from 'react';
import Image from 'next/image';
import DesktopMenu from '../Menu/DesktopMenu';
import MobileMenu from '../Menu/MobileMenu';
import './Header.scss';

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <header
      id='header'
      className='app-header px-1'
    >
      <div className="container">
        <div className="nav-container">
          <MobileMenu
              isOpen={isOpen}
              setIsOpen={setIsOpen}
            />
            <DesktopMenu />

          {/* Toggle menu button
          TODO: Make the navicon a scss component
          */}
            <button
              className={`button app-header__icon app-header__icon${isOpen ? '--hidden': ''}`}
              type='button'
              data-toggle='collapse'
              data-target='#navbarNavDropdown'
              aria-controls='navbarNavDropdown'
              aria-expanded='false'
              aria-label='Toggle navigation'
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className='app-header__icon__navicon'></span>
            </button>
        </div>
        <div
          id='hero'
          className='app-header__hero'
        >
          <div className='content'>
            <h1 className='flex-heading'>Hello
              <span className='round-shape bg-primary'></span>
            </h1>
            <article className="intro">
              <h2 className="intro__name flex-heading">
                <span className='rectangle-shape'></span> I'm
                <span className='text-primary'>Daniel Enagu</span>
              </h2>
              <p className="intro__text">
                <span className='pre'>a </span>
                <strong className='profession'>FRONTEND DEVELOPER </strong>
              </p>
              <p>
                who creates superior quality websites which is accessible for everyday use
              </p>
              <a
              href="#contact"
              className='intro__button button'
              >Contact Me</a>
            </article>
          </div>
          <div className='img-wrapper'>
            <Image
              className='img'
              src="/images/about.jpg"
              alt='Hero Daniel Enagu'
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>
    </header>
  )
}
