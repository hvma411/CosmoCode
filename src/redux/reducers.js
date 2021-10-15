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
                repoUrl: action.payload.repoUrl,
                projectType: action.payload.projectType,
                desktopImage: action.payload.desktopImage,
                mobileImage: action.payload.mobileImage,
                className: action.payload.className,
                RWD: action.payload.RWD
            }
        case "SWITCH_HAMBURGER_MENU_VISIBILITY":
            return {
                ...state,
                isHamburgerMenuVisible: action.payload.isHamburgerMenuVisible
            }
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    reducer
})

export default rootReducer;