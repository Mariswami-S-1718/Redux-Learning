import { createStore } from "redux";

const intialState = {
    user: {
        username: "Virat",
        balance: 25000
    }
};

export const updatewallet = (amt) => ({
    type: 'UPDATE_WALLET',
    payload: amt
})
function reducer(state = intialState, action) {
    switch (action.type) {
        case 'UPDATE_WALLET':
            return {
                user: {
                    username: state.user.username,
                    balance: state.user.balance - action.payload,
            }
        }
        default :
        return state;
}
};

const store = createStore(reducer);
export default store;