<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "./store";
import { storeToRefs } from 'pinia'
import { useI18n } from 'vue-i18n'

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

const { t, locale } = useI18n({ useScope: 'global' })

const store = useStore();
const { themeName } = storeToRefs(store)
const theme_name: string = useOsTheme().value === "dark" ? "dark" : "light";
const theme = computed(() => (themeName.value === "dark") ? darkTheme : null)

const locale_naive = computed(()=>getLocaleModule(locale.value))
const date_locale = computed(()=>getDateLocaleModule(locale.value))

function getLocaleModule(locale_name: string) {
  switch (locale_name) {
    case "zh-CN":
      return zhCN;
    case "ja":
      return jaJP;
    default:
      return enUS;
  }
}

function getDateLocaleModule(locale_name: string) {
  switch (locale_name) {
    case "zh-CN":
      return dateZhCN;
    case "ja":
      return dateJaJP;
    default:
      return dateEnUS;
  }
}

</script>

<template>
  <n-config-provider :theme="theme" :locale="locale" :date-locale="date_locale">
  <!-- <n-config-provider :theme="theme"> -->
    <n-global-style />
    <router-view />
  </n-config-provider>
</template>
