<template>
  <v-container>
    <!-- 遺伝子セット選択フォーム -->

    <!-- グリッド -->
    <VariantGrid/>
  </v-container>
</template>

<script>
import VariantGrid from '../components/organisms/VariantGrid'


export default {
  components: {
    VariantGrid
  },
  data: () => ({
    cellSize: 20,
    geneList: [
      "KRAS",
      "PIK3CA",
      "NRAS",
      "BRCA1",
      "BRCA2"
    ],
    sampleList: [
      "sample1",
      "sample2",
      "sample3",
      "sample4"
    ],
    numberList: [
      "11",
      "2",
      "3",
      "4"
    ]
  })
}
</script>
