import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk, faPenSquare } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Header = () => {
  const [inputValue, setInputValue] = useState("");
  const [savedValue, setSavedValue] = useState(
    "Прежде чем действовать, надо понять"
  );
  const [editing, setEditing] = useState(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveClick = () => {
    setSavedValue(inputValue);
    setEditing(false);
  };

  return (
    <>
      <header className="header">
        <h2>Здравствуйте, Человек №359641</h2>
        {editing ? (
          <div>
            <input
              type="text"
              value={editing ? inputValue : savedValue}
              onChange={handleInputChange}
            />
            <button onClick={handleSaveClick}>
              <FontAwesomeIcon icon={faFloppyDisk} />
            </button>
          </div>
        ) : (
          <div onClick={handleEditClick} className="change-status">
            Сменить статус
            <FontAwesomeIcon icon={faPenSquare} />
          </div>
        )}
      </header>
      <div className="btnsclose">{savedValue}</div>
    </>
  );
};

export default Header;
