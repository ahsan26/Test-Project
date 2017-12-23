export default (state = { counter: 0 }, action) => {
    switch (action.type) {
        case "increament":
            state = { ...state, counter: state.counter + 1 }
            return state;
        case "decreament":
            state = { ...state, counter: state.counter - 1 }
            return state;
    }
    return state;
}