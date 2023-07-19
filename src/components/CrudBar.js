import Icon from "react-crud-icons";

import "./UI/CrudIcons.css";
import "./CrudBar.css";

const CrudBar = () => {

  return (
    <ul className="crud-bar">
      <Icon
        name="upload"
        tooltip="Upload photo"
        theme="dark"
        size="large"
        /*onClick={doSomething}*/
      />
      <Icon
        name="add"
        tooltip="Connect to author"
        theme="dark"
        size="large"
        /*onClick={doSomething}*/
      />
      <Icon
        name="edit"
        tooltip="Edit"
        theme="dark"
        size="large"
        /*onClick={doSomething}*/
      />
      <Icon
        name="delete"
        tooltip="Delete"
        theme="dark"
        size="large"
        /*onClick={doSomething}*/
      />
    </ul>
  );
};

export default CrudBar;
