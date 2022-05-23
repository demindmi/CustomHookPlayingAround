import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName, //assigning aliases
    hasError: nameInputHasError,
    isValid: enteredNameIsValid,
    valueChangeHandler: nameInputChangeHandler,
    valueBlurHandler: nameInputBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== ""); //this function is not executed here, just passed to the hook. In hooks its called validateValue

  const {
    value: enteredEmail, //assigning aliases
    hasError: emailInputHasError,
    isValid: enteredEmailIsValid,
    valueChangeHandler: emailInputChangeHandler,
    valueBlurHandler: emailInputBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.trim() !== "" && value.trim().includes("@")); //this function is not executed here, just passed to the hook. In hooks its called validateValue

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (!enteredNameIsValid || !enteredEmailIsValid) {
      return;
    }
    resetNameInput();
    resetEmailInput();
  };

  const nameInputClasses = nameInputHasError ? "form-control invalid" : "form-control";
  const emailInputClasses = emailInputHasError ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputHasError && <p className="error-text">Name must not be empty.</p>}
      </div>

      <div>
        <div className={emailInputClasses}>
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            onBlur={emailInputBlurHandler}
            value={enteredEmail}
            onChange={emailInputChangeHandler}
          />
        </div>
        {emailInputHasError && <p className="error-text"> Please use valid email.</p>}
      </div>

      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};
export default SimpleInput;
