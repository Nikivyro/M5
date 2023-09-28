// inputRedux.js

const initialState = {
    inputValue: '',
  };
  
  // Reducer
  const inputReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_INPUT_VALUE':
        return {
          ...state,
          inputValue: action.payload,
        };
      default:
        return state;
    }
  };
  
  // Actions
  export const updateInputValue = (value) => ({
    type: 'UPDATE_INPUT_VALUE',
    payload: value,
  });
  
  export default inputReducer;