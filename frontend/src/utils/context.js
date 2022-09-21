import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();
export const StateContext = ({children}) => {
    const [totalCalories, setTotalCalories] = useState(0)
    return (
        <AppContext.Provider value = {{totalCalories, setTotalCalories}}>
            {children}
        </AppContext.Provider>

    )

}

export const useStateContext = () => useContext(AppContext);