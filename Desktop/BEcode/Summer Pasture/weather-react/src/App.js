import React from 'react';
const api={
  key:"e3d2a0785cd156c662d953adc0bae11a",
  base:"https://api.openweathermap.org/data/2.5/"

}

function App() {

  const dateBuilder=(d)=>{
    let months =["January","February","March","May",
    "June","July","September","October","November","December"];
    let days=["Sunday", "Monday", "Tuesday", "Wednesday","Thursday","Friday","Saturday"];

    let day =days[d.getDay()];
    let date=d.getDate();
    let month=months[d.getMonth()];
    let year =d.getFullYear();

    return `${day} ${date} ${month} ${year}`

    
  }
  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input type="text" 
          className="search-bar"
          placeholder="Search.."
          />
        </div>
        <div className="location-box">
          <div className="location">Barcelona,ES</div>
            <div className="date">
              {dateBuilder(new Date())}
            </div>
        </div>
        <div className="weather-box">
          <div className="temp">15°C</div>
          <div className="weather">Sunny</div>
        </div>
      </main>
    </div>
  );
}

export default App;
