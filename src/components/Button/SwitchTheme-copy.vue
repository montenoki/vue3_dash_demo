<script lang="ts">
import { mapMutations, mapState } from "vuex";
import { useStore } from "../../store";
import { defineComponent, computed } from "vue";
import { DarkTheme20Regular as ThemeIcon } from "@vicons/fluent";

export default defineComponent({
  computed: {
    getThemeName() {
      return useStore().getters.getThemeName()
    },
    get_theme_label(){
      const label = () => this.getThemeName();
      return (label === "light") ? "button.dark" : "button.light"
    }
  },
  data() {
    // let theme_name = 
    // return {
    //   theme_name,
    //   theme_label: (theme_name === "light") ? "button.dark" : "button.light"
    // };
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
    {{ $t(theme_label) }}</n-button
  >
</template>
