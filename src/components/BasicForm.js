import useHook from "../hooks/use-hook";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => isNotEmpty(value) && value.includes("@");

const BasicForm = (props) => {
  const {
    value: fname,
    isValid: fNameFormValid,
    hasError: fNameInputIsInValid,
    valueInputHandler: fnameInputHandler,
    valueBlurHandler: fNameBlurHandler,
    cleanUp: clearFname,
  } = useHook(isNotEmpty);

  const {
    value: lname,
    isValid: lNameFormValid,
    hasError: lNameInputIsInValid,
    valueInputHandler: lnameInputHandler,
    valueBlurHandler: lNameBlurHandler,
    cleanUp: clearLname,
  } = useHook(isNotEmpty);

  const {
    value: email,
    isValid: emailFormValid,
    hasError: emailInputIsInValid,
    valueInputHandler: emailInputHandler,
    valueBlurHandler: emailBlurHandler,
    cleanUp: clearEmail,
  } = useHook(isEmail);

  let formIsValid = false;

  if (fNameFormValid && lNameFormValid && emailFormValid) {
    formIsValid = true;
  }

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (!formIsValid) {
      return;
    }
    console.log("Submit Successful");
    clearFname();
    clearLname();
    clearEmail();
  };

  const fnameClass = !fNameInputIsInValid ? "form-control" : "form-control invalid";
  const lnameClass = !lNameInputIsInValid ? "form-control" : "form-control invalid";
  const emailClass = !emailInputIsInValid ? "form-control" : "form-control invalid";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={fnameClass}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={fname}
            onChange={fnameInputHandler}
            onBlur={fNameBlurHandler}
          />
          {fNameInputIsInValid && <p>Please fill out the input</p>}
        </div>
        <div className={lnameClass}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={lname}
            onChange={lnameInputHandler}
            onBlur={lNameBlurHandler}
          />
          {lNameInputIsInValid && <p>Please fill out the input</p>}
        </div>
      </div>
      <div className={emailClass}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          value={email}
          onChange={emailInputHandler}
          onBlur={emailBlurHandler}
        />
        {emailInputIsInValid && <p>Please fill out the input</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
