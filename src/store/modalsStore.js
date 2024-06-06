
const defaultState = {
    modalConnect: false,
    modalCourse: false,
}

const CHANGE_MODAL_CONNECTS = "CHANGE_MODAL_CONNECTS"
const CHANGE_MODAL_COURSE = "CHANGE_MODAL_COURSE    "


export const modalsReducer = (state = defaultState, action) => {
    switch(action.type) {
        case CHANGE_MODAL_CONNECTS: 
            return {...state, modalConnect: action.payload}
        case CHANGE_MODAL_COURSE: 
            return {...state, modalCourse: action.payload}
            default: 
                return state 
    }
}

export const changeActiveModalConnects = (payload) => ({type:CHANGE_MODAL_CONNECTS, payload});
export const changeActiveModalCourse = (payload) => ({type:CHANGE_MODAL_COURSE, payload});