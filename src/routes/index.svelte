<script lang="ts">
	import Header from "../components/Header.svelte"
	import Slider from "../components/Slider.svelte"
	import { populars } from "../data/data"
</script>

<svelte:head>
	<title>Anime Streaming</title>
</svelte:head>

<Header />
<Slider title={"Populars"} {populars} />
<Slider title={"Shonen"} {populars} />
<Slider title={"Seinen"} {populars} />
<Slider title={"Spring Releases"} {populars} />
<Slider title={"Fall Releases"} {populars} />
<Slider title={"Winter Releases"} {populars} />
