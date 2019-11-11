<template>
  <v-app>
    <!-- <Header/> -->
    <SideBar/>
    <v-content>
      <router-view/>
    </v-content>
    <!-- <Footer/> -->
  </v-app>
</template>

<script>
// import Header from './components/globals/Header'
import SideBar from './components/globals/SideBar'
// import Footer from './components/globals/Footer'

export default {
  name: 'App',
  components: {
    // Header,
    SideBar
    // Footer
  },
  data: () => ({
  })
}
</script>
