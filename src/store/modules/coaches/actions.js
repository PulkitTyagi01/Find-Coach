export default{
    async addCoaches(context, payload){
        const userId = context.rootGetters.userId;
        const coachData = {
            firstName : payload.first,
            lastName : payload.last,
            areas : payload.areas,
            description : payload.desc,
            hourlyRate : payload.rate
        }

        const token = context.rootGetters.token

        const response = await fetch(`https://weighty-archive-364711-default-rtdb.firebaseio.com/coaches/${userId}.json?auth=` + token, {
            method : 'PUT',
            body : JSON.stringify(coachData)
        });

        // const responseData = await response.json

        if(!response.ok){
            //error
        }

        context.commit('addCoach', {
            ...coachData,
            id : userId
        })
    },
    async loadCoaches(context, payload){

        if(!payload.forceRefresh && !context.getters.shouldUpdate){
            return;
        }

        const response = await fetch(`https://weighty-archive-364711-default-rtdb.firebaseio.com/coaches.json`);

        const responseData = await response.json()
        console.log(responseData)
        if(!response.ok){
            const error = new Error(responseData.mesage || 'Failed to fetch!')
            throw error;
        }

        const coaches = []

        for (const key in responseData){
            const coach = {
            id:key,
            firstName : responseData[key].firstName,
            lastName : responseData[key].lastName,
            areas : responseData[key].areas,
            description : responseData[key].description,
            hourlyRate : responseData[key].hourlyRate
            }
            coaches.push(coach)
        }

        context.commit('setCoaches', coaches)
        context.commit('setFetchTimestamp')
    },

}