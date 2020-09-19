<template>
   <v-footer absolute padless>
         <v-card
         class="flex"
         flat
         tile
         >
         <v-card-title class="blue-grey darken-4">
   
            <v-spacer></v-spacer>
   
            <v-btn
               v-for="obj in icons"
               :key="obj.image"
               class="mx-3"
               dark
               icon
               :href="obj.link"
               target="_blank"
            >
               <v-icon size="24px">{{ obj.image }}</v-icon>
            </v-btn>
         </v-card-title>
   
         <v-card-actions class="grey darken-3 justify-center">
            &copy;2019 — <strong>Eagle Loid</strong>
         </v-card-actions>
         </v-card>
      </v-footer>
</template>

<script>
  export default {
    data: () => ({
      icons: [
         {
            image: 'mdi mdi-facebook',
            tooltip: 'Muh Facebook',
            link: 'https://www.facebook.com/LordEagle21/?ref=hl'
         },
         {
            image: 'mdi mdi-twitter',
            tooltip: 'Muh Tweets',
            link: 'https://twitter.com/eagleloid'
         },
         {
            image: 'mdi mdi-twitch',
            tooltip: 'Muh Twitch',
            link: 'https://www.twitch.tv/eagleloid'
         },
         {
            image: 'mdi mdi-square-circle',
            tooltip: 'Byte Account (only on mobile device)',
            link: 'https://byte.co/@EagleLoid'
         },
         {
            image: 'mdi mdi-youtube',
            tooltip: 'Dumb Videos',
            link: 'https://www.youtube.com/channel/UC1yW5MS8Eyh9lMWbHDKQWaw'
         }
    ]
    })
  }
</script>