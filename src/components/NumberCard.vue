<template>
  <!-- 統計量コンポーネント -->
  <v-card outlined>
    <v-card-text>
      <div>{{name}}</div>
      <v-spacer></v-spacer>
      <div>{{number}}</div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
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
