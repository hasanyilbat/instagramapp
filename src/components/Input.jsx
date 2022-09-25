import React, { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

const Input = ({ label, type = "text", ...props }) => {
  const inputRef = useRef();
  const [show, setShow] = useState(false);
  const [inputType, setInputType] = useState(type);

  useEffect(() => {
    if (show) {
      setInputType("text");
    } else if (type === "password") {
      setInputType("password");
    }
  }, [show]);

  return (
    <label className=" relative flex  border rounded-sm focus-within:border-gray-40">
      <input
        required={true}
        type={inputType}
        className=" border w-full h-[38px] rounded-sm outline-none  px-[6.2px] peer valid:pt-3 text-xs border-none"
        {...props}
      />
      <small className="absolute top-1/2 left-2 -translate-y-1/2 text-xs text-gray-500 cursor-text pointer-events-none transition-all peer-valid:text-[10px] peer-valid:top-2">
        {label}
      </small>
      {type === "password" && props?.value && (
        <div
          type="button"
          className="h-full flex items-center font-semibold pr-2 cursor-pointer select-none"
          onClick={(e) => setShow((show) => !show)}
        >
          {show ? "Hide" : "Show"}
        </div>
      )}
    </label>
  );
};

export default Input;
