export default function(state = null,action){
    switch (action.type){
        case "updateData":
            return {
                ...state,
                hour:action.hour
            }
        
        case "ShowChallengeContent":
            return {
                ...state,
                showChallengeContent:action.show
            };
    }
    return {};
}