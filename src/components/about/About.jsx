import "./about.scss";

export default function About() {
  return ( 
  <div className="about" id="about">
    <div className="wrapper">
      <h2>About</h2>
      <hr></hr>
      <h3>Who is Angel?</h3>
      <div className="content-container">
        <div className="container-img">
          <img src="assets/IMG_1919_copy.png"/>
        </div>
        <div className="container-text">
          <h4>A Highly Motivated Software Developer</h4>
          <p> I am a highly motivated and passionate learner as well as a flexible team player that enjoys working with people from diverse backgrounds. My goal is to make the world a better place by using technology as the driving force that will make this change possible.</p>
          <p>I have a bachelor's degree in Computer Science from the <a href="https://ku.edu/">University of Kansas</a> and professional experience in Software Development through an internship at <a href="https://matterport.com/en-gb">Matterport Inc</a>.</p>
          <p>I love to solve problems and bring ideas to life through my skills, I also enjoy working with people and approaching problems as a team. I am happiest when I am either learning or focused on creating content and/or solving problems</p>
          <div className="resume-container">
            <p>Find my resume here: </p>
            <a href="assets/AngelGuerrero1.pdf">
            <i class="fa fa-file" aria-hidden="true">
            </i>
            </a>
          </div>
        </div>
      </div>
    </div>

  </div>
  )
}
