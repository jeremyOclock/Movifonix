import React from 'react';
// import MoviesList from './Movies/MoviesList';
import SignUp from './Authentification/SignUp';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="home">
    <img
      src="https://fontmeme.com/permalink/200301/9b952b5358b92549b9ec981e70ca3339.png"
      alt="netflix-font"
      border="0"
    />
    <div>
      <Link className="home__subscribe" to="/signup">
        Subscribe !
      </Link>{' '}
      {/* <SignUp /> */}
      {/* <MoviesList /> */}
    </div>
  </div>
);

export default Home;
