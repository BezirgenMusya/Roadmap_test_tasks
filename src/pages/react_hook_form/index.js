import { useContext } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { additionalData } from "../../assets/additionalData";
import Dots from "../../components/Dots";
import Form from "../../components/Form";
import { activeQuestionContext } from "../../contexts/activeQuestion"

const ReactHookForm = () => {
  let { activeQuestion, setActiveQuestion } = useContext(activeQuestionContext);
  const methods = useForm({
    defaultValues: {
      firstQuestion_answer: [],
      secondQuestion_answer: "",
    }
  });

  const onSubmit = ({firstQuestion_answer, secondQuestion_answer}) => {
    if (Object.values({firstQuestion_answer, secondQuestion_answer}).some((item) => item.length)) {
      if(firstQuestion_answer.length && activeQuestion !== additionalData.questions.length - 1){
        setActiveQuestion(++activeQuestion)
      }
      if(secondQuestion_answer.length){
        alert("test")
      }
      
    } else {
      methods.setError("requiredOne", { message: "Please select one answer" })
    }
  };

  const onChange = (event) => {
    methods.clearErrors(["requiredOne"])
  }


  return (
    <div>
      <h1>React Hook Form</h1>
      {Object.keys(additionalData.questions).map((item, id) => {
        return (
          <Dots
            key={id}
            activeOne={id === activeQuestion}
            questionsSwicher={setActiveQuestion}
            questionName={id}
          />
        )
      })}
      <h3>{additionalData.questions[activeQuestion].title}</h3>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} onChange={onChange}>
          <Form key={activeQuestion} activeQuestion={activeQuestion} />

          <div>{methods.formState.errors.requiredOne && <span>{methods.formState.errors.requiredOne.message}</span>}</div>
          <input type="submit" value={activeQuestion === "secondQuestion" ? "See results" : "Next Question"} />
        </form>
      </FormProvider>
    </div>
  );
};

export default ReactHookForm;
