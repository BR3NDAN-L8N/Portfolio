import React, { createContext, useReducer, useContext } from "react";

const defaults = createContext({
    email: {
        button: 'unhide',
        form: 'hide',
        sendConformation: 'hide'
    }
});
const { Provider } = defaults;

const reducer = (state, action) => {
    switch (action.type) {
        case SET_CURRENT_POST:
            return {
                ...state,
                currentPost: action.post,
                loading: false
            };

        case UPDATE_POSTS:
            return {
                ...state,
                posts: [...action.posts],
                loading: false
            };

        default:
            return state;
    }
};

const StoreProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useReducer(reducer, defaults);

    return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
    return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };