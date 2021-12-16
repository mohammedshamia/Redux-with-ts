import APIInstance from "../../API";
import { ListConstants } from "./constants";
import {
  ActionsType,
  ItemReducerActionsType,
  ListItem,
} from "../../@types/types";
import { Dispatch } from "redux";
import { AxiosResponse } from "axios";

export const getItems =
  (): ((dispatch: Dispatch<ActionsType>) => Promise<void>) =>
  async (dispatch: Dispatch<ActionsType>) => {
    try {
      dispatch({
        type: ListConstants.GET_LIST_ITEMS_START,
      });

      const response: AxiosResponse = await APIInstance.get("/todos");

      dispatch({
        type: ListConstants.GET_LIST_ITEMS_SUCCESS,
        payload: response.data,
      });
    } catch (e: any) {
      dispatch({
        type: ListConstants.GET_LIST_ITEMS_FAIL,
        payload: e.message,
      });
    }
  };

export const addItemAction = (payload: ListItem): ActionsType => {
  return {
    type: ListConstants.ADD_ITEM,
    payload,
  };
};

export const getItem =
  (
    id: string
  ): ((dispatch: Dispatch<ItemReducerActionsType>) => Promise<void>) =>
  async (dispatch: Dispatch<ItemReducerActionsType>) => {
    try {
      dispatch({
        type: ListConstants.GET_ITEM_START,
      });

      const response: AxiosResponse = await APIInstance.get("/todos/" + id);

      dispatch({
        type: ListConstants.GET_ITEM_SUCCESS,
        payload: response.data,
      });
    } catch (e: any) {
      dispatch({
        type: ListConstants.GET_ITEM_FAIL,
        payload: e.message,
      });
    }
  };
