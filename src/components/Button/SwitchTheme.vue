<script setup lang="ts">
import { DarkTheme20Regular as ThemeIcon } from "@vicons/fluent";
import {storeToRefs} from 'pinia'
import { useStore } from '../../store';

const themeLabel = {
  dark: "button.light",
  light: "button.dark",
};

const store = useStore()
const { themeName } = storeToRefs(store)

const switchTheme = () =>{
  store.changeTheme(themeName.value === "dark" ? "light" : "dark")
}
</script>

<template>
  <n-button @click="switchTheme">
    <template #icon>
      <n-icon>
        <ThemeIcon />
      </n-icon>
    </template>
    {{ $t(themeLabel[themeName]) }}</n-button
  >
</template>
