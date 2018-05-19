import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { SimpleSlider } from "./SimpleSlider";

class App extends Component {
  render() {
    const listings = [
      {
        url:
          "https://images.pexels.com/photos/210552/pexels-photo-210552.jpeg?auto=compress&cs=tinysrgb&h=350",
        caption: "Harvard Studios",
        address: "2147 Newhall st"
      },
      {
        url:
          "https://images.pexels.com/photos/259580/pexels-photo-259580.jpeg?auto=compress&cs=tinysrgb&h=350",
        caption: "Domicilio Apartments",
        address: "2147 El Camino Real"
      },
      {
        url:
          "https://images.pexels.com/photos/263189/pexels-photo-263189.jpeg?auto=compress&cs=tinysrgb&h=350",
        caption: "Park Central",
        address: "2125 Newhall st"
      },
      {
        url:
          "https://images.pexels.com/photos/263189/pexels-photo-263189.jpeg?auto=compress&cs=tinysrgb&h=350",
        caption: "Normandy Park",
        address: "2125 Newhall st"
      }
    ];

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the Rental Portal</h1>
        </header>
        <div class="container">
          <h3> Popular Apartments in Santa Clara</h3>
          <SimpleSlider listings={listings} />
        </div>
      </div>
    );
  }
}

export default App;
