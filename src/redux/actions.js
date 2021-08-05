const switchProjectViewVisibility = () => {
    return {
        type: "SWITCH_PROJECT_VIEW_VISIBILITY"
    };
};

const setVisibleProject = (data) => {
    return {
        type: "SET_VISIBLE_PROJECT",
        payload: data
    }
}

const switchHamburgerMenuVisibility = (data) => {
    return {
        type: "SWITCH_HAMBURGER_MENU_VISIBILITY",
        payload: data
    }
}

export default {
    switchProjectViewVisibility,
    setVisibleProject,
    switchHamburgerMenuVisibility
}