import { c as create_ssr_component, a as add_attribute, e as escape, v as validate_component } from "../../chunks/ssr.js";
import { t as themeColors } from "../../chunks/stores.js";
import "../../chunks/client.js";
function setInitialMode(defaultMode, themeColors2) {
  const rootEl = document.documentElement;
  const mode = localStorage.getItem("mode-watcher-mode") || defaultMode;
  const light = mode === "light" || mode === "system" && window.matchMedia("(prefers-color-scheme: light)").matches;
  rootEl.classList[light ? "remove" : "add"]("dark");
  rootEl.style.colorScheme = light ? "light" : "dark";
  if (themeColors2) {
    const themeMetaEl = document.querySelector('meta[name="theme-color"]');
    if (themeMetaEl) {
      themeMetaEl.setAttribute("content", mode === "light" ? themeColors2.light : themeColors2.dark);
    }
  }
  localStorage.setItem("mode-watcher-mode", mode);
}
const Mode_watcher = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { track = true } = $$props;
  let { defaultMode = "system" } = $$props;
  let { themeColors: themeColors$1 = void 0 } = $$props;
  themeColors.set(themeColors$1);
  const args = `"${defaultMode}"${themeColors$1 ? `, ${JSON.stringify(themeColors$1)}` : ""}`;
  if ($$props.track === void 0 && $$bindings.track && track !== void 0)
    $$bindings.track(track);
  if ($$props.defaultMode === void 0 && $$bindings.defaultMode && defaultMode !== void 0)
    $$bindings.defaultMode(defaultMode);
  if ($$props.themeColors === void 0 && $$bindings.themeColors && themeColors$1 !== void 0)
    $$bindings.themeColors(themeColors$1);
  return `${$$result.head += `<!-- HEAD_svelte-cpyj77_START -->${themeColors$1 ? `   <meta name="theme-color"${add_attribute("content", themeColors$1.dark, 0)}>` : ``}<!-- HTML_TAG_START -->${`<script nonce="%sveltekit.nonce%">(` + setInitialMode.toString() + `)(` + args + `);<\/script>`}<!-- HTML_TAG_END --><!-- HEAD_svelte-cpyj77_END -->`, ""}`;
});
const css$1 = {
  code: ".svelte-progress-bar.svelte-1rjlpd{position:fixed;top:0;left:0;height:3px;transition:width 0.21s ease-in-out}.svelte-progress-bar-hiding.svelte-1rjlpd{transition:top 0.8s ease;top:-8px}.svelte-progress-bar-leader.svelte-1rjlpd{position:absolute;top:0;right:0;height:5px;width:100px;transform:rotate(2.5deg) translate(0px, -4px);box-shadow:0 0 8px}",
  map: null
};
const ProgressBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const getIncrement = (n) => {
    if (n >= 0 && n < 0.2)
      return 0.1;
    else if (n >= 0.2 && n < 0.5)
      return 0.04;
    else if (n >= 0.5 && n < 0.8)
      return 0.02;
    else if (n >= 0.8 && n < 0.99)
      return 5e-3;
    return 0;
  };
  let running = false;
  let updater = null;
  let completed = false;
  let width = 0;
  let { id = void 0 } = $$props;
  let { busy = false } = $$props;
  let { color = "currentColor" } = $$props;
  let { class: textColorClass = "" } = $$props;
  let { zIndex = 1 } = $$props;
  let { minimum: defaultMinimum = 0.08 } = $$props;
  let { maximum = 0.994 } = $$props;
  let { settleTime: defaultSettleTime = 700 } = $$props;
  let { intervalTime = 700 } = $$props;
  let { stepSizes = [0, 5e-3, 0.01, 0.02] } = $$props;
  const reset = (minimum = defaultMinimum) => {
    width = minimum;
    running = true;
  };
  const animate = () => {
    if (updater) {
      clearInterval(updater);
    }
    running = true;
    updater = setInterval(
      () => {
        const randomStep = stepSizes[Math.floor(Math.random() * stepSizes.length)] ?? 0;
        const step = getIncrement(width) + randomStep;
        if (width < maximum) {
          width = width + step;
        }
        if (width > maximum) {
          width = maximum;
          stop();
        }
      },
      intervalTime
    );
  };
  const start = (minimum) => {
    reset(minimum);
    animate();
  };
  const stop = () => {
    if (updater) {
      clearInterval(updater);
    }
  };
  const complete = (settleTime = defaultSettleTime) => {
    if (updater)
      clearInterval(updater);
    if (!running)
      return;
    width = 1;
    running = false;
    setTimeout(
      () => {
        completed = true;
        setTimeout(
          () => {
            completed = false;
            width = 0;
          },
          settleTime
        );
      },
      settleTime
    );
  };
  const setWidthRatio = (widthRatio) => {
    stop();
    width = widthRatio;
    completed = false;
    running = true;
  };
  const getState = () => {
    return {
      width,
      running,
      completed,
      color,
      defaultMinimum,
      maximum,
      defaultSettleTime,
      intervalTime,
      stepSizes
    };
  };
  let barStyle;
  let leaderColorStyle;
  let { displayThresholdMs = 150 } = $$props;
  let { noNavigationProgress = false } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.busy === void 0 && $$bindings.busy && busy !== void 0)
    $$bindings.busy(busy);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.class === void 0 && $$bindings.class && textColorClass !== void 0)
    $$bindings.class(textColorClass);
  if ($$props.zIndex === void 0 && $$bindings.zIndex && zIndex !== void 0)
    $$bindings.zIndex(zIndex);
  if ($$props.minimum === void 0 && $$bindings.minimum && defaultMinimum !== void 0)
    $$bindings.minimum(defaultMinimum);
  if ($$props.maximum === void 0 && $$bindings.maximum && maximum !== void 0)
    $$bindings.maximum(maximum);
  if ($$props.settleTime === void 0 && $$bindings.settleTime && defaultSettleTime !== void 0)
    $$bindings.settleTime(defaultSettleTime);
  if ($$props.intervalTime === void 0 && $$bindings.intervalTime && intervalTime !== void 0)
    $$bindings.intervalTime(intervalTime);
  if ($$props.stepSizes === void 0 && $$bindings.stepSizes && stepSizes !== void 0)
    $$bindings.stepSizes(stepSizes);
  if ($$props.reset === void 0 && $$bindings.reset && reset !== void 0)
    $$bindings.reset(reset);
  if ($$props.animate === void 0 && $$bindings.animate && animate !== void 0)
    $$bindings.animate(animate);
  if ($$props.start === void 0 && $$bindings.start && start !== void 0)
    $$bindings.start(start);
  if ($$props.stop === void 0 && $$bindings.stop && stop !== void 0)
    $$bindings.stop(stop);
  if ($$props.complete === void 0 && $$bindings.complete && complete !== void 0)
    $$bindings.complete(complete);
  if ($$props.setWidthRatio === void 0 && $$bindings.setWidthRatio && setWidthRatio !== void 0)
    $$bindings.setWidthRatio(setWidthRatio);
  if ($$props.getState === void 0 && $$bindings.getState && getState !== void 0)
    $$bindings.getState(getState);
  if ($$props.displayThresholdMs === void 0 && $$bindings.displayThresholdMs && displayThresholdMs !== void 0)
    $$bindings.displayThresholdMs(displayThresholdMs);
  if ($$props.noNavigationProgress === void 0 && $$bindings.noNavigationProgress && noNavigationProgress !== void 0)
    $$bindings.noNavigationProgress(noNavigationProgress);
  $$result.css.add(css$1);
  running = busy;
  barStyle = (color ? `background-color: ${color};` : "") + (width && width * 100 ? `width: ${width * 100}%;` : "") + `z-index: ${zIndex};`;
  leaderColorStyle = (color ? `background-color: ${color}; color: ${color};` : "") + `z-index: ${zIndex + 1};`;
  return `  ${running || width > 0 ? `<output${add_attribute("id", id, 0)} role="progressbar"${add_attribute("aria-valuenow", width, 0)}${add_attribute("aria-valuemin", 0, 0)}${add_attribute("aria-valuemax", 1, 0)} class="${[
    "svelte-progress-bar " + escape(textColorClass, true) + " svelte-1rjlpd",
    (running ? "running" : "") + " " + (completed ? "svelte-progress-bar-hiding" : "")
  ].join(" ").trim()}"${add_attribute("style", barStyle, 0)}>${running ? `<div class="svelte-progress-bar-leader svelte-1rjlpd"${add_attribute("style", leaderColorStyle, 0)}></div>` : ``}</output>` : ``}`;
});
const Tailwind_indicator = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${process.env.NODE_ENV === "development" ? `<div class="fixed bottom-1 right-1 z-50 flex h-6 w-6 items-center justify-center rounded-full bg-gray-800 p-3 font-mono text-xs text-white" data-svelte-h="svelte-e37xxc"><div class="block sm:hidden">xs</div> <div class="hidden sm:block md:hidden lg:hidden xl:hidden 2xl:hidden">sm</div> <div class="hidden md:block lg:hidden xl:hidden 2xl:hidden">md</div> <div class="hidden lg:block xl:hidden 2xl:hidden">lg</div> <div class="hidden xl:block 2xl:hidden">xl</div> <div class="hidden 2xl:block">2xl</div></div>` : ``}`;
});
const css = {
  code: "body{font-family:'Inter Variable'}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-ennwre_START -->${$$result.title = `<title>Ria Busana</title>`, ""}<meta name="description" content="Ria Busana Konstruksi"><!-- HEAD_svelte-ennwre_END -->`, ""} ${validate_component(ProgressBar, "ProgressBar").$$render($$result, { class: "text-blue-500", zIndex: 99 }, {}, {})} ${slots.default ? slots.default({}) : ``} ${validate_component(Mode_watcher, "ModeWatcher").$$render($$result, {}, {}, {})} ${validate_component(Tailwind_indicator, "TailwindIndicator").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};
