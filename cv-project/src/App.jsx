import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import Experience from './components/Experience';
import './App.css';

function App() {
  return(
    <main className="cv-container">
      <h1>CV Builder</h1>
      <GeneralInfo />
      <Education />
      <Experience />
    </main>
  );
}

export default App;