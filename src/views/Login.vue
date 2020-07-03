<template>
<v-container fluid style="background-color: #ff7777;">
    <h1 font-weight-thin mb-4 white--text>Connection</h1>

    <v-form>
        <v-text-field v-model="login" label="Identifiant" required/>
        <v-text-field v-model="password" label="Mot de passe" required type="password"/>
        <v-btn color="success" @click="connect">Connection</v-btn>
        <v-alert v-if="error" type="error">{{ error }}</v-alert>
    </v-form>
</v-container>
</template>

<script>
export default {
    data() {
        return {
            login: "",
            password: "",
            error: ""
        };
    },
    methods: {
        async connect() {
            const connection = await this.axios.get(
                "http://localhost:3000/user",
                {
                    params: {
                        login: this.login,
                        password: this.password
                    }
                }
            );

            if (connection.data.length) {
                if (connection.data[0]["coach"]) {
                    // TODO : Remove this when views ok, here for test purpose.
                    this.error = "Connection coach";

                    // TODO : Uncomment and add Coach route below.
                    //this.$router.push({ name: "Coach" });
                } else {
                    // TODO : Remove this when views ok, here for test purpose.
                    //this.$router.push({ name: "Client" });
                    this.error = "Connection client";
                }
                this.$store.dispatch("updateUser", { name: this.login });
            } else {
                this.error = "Le couple identifiant / mot de passe est invalide.";
            }
        }
    }
} 
</script>

<style lang="scss" scoped> 
</style>