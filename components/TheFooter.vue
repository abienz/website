<template>
  <footer class="relative overflow-hidden">
    <div class="absolute top-0 w-full h-full footer-bg bg-gray-900" />
    <div class="mt-48">
      <div class="container mx-auto text-center text-white">
        <div class="flex justify-center"><logo /></div>
        <h2 class="text-6xl leading-none">Akira</h2>
        <div class="max-w-xs mx-auto mt-7 flex justify-between uppercase">
          <a href="">Features</a>
          <a href="">Team</a>
          <a href="">Roadmap</a>
          <a href="">Changelog</a>
        </div>
        <p class="max-w-md mx-auto mt-7">
          Akira is a Free and Open Source Software under GPLv3 License,
          including all its assets, templates and this very own website. Sharing
          is caring
        </p>
        <div class="mt-7 mb-7 flex items-center justify-center">
          <a
            href="https://github.com/akiraux"
            target="_blank"
            title="Akira UX at Github"
            class="ml-6"
          >
            <github-icon class="h-4 w-4" />
          </a>
          <a
            href="https://fosstodon.org/@akiraux"
            target="_blank"
            title="Akira UX at Mastadon"
            class="ml-6"
          >
            <mastadon-icon class="h-4 w-4" />
          </a>
          <a
            href="https://twitter.com/akiraux"
            target="_blank"
            title="Akira UX at Twitter"
            class="ml-6"
          >
            <twitter-icon class="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
import Logo from '~/components/Logo'
import GithubIcon from '~/components/svg/icons/Github'
import MastadonIcon from '~/components/svg/icons/Mastadon'
import TwitterIcon from '~/components/svg/icons/Twitter'
export default {
  components: { Logo, GithubIcon, MastadonIcon, TwitterIcon }
}
</script>

<style scoped>
.footer-bg {
  clip-path: polygon(0 0, 100% 12rem, 100% 100%, 0% 100%);
  background: linear-gradient(-45deg, #4f4f4f, #323233);
  z-index: -1;
}
</style>
