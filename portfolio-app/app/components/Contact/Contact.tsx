import './Contact.scss';

function Contact() {
  return (
    <div className="container">
      <section id='contact' className='section contact'>
        <div className='section__header'>
          <h2 className="section__header__title">
            <span className="rectangle-shape"></span>
            <span className='text-primary'>Contact</span>
          </h2>
          <h3 className="section__header__tagline">
            Feel free to reach out to me
          </h3>
        </div>
        <div className="section__body">
          <form className="form">
            <div className="form__group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
              />
            </div>
            <div className="form__group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="form__group">
              <label htmlFor="msg">Message:</label>
              <textarea
                name="message"
                id="message"
                cols={30}
                rows={3}
                placeholder="Enter your message"
              ></textarea>
            </div>
            <div className="form__group">
              <button className="button button-primary">Submit</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Contact;