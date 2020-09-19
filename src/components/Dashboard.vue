<template>
  <v-container>
      <v-row >
        <v-col>
          <v-img
          :src="require('../assets/logo.png')"
          class="my-3"
          contain
          height="200"
        ></v-img>
        </v-col>
        
      </v-row>

      <v-row >
        <v-col>
          <h1 class="text-center display-2 font-weight-bold mb-3">
          Look, I'm just as lost as you are...
          </h1>          
          <h3 class="text-center display-1 font-weight-bold mb-3">
          [social links are at the bottom]
          </h3>
        </v-col>
        
      </v-row>
  </v-container>
</template>

<script>  
  export default {
    data: () => ({
      
    })
  }
  
</script>