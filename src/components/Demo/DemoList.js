import React from "react";
import ListItem from "./ListItem";

const DemoList = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <ul>
        {props.items.map((item) => (
          <ListItem key={item} value={item} />
        ))}
      </ul>
    </div>
  );
};

export default DemoList;
