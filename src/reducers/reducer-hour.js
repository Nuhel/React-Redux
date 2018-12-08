export default function(state = null,action){
    switch (action.type){
        case "updateData":
            return action.hour;
        
        case "ShowChallengeContent":
            return action.show;
    }
    return state;
}