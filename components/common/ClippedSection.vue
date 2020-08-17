<template>
  <div>
    <div v-bind="$attrs" :class="topSectionClassName" class="h-48"></div>
    <slot />
    <div v-bind="$attrs" :class="bottomSectionClassName" class="h-48"></div>
  </div>
</template>
<script>
export default {
  inheritAttrs: false,
  props: {
    flip: {
      type: Boolean,
      default: false
    },
    innerClass: {
      type: String,
      default: null
    }
  },
  computed: {
    topSectionClassName() {
      const classNames = []
      classNames.push(this.innerClass)
      if (this.flip) classNames.push('clip-top-left')
      else classNames.push('clip-top-right')
      return classNames
    },
    bottomSectionClassName() {
      const classNames = []
      classNames.push(this.innerClass)
      if (this.flip) classNames.push('clip-bottom-left')
      else classNames.push('clip-bottom-right')
      return classNames
    }
  }
}
</script>
<style scoped>
@responsive {
  .clip-top-right {
    clip-path: polygon(50% 50%, 100% 100%, 100% 100%, 0 100%, 0 0);
  }
  .clip-bottom-right {
    clip-path: polygon(100% 0, 0 0, 0% 100%);
  }

  .clip-top-left {
    clip-path: polygon(0 100%, 100% 100%, 100% 0);
  }
  .clip-bottom-left {
    clip-path: polygon(0 0, 100% 100%, 100% 0);
  }
}
</style>
