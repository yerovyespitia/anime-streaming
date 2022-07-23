<script lang="ts">
  type Anime = {
    title: string
    img: string
    id: number
  }

  export let populars: Anime[]
  export let title: string

  let isMoved: boolean = false
  let slider: HTMLDivElement

  const moveSlider = (direction: string) => {
    isMoved = true
    const { scrollLeft, clientWidth } = slider
    const scrollTo: number =
      direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth
    slider.scrollTo({ left: scrollTo, behavior: "smooth" })
  }
</script>

<div class="ml-4 font-sf h-50 space-y-0.5 md:space-y-2 mb-8">
  <h1
    class="w-50 font-semibold text-gray-100 transition duration-200 hover:text-white text-2xl mb-2"
  >
    {title}
  </h1>
  <div class="group relative md:-ml-2">
    <img
      class={`absolute top-0 bottom-0 left-2 z-40 m-auto h-1/2 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 bg-opacity-60 icon-white ${
        !isMoved && "hidden"
      }`}
      src="./static/assets/left.svg"
      alt="left arrow"
      on:click={() => moveSlider("left")}
    />
    <div
      class="flex items-center overflow-x-scroll no-scrollbar space-x-2.5 md:p-2"
      bind:this={slider}
    >
      {#each populars as popular}
        <div
          class="relative h-full hover:opacity-50 hover:scale-105 min-w-[220px] cursor-pointer transition duration-200 ease-out md:min-w-[260px]"
        >
          <a href="/watch/{popular.title}">
            <img
              class="object-cover rounded-lg"
              src={popular.img}
              alt="{popular.title} thumbnail"
            />
          </a>
        </div>
      {/each}
      <img
        class="absolute top-0 bottom-0 right-2 z-40 m-auto h-1/2 w-9 cursor-pointer icon-white opacity-0 transition hover:scale-125 group-hover:opacity-100 bg-opacity-60"
        src="./static/assets/right.svg"
        alt="right arrow"
        on:click={() => moveSlider("right")}
      />
    </div>
  </div>
</div>
