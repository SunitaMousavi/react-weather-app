import "./App.css";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Weather />
      <footer className="App-footer">
        Coded by <a href="https://www.shecodes.io/athena">Sunita Mousavi</a> &
        hosted on {""}
        <a href="https://www.shecodes.io/athena">Netlify</a>
      </footer>
    </div>
  );
}

export default App;
