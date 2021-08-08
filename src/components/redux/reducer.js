
import * as actionTypes from './actionTypes';
  
  const initialState = {
    formData: {
      title: '',
      slug: '',
      createdAt: '',
      questions: [],
    }
  };
  
  const reducer = (state = initialState, action) => {
    let payload = action.payload;
    switch (action.type) {
      case actionTypes.ADD_FORM_TITLE:
        return {
          ...state,
          formData: {
            ...state.formData,
            title:payload.title,
            slug: payload.slug,
            createdAt: payload.createdAt,
          } 
        }
        break;
      case actionTypes.ADD_FORM_QUESTION:
        return {
          ...state,
          formData: {
            ...state.formData,
            questions:[...state.formData.questions, payload]
          } 
        }
      case actionTypes.CLEAR_STATE:
        return {
          formData: {
            title: '',
            slug: '',
            createdAt: '',
            questions: [],
          }
        }
        break;
    }
    return state;
  };
  
  export default reducer;