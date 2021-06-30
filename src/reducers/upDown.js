/* eslint-disable no-fallthrough */
//reducer - how to do

const initialState = 0;

/*const changeNum = (state= initialState,action) => {
    switch(action.type) {
        case "Increment" : return state + 1;
        case "Decrement" : return state -1;
        default : return state;
    }
}*/

const changeNum = (state= initialState, action) => {
    switch (action.type){
        case "Increment" : {
            if (state <20){
                return state + 1;
            } else {
                alert("Max Limit Reached");
                return state;
            }
        }
 
        case "Decrement" : {
            if (state > 0){
                return state - 1;
            } else {
                alert("Zero Limit Reached");
                return state;
            }
        }
        default : return state;
       
    }
}

export default changeNum;