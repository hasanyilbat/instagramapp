import React, { useEffect } from "react";
import { useState } from "react";
import { useField } from "formik";
import classNames from "classnames";

const Input = ({ label, type = "text", ...props }) => {
  const [field, meta, helpers] = useField(props);
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
        type={inputType}
        className={classNames({
          " w-full h-[38px] rounded-sm outline-none  px-2 text-xs bg-zinc-50": true,
          "pt-[10px]": field.value,
        })}
        {...props}
        {...field}
      />
      <small
        className={classNames({
          "absolute  left-2 -translate-y-1/2  text-gray-500 cursor-text pointer-events-none transition-all": true,
          "text-xs top-1/2": !field.value,
          "text-[10px] top-2.5 ": field.value,
        })}
      >
        {label}
      </small>
      {type === "password" && field.value && (
        <div
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
