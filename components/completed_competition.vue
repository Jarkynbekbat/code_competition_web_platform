<template>
  <v-card dark id="c-card">
    <v-card-title class="headline" v-text="competition.name"></v-card-title>
    <v-card-subtitle>
      дата завершения:
      {{ new Date(competition.end_date).toLocaleDateString("ru-RU") }}
    </v-card-subtitle>
    <v-card-actions>
      <v-btn text :to="`/result/${competition.id}`">Посмотреть результат</v-btn>
      <v-btn text :to="'/competition/' + competition.id">Подробнее</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: ["competition"]
};
</script>

<style scoped>
#c-card {
  margin-bottom: 20px;
}
</style>
