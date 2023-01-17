import "./styles.css";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/index.js";
import Formik from "./pages/formik/index.js";
import ReactHookForm from "./pages/react_hook_form/index.js";

export default function App() {
  return (
    <div className="App">
      <header>
        <Navigation />
      </header>

      <div>
        <Routes>
          <Route index path={"/"} element={<ReactHookForm />} />
          <Route path={"/formik"} element={<Formik />} />
        </Routes>
      </div>
    </div>
  );
}
