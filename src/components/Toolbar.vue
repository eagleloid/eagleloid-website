<template>     
      <!-- TODO put something in the drawer -->
      <v-app-bar app fixed clipped-left>  
         <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>   
         <!-- FIXME icon needs to adjust for mobile so buttons can be seen -->    
         <router-link title="Home Page" to="/">
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
         <!-- FIXME make icons change to circle for mobile? -->
         <v-btn         
         title="Watch stream"
         to="/live"
         >
            <v-icon left>mdi-monitor</v-icon> Stream
         </v-btn>
         <v-btn
         title="Donate"
         href="https://streamlabs.com/eagleloid/tip"
         target="_blank"
         >
            <v-icon left>mdi-currency-usd-circle-outline</v-icon> Donate
         </v-btn>

      </v-app-bar>
</template>

<script>  
  export default {
     components: {
     },
    data: () => ({
      
    })
  }
  
</script>