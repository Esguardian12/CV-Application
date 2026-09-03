import GeneralInfo from './component/GeneralInfo';
import '/App.css';

function App() {
  return(
    <main className="cv-container">
      <h1>CV Builder</h1>
      <GeneralInfo />
      {<Education />}
      {<Experience />}
    </main>
  );
}

export default App;