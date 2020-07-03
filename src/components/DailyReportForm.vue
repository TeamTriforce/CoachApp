<template>
<v-container fluid style="background-color: #ff7777;">
    <h1 font-weight-thin mb-4 white--text>Rapport journalier</h1>

    <Loading v-if="loading" />

    <v-form>
        <v-text-field v-model="sport" label="Sport pratiqué" required/>
        <v-text-field v-model="duration" type="number" step="0.1" label="Durée" required/>
        <v-select v-model="intensity" :items="intensities" label="Intensité" item-text="name" item-value="id" required/>
        <v-select v-model="breakfastId" :items="mealQuantities" label="Repas petit déjeuner" item-text="name" item-value="id" required/>
        <v-select v-model="lunchId" :items="mealQuantities" label="Repas déjeuner" item-text="name" item-value="id" required/>
        <v-select v-model="dinerId" :items="mealQuantities" label="Intensité diner" item-text="name" item-value="id" required/>
        <v-checkbox v-model="snack" label="Collation" required/>
        <v-text-field v-model="weight" type="number" step="0.5" label="Poid" required/>
        <v-select v-model="moodId" :items="moods" label="Humeur" item-text="name" item-value="id" required/>
        <v-text-field v-model="info" label="Informations"/>

        <v-btn color="success" @click="save">Enregistrer</v-btn>
        <v-alert v-if="error" type="error">{{ error }}</v-alert>
    </v-form>
</v-container>
</template>

<script>
import Loading from "@/components/Loading.vue"

export default {
    data() {
        return {
            intensities: [],
            mealQuantities: [],
            moods: [],
            sport: "",
            duration: 0.0,
            intensity: 0,
            breakfastId: 0,
            lunchId: 0,
            dinerId: 0,
            snack: false,
            weight: 0,
            moodId: 0,
            info: "",
            loading: false,
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
            const userInStore = this.$store.state.user.user;
            const userId = userInStore.id;

            console.log(this.intensity);

            const connection = await this.axios.post(   
            "http://localhost:3000/dailyReport",
            {
                userId: userId,
                sport: this.sport,
                duration: this.duration,
                intensity: this.intensity,
                breakfastId: this.breakfastId,
                lunchId: this.lunchId,
                dinerId: this.dinnerId,
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
    },
    components: {
        Loading
    }
} 
</script>

<style lang="scss" scoped> 
</style>