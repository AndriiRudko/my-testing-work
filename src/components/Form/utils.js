export const validate = (values) => {
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
