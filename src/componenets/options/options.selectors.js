import {createSelector} from "reselect";

export const optionsListSelector = state => {
    return Object.values(state.optionsList)
}

const selectedIdsSelector = state => {
    return state.selected
}

export const selectedOptionsSelector = createSelector(
    [optionsListSelector, selectedIdsSelector],
    (optionsList, selectedIds) => optionsList.filter(option => selectedIds.includes(option.id))
)

export const availableOptionsSelector = createSelector(
    [optionsListSelector, selectedIdsSelector],
    (optionsList, selectedIds) => optionsList.filter(option => !selectedIds.includes(option.id))
)