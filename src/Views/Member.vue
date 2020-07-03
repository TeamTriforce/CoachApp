<template>
<!-- Page concernant le membre -->
    <div>
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
                <v-select v-model="repas" :repas="etat" clearable label="Repas mangé" light dense
          solo required></v-select>
            </v-col>

            <v-col cols="12" md="6">
                <!-- Boisson -->
                <v-select v-model="boisson" :boisson="etat" clearable label="Boisson" light dense
          solo></v-select>
            </v-col>
        </v-row>

        <!-- Pesé et humeur -->
        <v-row>
            <v-col cols="12" md="6">
                <!-- Pesé du jour -->
                <v-text-field v-model="pesé" label="Poids" required></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
                <!-- Humeur -->
                <v-select v-model="humeur" :humeur="etat" clearable label="Humeur du jour" light dense
          solo></v-select>
            </v-col>

        </v-row>

    </div>
</template>

<script>
    export default {
        data: () => ({
            duree: '',
            intensite: '',
            repas: [
                'léger',
                'normal',
                'beaucoup'
            ],
            boisson: '',
            humeur: [
                'maussade',
                'normal',
                'bien',
                'très bien',
            ],
        }),
    }
</script>

<style lang="scss" scoped>

</style>