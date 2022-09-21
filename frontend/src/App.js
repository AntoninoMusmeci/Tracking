import Pages from "./pages/Pages";
import { StateContext } from "./utils/context";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <StateContext>
        <div className="App">
          <Pages />
        </div>
      </StateContext>
    </BrowserRouter>
  );
}

export default App;
