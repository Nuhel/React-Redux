export default function(state = null,action){
    switch (action.type){
        case "updateData":
            return {
                ...state,
                hour:action.hour,
                showIndex:0,
            }
        
            case "ShowChallengeContent":
            return {
                ...state,
                showChallengeContent:action.show,
                contents:action.content,
                showIndex:0,
            };
        
            case "GetContents":
            return {
                ...state,
                contents:action.content,
                showChallengeContent:action.show,
               
            };

            case "SetViewIndex":
            return {
                ...state,
                showIndex:action.showIndex,
            };
    }
    return {};
}