export const GetContents  = (hourlist,id ) => {
    return {
        type: 'GetContents',
        content:hourlist[id],
        show:true
    }
};