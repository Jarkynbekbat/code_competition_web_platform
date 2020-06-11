<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" fixed app>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
      <v-spacer></v-spacer>
      <v-btn icon @click="logout">
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>

    <v-footer :fixed="fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import axios from "axios";
import * as Auth from "../api/auth";

export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-apps",
          title: "Главная",
          to: "/"
        },
        {
          icon: "mdi-chart-bubble",
          title: "Профиль",
          to: "/profile"
        },
        {
          icon: "mdi-chart-bubble",
          title: "Результаты",
          to: "/result"
        }
      ],

      title: "Code Competition Web Platform "
    };
  },
  created: async function() {
    let token = window.localStorage.getItem("token");
    if (!this.isLogedIn()) window.$nuxt.setLayout("login");
    else axios.defaults.headers.common["Authorization"] = "Bearer " + token;
  },
  methods: {
    isLogedIn: function() {
      let token = window.localStorage.getItem("token");
      return token ? true : false;
    },
    logout: function() {
      let isSure = confirm("Вы уверены что хотите выйти из аккаунта ?");
      if (isSure) {
        Auth.logout();
        window.$nuxt.setLayout("login");
      }
    }
  }
};
</script>
