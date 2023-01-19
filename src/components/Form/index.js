import { useFormContext } from "react-hook-form";
import { additionalData } from "../../assets/additionalData";
import AnswerCompo from "../../components/Answer/index.jsx";

const Form = ({ activeQuestion, }) => {
  const { register } = useFormContext();
  return (
    <>
      {additionalData.questions[activeQuestion].answers.map((item, index) => {
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
    </>
  );
};

export default Form;
