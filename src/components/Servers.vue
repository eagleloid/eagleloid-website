<template>
<v-row align="center" >
  <v-container fluid>
    <template v-for="(server, s) in serverList">
      <div class="my-3" :key="`card-${s}`">
    <v-card class="mx-auto" max-width="344" outlined >
      <v-list-item three-line>
        <v-list-item-content>
          <div class="overline mb-4">{{server.game}}</div>
          <v-list-item-title class="headline mb-1">
            {{server.name}}
          </v-list-item-title>
          
          <v-chip
            v-if="server.status=='Active'"
            class="ma-1"
            color="success"
            label
          >
          <v-icon left>
            mdi-access-point
          </v-icon>
            {{server.status}}
          </v-chip>  
          <v-chip
            v-else
            class="ma-1"
            color="error"
            label
          >
          <v-icon left>
            mdi-access-point
          </v-icon>
            {{server.status}}
          </v-chip>  
            Address:
            <code>
              {{server.address}}  
            </code>                
        </v-list-item-content>

        <v-list-item-avatar
          tile
          size="80"
          color="grey"
        >
        <img
          :src="server.iconUrl"
          :alt="server.game"
        >
        </v-list-item-avatar>
      </v-list-item>
    </v-card>
      </div>
    </template>
    <v-col class="text-center" cols="12">
      The statuses of these servers may not be accurate to this page. This website is still a work in progress.
    </v-col>
  </v-container>
</v-row>
</template>

<script>
// TODO: put the logic here that checks the game server's basic stats.
// will probably need in import the third party solution.
import firebase from "firebase/app"
import 'firebase/database'
export default {

  created(){
    firebase.database().ref('/gameServers').get().then((snapshot) =>{
      this.serverList = snapshotTOArray(snapshot);
    }).catch(err =>{
      this.console.log(err.message)
    });

    let snapshotTOArray = snapshot =>{
      var returnArr = [];
      snapshot.forEach(function(childSnapshot) {
        var item = childSnapshot.val();
        item.key = childSnapshot.key;

        returnArr.push(item);
      });

      return returnArr;
    };
  },
  data: () => ({
    serverList: [
      {
        game: "Minecraft",
        iconUrl: "https://i.imgur.com/GqJJnJ3.jpg",
        name: "Eagle Loid's Server",
        status: "Active",
        address: "minecraft.eagleloid.com",
      },
      {
        game: "Space Engineers",
        iconUrl: "https://i.imgur.com/CnNei12.png",
        name: "Crashed2020",
        status: "Active",
        address: "The Nest's Gaming Server",
      },
      {
        game: "Skyrim",
        iconUrl: "https://i.imgur.com/52xzD0p.png",
        name: "Skyrim Together",
        status: "Active",
        address: "skyrim.eagleloid.com:10578",
      },
    ],
  }),
  methods: {
    snapshotTOArray(snapshot){
      var returnArr = [];
      snapshot.forEach(function(childSnapshot) {
        var item = childSnapshot.val();
        item.key = childSnapshot.key;

        returnArr.push(item);
      });

      return returnArr;
    }
  },
  computed: {
    
    // TODO: somehow make firebase work with this so it's actually realtime
  }
};
</script>