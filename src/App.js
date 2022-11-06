import "./App.css";
import Weather from "./Weather.js";
import "./Weather.css";
import DailyForecast from "./DailyForecast";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <Weather defaultCity="Chicago" />
        </header>

        <footer className="git-link">
          <a href="https://github.com/earthlingeve/react-weather-app2">
            coded by Evelyn Alanis
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
