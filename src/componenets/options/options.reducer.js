import {TOGGLE_OPTION} from "./options.actions";

const optionsList = {
    'id-0': {
        id: 'id-0',
        text: 'Option #1'
    },
    'id-1': {
        id: 'id-1',
        text: 'Option #2'
    },
    'id-2': {
        id: 'id-2',
        text: 'Option #3'
    },
    'id-3': {
        id: 'id-3',
        text: 'Option #4'
    },
    'id-4': {
        id: 'id-4',
        text: 'Option #5'
    },
}

const initialState = {
    optionsList,
    selected: []
}

export const optionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_OPTION: {
            const newSelectedIds = state.selected.includes(action.payload.optionId)
                ? state.selected.filter(id => id !== action.payload.optionId)
                : state.selected.concat(action.payload.optionId)
            return {
                ...state,
                selected: newSelectedIds
            }
        }
        default:
            return state
    }
}