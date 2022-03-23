<script lang="ts">
import { mapMutations } from "vuex";
import { useStore } from "../../store";
import { defineComponent, computed } from "vue";

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
});
</script>

<template>
  <n-button @click="switchTheme">{{ theme_name }}</n-button>
</template>
