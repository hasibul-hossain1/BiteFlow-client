import { useEffect, useReducer } from "react";
import { AppContext } from "../hooks/AppContext";
import {
  FETCH_FOODS_START,
  FETCH_FOODS_SUCCESS,
  FETCH_FOODS_ERROR,
  FETCH_USER_START,
  FETCH_USER_SUCCESS,
  initialState,
  reducer,
} from "../reducers/reducer";
import { api } from "../lib/api";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/firebase.init";


function ContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    dispatch({ type: FETCH_FOODS_START });
    api
      .get("/foods")
      .then((res) =>
        dispatch({ type: FETCH_FOODS_SUCCESS, payload: res.data })
      )
      .catch((err) =>
        dispatch({
          type: FETCH_FOODS_ERROR,
          payload: err?.message || "Unknown error occurred",
        })
      );
  }, []);

  useEffect(() => {
    dispatch({ type: FETCH_USER_START });
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch({ type: FETCH_USER_SUCCESS, payload: {...user} });
      }else{
        dispatch({ type: FETCH_USER_SUCCESS, payload:null });
      }
    });

    return () => unsubscribe();
  }, []);

  const value = {
    state,
    dispatch,
  };

  return <AppContext value={value}>{children}</AppContext>;
}


export default ContextProvider;
