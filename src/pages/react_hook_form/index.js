import { useState } from "react";
import { useForm } from "react-hook-form";
import { additionalData } from "../../assets/additionalData";
import AnswerCompo from "../../components/Answer/index.jsx";

const ReactHookForm = () => {
  const [questionNum, setQuestionNum] = useState("firstQuestion");
  const [result, setResult] = useState({
    frirstQuestionAnswer: null,
    secondQuestionAnswer: null,
  });

  console.log(Object.keys(additionalData.questions));

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm({
    defaultValues:{
      secondQuestion_answer: "",
    }
  });

  const onSubmit = (data) => {
    if (Object.values(data).some((item) => item.length)) {
      const selectedAnsverId = Object.values(data).findIndex((item) => item.length)
      setQuestionNum("secondQuestion")
      if (questionNum === "firstQuestion") {
        setResult(prev => ({ ...prev, frirstQuestionAnswer: Object.values(data)[selectedAnsverId] }))
      } else {
        setResult(prev => ({ ...prev, secondQuestionAnswer: Object.values(data)[selectedAnsverId] }))
      }
    } else {
      setError("requiredOne", { message: "Please select one answer" })
    }
  };

  const onChange = (event) => {
    clearErrors(["requiredOne"])
  }

  return (
    <div>
      <h1>React Hook Form</h1>
      

      {
        result.secondQuestionAnswer?.length
          ? <div>
            <h2>Congrats you are fag</h2>
          </div>
          : <div>
            <h3>{additionalData.questions[questionNum].title}</h3>

            <form onSubmit={handleSubmit(onSubmit)} onChange={onChange} >
              {additionalData.questions[questionNum].answers.map((item, index) => {
                return (
                  <AnswerCompo
                    key={index}
                    type={item.type}
                    registerName={item.registerName}
                    label={item.label}
                    register={register}
                    defaultValue={item.defaultValue}
                  />
                )
              })}

              <div>{errors.requiredOne && <span>{errors.requiredOne.message}</span>}</div>

              <input type="submit" value={questionNum === "secondQuestion" ? "See results" : "Next Question"} />
            </form>
          </div>

      }


    </div>
  );
};

export default ReactHookForm;
