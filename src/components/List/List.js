import React from "react";

import classes from "./List.module.css";

const List = ({ dataList, listItemRemved }) => {
  return (
    <div className={classes.container}>
      <ul className={classes.list}>
        {dataList.map((item, index) => (
          <li className={classes.listItem} onClick={() => listItemRemved(index)} >
            <div>
              <p>{item}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
