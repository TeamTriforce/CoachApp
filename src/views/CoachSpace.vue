<template>
    <div>
        <v-main>
            <v-container>
                <h1>Liste des membres</h1>
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
import CoachDb from "../../CoachDb";

    export default {
        components: { MemberSpace },

        data: () => ({
            member: CoachDb
        }),
    }
</script>

<style lang="scss" scoped>

</style>
