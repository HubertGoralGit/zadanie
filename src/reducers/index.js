import { ADD_ITEM, ADD_CHILD_ITEM, REMOVE_ITEM } from '../constants/index';

const initialState = {
  items: [
    {
      id: 'asdfgh',
      name: 'ja',
      hasChild: true,
      childs: [],
    },
    {
      id: 'dsadasd',
      name: 'ja',
      hasChild: true,
      childs: [],
    },
  ],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload.item],
      };
    case ADD_CHILD_ITEM://[...item.childs, action.payload.item]
      return {
        ...state,
        items: state.items.map((item, i) => item.id === action.payload.itemId ? {...item, childs: item.childs.concat(action.payload.item)} : item)
      }
    case REMOVE_ITEM:
      return {
        ...state,
        items: [...state.items.filter((item) => item.id !== action.payload.id)],
      };
    default:
      return state;
  }
};

export default rootReducer;
