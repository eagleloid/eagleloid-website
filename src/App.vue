<template>
  <v-app dark>
    <Toolbar />
    <router-view/>
    <Footer />
  </v-app>
</template>

<script>
import Footer from './components/Footer'
import Toolbar from './components/Toolbar'
export default {
  name: 'App',
  components: {
    Footer,
    Toolbar
  },
  data () {
    return {
      drawer: false
      // todo fix toolbar/menu
    }
  }
}
</script>

