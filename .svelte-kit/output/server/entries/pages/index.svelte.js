import { c as create_ssr_component, e as escape, a as add_attribute, b as each, v as validate_component } from "../../_app/immutable/chunks/index-511472e1.js";
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"relative mb-4"}"><video class="${"w-full h-full opacity-70"}" src="${"https://github.com/yerovyespitia/anime-streaming/blob/main/static/assets/video.mp4?raw=true"}" autoplay loop muted></video>
  <div class="${"absolute top-0 bottom-[4%] 2xl:bottom-[10%] left-[4%] w-[28%] flex flex-col justify-end"}"><a href="${"/watch/Demon Slayer"}"><img class="${"w-[70%]"}" src="${"https://github.com/yerovyespitia/anime-streaming/blob/main/static/assets/logo.png?raw=true"}" alt="${"demon slayer logo"}"></a>
    <p class="${"font-hel text-xl font-bold text-white mt-5 mb-0 lg:text-2xl"}">Demon Slayer Available Now
    </p>
    <p class="${"font-hel text-base font-semibold text-gray-300 lg:text-lg"}">New Episodes Every Friday
    </p></div></div>`;
});
const Slider = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { populars: populars2 } = $$props;
  let { title } = $$props;
  let slider;
  if ($$props.populars === void 0 && $$bindings.populars && populars2 !== void 0)
    $$bindings.populars(populars2);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  return `<div class="${"ml-4 font-sf h-50 space-y-0.5 md:space-y-2 mb-8"}"><h1 class="${"w-50 font-semibold text-gray-100 transition duration-200 hover:text-white text-2xl mb-2"}">${escape(title)}</h1>
  <div class="${"group relative md:-ml-2"}"><img${add_attribute("class", `absolute top-0 bottom-0 left-2 z-40 m-auto h-1/2 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 bg-opacity-60 icon-white ${"hidden"}`, 0)} src="${"https://raw.githubusercontent.com/yerovyespitia/anime-streaming/73e04f3c1ad8e54f9dc26347463b994c42b57ee1/static/assets/left.svg"}" alt="${"left arrow"}">
    <div class="${"flex items-center overflow-x-scroll no-scrollbar space-x-2.5 md:p-2"}"${add_attribute("this", slider, 0)}>${each(populars2, (popular) => {
    return `<div class="${"relative h-full hover:opacity-50 hover:scale-105 min-w-[220px] cursor-pointer transition duration-200 ease-out md:min-w-[260px]"}"><a href="${"/watch/" + escape(popular.title, true)}"><img class="${"object-cover rounded-lg"}"${add_attribute("src", popular.img, 0)} alt="${escape(popular.title, true) + " thumbnail"}"></a>
        </div>`;
  })}
      <img class="${"absolute top-0 bottom-0 right-2 z-40 m-auto h-1/2 w-9 cursor-pointer icon-white opacity-0 transition hover:scale-125 group-hover:opacity-100 bg-opacity-60"}" src="${"https://raw.githubusercontent.com/yerovyespitia/anime-streaming/73e04f3c1ad8e54f9dc26347463b994c42b57ee1/static/assets/right.svg"}" alt="${"right arrow"}"></div></div></div>`;
});
const populars = [
  {
    title: "Attack on Titan",
    img: "https://github.com/yerovyespitia/anime-streaming/blob/main/static/assets/thumbnails/aot.png?raw=true",
    id: 0
  },
  {
    title: "Black Clover",
    img: "https://github.com/yerovyespitia/anime-streaming/blob/main/static/assets/thumbnails/bc.png?raw=true",
    id: 1
  },
  {
    title: "Violet Evergarden",
    img: "https://github.com/yerovyespitia/anime-streaming/blob/main/static/assets/thumbnails/ve.png?raw=true",
    id: 2
  },
  {
    title: "Serial Experiments Lain",
    img: "https://github.com/yerovyespitia/anime-streaming/blob/main/static/assets/thumbnails/lain.png?raw=true",
    id: 3
  },
  {
    title: "Kakegurui",
    img: "https://github.com/yerovyespitia/anime-streaming/blob/main/static/assets/thumbnails/kakegurui.png?raw=true",
    id: 4
  },
  {
    title: "Death Note",
    img: "https://github.com/yerovyespitia/anime-streaming/blob/main/static/assets/thumbnails/deathnote.png?raw=true",
    id: 5
  },
  {
    title: "Demon Slayer",
    img: "https://github.com/yerovyespitia/anime-streaming/blob/main/static/assets/thumbnails/ds.png?raw=true",
    id: 6
  }
];
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let categories = [
    "Populars",
    "Shonen",
    "Seinen",
    "Spring Releases",
    "Fall Releases",
    "Winter Releases"
  ];
  return `${$$result.head += `${$$result.title = `<title>Anime Streaming</title>`, ""}`, ""}

${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
${each(categories, (category) => {
    return `${validate_component(Slider, "Slider").$$render($$result, { title: category, populars }, {}, {})}`;
  })}`;
});
export {
  Routes as default
};
