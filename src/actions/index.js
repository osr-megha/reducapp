//actions - what to do

export const incNum = () => {
    return{
        type: "Increment"
    }
    
}

export const decNum = () => {

    return{
        type: "Decrement"
    }
    
}



// it can also be written as--> export const decNum = () => {type: "Decrement"}