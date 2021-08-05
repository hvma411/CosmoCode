const switchProjectViewVisibility = () => {
    return {
        type: "SWITCH_PROJECT_VIEW_VISIBILITY"
    };
};

const setVisibleProject = (data) => {
    console.log(data)
    return {
        type: "SET_VISIBLE_PROJECT",
        payload: data
    }
}

export default {
    switchProjectViewVisibility,
    setVisibleProject
}