<template>
  <div>
    <h1>$route.params.competitionId : {{ $route.params.competitionId }}</h1>
    <h1>$route.params.participantId : {{ $route.params.participantId }}</h1>
  </div>
</template>

<script>
export default {
  created: async function() {
    this.$route.params;
    debugger;
  }
};
</script>

<style></style>
