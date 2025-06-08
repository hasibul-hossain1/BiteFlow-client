export const initialState = {
  foods: {
    loading: true,
    error: null,
    data: [],
  },
  user: {
    loading: true,
    data: null,
  },
};


// Actions
export const FETCH_FOODS_START = "FETCH_FOODS_START";
export const FETCH_FOODS_SUCCESS = "FETCH_FOODS_SUCCESS";
export const FETCH_FOODS_ERROR = "FETCH_FOODS_ERROR";
export const ADD_NEW_FOOD="ADD_NEW_FOOD"

export const FETCH_USER_START = "FETCH_USER_START";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";


export function reducer(state, action) {
  switch (action.type) {
    // Foods cases
    case FETCH_FOODS_START:
      return {
        ...state,
        foods: { ...state.foods, loading: true, error: null },
      };
    case FETCH_FOODS_SUCCESS:
      return {
        ...state,
        foods: { loading: false, error: null, data: action.payload },
      };
    case FETCH_FOODS_ERROR:
      return {
        ...state,
        foods: { ...state.foods, loading: false, error: action.payload },
      };
      case ADD_NEW_FOOD:
        return {
          ...state,
          foods:{...state.foods,data:[...state.foods.data,action.payload]}
        }

    // User cases
    case FETCH_USER_START:
      return {
        ...state,
        user: { ...state.user, loading: true, error: null },
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        user: { loading: false, error: null, data: action.payload },
      };

    default:
      return state;
  }
}

