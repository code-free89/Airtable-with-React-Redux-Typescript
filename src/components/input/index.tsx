import React, { forwardRef } from "react";
import { FieldError } from "react-hook-form";
import keyboardKeys from "../../constants/keyboardKeys";

type Props = {
  label?: string;
  name: string;
  type: string;
  className?: string;
  required?: boolean;
  placeholder?: string;
  register: any;
  error?: FieldError;
};

const Input = forwardRef(
  (
    {
      className = "",
      name,
      type,
      required = false,
      placeholder = "",
      label,
      register = {},
      error,
    }: Props,
    ref
  ) => {
    const keyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
      const value = e.currentTarget.value;
      if (!value.trim()) {
        if (e.code === keyboardKeys.space) {
          e.preventDefault();
        }
      }
    };

    return (
      <div className={className}>
        {label ? (
          <label htmlFor={name} className="block text-sm font-bold text-black">
            {label}
          </label>
        ) : null}
        <div className="mt-1">
          <input
            ref={ref}
            tabIndex={0}
            id={name}
            name={name}
            type={type}
            autoComplete={type}
            required={required}
            placeholder={placeholder}
            className="appearance-none block px-2 py-1 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none"
            onKeyDown={keyDownHandler}
            {...register}
          />
        </div>
        {error ? (
          <div className="flex-1">
            <p className="mt-1 text-xs text-red-500">{error.message}</p>
          </div>
        ) : null}
      </div>
    );
  }
);

export default Input;
