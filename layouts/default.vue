<template>
  <div class="antialiased">
    <the-header class="text-white" />
    <nuxt />
    <the-footer class="mt-16" />
  </div>
</template>
<script>
import TheFooter from '@/components/TheFooter'
import TheHeader from '~/components/TheHeader'
export default {
  components: { TheFooter, TheHeader }
}
</script>
