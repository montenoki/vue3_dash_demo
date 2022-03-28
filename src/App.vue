<script setup lang="ts">
import { computed, onMounted } from "vue";
import { useStore } from "./store";
import { storeToRefs } from "pinia";
import { useI18n } from "vue-i18n";

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

const store = useStore();
const { themeName } = storeToRefs(store);
const theme = computed(() => (themeName.value === "dark" ? darkTheme : null));

const { locale } = useI18n({ useScope: "global" });
let localeNaive: any,
  dateLocaleNaive: any = computed(() =>
    getLocaleModule(locale.value as string)
  );

function getLocaleModule(locale_name: string) {
  switch (locale_name) {
    case "zh-CN":
      return { locale: zhCN, dateLocale: dateZhCN };
    case "ja":
      return { locale: jaJP, dateLocale: dateJaJP };
    default:
      return { locale: enUS, dateLocale: dateEnUS };
  }
}

onMounted(() => {
  store.updateTheme(useOsTheme().value === "dark" ? "dark" : "light");
});
</script>

<template>
  <n-config-provider
    :theme="theme"
    :locale="localeNaive"
    :date-locale="dateLocaleNaive"
  >
    <n-global-style />
    <router-view />
  </n-config-provider>
</template>
