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
        <v-btn target="_blank" @click="MemberClick">
          <span class="mr-2">Membres</span>
        </v-btn>


      </div>

      <v-spacer></v-spacer>

      <v-btn target="_blank" @click="CoachClick">
        <span class="mr-2">Espace Coach</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-content>

    <v-content v-if="home">
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
        <v-parallax src="@/assets/background-presentation.png">
          <v-row
            align="center"
          >
            <v-col offset="1" cols="12" sm="6">
              <h2 class="display-1 font-weight-thin mb-4">Prenez le dessus sur vous même</h2>
              <h4 class="subheading">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiumod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h4>
            </v-col>
          </v-row>
        </v-parallax>
        <v-parallax src="@/assets/background-presentation-2.jpg"
        >
            <v-row
              align="center"
            >
                <v-col cols="12" sm="6" align="center">
                  <v-img
                    alt="Phone"
                    class="shrink mr-2"
                    contain
                    src="@/assets/phone.png"
                    transition="scale-transition"
                    width="200"
                  />
                </v-col>
                <v-col cols="12" sm="6">
                  <h2 class="display-1 font-weight-thin mb-4 white--text">Un suivi de ouf !</h2>
                  <h4 class="subheading mb-4 white--text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h4>
                  <v-btn rounded color="#cf2d2d" dark>Découvrir</v-btn>
                </v-col>
          </v-row>
      </v-parallax>
        <v-container fluid style="background-color: #ff7777;">
          <v-row
            align="center"
            justify="center"
          >
            <v-col class="text-center" cols="6">
              <h2 class="display-1 font-weight-thin mb-4 white--text">Rejoignez-nous dès maintenant !</h2>
              <v-row
                align="center"
                justify="center"
              >
                <v-row justify="center">
                  <v-dialog v-model="dialog_create" fullscreen hide-overlay transition="dialog-bottom-transition">
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn class="ma-2" outlined color="white" v-bind="attrs" v-on="on">
                        Créer un compte
                      </v-btn>
                    </template>
                    <v-card>
                      <v-toolbar dark color="#ff7777">
                        <v-btn icon dark @click="dialog_create = false">
                          <v-icon>mdi-close</v-icon>
                        </v-btn>
                        <v-toolbar-title>Créer un compte</v-toolbar-title>
                      </v-toolbar>
                        <SignIn/>
                      </v-card>
                  </v-dialog>
                </v-row>
                <v-row justify="center">
                  <v-dialog v-model="dialog_connect" fullscreen hide-overlay transition="dialog-bottom-transition">
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn class="ma-2" outlined color="white" v-bind="attrs" v-on="on">
                        Se connecter
                      </v-btn>
                    </template>
                    <v-card>
                      <v-toolbar dark color="#ff7777">
                        <v-btn icon dark @click="dialog_connect = false">
                          <v-icon>mdi-close</v-icon>
                        </v-btn>
                        <v-toolbar-title>Se connecter</v-toolbar-title>
                      </v-toolbar>
                        <LogIn/>
                      </v-card>
                  </v-dialog>
                </v-row>
              </v-row>
            </v-col>
            </v-row>
        </v-container>
        <v-footer padless>
          <v-col
            class="text-center"
            cols="12"
          >
          <v-row justify="center"><v-btn text small color="error" @click="mentionsLegalesClick()">Mentions légales</v-btn> - <v-btn text small color="error">Contact</v-btn></v-row>
            {{ new Date().getFullYear() }} — <strong>CoachApp</strong>
          </v-col>
        </v-footer>
    </v-content>
  </v-app>
</template>


<script>
import LogIn from "@/components/LogIn.vue";
import SignIn from "@/components/SignIn.vue";

export default {
  name: 'App',

  components: {
    LogIn,
    SignIn
  },

  data() {
    return {
      home: true,
      dialog_create: false,
      dialog_connect: false,
      notifications: false,
      sound: true,
      widgets: false,
    }
  },

  methods: {
    signInClick() {
      this.home = false;

      this.$router.push({name: "SignIn"});
    },
    logInClick() {
      this.home = false;

      this.$router.push({name: "LogIn"});
    },
    mentionsLegalesClick(){
      this.home = false;

      this.$router.push({name: "MentionsLegales"});
    },
    MemberClick() {
      this.home = false;

      this.$router.push({name: "Member"});
    },
    CoachClick() {
      this.home = false;

      this.$router.push({name: "Coach"});
    },
  }
};
</script>
