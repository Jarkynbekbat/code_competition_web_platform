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
        @change="onAnswer"
      ></v-text-field>
    </v-card-text>
  </v-card>
</template>
<script>
import * as AnswersAPI from "~/api/answer";

export default {
  props: ["task"],
  data: function() {
    return {
      answer: ""
    };
  },
  methods: {
    onAnswer: async function() {
      let isCorrect = await this.isCorrect();
      this.$emit("onAnswer", this.task.id, isCorrect, this.answer);
    },
    isCorrect: async function() {
      this.answer;
      let correctAnswer = await AnswersAPI.getByTaskId(this.task.id);
      return this.answer == correctAnswer.option ? true : false;
    }
  }
};
</script>

<style></style>
