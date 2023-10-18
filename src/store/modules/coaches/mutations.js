export default{
    addCoach(state, payload){
        // const formData = {
        //     id : state.userId,
        //     firstName : payload.first,
        //     lastName : payload.last,
        //     areas : payload.areas,
        //     description : payload.desc,
        //     hourlyRate : payload.rate
        // }
        state.coaches.unshift(payload)
    },
    setCoaches(state, payload){
        state.coaches = payload
    },
    setFetchTimestamp(state){
        state.lastFetch = new Date().getTime();
    }
}