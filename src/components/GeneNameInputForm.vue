<template>
  <v-card>
    <v-card-text>
      <v-autocomplete
        placeholder="Gene Name"
        :items="geneNameList"
      ></v-autocomplete>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    geneNameList: [
      'KRAS',
      'PIK3CA',
      'BRAF'
    ]
  })
}
</script>
