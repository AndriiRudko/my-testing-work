const Input = ({ formik, title, type, errorsText, id }) => (
  <div className="header-item">
    <div className="col-35">
      <label htmlFor={id}>{title}</label>
    </div>
    <div className="col-65">
      <div className="header-item-error">
        <input
          id={id}
          name={id}
          type={type}
          value={formik.values[id]}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={
            formik.errors[id] ? "form-control error-input" : "form-control"
          }
        />
        {formik.errors[id] && formik.touched[id] ? (
          <div className="password-warning">{formik.errors[id]}</div>
        ) : null}
      </div>
      <div className="errors-text">{errorsText}</div>
    </div>
  </div>
);

export default Input;
