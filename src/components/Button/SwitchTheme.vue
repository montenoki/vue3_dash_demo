<script setup lang="ts">
import { DarkTheme20Regular as ThemeIcon } from "@vicons/fluent";
import { storeToRefs } from "pinia";
import { useStore } from "../../store";

const store = useStore();
const { themeName } = storeToRefs(store);

const switchTheme = () => {
  store.updateTheme(themeName.value === "dark" ? "light" : "dark");
};

const getButtonLabel = () => {
  return themeName.value === "dark" ? "button.light" : "button.dark";
};
</script>

<template>
  <n-button @click="switchTheme">
    <template #icon>
      <n-icon>
        <ThemeIcon />
      </n-icon>
    </template>
    {{ $t(getButtonLabel()) }}</n-button
  >
</template>
