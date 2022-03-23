<script lang="ts">
import { mapMutations } from "vuex";
import { useStore } from "../../store";
import { defineComponent, computed } from "vue";
import { DarkTheme20Regular as ThemeIcon } from "@vicons/fluent";

export default defineComponent({
  data() {
    return {
      theme_name: computed(() => useStore().getters.getThemeName),
    };
  },
  methods: {
    ...mapMutations({
      updateThemeName: "updateThemeName",
    }),
    switchTheme() {
      const theme_name = this.theme_name === "light" ? "dark" : "light";
      this.updateThemeName({ theme_name: theme_name });
    },
  },
  components: { ThemeIcon },
});
</script>

<template>
  <n-button @click="switchTheme">
    <template #icon>
      <n-icon>
        <ThemeIcon />
      </n-icon>
    </template>
    {{ $t(theme_name === "light" ? "button.dark" : "button.light") }}</n-button
  >
</template>
