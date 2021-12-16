import { ListConstants } from "../Redux/List/constants";

export interface IState {
  isLoading: boolean;
  list: ListItem[];
  error: string;
}
export interface IStateItemReducer {
  isLoading: boolean;
  item: ListItem;
  error: string;
}

export interface ListItem {
  completed?: boolean;
  id: number;
  title: string;
  userId?: number;
}

export interface GetItemsListStartAction {
  type: ListConstants.GET_LIST_ITEMS_START;
}

export interface GetItemsListSuccessAction {
  type: ListConstants.GET_LIST_ITEMS_SUCCESS;
  payload: ListItem[];
}

export interface GetItemsListFailAction {
  type: ListConstants.GET_LIST_ITEMS_FAIL;
  payload: string;
}

export interface GetItemStartAction {
  type: ListConstants.GET_ITEM_START;
}

export interface GetItemSuccessAction {
  type: ListConstants.GET_ITEM_SUCCESS;
  payload: ListItem;
}

export interface GetItemFailAction {
  type: ListConstants.GET_ITEM_FAIL;
  payload: string;
}

export interface AddItemAction {
  type: ListConstants.ADD_ITEM;
  payload: ListItem;
}

export type ActionsType =
  | AddItemAction
  | GetItemsListStartAction
  | GetItemsListSuccessAction
  | GetItemsListFailAction;

export type ItemReducerActionsType =
  | GetItemStartAction
  | GetItemSuccessAction
  | GetItemFailAction;

export type AllListActions = ItemReducerActionsType | ActionsType;
