<template>
  <div>
    <h1>Hello Azure App Configuration Feature Flags</h1>
    <pre>{{ flags }}</pre>
    <div v-if="flags['sprinkles']">
      <img src="@/assets/sprinkles.jpg" width="300" height="400" />
    </div>
    <div v-else>
      <img src="@/assets/plain.jpg" width="300" height="400" />
    </div>
  </div>
</template>
<script>
import { inject } from "vue";
export default {
  async mounted() {
    const $flagsManager = inject("$featurFlagsManager");
    this.flags.sprinkles = await $flagsManager.getFeatureFlag('sprinkles');
  },
  data() {
    return {
      flags: {
        sprinkles: true,
      },
    };
  },
};
</script>