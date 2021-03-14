import React, {createContext, useReducer} from 'react';


//create a context 
export default (reducer, actions, initialState) => {
    const Context = React.createContext()

    const Provider = ({children}) => {
        const [state,dispatch]  = useReducer(reducer,initialState)

        // get dispatch function inside actions object
        // actions === {addBlogPost: (dispatch) => {return () => {}} }
        const boundActions = {};
        for (let key in actions)
        {
            boundActions[key] = actions[key](dispatch);
        }

        return <Context.Provider value={{state, ...boundActions}}>{children}</Context.Provider>
    }

    return {Context, Provider};
}