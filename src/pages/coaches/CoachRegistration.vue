<template>
    <section>
        <base-card>
            <h2>Register as a Coach now!</h2>
            <coach-form @submit-form="submitData"></coach-form>
        </base-card>
    </section>
</template>


<script>
import CoachForm from '../../components/coaches/CoachForm.vue'
export default{
    components : {
        CoachForm
    },
    methods : {
        submitData(formData){
            this.$store.dispatch('coaches/addCoaches', formData)
            this.$router.replace('/coaches')
        }
    }
}
</script>