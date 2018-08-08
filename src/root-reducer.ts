import {combineReducers} from "redux";

interface AppState {
    test: string;
}

interface TestAction {
    type: string;
    tekst: string;
}

function testReducer(state: AppState, action: TestAction): AppState {
    return {test: action.tekst};
}

const rootReducer = combineReducers({
    testReducer,
});

export default rootReducer;