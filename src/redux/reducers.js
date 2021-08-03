import initialState from './state';
import { combineReducers } from "redux";

function reducer(state = initialState, action) {
    switch (action.type) {
        case "SWITCH_PROJECT_VIEW_VISIBILITY":
            return {
                ...state,
                isProjectViewVisible: !state.isProjectViewVisible
            }
        case "SET_VISIBLE_PROJECT":
            return {
                ...state,
                projectTitle: action.payload.projectTitle,
                projectDescription: action.payload.projectDescription,
                projectTechStack: action.payload.projectTechStack,
                projectUrl: action.payload.projectUrl,
                projectType: action.payload.projectType,
                className: action.payload.className,
                RWD: action.payload.RWD
            }
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    reducer
})

export default rootReducer;