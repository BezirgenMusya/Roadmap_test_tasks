import React from "react";
import { useForm } from "react-hook-form";

const AnswerCompo = ({ type, registerName, label, name, register }) => {
	return (
		<div>
			<input type={type} defaultChecked={false} {...register(registerName)} />
			<label>{label}</label>
		</div>
	);
};

export default AnswerCompo;