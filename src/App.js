import './style/composant/main.css';

import Header from "./composant/navbar/Header";
import Title from "./composant/title/Title";
import Skills from "./composant/skills/Skills";
import Projects from "./composant/projects/Projects";
import Footer from "./composant/footer/Footer";

function App() {
  return (
      <div className="App">
        <Header/>
        <main>
          <Title/>
          <div className={'page-container'}>
            <Skills/>
            <Projects/>
          </div>
          <Footer/>
        </main>
      </div>
  );
}

export default App;