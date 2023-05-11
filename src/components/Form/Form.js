import { useState } from "react";
import { useFormik } from "formik";
import Clock from "../Clock/Clock";
import Header from "../Header/Header";
import Input from "../Input/Input";
import { citiesArray } from "./cities";

const validate = (values) => {
  const errors = {};

  if (!values.password) {
    errors.password = "Укажите пароль";
  }

  if (!values.retry_password) {
    errors.retry_password = "Укажите пароль";
  }

  if (!values.email) {
    errors.email = "Укажите E-mail";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Неправильный email адрес";
  }

  if (values.password !== values.retry_password) {
    errors.retry_password = "Пароли не совпадают";
  }

  return errors;
};

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

  function handleClick() {
    const now = new Date();
    setSavedDates([...savedDates, now.toLocaleString()]);
  }

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  return (
    <form className="form container" onSubmit={formik.handleSubmit}>
      <div className="container">
        <Header editing={editing} handleEditClick={handleEditClick} />

        <div className="option-city">
          <div className="col-35">
            {" "}
            <label>Ваш город</label>
          </div>
          <div className="col-65">
            <select value={selectedCity} onChange={handleCityChange}>
              <option value="">Ваш город</option>
              {citiesArray
                .filter((city) => city.population >= 50000)
                .sort((a, b) => a.city.localeCompare(b.city, "ru-RU"))
                .map((city) => (
                  <option key={city.city} value={city.city}>
                    {city.city} ({city.population}){" "}
                  </option>
                ))}
            </select>
          </div>
        </div>
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

        <div className="col-35">
          <label className="checkbox">Я согласен</label>
        </div>
        <div className="checkbox-div">
          {" "}
          <input
            name="terms"
            type="checkbox"
            value={formik.values.terms}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <div>
            <div className="checkbox-style">
              Принимать актуальную информацию на эмайл
            </div>
            <div className="footer-bottom">
              <button
                onClick={handleClick}
                className="btn-change"
                type="submit"
              >
                Изменить
              </button>
              <ul>
                {savedDates.map((date, index) => (
                  <div className="footer-bottom-text" key={index}>
                    Последние изменения: {date}
                  </div>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Form;
