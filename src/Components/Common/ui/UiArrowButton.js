import React from 'react';
import { AiOutlineRight } from 'react-icons/ai';

const UiArrowButton = (props) => {
    return (

        <div >
            <button className="flex justify-center items-center font-poppins font-normal  text-lg px-4 py-1 rounded bg-primary-1 text-white mt-2">  {props.label} <AiOutlineRight className="text-white font-bold text-xl ml-2 font-semibold" />  </button>
        </div>

    );
};

export default UiArrowButton;