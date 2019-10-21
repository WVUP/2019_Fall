import React, { useState, useEffect } from 'react';
import './App.css';

import { tech, games } from './news-data';

const News = ({ title, articles = [], loading, menu }) => {

  console.log('This is a news feed', articles);

  // Another way that you can conditionally render jsx
  // let isEmpty;
  // if (articles.length === 0) {
  //   isEmpty = <div style={{ color: 'silver' }}>Sorry, there are no articles for {title} feed.</div>
  // }
  console.log(title, menu);
  if (menu !== 'All' && menu !== title) return null;

  if (loading) {
    return (
      <div>
        <h4>{title}</h4>
        <img src="https://i.pinimg.com/originals/f9/41/ae/f941ae9d16fd7d2957eea6e5b1100d1e.gif" alt="test" style={{ height: 80 }} />
      </div>
    )
  }

  return (
    <div>
      <h4>{title}</h4>
      {
        articles.map(article => (
          <div>{article.title}</div>
        ))
      }

      {
        articles.length === 0 && (
          <div style={{ color: 'silver' }}>Sorry, there are no articles for {title} feed.</div>
        )
      }

    </div>
  );
};

const Menu = ({ setMenu }) => {
  const links = ['Technology', 'Games', 'Misc', 'All'];
  const linkStyle = { padding: '5px 3px', margin: '4px 8px', backgroundColor: 'silver' };
  return (
    <div>
      {
        links.map(link => (
          <span style={linkStyle} onClick={() => setMenu(link)}>{link}</span>
        ))
      }
    </div>
  )
}

function App() {
  const [techArticles, setTechArticles] = useState(tech);
  const [gameArticles, setGameArticles] = useState([]);
  const [gameFeedLoading, setGameFeedLoading] = useState(true);
  const [currentMenu, setCurrentMenu] = useState('All');

  // This useEffect does not watch any values and therefor
  // will behave like an 'onLoad' handler
  useEffect(() => {
    // Lets simulate network latency of actually getting data
    setTimeout(() => {
      // Alright, fake network call has been made and we have data
      // So lets go ahead and update our state so the UI can reflect it
      setGameArticles(games);
      setGameFeedLoading(false);
    }, 1000);
  }, []);


  return (
    <div className="App">

      <Menu setMenu={setCurrentMenu} />
      <News title="Technology" articles={techArticles} loading={false} menu={currentMenu} />
      <News title="Games" articles={gameArticles} loading={gameFeedLoading} menu={currentMenu} />
    </div>
  );
}

export default App;
