import { CLOSE_DRAWER, OPEN_DRAWER, CHANGE_CONTENT_SIZE_OPEN, CHANGE_CONTENT_SIZE_CLOSE } from "../Constants/Actions"



const initialState = {
    isOpen: false,
    contentSize: false
}


const forTemplate = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_DRAWER:
            return {
                ...state,
                isOpen: true
            }
        case CLOSE_DRAWER:
            return {
                ...state,
                isOpen: false
            }
        case CHANGE_CONTENT_SIZE_OPEN:
            return {
                ...state,
                contentSize: true
            }
        case CHANGE_CONTENT_SIZE_CLOSE:
            return {
                ...state,
                contentSize: false
            }
        default:
            return state;
    }
}

export default forTemplate;