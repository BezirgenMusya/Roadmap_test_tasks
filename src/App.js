import React, {useState} from "react";
import "./styles.css";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/index.js";
import Formik from "./pages/formik/index.js";
import ReactHookForm from "./pages/react_hook_form/index.js";
import { activeQuestionContext } from "./contexts/activeQuestion"

export default function App() {
  const [activeQuestion, setActiveQuestion] = useState(0)
  return (
    <activeQuestionContext.Provider value={{activeQuestion, setActiveQuestion}}>
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
    </activeQuestionContext.Provider>
  );
}
