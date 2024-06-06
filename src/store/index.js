import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import { userReducer } from "./userReducer";
import { modalsReducer } from "./modalsStore";

const rootReducer = combineReducers({
    user: userReducer,
    modals: modalsReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))