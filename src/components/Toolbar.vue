<template>
   <div>
      <v-navigation-drawer
         clipped
         fixed
         v-model="drawer"
         app
      >
         <Timeline :id="'EagleLoid'" :sourceType="'profile'" :options="{ tweetLimit: '3', theme: 'dark'}"></Timeline>
      </v-navigation-drawer>
      <v-app-bar app fixed clipped-left>
         <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
         <router-link to="/">
            <v-img
               alt="Home Page"
               contain
               max-height="100px"
               to="/"
               :src="require('../assets/logo.png')"
            >

            </v-img>
         </router-link>
         <v-spacer></v-spacer>
         <v-btn
         
         title="Watch stream"
         to="/live"
         >
         <v-icon left>mdi-monitor</v-icon> Stream
         </v-btn>
         <v-btn
         
         title="Check out merch"
         href="https://streamlabs.com/eagleloid/#/merch"
         target="_blank"
         >
         <v-icon left>mdi-store</v-icon> Merch
         </v-btn>

         <v-btn
         fab
         small
         title="Coming soon"
         >
         <v-icon>mdi-account</v-icon>
         </v-btn>
      </v-app-bar>
   </div> 
</template>

<script>  
  import {Timeline} from 'vue-tweet-embed'
  export default {
     components: {
     Timeline
     },
    data: () => ({
      drawer: false
    })
  }
  
</script>