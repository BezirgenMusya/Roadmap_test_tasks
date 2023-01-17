import "./styles.css";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";

const TestComponent = () => {
  return (
    <div>
      <h1>TestComponent</h1>
    </div>
  );
};

const Main = () => {
  return (
    <div>
      <h1>Main</h1>
    </div>
  );
};

export default function App() {
  return (
    <div className="App">
      <header>
        <Navigation />
      </header>

      <div>
        <Routes>
          <Route index path={"/"} element={<Main />} />
          <Route path={"/formik"} element={<TestComponent />} />
        </Routes>
      </div>
    </div>
  );
}
