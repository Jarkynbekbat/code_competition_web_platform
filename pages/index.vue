<template>
  <v-card>
    <v-toolbar flat dark>
      <v-toolbar-title>Соревнования по дисциплинам</v-toolbar-title>
    </v-toolbar>
    <v-tabs vertical>
      <template v-for="(subject, i) in subjects">
        <v-tab :key="i">
          {{ subject.name }}
        </v-tab>
        <v-tab-item :key="i">
          <competitions :subjectId="subject.id"></competitions>
        </v-tab-item>
      </template>
    </v-tabs>
  </v-card>
</template>

<script>
import * as Subject from "../api/subjects";
import competitions from "~/components/Competition.vue";

export default {
  components: {
    competitions
  },
  data: function() {
    return {
      subjects: []
    };
  },
  created: async function() {
    this.subjects = await Subject.getAll();
  }
};
</script>
