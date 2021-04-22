import { combineReducers } from "redux";
import boardReducer from "./boardReducer";

const rootReducer = combineReducers({
  boardReducer,
});
/*
combineReducers 은 여러개의 reducer를 하나로 합쳐 내보내는 기능을 수행합니다.
여러개의 reducer를 가진 project에 자주쓰입니다.

*/
export default rootReducer;
