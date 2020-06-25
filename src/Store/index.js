import { createStore } from "redux";
import masterReducer from "../Reducers";

const Store = createStore(masterReducer);

export default Store;
