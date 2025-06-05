export const initialState = {
  loading: true,
  error: null,
  foods: [],
};

// Actions
export const fetchStart="FETCH_DATA_START"
export const fetchError="FETCH_DATA_ERROR"
export const fetchFoodSuccess="FETCH_FOODS_SUCCESS"


export function reducer(state, action) {
  switch (action.type) {
    case fetchStart:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case fetchFoodSuccess:
      return {
        ...state,
        loading: false,
        error: null,
        foods: action.payload,
      };
    case fetchError:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
      default:
        return state
  }
}
