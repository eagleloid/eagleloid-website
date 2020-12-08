<template>
  <v-container>
      <v-row >
        <v-col>
          <v-img
          :src="require('../assets/download.png')"
          class="my-3"
          contain
          height="200"
        ></v-img>
        </v-col>
        
      </v-row>

      <v-row >
        <v-col>
          <h1 class="text-center display-2 font-weight-bold mb-3">
          Current Status of "The Nest's Gaming Server"
          </h1>  
        </v-col>
        
      </v-row>
  </v-container>
</template>

<script>  
// TODO: put the logic here that checks the game server's basic stats.
// will probably need in import the third party solution.
  export default {
    data: () => ({
      
    })
  }
  
</script>