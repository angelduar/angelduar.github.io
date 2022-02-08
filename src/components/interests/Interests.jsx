import "./interests.scss";

export default function Interests() {
  return(
  <div className="interests" id="interests">
    <div className="wrapper">
      <h2>Interests</h2>
      <h3>My Hobbies And Things I do In My Free Time</h3>
      <p>Because life isnt just about work. Here are some of the things that i enjoy outside of programming</p>
      <div className="content-container">
        <div className="movie-container">
          <h4>My Favorite Movies
          <i class="film"></i>
          </h4>
          <ul>
            <li>Once Upon A Time in Hollywood</li>
            <li>Forrest Gump</li>
            <li>The Curious Case of Benjamin Button</li>
            <li>Interstellar</li>
            <li>Motorcycle Diaries</li>
          </ul>
        </div>
        <div className="book-container">
          <h4>My Favorite Books
            <i class="book"></i>
          </h4>
          <ul>
            <li>Man's Search for Meaning</li>
            <li>the alchemist</li>
            <li>Atomic Habits</li>
            <li>The Hitchhiker's Guide to the Galaxy</li>
            <li>100 years of solitude</li>
          </ul>
        </div>
        <div className="activity-container">
          <h4>My Favorite Activities
            <i class="activities"></i>
            <i class="activities1"></i>
          </h4>
          <ul>
            <li>Photography</li>
            <li>Hiking</li>
            <li>Running</li>
            <li>Playing Any Sport</li>
            <li>Videogames</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  )
}
