<template>
  <!-- サイドバー -->
  <v-navigation-drawer
    v-model="drawer"
    :mini-variant.sync="mini"
    app
    fixed
    dark light
    mobile-break-point="1024"
  >
    <!-- メニューリスト -->
    <v-list nav dense>
      
      <!-- アプリロゴ -->
      <v-list-item>
        <v-list-item-title>Viewer</v-list-item-title>
        <v-btn icon @click.stop="mini = !mini">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>

      </v-list-item>

      <!-- メニュー -->
      <v-list-item v-for="item in nav_lists" :key="item.name" :to="item.link">
        <v-list-item-icon>
          <v-icon>{{item.icon}}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{item.name}}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({
    drawer: true,
    mini: false,
    nav_lists: [
      { name: 'Home', icon: 'home', link: '/' },
      { name: 'Mutation Signature', icon: 'bar_chart', link: '/mutation-signature' },
      { name: 'Variant Grid', icon: 'grid_on', link: '/variant-grid-view' },
      { name: 'Genes', icon: 'table_chart', link: '/genes' },
      { name: 'Samples', icon: 'person', link: '/samples' }
    ]
  })
}
</script>
