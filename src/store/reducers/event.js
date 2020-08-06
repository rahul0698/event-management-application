import * as actionTypes from '../actions/actionTypes';

const initialState = {
    eventList: [
        {
            id: 1,
            description: `
        Lorem Ipsum is simply dummy text 
        of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy
         text ever since the 1500s, when an unknown printer
          took a galley of type and scrambled it to make 
          a type specimen book.
         It has survived not only five centuries,
        `,
            title: 'Event 1',
            venue: 'test venue',
            price: '250$',
            discount: 20
        }
    ],
    createEvent: false,
    selectedFilter: '',
}

const createEventSuccess = (state, action) => {
    return {
        eventList: state.eventList.concat(action.value)
    }
};

const createEvent = (state, action) => {
    return {
        ...state,
        createEvent: true
    }
}

const closeCreateEvent = (state, action) => {
    return {
        ...state,
        createEvent: false
    }
}

const setSelectedFilter = (state, action) => {
    let newEventList = JSON.parse(localStorage.getItem('eventList')).filter(event => {
        if(!action.value) {
            return true;
        }
        switch (action.value) {
            case 'Free':
                return event.price === '0$';
            case 'Discount':
                return event.discount > 0;
            case 'No_Discount':
                return event.discount === 0;
        }
    });
    console.log(newEventList);
    return {
        ...state,
        selectedFilter: action.value,
        eventList: newEventList
    }
}

const saveEventListToLocalStorage = (state, action) => {
    localStorage.setItem('eventList', JSON.stringify(state.eventList));
    return  {
        ...state
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CREATE_EVENT_SUCCESS:
            return createEventSuccess(state, action);
        case actionTypes.OPEN_CREATE_EVENT_FORM:
            return createEvent(state, action);
        case actionTypes.CLOSE_CREATE_EVENT:
            return closeCreateEvent(state, action);
        case actionTypes.SELECT_FILTER:
            return setSelectedFilter(state, action);
        case actionTypes.SAVE_EVENTLIST_LOCAL_STORAGE:
            return saveEventListToLocalStorage(state, action);
        default:
            return state;
    }
}

export default reducer;