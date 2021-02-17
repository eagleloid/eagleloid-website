<template >
    <v-row align="center" >
        <v-col cols="12">
            
<template v-for="(icon, i) in icons">
    <div :key="`btn-${i}`" class="text-center">
        <div class="my-8">
        <v-btn x-large  :color="icon.color" :href="icon.link" outlined>
            
            <v-icon left>
            {{icon.image}}
            </v-icon>
            {{icon.tooltip}}
        </v-btn>
        </div>
    </div>
    </template>
            
        </v-col>
    
    </v-row>
</template>

<script>
  export default {
    data: () => ({
      icons: [
         {
            image: 'mdi mdi-discord',
            color: '#738ADB',
            tooltip: 'Muh Discord',
            link: 'https://discord.gg/5vtDhzt'
         },
         {
            image: 'mdi mdi-facebook',
            color: '#4267B2',
            tooltip: 'Muh Facebook',
            link: 'https://www.facebook.com/LordEagle21/?ref=hl'
         },
         {
            image: 'mdi mdi-twitter',
            color: '#1DA1F2',
            tooltip: 'Muh Tweets',
            link: 'https://twitter.com/eagleloid'
         },
         {
            image: 'mdi mdi-twitch',
            color: '#6441a5',
            tooltip: 'Muh Twitch',
            link: 'https://www.twitch.tv/eagleloid'
         },
         {
            image: 'mdi mdi-youtube',
            color: '#c4302b',
            tooltip: 'Dumb Videos',
            link: 'https://www.youtube.com/channel/UC1yW5MS8Eyh9lMWbHDKQWaw'
         },
         {
            image: 'mdi mdi-snapchat',
            color: '#FFFC00',
            tooltip: 'Muh Snapchat',
            link: 'https://www.snapchat.com/add/eagleoid'
         },
         {
            image: 'mdi mdi-lock-reset',
            color: '#1DA1F2',
            tooltip: 'Muh OnlyFans',
            link: 'http://onlyfans.eagleloid.com'
         }
    ]
    })
  }
</script>