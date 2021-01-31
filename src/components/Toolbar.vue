<template>
  <v-container>
      <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title class="d-none d-sm-flex"
        >Official Eagle Loid Website</v-toolbar-title
      >
      <v-spacer></v-spacer>
      <!-- FIXME make icons change to circle for mobile? -->
      <v-btn
        icon
        title="Donate"
        href="https://streamlabs.com/eagleloid/tip"
        target="_blank"
      >
        <v-icon>mdi-currency-usd-circle-outline</v-icon>
      </v-btn>

      <v-btn icon title="Watch stream" to="/live">
        <!-- TODO: pull Twitch's current status -->
        <v-icon>mdi-monitor</v-icon>
      </v-btn>

      <v-btn v-if="user.loggedIn==false" icon title="Login" to="/login">
        <!-- TODO: pull Twitch's current status -->
        <v-icon>mdi-account</v-icon>
      </v-btn>


      <v-btn v-else icon title="Sign Out" @click="signOut">
        <!-- TODO: pull Twitch's current status -->
        <v-icon v-if="user==null" >mdi-account</v-icon>
        <v-icon v-else >mdi-account-circle</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer app v-model="drawer" absolute temporary>
      <v-list nav dense >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
          
        >
          <v-list-item v-for="(drawerItem, i) in drawerList" :key="i" :to="drawerItem.routeUrl">
            <v-list-item-icon>
              <v-icon>{{drawerItem.icon}}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{drawerItem.name}}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import firebase from "firebase";
export default {
  components: {},
  data: () => ({
    drawer: false,
    drawerList: [
      {
        name: "Home",
        icon: "mdi-home",
        routeUrl: "/",
      },
      {
        name: "Servers",
        icon: "mdi-server",
        routeUrl: "/servers",
      },
      {
        name: "Social Links",
        icon: "mdi-link-variant",
        routeUrl: "/social",
      },
    ],
  }),
  methods: {
     signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({
            name: "home"
          });
        });
    }
  },
  computed: {
    // map `this.user` to `this.$store.getters.user`
    ...mapGetters({
      user: "user",
    }),
  },
};
</script>