import './Menu.scss'

function DesktopMenu() {
  return (
    <nav className="d-menu">
      {/* TODO: Make a SCSS component */}
      <a className='d-menu__brand' href='#'>
        <span>Enagu</span>
      </a>
      {/* Main Menu */}
      <div
        className='d-menu__content collapse'
        id='navbarNavDropdown'
      >
        <ul className='d-menu__items'>
          <li className='d-menu__items__item d-menu__items__item'>
            <a className='d-menu__items__item__links --active' href='#'>About</a>
          </li>
          <li className='d-menu__items__item'>
            <a className='d-menu__items__item__links' href='#'>Projects</a>
          </li>
          <li className='d-menu__items__item active'>
            <a className='d-menu__items__item__links' href='#'>Contact</a>
          </li>
        </ul>
      </div>
      {/* Links to social media */}
      <div className='d-menu__media-links'>
        <a className='medias github' href="#">GH</a>
        <a className='medias likedin' href="#">IN</a>
        <a className='medias twitter' href="#">X</a>
      </div>
    </nav>
  )
}

export default DesktopMenu;