<template>
<v-container fluid style="background-color: #ff7777;">
    <h1 font-weight-thin mb-4 white--text>Rapport journalier</h1>

    <v-form>
        <v-text-field v-model="sport" label="Sport pratiqué" required/>

        <v-btn color="success" @click="signIn">Inscription</v-btn>
        <v-alert v-if="error" type="error">{{ error }}</v-alert>
    </v-form>
</v-container>
</template>

<script>
export default {
    data() {
        return {
            sport: "",
            duration: 0.0,
            intensity: "",
            breakfastId: 0,
            lunchId: 0,
            dinnerId: 0,
            snack: false,
            weight: 60,
            moodId: 1,
            info: "RAS",
            error: ""
        };
    },
    methods: {
        async signIn() {
            if (this.password != this.repeat) {
                this.error = "Les mots de passe sont différents";
            } else {
                const connection = await this.axios.post(   
                "http://localhost:3000/user",
                {
                    login: this.login,
                    password: this.password,
                    coach: false
                }
                );

                if (connection.status == 201) {
                    // TODO : Start Client view.

                    this.$store.dispatch("updateUser", { name: this.login });
                } else {
                    this.error = `Une erreur ${connection.status} est survenue : ${connection.statusText}`;
                }
            }
        }
    }
} 
</script>

<style lang="scss" scoped> 
</style>