<template>
  <!-- 棒グラフコンポーネント -->
  <div ref="barChart"></div>
</template>

<script>
export default {
  mounted () {
    const trace = {
      x: ['a', 'b', 'c', 'd', 'e'],
      y: [1, 2, 3, 4, 5],
      type: 'bar'
    }
    Plotly.newPlot(this.$refs.barChart, [trace])
  },
  props: {
    'name': {
      type: String,
      default: ''
    },
    'number': {
      type: String,
      default: ''
    }
  }
}
</script>
