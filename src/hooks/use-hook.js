import { useState } from "react";

const useHook = (validator) => {
  const [value, setValue] = useState("");
  const [inputTouched, setInputTouched] = useState(false);

  const inputIsValid = validator(value);
  const valueInputIsInvalid = !inputIsValid && inputTouched;

  const valueInputHandler = (e) => {
    setValue(e.target.value);
  };

  const valueBlurHandler = () => {
    setInputTouched(true);
  };

  const clearInput = () => {
    setValue("");
    setInputTouched(false);
  };

  return {
    value,
    isValid: inputIsValid,
    hasError: valueInputIsInvalid,
    valueInputHandler,
    valueBlurHandler,
    cleanUp: clearInput,
  };
};

export default useHook;
