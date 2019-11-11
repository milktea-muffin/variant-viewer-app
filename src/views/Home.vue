<template>
  <v-container>
    <!-- 1列目 -->
    <v-row>
      <v-col
        md="12"
      >
        <LoadFile/>
      </v-col>
    </v-row>

    <!-- 統計量 -->
    <v-row>
      <v-col
        v-for="item in number_list"
        v-bind:key="item.name"
        cols="12" sm="6" md="3"
      >
        <NumberCard :name="item.name" :number="item.number"/>
      </v-col>
    </v-row>

    <!-- グラフ -->
    <v-row>
      <v-col
        v-for="item in number_list"
        v-bind:key="item.name"
        cols="12" md="6"
      >
        <BarChartCard :name="item.name" :number="item.number"/>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
import LoadFile from '../components/LoadFile.vue'
import NumberCard from '../components/NumberCard.vue'
import BarChartCard from '../components/BarChartCard.vue'

export default {
  components: {
    LoadFile,
    NumberCard,
    BarChartCard
  },
  data: () => ({
    number_list: [
      { name: 'Genes', number: '124' },
      { name: 'Samples', number: '125' },
      { name: 'Variants', number: '124' },
      { name: '***', number: '125' }
    ]
  })
}
</script>
