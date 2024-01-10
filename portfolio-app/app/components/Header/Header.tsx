
import { useState } from 'react';
import DesktopMenu from '../Menu/DesktopMenu';
import MobileMenu from '../Menu/MobileMenu';
import './Header.scss';

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <header
    id='header'
    className='app-header'
    >
      {/* TODO: Make a SCSS component */}
      <a className='app-header__brand' href='#'>
        <span>Enagu</span>
      </a>

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
    </header>
  )
}
