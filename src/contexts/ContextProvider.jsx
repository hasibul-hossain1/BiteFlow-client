import { AppContext } from "../hooks/AppContext";
import { useReducer } from "react";
import { fetchError, fetchFoodSuccess, fetchStart, initialState, reducer } from "../reducers/reducer";
import { useEffect } from "react";
import { api } from "../lib/api";

function ContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: fetchStart });
    api
      .get("/foods")
      .then((res) =>
        dispatch({ type: fetchFoodSuccess, payload: res.data })
      )
      .catch((err) =>
        dispatch({ type: fetchError, payload: err?.message || "Unknown error occurred" })
      );
  }, []);

  const value = {
    state,
  };

  return <AppContext value={value}>{children}</AppContext>;
}

export default ContextProvider;
