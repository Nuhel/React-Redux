export default function(hour = null,action){
    switch (action.type){
        case "updateData":
            return action.hour;
    }
    return hour;
}