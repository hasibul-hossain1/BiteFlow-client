import { useContext } from "react";
import { createContext } from "react";


export const AppContext=createContext(null)

// export const useApp=()=>useContext(AppContext)

export const useSelector = (params) => {
  const {state} = useContext(AppContext);
  return params(state)
};

export const useDispatch=()=>{
    const {dispatch}=useContext(AppContext)
    return dispatch
}