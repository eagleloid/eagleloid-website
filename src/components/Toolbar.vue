<template>
  <v-container>
      <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title class="d-none d-sm-flex"
        >Official Eagle Loid Website</v-toolbar-title
      >
      <v-spacer></v-spacer>
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
        <v-icon>mdi-account</v-icon>
      </v-btn>

      <v-menu v-else offset-y>        
        <template v-slot:activator="{ on, attrs }">                    
          <v-btn 
            icon 
            :title="'Logged in as ' + user.data.displayName" 
            v-bind="attrs"
            v-on="on"
          >
            {{user.data.displayName.charAt(0)}}
          </v-btn>
        </template>
        <v-list>
          <v-list-item to="/profile">
            <v-list-item-title>Profile</v-list-item-title>                      
          </v-list-item>
          <v-list-item @click="signOut()">
            <v-list-item-title>Logout</v-list-item-title>    
            <v-list-item-action>
              <v-icon>
                mdi-logout
              </v-icon>
            </v-list-item-action>                  
          </v-list-item>
      </v-list>
      </v-menu>
    </v-app-bar>
    <v-navigation-drawer app v-model="drawer" absolute temporary>
      <v-list nav dense >
        <v-list-item-group
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
import firebase from "firebase/app";
import 'firebase/auth'
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
    /**
     * Signs current user out then returns to home page
     */
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