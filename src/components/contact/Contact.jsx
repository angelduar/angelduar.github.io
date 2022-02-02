import "./contact.scss";

export default function Contact() {
  return (
  <div className="contact" id="contact">
    <div className="wrapper">
    <h2>Contact</h2>
    <h3>Get In Touch !</h3>
    <div className="content">
      <div className="form">
        <p>Drop a message in the box below to say hi, or see if we can built something amazing together. I will look forward to hearing from you !</p>
        <form>
          <input type="text" placeholder="Email"/>
          <input type="text" placeholder="Name"/>
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
      <div className="social">
        <p>Find me on these social media networks too!</p>
        <div className="social-icons">
        <ul>
          <li>
          <a href="http://instagram.com/angelduar">
            <i class="fa fa-instagram" aria-hidden="true"></i>
          </a>
          </li>
          <li>
          <a href="https://www.linkedin.com/in/angel-guerrero-urbina-csb/">
            <i class="fa fa-linkedin" aria-hidden="true"></i>
          </a>
          </li>
          <li>
          <a href="https://github.com/angelduar">
            <i class="fa fa-github" aria-hidden="true"></i>
          </a>
          </li>
          <li>
          <a href="https://www.facebook.com/angel.guerrerourbina">
            <i class="fa fa-facebook" aria-hidden="true"></i>
          </a>
          </li>
        </ul>
        </div>
      </div>
    </div>
    </div>
  </div>
  )
}
