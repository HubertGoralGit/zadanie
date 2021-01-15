import {
  ADD_ITEM,
  ADD_CHILD_ITEM,
  REMOVE_ITEM,
  REMOVE_CHILD_ITEM,
} from '../constants/index';

const initialState = {
  items: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload.item],
      };
    case ADD_CHILD_ITEM:
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.itemId
            ? { ...item, childs: [...item.childs, action.payload.item] }
            : item
        ),
      };
    case REMOVE_ITEM:
      return {
        ...state,
        items: [...state.items.filter((item) => item.id !== action.payload.id)],
      };
    case REMOVE_CHILD_ITEM:
      return {
        ...state,
        items: state.items.map((item, i) =>
          item.id === action.payload.itemId
            ? {
                ...item,
                childs: item.childs.filter(
                  (child) => child.id !== action.payload.id
                ),
              }
            : item
        ),
      };
    default:
      return state;
  }
};

export default rootReducer;
