const initialState = {
  hello: 'siema',
  items: [
    {
      name: 'Age 40+',
      hasChild: false,
      childs: [],
    },
    {
      name: 'Ethnicity',
      hasChild: true,
      childs: [
        {
          name: 'Hispanic',
        },
        {
          name: 'Black',
        },
      ],
    },
    {
      name: 'Income yearly 45k USD+',
      hasChild: true,
      childs: [
        {
          name: 'Hispanic',
        },
        {
          name: 'Black',
        },
        {
          name: 'Hispanic',
        },
        {
          name: 'Black',
        },
      ],
    },
  ],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default rootReducer;
