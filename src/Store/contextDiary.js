import {createContext, useReducer} from 'react';
export const DiariesContext = createContext();

export const GET_DIARIES = 'GET_DIARIES';
export const ADD_DIARY = 'ADD_DIARY';

const initialDiariesState = {
  diaries: [],
};
const DiariesReducer = (state = initialDiariesState, action) => {
  switch (action.type) {
    case GET_DIARIES:
      return {...state, diaries: action.payload.diaries};

    case ADD_DIARY:

    default:
      return state;
  }
};

export const DiariesProvider = ({children}) => {
  const [diariesState, diariesDispatch] = useReducer(
    DiariesReducer,
    initialDiariesState,
  );
  const {diaries} = diariesState;
  return (
    <DiariesContext.Provider
      value={{
        diaries,
        diariesDispatch,
      }}>
      {children}
    </DiariesContext.Provider>
  );
};
