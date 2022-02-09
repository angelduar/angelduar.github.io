import "./portfolio.scss"

export default function Portfolio() {
  return ( 
    <div className="portfolio" id="portfolio">
      <div className="wrapper">
          <h2 className="light">work</h2>
          <h3>A Selection of Things I Have Built</h3>
          <div className="work-container">
            <div className="container-img">
              <img src="assets/wizzard.png" alt=""/>
            </div>
            <div className="text-container">
              <h4>Wizardry Adventure</h4>
              <p>
              This is a Point and Click adventure game designed for kids between the ages of 3-8 years old. This game was developed in a collective effort between students of Computer Science and graphic design
              at the University of Kansas. The gameplay was built using Unity while all of the game art design was done by the design team. 
              </p>
            <div className="container-icons">
              <div className="box-icon">
                <i class="devicon-unity-original"></i>
              </div>
              <div className="box-icon">
                <i class="devicon-github-original"></i>
              </div>
            </div>
            <div className="container-btns">
              <a className="btn btn-view-work" href="https://github.com/Shaavin/SeniorDesignTeam17" target="_blank" aria-label="open link">view github repo</a>
            </div>
            </div>
          </div>

          <div className="work-container">
          <div className="container-img">
              <img src="assets/calendar.png" alt=""/>
            </div>
            <div className="text-container">
              <h4>Calendar Application</h4>
              <p>
              If you need to schedule an event, manage invitations and comfirmations, look no further as this Calendar application fully developed in C++ will take care of everything for you. 
              This aplications consists of a functional user system that will allow you to create an account, schedule events and manage your guest list in the most efficient way. 
              </p>
            <div className="container-icons">
              <div className="box-icon">
                <i class="devicon-cplusplus-plain"></i>
              </div>
              <div className="box-icon">
                <i class="devicon-github-original"></i>
              </div>
            </div>
            <div className="container-btns">
              <a className="btn btn-view-work" href="https://github.com/manuels9/EECS448_Project1" target="_blank" aria-label="open link">view github repo</a>
            </div>
            </div>
          </div>

          <div className="work-container">
            <div className="container-img">
              <img src="assets/rpg.png" alt=""/>
            </div>
            <div className="text-container">
              <h4>EECS 268 The Game</h4>
              <p>
              If you miss seeing your friends at school during the Covid-19 pandemic, then this is the game for you. This is an RPG game that simulates life at college by setting deadlines, making you collect
              energy in the form of coffee and snacks and the best part of all, you can play it online with your friends. 
              </p>
              <div className="container-icons">
              <div className="box-icon">
              <i class="devicon-javascript-plain"></i>
              </div>
              <div className="box-icon">
                <i class="devicon-github-original"></i>
              </div>
            </div>
            <div className="container-btns">
              <a className="btn btn-view-work" href="https://github.com/manuels9/eecs448_project2" target="_blank" aria-label="open link">view github repo</a>
            </div>
            </div>
          </div>

          <div className="work-container">
            <div className="container-img">
              <img src="assets/Apod.png" alt=""/>
            </div>
            <div className="text-container">
              <h4>APOD API</h4>
              <p>
              This is a web application built using vanilla Javascript, HTML and CSS. The application makes use of Nasa's APOD (Astronomy Picture of the Day) API to get any astronomical picture since the day this
              initiative was started in 1995 to this date. All you (as the user) have to do is enter a date after 1995 and the application will show you what the astronomical picture of the day for that day is alongside 
              a short summary of what you are seeing.  
              </p>
              <div className="container-icons">
              <div className="box-icon">
              <i class="devicon-javascript-plain"></i>
              </div>
              <div className="box-icon">
              <i class="devicon-html5-plain"></i>
              </div>
              <div className="box-icon">
              <i class="devicon-css3-plain"></i>
              </div>
              <div className="box-icon">
                <i class="devicon-github-original"></i>
              </div>
            </div>
            <div className="container-btns">
              <a className="btn btn-view-work" href="https://github.com/angelduar/Astronomy-Picture-of-the-day-API" target="_blank" aria-label="open link">view github repo</a>
            </div>
            </div>
          </div>
      </div>
    </div>
  )
}