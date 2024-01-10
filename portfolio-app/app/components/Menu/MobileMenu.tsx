import './Menu.scss';

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

function MobileMenu({isOpen, setIsOpen}: MobileMenuProps) {
  return (
    <nav className={`m-menu m-menu${isOpen ? "--open" : "--hidden"}`}>
      <section className="m-menu__header">
      <a className='m-menu__header__brand' href='#'>
        <span>Enagu</span>
      </a>
      {/* Toggle menu button
      TODO: Make the navicon a scss component
       */}
      <button
        className='m-menu__header__icon button'
        type='button'
        data-toggle='collapse'
        data-target='#navbarNavDropdown'
        aria-controls='navbarNavDropdown'
        aria-expanded='false'
        aria-label='Toggle navigation'
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className='m-menu__header__icon__navicon m-menu__header__icon__navicon--close'></span>
      </button>
      </section>
      {/* Main Menu */}
      <section
        className='m-menu__body collapse'
        id='navbarNavDropdown'
      >
        <ul className='m-menu__items'>
          <li className='m-menu__items__item m-menu__items__item--active'>
            <a className='m-menu__items__item__links' href='#'>About</a>
          </li>
          <li className='m-menu__items__item active'>
            <a className='m-menu__items__item__links' href='#'>Projects</a>
          </li>
          <li className='m-menu__items__item active'>
            <a className='m-menu__items__item__links' href='#'>Contact</a>
          </li>
        </ul>
      </section>
      {/* Links to social media */}
      <section className='m-menu__footer'>
        <a className='medias github' href="#">GH</a>
        <a className='medias likedin' href="#">IN</a>
        <a className='medias twitter' href="#">X</a>
      </section>
    </nav>
  )
}

export default MobileMenu;