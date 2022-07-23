<script lang="ts">
  import Header from "../components/Header.svelte"
  import Slider from "../components/Slider.svelte"
  import { populars } from "../data/data"
  let categories = [
    "Populars",
    "Shonen",
    "Seinen",
    "Spring Releases",
    "Fall Releases",
    "Winter Releases",
  ]
</script>

<svelte:head>
  <title>Anime Streaming</title>
</svelte:head>

<Header />
{#each categories as category}
  <Slider title={category} {populars} />
{/each}
