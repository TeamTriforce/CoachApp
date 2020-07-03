<template>
  <v-app>
    <v-app-bar
      app
      color="#ff7777"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="@/assets/logo.png"
          transition="scale-transition"
          width="40"
        />
        <v-btn
          href=""
          target="_blank"
          text
        >
          <span class="mr-2">Accueil</span>
        </v-btn>
        <v-btn
          href=""
          target="_blank"
          text
        >
          <span class="mr-2">Membres</span>
        </v-btn>


      </div>



      <v-spacer></v-spacer>

      <v-btn
        href=""
        target="_blank"
        text
      >
        <span class="mr-2">Espace Coach</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <v-parallax
        dark
        src="@/assets/background.png"
        height="300"
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col class="text-center" cols="12">
            <h1 class="display-1 font-weight-thin mb-4">CoachApp</h1>
            <h4 class="subheading">Votre application de Coach Sportif !</h4>
          </v-col>
        </v-row>
      </v-parallax>
      <v-container fluid style="background-color: #ff7777;">
          <v-row
            align="center"
          >
              <v-col cols="4" align="center">
                <v-img
                  alt="Phone"
                  class="shrink mr-2"
                  contain
                  src="@/assets/phone.png"
                  transition="scale-transition"
                  width="200"
                />
              </v-col>
              <v-col cols="6">
                <h2 class="display-1 font-weight-thin mb-4 white--text">Un suivi de ouf !</h2>
                <h4 class="subheading mb-4 white--text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h4>
                <v-btn rounded color="#cf2d2d" dark>Découvrir</v-btn>
              </v-col>
        </v-row>
    </v-container>
    <template>
        <v-parallax src="@/assets/background-presentation.png">
          <v-row
            align="center"
          >
            <v-col offset="1" cols="5">
              <h2 class="display-1 font-weight-thin mb-4">Prenez le dessus sur vous même</h2>
              <h4 class="subheading">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiumod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h4>
            </v-col>
          </v-row>
        </v-parallax>
        <v-parallax src="@/assets/login-background.jpg">
          <v-row
            align="center"
            justify="center"
          >
            <v-col class="text-center" offset="1" cols="5">
              <h2 class="display-1 font-weight-thin mb-4">Rejoignez-nous dès maintenant !</h2>
              <v-row
                align="center"
                justify="center"
              >
                <v-btn class="ma-2" outlined color="white">Créer un compte</v-btn>
                <v-btn class="ma-2" outlined color="white">Je me connecte</v-btn>
              </v-row>
            </v-col>
            </v-row>
        </v-parallax>
    </template>
    </v-content>
  </v-app>
</template>


<script>

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    //
  }),
};
</script>
