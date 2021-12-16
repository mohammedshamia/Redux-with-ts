import React from "react";
import { useSelector } from "react-redux";
import ToDoListClassComponent from "../Components/ToDoListClassComponent";
import { useNavigate } from "react-router";
import { AppState } from "../Redux/store";
// import ToDoList from "../Components/ToDoList";

function Home(): JSX.Element {
  const navigate = useNavigate();

  const {
    list: {
      /** We took the list from listObject*/
      list,
      isLoading,
      error,
    },
  } = useSelector((state: AppState): AppState => state);

  return (
    <>
      {/** Functional component with redux*/}
      {/*<ToDoList list={list} />*/}

      {/** Class component with redux*/}
      <ToDoListClassComponent />

      {error ? (
        <div>{error}</div>
      ) : (
        <>
          {isLoading ? (
            <span>Loading...</span>
          ) : (
            list.map((item) => (
              <div
                className={"item"}
                key={item.id}
                onClick={() => navigate(`/${item.id}`)}
              >
                {item.title}
              </div>
            ))
          )}
        </>
      )}
    </>
  );
}

export default Home;
