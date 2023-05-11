import React from "react";

const InputCheckbox = ({ formik, handleClick, savedDates }) => (
  <>
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
          <button onClick={handleClick} className="btn-change" type="submit">
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
  </>
);

export default InputCheckbox;
