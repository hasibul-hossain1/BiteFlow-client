import { useContext } from "react";
import { createContext } from "react";


export const AppContext=createContext(null)

export const useApp=()=>useContext(AppContext)