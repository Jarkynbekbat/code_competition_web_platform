<template>
  <v-card class="mx-auto">
    <v-card-title>
      {{ task.description }}
    </v-card-title>

    <v-card-text>
      <v-text-field
        v-model="answer"
        label="ответ"
        outlined
        clearable
      ></v-text-field>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  props: ["task"],
  data: function() {
    return {
      answer: ""
    };
  }
};
</script>

<style></style>
