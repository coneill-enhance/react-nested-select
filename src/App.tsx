import "./App.css";

import { useState } from "react";

import reactLogo from "./assets/react.svg";
import NestedSelect from "./components/NestedSelect";
import dataFormatter from "./utilities/nestedSelectDataProcessor";
function App() {
  const [count, setCount] = useState(0);
  const longTreeTemplate = {
    root: {
      Fruit: {
        Apple: null,
        Orange: null,
        Lemon: null,
        Berries: {
          Strawberry: {
            SmashBurger: null,
            Chowder: null,
            Ravioli: null,
            MacAndCheese: null,
            Brownies: null,
          },
          Blueberry: null,
        },
        Banana: null,
      },
      Meals: {
        America: {
          SmashBurger: null,
          Chowder: null,
          Ravioli: null,
          MacAndCheese: null,
          Brownies: null,
        },
        Europe: {
          Risotto: null,
          Spaghetti: null,
          Pizza: null,
          Weisswurst: null,
          Spargel: null,
        },
        Asia: {
          Curry: null,
          PadThai: null,
          Jiaozi: null,
          Sushi: null,
        },
        Australia: {
          PotatoWedges: null,
          PokeBowl: null,
          LemonCurd: null,
          KumaraFries: null,
        },
      },
      Desserts: {
        Cookies: null,
        IceCream: null,
      },
      Drinks: {
        PinaColada: null,
        Cola: null,
        Juice: null,
      },
    },
  };

  const formattedData = dataFormatter(longTreeTemplate);

  return (
    <div className="App">
      <NestedSelect treeData={formattedData} />
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
