import './Footer.scss';

export default function Footer() {
  return (
    <footer>
      <section className='content'>
        <a className='brand' href='#'>
            <span>Enagu</span>
        </a>
        <span className='text'>2024</span>
        {/* Links to social media */}
        <div className="socail-medias">
          <a className='github' href="#">GH</a>
          <a className='likedin' href="#">IN</a>
          <a className='twitter' href="#">X</a>
        </div>
    </section>    
    </footer>
  )
}
