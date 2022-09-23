import Pages from "./pages/Pages";
import { StateContext } from "./utils/context";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast"
function App() {
  return (
    <BrowserRouter>
      <StateContext>
        <Toaster/>
        <div className="App">
          <Pages />
        </div>
       

      </StateContext>
    </BrowserRouter>
  );
}

export default App;
