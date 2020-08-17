<template>
  <div>
    <home-welcome />
    <home-features id="features" class="mt-10" />
    <home-team id="team" class="mt-10" />
    <home-support id="support" class="mt-10" />
  </div>
</template>

<script>
import HomeWelcome from '~/components/partials/home/HomeWelcome'
import HomeFeatures from '~/components/partials/home/HomeFeatures'
import HomeTeam from '~/components/partials/home/HomeTeam'
import HomeSupport from '~/components/partials/home/HomeSupport'

export default {
  components: { HomeWelcome, HomeFeatures, HomeTeam, HomeSupport }
}
</script>
