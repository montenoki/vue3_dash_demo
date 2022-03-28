<script lang="ts">
import { defineComponent, h, ref, Component } from "vue";
import { RouterLink } from "vue-router";
import { NIcon } from "naive-ui";
import type { MenuOption } from "naive-ui";
import { DashboardOutlined as DashIcon } from "@vicons/antd";
import SwitchTheme from "./Button/SwitchTheme.vue";
import SwitchLocale from "./Button/SwitchLocale.vue";

function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) });
}

const menuOptions: MenuOption[] = [
  {
    label: () =>
      h(
        RouterLink,
        { to: { name: "dash" } },
        { default: () => "$t('label.dash')" }
      ),
    key: "overview",
    icon: renderIcon(DashIcon),
  },
];

export default defineComponent({
  setup() {
    return {
      activeKey: ref<string | null>(null),
      menuOptions,
    };
  },
  components: { SwitchTheme, SwitchLocale, DashIcon },
});
</script>

<template>
  <n-layout>
    <n-layout-header>
      <n-space justify="start">
        <n-button strong quaternary type="primary">
          <template #icon><n-icon><DashIcon /></n-icon> </template>
          Dashboard
        </n-button>
      </n-space>
      <n-space justify="end">
        <SwitchTheme />
        <SwitchLocale
      /></n-space>
    </n-layout-header>
    <n-layout has-sider>
      <n-layout-sider content-style="padding: 24px;"> 海淀桥 </n-layout-sider>
      <n-layout-content content-style="padding: 24px;">
        平山道
      </n-layout-content>
    </n-layout>
    <n-layout-footer>成府路</n-layout-footer>
  </n-layout>
</template>
<style>
.n-layout-header,
.n-layout-footer {
  background: rgba(128, 128, 128, 0.2);
  padding: 24px;
}

.n-layout-sider {
  background: rgba(128, 128, 128, 0.3);
}

.n-layout-content {
  background: rgba(128, 128, 128, 0.4);
}
</style>
