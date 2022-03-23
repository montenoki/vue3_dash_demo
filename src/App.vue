<script lang="ts">
import { mapMutations } from "vuex";
import { defineComponent, computed } from "vue";
import { useStore } from "./store";
import {
  useOsTheme,
  darkTheme,
  zhCN,
  dateZhCN,
  jaJP,
  dateJaJP,
  enUS,
  dateEnUS,
} from "naive-ui";

export default defineComponent({
  setup() {
    const theme_name: string = useOsTheme().value === "dark" ? "dark" : "light";
    useStore().commit("updateThemeName", { theme_name: theme_name });
  },
  data() {
    return {
      theme: computed(() =>
        useStore().getters.getThemeName === "dark" ? darkTheme : null
      ),
      locale: this.getLocaleModule(this.$i18n.locale),
      date_locale: this.getDateLocaleModule(this.$i18n.locale),
    };
  },
  methods: {
    ...mapMutations({
      updateThemeName: "updateThemeName",
    }),
    getLocaleModule(locale_name: string) {
      switch (locale_name) {
        case "zh-CN":
          return zhCN;
        case "ja":
          return jaJP;
        default:
          return enUS;
      }
    },
    getDateLocaleModule(locale_name: string) {
      switch (locale_name) {
        case "zh-CN":
          return dateZhCN;
        case "ja":
          return dateJaJP;
        default:
          return dateEnUS;
      }
    },
  },
});
</script>

<template>
  <n-config-provider :theme="theme" :locale="locale" :date-locale="date_locale">
    <router-view />
  </n-config-provider>
</template>
