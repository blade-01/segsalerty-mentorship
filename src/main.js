import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";
import "./index.css";
import "@mdi/font/css/materialdesignicons.css";
import axios from "axios";
const store = createStore({
  state() {
    return {
      profile: {},
      error: "",
    };
  },
  getters: {
    getProfile: (state) => state.profile,
    errorMssg: (state) => state.error,
  },
  mutations: {
    fetchProfile(state, data) {
      state.profile = data;
    },
    showError(state, payload) {
      state.error = payload;
      setTimeout(() => {
        state.error = "";
      }, 3500);
    },
  },
  actions: {
    async fetchProfile({ commit }, user) {
      try {
        const res = await axios.get(`https://api.github.com/users/${user}`);
        commit("fetchProfile", res.data);
      } catch (error) {
        if (error) {
          const errorMssg = "There's no user with this username";
          commit("showError", errorMssg);
        }
      }
    },
  },
});
createApp(App).use(store).mount("#app");
