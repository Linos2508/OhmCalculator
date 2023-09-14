import React from "react";
import "./App.css";
import { IOhm, Multiplier, Tolerance } from "./types";
import { IOhmValueCalculator } from "./utils";
import swal from "sweetalert";

function App() {
  const [digit1, setDigit1] = React.useState<string>("0");
  const [digit2, setDigit2] = React.useState<string>("0");
  const [digit3, setDigit3] = React.useState<string>("");
  const [tolerance, setTolerance] = React.useState<string>("");
  const [multiplier, setMultiplier] = React.useState<string>("0");
  const [tolerances, setTolerances] = React.useState<Array<Tolerance>>([]);
  const [multipliers, setMultipliers] = React.useState<Array<Multiplier>>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const resistor: IOhm = {
      BandA: parseInt(digit1),
      BandB: parseInt(digit2),
      BandC: digit3 ? parseInt(digit3) : undefined,
      BandD: parseInt(multiplier),
      Tolerance: parseFloat(tolerance),
    };
    const ohm = IOhmValueCalculator(resistor);
    swal(
      "Your resistor's value is: ",
      `${ohm} ohms with +-${resistor.Tolerance}% of tolerance`
    );
  };

  React.useEffect(() => {
    fetch("http://localhost:3001/multipliers/", {
      method: "GET",
      redirect: "follow",
    })
      .then((response) => response.json())
      .then((result) => setMultipliers(result.data))
      .catch((error) => console.log("error", error));
    fetch("http://localhost:3001/tolerances/", {
      method: "GET",
      redirect: "follow",
    })
      .then((response) => response.json())
      .then((result) => setTolerances(result.data))
      .catch((error) => console.log("error", error));
  }, []);

  const renderMultiplierOptions = () => {
    return multipliers.map((item: Multiplier) => (
      <option value={item.zeros}>{item.color}</option>
    ));
  };
  const renderToleranceOptions = () => {
    return tolerances.map((item: Tolerance) => (
      <option value={item.percentage}>{item.color}</option>
    ));
  };

  return (
    <div className="mainContainer">
      <form className="formCard" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="digit1">Digit 1</label>
          <select
            data-testid="selectBandA"
            name="digit1"
            value={digit1}
            onChange={(e) => setDigit1(e.target.value)}
          >
            <option value="">No Band</option>
            <option value="0">Black</option>
            <option value="1">Brown</option>
            <option value="2">Red</option>
            <option value="3">Orange</option>
            <option value="4">Yellow</option>
            <option value="5">Green</option>
            <option value="6">Blue</option>
            <option value="7">Purple</option>
            <option value="8">Grey</option>
            <option value="9">White</option>
          </select>
        </div>
        <div>
          <label>Digit 2</label>
          <select
            data-testid="selectBandB"
            name="digit2"
            value={digit2}
            onChange={(e) => setDigit2(e.target.value)}
          >
            <option value="">No Band</option>
            <option value="0">Black</option>
            <option value="1">Brown</option>
            <option value="2">Red</option>
            <option value="3">Orange</option>
            <option value="4">Yellow</option>
            <option value="5">Green</option>
            <option value="6">Blue</option>
            <option value="7">Purple</option>
            <option value="8">Grey</option>
            <option value="9">White</option>
          </select>
        </div>
        <div>
          <label>Digit 3</label>
          <select
            data-testid="selectBandC"
            name="digit3"
            value={digit3}
            onChange={(e) => setDigit3(e.target.value)}
          >
            <option value="">No Band</option>
            <option value="0">Black</option>
            <option value="1">Brown</option>
            <option value="2">Red</option>
            <option value="3">Orange</option>
            <option value="4">Yellow</option>
            <option value="5">Green</option>
            <option value="6">Blue</option>
            <option value="7">Purple</option>
            <option value="8">Grey</option>
            <option value="9">White</option>
          </select>
        </div>
        <div>
          <label>Multiplier</label>
          <select
            data-testid="selectBandD"
            name="multiplier"
            value={multiplier}
            onChange={(e) => setMultiplier(e.target.value)}
          >
            {renderMultiplierOptions()}
          </select>
        </div>
        <div>
          <label>Tolerance</label>
          <select
            data-testid="selectTolerance"
            name="tolerance"
            value={tolerance}
            onChange={(e) => setTolerance(e.target.value)}
            required
          >
            <option value=""></option>
            {renderToleranceOptions()}
          </select>
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
