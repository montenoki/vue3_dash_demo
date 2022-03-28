<script lang="ts">
import { defineComponent } from "vue";
import { LanguageOutline as LangIcon } from "@vicons/ionicons5";

export default defineComponent({
  setup() {
    return {
      options: [
        { label: "English", key: "en-US" },
        { label: "日本語", key: "ja-JP" },
        { label: "中文", key: "zh-CN" },
      ],
    };
  },
  methods: {
    switchLocale(key: string) {
      this.$i18n.locale = key;
    },
  },
  components: { LangIcon },
});
</script>
<template>
  <n-dropdown trigger="click" :options="options" @select="switchLocale">
    <n-button>
      <template #icon>
        <n-icon>
          <LangIcon />
        </n-icon>
      </template>
      {{ $t("meta.name") }}
    </n-button>
  </n-dropdown>
</template>
