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
              Developed and designed a point and click adventure game targeted at children in an interdepartmental effort with the School of Art which involved a team of ten people and was the first of its kind at the University of Kansas. 
              Technology: Unity, C# and Github.
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
              Developed an application that allowed users to schedule events and invite other users to said events. Designed and programmed the functionality of several of the user menus. 
              Technology: C++, Github.
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
              <h4>RPG Game</h4>
              <p>
              Team lead in the creation of an RPG game. Assigned tasks, Maintained communication across the team. Programmed interaction with the game environment and designed part of the gameplay. 
              Technology: JavaScript, Phaser 3, Github.
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
      </div>
    </div>
  )
}