import {useEffect, useState} from "react";
import {validEmailError, validPasswordError, validUserNameError} from "./Constans";

const useValidation = (value, validations) => {

  const [isEmpty, setIsEmpty] = useState(true);
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [mesError, setMesError] = useState('');
  const [inputValid, setInputValid] = useState(false);

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case 'isEmpty':
          value ? setIsEmpty(false) : setIsEmpty(true);
          setMesError('пустота');
          break;
        case 'isName':
          const regulName = /^[A-Za-zА-ЯЁа-яё ]+$/;
          regulName.test(value) ? setNameError(false) : setNameError(true);
          setMesError(validUserNameError);
          break;
        case 'isEmail':
          const regulEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          regulEmail.test(String(value).toLowerCase()) ? setEmailError(false) : setEmailError(true);
          setMesError(validEmailError);
          break;
        case 'isPassword':
          const regulPassword  = /^[\+\-]?\d*\.?\d+(?:[Ee][\+\-]?\d+)?$/;
          regulPassword.test(value) ? setPasswordError(false) : setPasswordError(true);
          setMesError(validPasswordError);
          break;
      }
    }
  }, [value, mesError]);

  useEffect(() => {

    if (isEmpty || emailError || passwordError || nameError) {
      setInputValid(false);
    } else {
      setInputValid(true);
    }

  }, [isEmpty, emailError, passwordError, nameError])


  return {
    isEmpty,
    mesError,
    emailError,
    passwordError,
    inputValid,
    nameError,
  }
}

const useInput = (initialValue, valodations) => {
  const [value, setValue] = useState(initialValue);
  const [isDerty, setIsDerty] = useState(false);
  const valid = useValidation(value, valodations);

  const onChange = (e) => {
    setValue(e.target.value);
  }

  const onBlur = (e) => {
    setIsDerty(true);
  }

  return {
    value,
    onChange,
    onBlur,
    isDerty,
    ...valid,
  }

}

export default useInput;
