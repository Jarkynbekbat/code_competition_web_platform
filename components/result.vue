<template>
  <v-card dark id="c-card">
    <v-card-title
      class="headline"
      v-text="number + '.   ' + result.participantName"
    ></v-card-title>
    <v-card-subtitle
      v-text="result.correctAnswersCount + ' из ' + result.tasksCount"
    ></v-card-subtitle>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn @click="show = !show">
        подробнее
        <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>
        <v-card-text>
          <template v-for="(item, index) in result.detail">
            <div :key="index">
              <v-card>
                <v-card-title> {{ item.taskDescription }} </v-card-title>
                <v-card-subtitle>
                  ответ: {{ item.participantAnswer }} <br />
                  верный ответ: {{ item.correctAnswer }}
                </v-card-subtitle>
              </v-card>
              <v-divider></v-divider>
              <br />
            </div>
          </template>

          и так далее ...
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  props: ["result", "number"],
  data: function() {
    return {
      show: false
    };
  }
};
</script>

<style scoped>
#c-card {
  margin-bottom: 10px;
}
</style>
