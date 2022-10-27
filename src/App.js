import './App.css';
import Testimonio from './components/Testimonio';

function App() {
  return (
    <div className="App">
      <Testimonio
        imagen="shawn"
        nom="Shawn Wang"
        pais="Singapore"
        cargo="Software Engineer"
        empresa="Amazon"
        texto="It's scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life"
      />
      <Testimonio
        imagen="sarah"
        nom="Sarah Chima"
        pais="Nigeria"
        cargo="Software Engineer"
        empresa="Chat Desk"
        texto="freeCodeCamp was the gateway to my career as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company."
      />
      <Testimonio
        imagen="emma"
        nom="Emma Bostian"
        pais="Sweden"
        cargo="Software Engineer"
        empresa="Spotify"
        texto="I've always struggled with learning JavaScript. I've taken many
      courses but freeCodeCamp's course was the one which stuck. Studying
      JavaScript as well as data structures and algorithms on freeCodeCamp
      gave me the skills and confidence I needed to land my dream job as a
      software engineer at Spotify."
      />
    </div>
  );
}

export default App;
