<template>
   <v-container fluid>
      <v-row 
         justify="center"
         align="end"
         >
            <div id="twitch-embed"></div>
      </v-row>
   </v-container>
</template>
<script>      
  export default {
            mounted() {
               // get twitch js stuff
               let externalScript = document.createElement('script')
               externalScript.setAttribute('src', 'https://embed.twitch.tv/embed/v1.js')
               // append it.
               document.head.appendChild(externalScript)
               // put the js code inside a script
               externalScript = document.createElement('script')
               externalScript.setAttribute('type', 'text/javascript')
               let inlineScript = document.createTextNode('new Twitch.Embed("twitch-embed", {width: 854,height: 480,channel: "eagleloid",parent: ["eagleloid.com"]});');
               // add the code to the script...
               externalScript.appendChild(inlineScript)
               // add the script to the site
               document.head.appendChild(externalScript)
            }
  }
</script>
 
