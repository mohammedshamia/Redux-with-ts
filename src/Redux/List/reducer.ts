import {
  ActionsType,
  IState,
  IStateItemReducer,
  ItemReducerActionsType,
  ListItem,
} from "../../@types/types";
import { ListConstants } from "./constants";

export const listReducer = (
  initialState: IState = {
    isLoading: false,
    list: [],
    error: "",
  },
  action: ActionsType
): IState => {
  switch (action.type) {
    case ListConstants.GET_LIST_ITEMS_START:
      return {
        ...initialState,
        isLoading: true,
      };
    case ListConstants.GET_LIST_ITEMS_SUCCESS:
      return {
        ...initialState,
        isLoading: false,
        list: action.payload,
      };
    case ListConstants.GET_LIST_ITEMS_FAIL:
      return {
        ...initialState,
        isLoading: false,
        error: action.payload,
      };

    case ListConstants.ADD_ITEM:
      return {
        ...initialState,
        list: [action.payload, ...initialState.list],
      };

    default:
      return initialState;
  }
};

export const itemReducer = (
  initialState: IStateItemReducer = {
    isLoading: false,
    item: {} as ListItem,
    error: "",
  },
  action: ItemReducerActionsType
): IStateItemReducer => {
  switch (action.type) {
    case ListConstants.GET_ITEM_START:
      return {
        ...initialState,
        isLoading: true,
      };
    case ListConstants.GET_ITEM_SUCCESS:
      return {
        ...initialState,
        isLoading: false,
        item: action.payload,
        error: "",
      };
    case ListConstants.GET_ITEM_FAIL:
      return {
        ...initialState,
        isLoading: false,
        error: action.payload,
      };
    default:
      return initialState;
  }
};
