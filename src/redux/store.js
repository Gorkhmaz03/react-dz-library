import { createStore } from "redux";
import rootReducer from "./reducers/rootReducer";
import { devToolsEnhancer } from "@redux-devtools/extension";

const enhancer = devToolsEnhancer();

const store = createStore(rootReducer, enhancer);

export default store;
