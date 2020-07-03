<template>
    <div>
        <v-main>
            <v-container>
                <h1>Liste des membres</h1>

                <Loading v-if="loading" />

                <v-row>
                    <v-col cols="6" sm="4" v-for="user in member" :key="user.id">
                        <MemberSpace :user="user"/>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </div>
</template>

<script>
import MemberSpace from "@/components/MemberSpace.vue";
import Loading from "@/components/Loading.vue"

    export default {
        components: { 
            MemberSpace,
            Loading
         },

        data: () => ({
            member: [],
            loading: false
        }),
        async created() {
            this.loading = true;

            const URL = "http://localhost:3000";
            const userData = await this.axios.get(`${URL}/user`);

            this.member = userData.data;

            this.loading = false;
        }
    }
</script>

<style lang="scss" scoped>

</style>
