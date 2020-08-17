<template>
  <div class="absolute w-full z-30">
    <div class="container mx-auto py-6 flex items-center">
      <logo class="h-14" />
      <nav class="flex flex-1 justify-between uppercase leading-none">
        <div class="flex items-center">
          <a class="ml-16" href="#features">Features</a>
          <a class="ml-20" href="#team">Team</a>
          <a class="ml-20" href="roadmap">Roadmap</a>
          <a class="ml-20" href="changelog">Changelog</a>
          <a
            class="ml-20 inline-flex  rounded px-3.5 py-1.5"
            href="donate"
            style="background: linear-gradient(#ffa154, #f37329)"
          >
            <heart-icon class="h-4 w-4 mr-2" />
            Donate
          </a>
        </div>
        <div class="flex items-center justify-end items-center">
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
      </nav>
    </div>
  </div>
</template>
<script>
import Logo from '~/components/Logo'
import GithubIcon from '~/components/svg/icons/Github'
import MastadonIcon from '~/components/svg/icons/Mastadon'
import TwitterIcon from '~/components/svg/icons/Twitter'
import HeartIcon from '~/components/svg/icons/Heart'
export default {
  components: { Logo, GithubIcon, MastadonIcon, TwitterIcon, HeartIcon }
}
</script>
