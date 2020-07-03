<template>
<!-- Page concernant le membre -->
    <div>
        <v-form ref="form" v-model="valid" lazy-validation>
            <!-- Durée et intensité du sport -->
            <v-row>
                <v-col cols="12" md="6">
                    <!-- Durée du sport -->
                    <v-text-field v-model="duree" label="Durée en minutes" required></v-text-field>
                </v-col>

                <v-col cols="12" md="6">
                    <!-- Intensité du sport -->
                    <v-text-field v-model="intensite" label="Intensité" required ></v-text-field>
                </v-col>
            </v-row>

            <!-- Repas et boisson -->
            <v-row>
                <v-col cols="12" md="6">
                    <!-- Plat -->
                    <v-select v-model="repas" :repas="etat" clearable label="Votre repas était : " light dense solo required></v-select>
                </v-col>

                <v-col cols="12" md="6">
                    <!-- Boisson -->
                    <v-select v-model="boisson" :boisson="etat" clearable label="Avez-vous pris une collation ?" light dense solo></v-select>
                </v-col>
            </v-row>

            <!-- Pesé et humeur -->
            <v-row>
                <v-col cols="12" md="6">
                    <!-- Pesé du jour -->
                    <v-text-field v-model="poids" label="Poids" required></v-text-field>
                </v-col>

                <v-col cols="12" md="4">
                    <!-- Humeur -->
                    <v-select v-model="humeur" :humeur="etat" clearable label="Humeur du jour" light dense solo></v-select>
                        <span v-if="humeur==='maussade'">Reprenez-vous !</span>
                        <span v-else-if="humeur==='normal'">C'est bien</span>
                        <span v-else-if="humeur==='bien'">Parfait</span>
                        <span v-else>Excellent, continuez sur cette voie !</span>
                </v-col>
            </v-row>

            <!-- Bouton du formulaire -->
            <v-btn :disabled="!valid" color="success" class="mr-4" @click="validation">Envoyer</v-btn>
        </v-form>
    </div>
</template>

<script>
    export default {
        data: () => ({
            duree: '',
            intensite: '',
            repas: ['léger', 'normal', 'consistant'],
            boisson: ['oui', 'non'],
            poids: '',
            humeur: ['maussade', 'normal', 'bien', 'très bien'],
        }),

        methods: {
        validation () {
            this.$refs.form.validation()
        }
        },
    }
</script>

<style lang="scss" scoped>

</style>