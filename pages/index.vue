<template>
  <v-layout> 
    <Competition/>
  </v-layout>
</template>

<script>
import Logo from "~/components/Logo.vue";
import Subject from "~/components/Subject";
import Competition from "~/components/Competition";
import VuetifyLogo from "~/components/VuetifyLogo.vue";

export default {
  components: {
    Logo,
    Subject,
    Competition,
    VuetifyLogo
  }
};
</script>
