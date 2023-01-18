import React from "react";
import { useForm } from "react-hook-form";

const AnswerCompo = ({ type, registerName, label, register, defaultValue }) => {
	return (
		<div>
			<input
				type={type}
				defaultChecked={defaultValue}
				{...register(registerName)}
				value={label}
			/>
			<label>{label}</label>
		</div>
	);
};

export default AnswerCompo;