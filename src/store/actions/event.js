import * as actionTypes from './actionTypes';

const createEventSuccess = (event) => {
    return {
        type: actionTypes.CREATE_EVENT_SUCCESS,
        value: event
    }
}

export const openCreateEventForm = () => {
    return {
        type: actionTypes.OPEN_CREATE_EVENT_FORM
    }
}

export const closeCreateEventForm = () => {
    return {
        type: actionTypes.CLOSE_CREATE_EVENT
    }
}

export const setSelectedFilter =  (filterValue) => {
    return {
        type: actionTypes.SELECT_FILTER,
        value: filterValue
    }
}

export const saveEventListLocalStorage = () => {
    return {
        type: actionTypes.SAVE_EVENTLIST_LOCAL_STORAGE
    }
}

export const createAndSaveEvent = (event) => {
    return dispatch => {
       dispatch(createEventSuccess(event));
       setTimeout(() => dispatch(saveEventListLocalStorage()), 100);
    }
}
