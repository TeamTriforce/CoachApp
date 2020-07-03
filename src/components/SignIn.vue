<template>
    <div style="padding: 50px 100px;">
        <v-form>
            <v-text-field v-model="login" label="Identifiant" required/>
            <v-text-field v-model="password" label="Mot de passe" required type="password"/>
            <v-text-field v-model="repeat" label="Retaper le mot de passe" required type="password"/>
            <v-btn class="white--text mt-4" color="#ff7777" @click="signIn">Inscription</v-btn>
            <v-alert v-if="error" type="error">{{ error }}</v-alert>
        </v-form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            login: "",
            password: "",
            repeat: "",
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
