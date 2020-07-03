<template>
  <v-card>
    <v-card-title>{{ user.login }}</v-card-title>
    <v-card-actions>
        <v-form ref="form" v-model="valid" lazy-validation>
            <v-textarea name="input-7-1" label="Envoyer un message" value=""></v-textarea>
        <v-btn :disabled="!valid" color="success" class="mr-4" @click="validation">Envoyer</v-btn>
        </v-form>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
    props: {
        user: {
            type: Object,
            default: null
        }
    },

    methods: {
        validation () {
            this.$refs.form.validation()
        }
    },
};
</script>

<style lang="scss" scoped>

</style>