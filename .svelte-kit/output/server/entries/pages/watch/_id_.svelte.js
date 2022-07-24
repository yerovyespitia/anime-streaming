import { c as create_ssr_component, e as escape, b as each, a as add_attribute } from "../../../_app/immutable/chunks/index-511472e1.js";
async function load({ params }) {
  const id = params.id;
  const url = `https://anime-streaming-api-app.herokuapp.com/api/anime/${id}`;
  const res = await fetch(url);
  const anime = await res.json();
  return { props: { anime } };
}
const U5Bidu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { anime } = $$props;
  if ($$props.anime === void 0 && $$bindings.anime && anime !== void 0)
    $$bindings.anime(anime);
  return `${$$result.head += `${$$result.title = `<title>${escape(anime.title)}</title>`, ""}`, ""}

<div class="${"relative"}">${each(anime.images, (image) => {
    return `<img class="${"h-[65vh] opacity-70 object-cover w-full md:h-auto"}"${add_attribute("src", image.banner, 0)} alt="${escape(anime.title, true) + " wallpaper"}">
    <div class="${"w-full left-0 md:w-[36%] md:left-[4%] bottom-[12%] flex flex-col justify-end top-0 absolute"}"><img class="${"w-[55%] ml-2"}"${add_attribute("src", image.logo, 0)} alt="${escape(anime.title, true) + " logo"}">
      <h1 class="${"font-sf text-[white] text-2xl font-bold md:mt-2 mt-0 ml-5 md:ml-0"}">${escape(anime.title)}</h1>
      <p class="${"font-sf text-white text-md font-medium md:mx-0 md:my-1 mx-4 my-2"}">${escape(anime.synopsis)}</p>
    </div>`;
  })}</div>

<section class="${"m-7"}"><h2 class="${"font-sf text-2xl text-white font-bold tracking-wide mb-4"}">Season 1
  </h2>
  <div class="${"grid grid-cols-episodes gap-x-3 gap-y-10"}">${each(anime.episodes, (episode) => {
    return `<div><img class="${"w-full cursor-pointer rounded-lg hover:opacity-50"}"${add_attribute("src", episode.thumbnail, 0)}${add_attribute("alt", episode.title, 0)}>
        <p class="${"font-sf text-xl font-bold text-white p-0 mt-3 mb-0 tracking-wide"}">${escape(episode.title)}</p>
      </div>`;
  })}</div></section>`;
});
export {
  U5Bidu5D as default,
  load
};
