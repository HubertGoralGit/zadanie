import { ADD_ITEM, ADD_CHILD_ITEM, REMOVE_ITEM } from '../constants/index';

export const addItem = (itemContent) => {
  const getId = () => `${Math.random().toString(36).substr(2, 9)}`;

  return {
    type: ADD_ITEM,
    payload: {
      item: {
        id: getId(),
        childs: [],
        ...itemContent,
      },
    },
  };
};

export const addChildItem = (itemContent) => {
  const getId = () => `${Math.random().toString(36).substr(2, 9)}`;

  return {
    type: ADD_CHILD_ITEM,
    payload: {
      item: {
        id: getId(),
        ...itemContent,
      },
    },
  };
};

export const removeItem = (id) => {
  return {
    type: REMOVE_ITEM,
    payload: {
      id,
    },
  };
};
