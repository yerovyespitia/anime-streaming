<script context="module">
  // @ts-ignore
  export async function load({ params }) {
    const id = params.id
    const url = `https://anime-streaming-api-app.herokuapp.com/api/anime/${id}`
    const res = await fetch(url)
    const anime = await res.json()
    return { props: { anime } }
  }
</script>

<script lang="ts">
  type Episodes = {
    title: string
    thumbnail: string
  }
  type Images = {
    banner: string
    logo: string
  }
  interface IAnime {
    _id: string
    episodes: Episodes[]
    images: Images[]
    synopsis: string
    title: string
  }
  export let anime: IAnime
</script>

<svelte:head>
  <title>{anime.title}</title>
</svelte:head>

<div class="relative">
  {#each anime.images as image}
    <img
      class="h-[65vh] opacity-70 object-cover w-full md:h-auto"
      src={image.banner}
      alt="{anime.title} wallpaper"
    />
    <div
      class="w-full left-0 md:w-[36%] md:left-[4%] bottom-[12%] flex flex-col justify-end top-0 absolute"
    >
      <img class="w-[55%] ml-2" src={image.logo} alt="{anime.title} logo" />
      <h1
        class="font-sf text-[white] text-2xl font-bold md:mt-2 mt-0 ml-5 md:ml-0"
      >
        {anime.title}
      </h1>
      <p
        class="font-sf text-white text-md font-medium md:mx-0 md:my-1 mx-4 my-2"
      >
        {anime.synopsis}
      </p>
    </div>
  {/each}
</div>

<section class="m-7">
  <h2 class="font-sf text-2xl text-white font-bold tracking-wide mb-4">
    Season 1
  </h2>
  <div class="grid grid-cols-episodes gap-x-3 gap-y-10">
    {#each anime.episodes as episode}
      <div>
        <img
          class="w-full cursor-pointer rounded-lg hover:opacity-50"
          src={episode.thumbnail}
          alt={episode.title}
        />
        <p
          class="font-sf text-xl font-bold text-white p-0 mt-3 mb-0 tracking-wide"
        >
          {episode.title}
        </p>
      </div>
    {/each}
  </div>
</section>
