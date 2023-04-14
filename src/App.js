import React, { useState, useCallback, useMemo } from "react";

import DemoList from "./components/Demo/DemoList";
import Button from "./components/UI/Button/Button";

function App() {
  const [listTitle, setListTitle] = useState("My List");
  const [isDescending, setIsDescending] = useState(false);

  const changeTitleHandler = useCallback(() => {
    setListTitle(isDescending ? "Ascending Order" : "Descending Order");
    setIsDescending((prevState) => !prevState);
  }, [isDescending]);

  const listItems = useMemo(() => {
    if (isDescending) {
      return [10, 9, 5, 3, 1];
    } else {
      return [1, 3, 5, 9, 10];
    }
  }, [isDescending]);

  return (
    <div className="app">
      <DemoList title={listTitle} items={listItems} />
      <Button onClick={changeTitleHandler}>
        {isDescending
          ? "Change to Ascending Order"
          : "Change to Descending Order"}
      </Button>
    </div>
  );
}

export default App;
