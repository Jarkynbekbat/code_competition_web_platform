<template>
  <v-content>
    <h5>{{ competition }}</h5>
  </v-content>
</template>

<script>
import * as CompetitionsApi from "../../api/competitions";

export default {
  data: function() {
    return {
      competition: {}
    };
  },
  created: async function() {
    let competitionId = this.$route.params.id;
    this.competition = await CompetitionsApi.getById(competitionId);
  }
};
</script>

<style></style>
