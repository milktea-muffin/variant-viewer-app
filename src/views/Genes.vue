<template>
  <v-container>
    <v-row>
      <v-col cols=12 sm=3>
        <!-- 遺伝子名入力フォーム -->
        <GeneNameInputForm/>
      </v-col>
      <v-col cols=12 sm=9>
        <!-- 遺伝子情報 -->

      </v-col>
    </v-row>
    <!-- Needle Plot -->
    <!-- Variants Table -->
  </v-container>
</template>

<script>
import GeneNameInputForm from '../components/GeneNameInputForm.vue'

export default {
  components: {
    GeneNameInputForm
  },
  data: () => ({
    //
  })
}
</script>
