import { useState } from "react";
import { useFormik } from "formik";
import Clock from "../Clock/Clock";
import Header from "../Header/Header";
import Input from "../Input/Input";
import { citiesArray } from "./cities";
import { validate } from "./utils";
import InputCheckbox from "../Input/InputCheckbox";
import InputCities from "../Input/InputCities";

function Form() {
  const formik = useFormik({
    initialValues: {
      password: "",
      retry_password: "",
      email: "",
    },
    validate,
    Clock,
    onSubmit: (values) => console.log(JSON.stringify(values, null, 2)),
  });
  const [editing, setEditing] = useState(false);
  const [selectedCity, setSelectedCity] = useState("");
  const [savedDates, setSavedDates] = useState([]);

  const handleClick = () => {
    const now = new Date();
    setSavedDates([...savedDates, now.toLocaleString()]);
  };

  return (
    <form className="form container" onSubmit={formik.handleSubmit}>
      <div className="container">
        <Header editing={editing} handleEditClick={() => setEditing(true)} />
        <InputCities
          selectedCity={selectedCity}
          setSelectedCity={setSelectedCity}
          citiesArray={citiesArray}
        />
        <Input
          id="password"
          formik={formik}
          title="Пароль"
          type="text"
          errorsText="Ваш новый пароль должен содержать не менее 5 символов."
        />
        <Input
          id="retry_password"
          formik={formik}
          title="Пароль еще раз"
          type="text"
          errorsText="Повторите пароль, пожалуйста, это обезопасит вас с нами на случай ошибки."
        />
        <Input
          id="email"
          formik={formik}
          title="Электронная почта"
          type="email"
          errorsText="Можно изменить адрес, указанный при регистрации."
        />
        <InputCheckbox
          formik={formik}
          handleClick={handleClick}
          savedDates={savedDates}
        />
      </div>
    </form>
  );
}

export default Form;
