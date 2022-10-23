import React from "react";

const UiInput = (props) => {
  return (
    <div>
      <label htmlFor={props.name} className="block pt-2 font-xs font-medium font-poppins text-[#6B778C]">
        {props.label}
      </label>
      <input
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        onChange={props.onChange}
        defaultValue={props.value}
        disabled={props.disabled}
        className="border-[2px] border-inputBorder w-full block my-1 rounded focus:outline-inputBorder p-1 text-lg"
      />
    </div>
  );
};

export default UiInput;