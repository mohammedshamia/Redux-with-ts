import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getItem } from "../../Redux/List/actions";
import { AppState } from "../../Redux/store";
import { IStateItemReducer } from "../../@types/types";
import { Container } from "./Styles";

function ItemPage(): JSX.Element {
  const { id } = useParams<{ id: string }>();
  const { isLoading, error, item } = useSelector(
    (state: AppState): IStateItemReducer => state.item
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItem(id as string));
  }, [dispatch, id]);

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <Container error={error}>
      {id} : {error ? error : item.title}
    </Container>
  );
}

export default ItemPage;
