<template>
  <v-app>
    <v-app-bar app clipped-left>  
         <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>   

         <v-toolbar-title>Official Eagle Loid Website</v-toolbar-title>
         <v-spacer></v-spacer>
         <!-- FIXME make icons change to circle for mobile? -->
         <v-btn   
         icon      
         title="Watch stream"
         to="/live"
         >
            <v-icon >mdi-monitor</v-icon>
         </v-btn>
         <v-btn
         icon
         title="Donate"
         href="https://streamlabs.com/eagleloid/tip"
         target="_blank"
         >
            <v-icon >mdi-currency-usd-circle-outline</v-icon>
         </v-btn>

      </v-app-bar>
    <v-navigation-drawer
      app
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >

          <v-list-item to="/">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>                            
          </v-list-item>

          <v-list-item to="/servers">
            <v-list-item-icon>
              <v-icon>mdi-server</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Servers</v-list-item-title>
          </v-list-item>

          <v-list-item to="/social">
            <v-list-item-icon>
              <v-icon>mdi-link-variant</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Social Links</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <router-view/>
    <Footer />
  </v-app>
</template>

<script>
import Footer from './components/Footer'
export default {
  name: 'App',
  components: {
    Footer
  },
  data: () => ({
      drawer: false
    })
}
</script>

