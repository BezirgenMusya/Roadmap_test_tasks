import { createContext } from "react";

export const activeQuestionContext = createContext({
  activeQuestion: null,
  setActiveQuestion: (activeQuestion) => { },
});
