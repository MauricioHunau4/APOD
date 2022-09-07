import './App.css';
import Main from './components/main';
import APODBar from './components/APODBar';


function App() {
  sessionStorage.clear()
  return (
    <>
      <APODBar />
      <Main />
    </>
  );
}

export default App;
