<template>
  <svg width="700" height="1000">
    <!-- 遺伝子名の配置 -->
    <g v-for="(item, index) in geneList"
      :key="item"
    >
      <a xlink:href="'/genes/'+item">
        <text 
          :x="0"
          :y="(index+1)*cellSize"
        >
          {{item}}
        </text>
      </a>
    </g>
    
    <!-- サンプル名の配置 -->
    <g v-for="(item, index) in sampleList"
      :key="item"
    >
      <a xlink:href="'/samples/'+item">
        <text
          :x="(index+1)*cellSize"
          :y="0"
          writing-mode="tb"
        >
          {{item}}
        </text>
      </a>
    </g>

    <!-- ヒートマップの枠組み作成 -->
    <line x1="10" x2="50" y1="110" y2="150"/>


    <!-- 変異の配置 -->
    <!-- <g v-for="(item, index) in variantList" -->


  </svg>
</template>

<script>
export default {
  components: {
  },
  data: () => ({
    cellSize: 30,
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
    variantList: [
      "11",
      "2",
      "3",
      "4"
    ]
  }),
  created () {

  },
  methods: {
    
  },
}
</script>
