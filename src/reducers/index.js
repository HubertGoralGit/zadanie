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
      // console.log(initialState.map((item) => item));
      initialState.items.map((item) => {
        if (item.id === 'asdfgh') {
          console.log('siema');
        }
      });
      return {
        ...state,
        items: [...state.items, action.payload.item],
      };
    case ADD_CHILD_ITEM:
      return {
        ...state,
        items: state.items.map((item) => {
          if ((item.id = 'asdfgh')) {
            item.name = action.payload.item;
          }
        }),
      };
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
