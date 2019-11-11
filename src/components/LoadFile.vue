<template>
  <!-- ファイル読み込みコンポーネント -->
  <v-card
    outlined
    flat
  >
    <!-- ファイル入力フォーム -->
    <v-card-title>
      <v-file-input
        label="File input"
        accept=".xlsx"
      >
      </v-file-input>
      <v-spacer></v-spacer>
      <v-btn color="success">Load</v-btn>
    </v-card-title>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    //
  })
}
</script>
