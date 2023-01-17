import { useForm } from "react-hook-form";

const ReactHookForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <h1>ReactHookForm</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input defaultValue="test" {...register("example")} />
        <input {...register("exampleRequired", { required: true })} />

        {errors.exampleRequired && <span>This field is required</span>}
        <input type="submit" />
      </form>
    </div>
  );
};
export default ReactHookForm;
