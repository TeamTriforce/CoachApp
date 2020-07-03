<template>
<v-container fluid style="background-color: #ff7777;">
    <h1 font-weight-thin mb-4 white--text>Rapport journalier</h1>

    <Loading v-if="loading" />

    <v-form>
        <v-text-field v-model="sport" label="Sport pratiqué" required/>
        <v-text-field v-model="duration" type="number" step="0.1" label="Durée" required/>
        <v-select v-model="intensity" :items="intensities" label="Intensité" required/>
        <v-select v-model="breakfastId" :items="mealQuantities" label="Repas petit déjeuner" required/>
        <v-select v-model="lunchId" :items="mealQuantities" label="Repas déjeuner" required/>
        <v-select v-model="dinerId" :items="mealQuantities" label="Intensité diner" required/>
        <v-checkbox v-model="snack" label="Collation" required>
        <v-text-field v-model="weight" type="number" step="0.5" label="Poid" required/>
        <v-select v-model="moodId" :items="moods" label="Humeur" required/>
        <v-text-field v-model="info" label="Informations"/>

        <v-btn color="success" @click="save">Enregistrer</v-btn>
        <v-alert v-if="error" type="error">{{ error }}</v-alert>
    </v-form>
</v-container>
</template>

<script>
export default {
    data() {
        return {
            intensities: [],
            mealQuantities: [],
            moods: [],
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
            loading:false,
            error: ""
        };
    },
    async created(){
        this.loading = true;

        const URL = "http://localhost:3000";
        const intensitiesData = await this.axios.get(`${URL}/intensity`);
        const mealQuantitiesData = await this.axios.get(`${URL}/mealQuantity`);
        const moodsData = await this.axios.get(`${URL}/mood`);

        this.intensities = intensitiesData.data;
        this.mealQuantities = mealQuantitiesData.data;
        this.moods = moodsData.data;

        this.loading = false;
    },
    methods: {
        async save() {
            const userInStore = this.$store.state.users.user;
            const userId = userInStore.id;

            const connection = await this.axios.post(   
            "http://localhost:3000/dailyReport",
            {
                userId: userId,
                sport: this.sport,
                duration: this.duration,
                intensity: this.intensity,
                breakfastId: this.breakfastId,
                lunchId: this.lunchId,
                dinnerId: this.dinnerId,
                snack: this.snack,
                weight: this.weight,
                moodId: this.moodId,
                info: this.info
            }
            );

            if (connection.status != 201) {
                this.error = `Une erreur ${connection.status} est survenue : ${connection.statusText}`;
            }
        }
    }
} 
</script>

<style lang="scss" scoped> 
</style>