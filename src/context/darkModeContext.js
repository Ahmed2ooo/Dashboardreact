import { createContext,useReducer} from "react";
import DarkModeReducer from "./darkModeReduser";

const INITIAL_STATE = {
    darkMode: false
}

export const DarkModeContext = createContext(INITIAL_STATE);

export const DarkModeContextProvider = ({children}) => {
 const [state, dispatch] = useReducer (DarkModeReducer, INITIAL_STATE);/*study*/

 return(
    <DarkModeContext.Provider value={{darkMode: state.darkMode,dispatch}}>
        {children}
    </DarkModeContext.Provider>
 )

}