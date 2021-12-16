import { ChangeEvent, useEffect, useState } from "react";
import { addItemAction, getItems } from "../Redux/List/actions";
import { useDispatch } from "react-redux";
import { AllListActions, ListItem } from "../@types/types";
import { ThunkDispatch } from "redux-thunk";
import { AppState } from "../Redux/store";

interface Props {
  list: ListItem[];
}

function ToDoList({ list }: Props) {
  const [value, setValue] = useState<string>("");
  const dispatch = useDispatch<ThunkDispatch<AppState, any, AllListActions>>();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  const handleAddItem = () => {
    if (!value) return;
    dispatch(
      addItemAction({
        title: value,
        id: Math.random() * 1000,
      })
    );
    setValue("");
  };

  useEffect(() => {
    if (!list.length) dispatch(getItems());
  }, []);

  return (
    <div style={{ marginTop: 40 }}>
      <input type={"text"} onChange={handleInputChange} value={value} />

      <button type={"button"} onClick={handleAddItem}>
        Add Item
      </button>
    </div>
  );
}

export default ToDoList;
