import { useReducer } from "react";

const initialInputState = {
  value: "",
  isTouched: false,
};

const inputStateReducer = (initialState, action) => {
  if (action.type === "INPUT") {
    return { value: action.value, isTouched: initialState.isTouched };
  }
  if (action.type === "BLUR") {
    return { isTouched: true, value: initialState.value };
  }
  if (action.type === "RESET") {
    return { isTouched: false, value: "" };
  }
  return inputStateReducer;
};

const useHook = (validator) => {
  const [inputState, dispatch] = useReducer(inputStateReducer, initialInputState);

  const inputIsValid = validator(inputState.value);
  const valueInputIsInvalid = !inputIsValid && inputState.isTouched;

  const valueInputHandler = (e) => {
    dispatch({ type: "INPUT", value: e.target.value });
  };

  const valueBlurHandler = () => {
    dispatch({ type: "BLUR" });
  };

  const clearInput = () => {
    dispatch({ type: "RESET" });
  };

  return {
    value: inputState.value,
    isValid: inputIsValid,
    hasError: valueInputIsInvalid,
    valueInputHandler,
    valueBlurHandler,
    cleanUp: clearInput,
  };
};

export default useHook;
