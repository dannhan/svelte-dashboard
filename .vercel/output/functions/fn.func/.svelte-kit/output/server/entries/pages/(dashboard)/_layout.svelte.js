import { c as create_ssr_component, s as spread, b as escape_attribute_value, d as escape_object, a as add_attribute, v as validate_component, e as escape, f as each } from "../../../chunks/ssr.js";
import { o as omit, s as safeOnMount, m as makeElement, i as isBrowser, a as styleToString, p as portalAttr, e as effect, b as executeCallbacks, c as addMeltEventListener, u as useEscapeKeydown, d as createElHelpers, f as isElement, k as kbd, n as noop, g as isHTMLElement, h as is_void, j as cn, l as flyAndScale, B as Button, q as buttonVariants } from "../../../chunks/index3.js";
import { c as compute_rest_props, s as setContext, g as getContext, a as subscribe } from "../../../chunks/lifecycle.js";
import { p as page, n as navigating } from "../../../chunks/stores2.js";
import { s as superForm, z as zodClient, p as projectSchema, d as deleteProjectSchema, l as logoutSchema } from "../../../chunks/index4.js";
import "just-clone";
import "ts-deepmerge";
import "../../../chunks/index.js";
import "devalue";
import "memoize-weak";
import "dequal";
import { t as toWritableStores, o as overridable, g as generateIds, d as derivedVisible, u as usePopper, a as getPortalDestination, b as usePortal, r as removeScroll, h as handleFocus, c as createDialog, e as removeUndefined, f as getOptionUpdater, i as createSeparator, j as getPositioningUpdater, k as getCtx$2, l as fade, R as Root$2, T as Trigger$2, P as Plus, D as Dialog_content, m as Root$3, S as Select_trigger, V as Value, n as Select_content, p as Select_item, C as Check } from "../../../chunks/index5.js";
import { w as writable, d as derived } from "../../../chunks/index2.js";
import { t as tick } from "../../../chunks/scheduler.js";
import { c as createBitAttrs, a as createDispatcher, I as Input } from "../../../chunks/input.js";
import "clsx";
import { g as getState, C as Command_item, a as Command, b as Command_input, c as Command_empty, d as Command_group } from "../../../chunks/command-input.js";
import { F as Form_field, C as Control, a as Form_label, b as Form_button, S as Spinners } from "../../../chunks/index6.js";
import "../../../chunks/client.js";
import { M as Mode_toggle } from "../../../chunks/mode-toggle.js";
const ChevronDown = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["color", "size"]);
  let { color = "currentColor" } = $$props;
  let { size = 15 } = $$props;
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  return `<svg${spread(
    [
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      { viewBox: "0 0 15 15" },
      { fill: "none" },
      { xmlns: "http://www.w3.org/2000/svg" },
      escape_object($$restProps)
    ],
    {}
  )}><path fill-rule="evenodd" clip-rule="evenodd" d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"${add_attribute("fill", color, 0)}></path></svg>`;
});
const ChevronDown$1 = ChevronDown;
const Info = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, []);
  return `<svg${add_attribute("class", $$restProps.class, 0)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>`;
});
const Progress = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, []);
  return `<svg${add_attribute("class", $$restProps.class, 0)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"></path><path d="M13 17V9"></path><path d="M18 17V5"></path><path d="M8 17v-3"></path></svg>`;
});
const Hamburger = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, []);
  return `<svg${add_attribute("class", $$restProps.class, 0)} aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path></svg>`;
});
const Map_pin = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, []);
  return `<svg${add_attribute("class", $$restProps.class, 0)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>`;
});
const Log_out = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, []);
  return `<svg${add_attribute("class", $$restProps.class, 0)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" x2="9" y1="12" y2="12"></line></svg>`;
});
const Users = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, []);
  return `<svg${add_attribute("class", $$restProps.class, 0)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`;
});
const Images = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, []);
  return `<svg${add_attribute("class", $$restProps.class, 0)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 22H4a2 2 0 0 1-2-2V6"></path><path d="m22 13-1.296-1.296a2.41 2.41 0 0 0-3.408 0L11 18"></path><circle cx="12" cy="8" r="2"></circle><rect width="16" height="16" x="6" y="2" rx="2"></rect></svg>`;
});
const Calendar_check = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, []);
  return `<svg${add_attribute("class", $$restProps.class, 0)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2v4"></path><path d="M16 2v4"></path><path d="M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"></path><path d="M3 10h18"></path><path d="m16 20 2 2 4-4"></path></svg>`;
});
const Wallet = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, []);
  return `<svg${add_attribute("class", $$restProps.class, 0)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"></path><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"></path><path d="M18 12a2 2 0 0 0 0 4h4v-4Z"></path></svg>`;
});
const Trash = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, []);
  return `<svg${add_attribute("class", $$restProps.class, 0)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg>`;
});
const sidebarItems = [
  {
    Icon: Info,
    label: "Identitas Proyek",
    href: "identitas-proyek"
  },
  {
    Icon: Users,
    label: "Tim Pelaksana",
    href: "tim-pelaksana"
  },
  {
    Icon: Images,
    label: "Gambar Desain",
    href: "gambar-desain"
  },
  {
    Icon: Calendar_check,
    label: "Jadwal Project",
    href: "jadwal-project"
  },
  {
    Icon: Progress,
    label: "Progress",
    href: "progress"
  },
  {
    Icon: Map_pin,
    label: "Lokasi",
    href: "lokasi"
  },
  {
    Icon: Wallet,
    label: "Realisasi Biaya",
    href: "realisasi-biaya"
  }
  // {
  //   Icon: Flask,
  //   label: 'Experiments',
  //   href: `experiments`
  // }
];
const defaults = {
  positioning: {
    placement: "bottom"
  },
  arrowSize: 8,
  defaultOpen: false,
  disableFocusTrap: false,
  closeOnEscape: true,
  preventScroll: false,
  onOpenChange: void 0,
  closeOnOutsideClick: true,
  portal: void 0,
  forceVisible: false,
  openFocus: void 0,
  closeFocus: void 0,
  onOutsideClick: void 0
};
const { name } = createElHelpers("popover");
const popoverIdParts = ["trigger", "content"];
function createPopover(args) {
  const withDefaults = { ...defaults, ...args };
  const options = toWritableStores(omit(withDefaults, "open", "ids"));
  const { positioning, arrowSize, disableFocusTrap, preventScroll, closeOnEscape, closeOnOutsideClick, portal, forceVisible, openFocus, closeFocus, onOutsideClick } = options;
  const openWritable = withDefaults.open ?? writable(withDefaults.defaultOpen);
  const open = overridable(openWritable, withDefaults?.onOpenChange);
  const activeTrigger = writable(null);
  const ids = toWritableStores({ ...generateIds(popoverIdParts), ...withDefaults.ids });
  safeOnMount(() => {
    activeTrigger.set(document.getElementById(ids.trigger.get()));
  });
  function handleClose() {
    open.set(false);
    const triggerEl = document.getElementById(ids.trigger.get());
    handleFocus({ prop: closeFocus.get(), defaultEl: triggerEl });
  }
  const isVisible = derivedVisible({ open, activeTrigger, forceVisible });
  const content = makeElement(name("content"), {
    stores: [isVisible, portal, ids.content],
    returned: ([$isVisible, $portal, $contentId]) => {
      return {
        hidden: $isVisible && isBrowser ? void 0 : true,
        tabindex: -1,
        style: styleToString({
          display: $isVisible ? void 0 : "none"
        }),
        id: $contentId,
        "data-state": $isVisible ? "open" : "closed",
        "data-portal": portalAttr($portal)
      };
    },
    action: (node) => {
      let unsubPopper = noop;
      const unsubDerived = effect([
        isVisible,
        activeTrigger,
        positioning,
        disableFocusTrap,
        closeOnEscape,
        closeOnOutsideClick,
        portal
      ], ([$isVisible, $activeTrigger, $positioning, $disableFocusTrap, $closeOnEscape, $closeOnOutsideClick, $portal]) => {
        unsubPopper();
        if (!$isVisible || !$activeTrigger)
          return;
        const popper = usePopper(node, {
          anchorElement: $activeTrigger,
          open,
          options: {
            floating: $positioning,
            focusTrap: $disableFocusTrap ? null : {
              returnFocusOnDeactivate: false,
              clickOutsideDeactivates: true,
              escapeDeactivates: true
            },
            modal: {
              shouldCloseOnInteractOutside,
              onClose: handleClose,
              open: $isVisible,
              closeOnInteractOutside: $closeOnOutsideClick
            },
            escapeKeydown: $closeOnEscape ? {
              handler: () => {
                handleClose();
              }
            } : null,
            portal: getPortalDestination(node, $portal)
          }
        });
        if (popper && popper.destroy) {
          unsubPopper = popper.destroy;
        }
      });
      return {
        destroy() {
          unsubDerived();
          unsubPopper();
        }
      };
    }
  });
  function toggleOpen(triggerEl) {
    open.update((prev) => {
      return !prev;
    });
    if (triggerEl) {
      activeTrigger.set(triggerEl);
    }
  }
  function shouldCloseOnInteractOutside(e) {
    onOutsideClick.get()?.(e);
    if (e.defaultPrevented)
      return false;
    const target = e.target;
    const triggerEl = document.getElementById(ids.trigger.get());
    if (triggerEl && isElement(target)) {
      if (target === triggerEl || triggerEl.contains(target))
        return false;
    }
    return true;
  }
  const trigger = makeElement(name("trigger"), {
    stores: [isVisible, ids.content, ids.trigger],
    returned: ([$isVisible, $contentId, $triggerId]) => {
      return {
        role: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": $isVisible ? "true" : "false",
        "data-state": stateAttr($isVisible),
        "aria-controls": $contentId,
        id: $triggerId
      };
    },
    action: (node) => {
      const unsub = executeCallbacks(addMeltEventListener(node, "click", () => {
        toggleOpen(node);
      }), addMeltEventListener(node, "keydown", (e) => {
        if (e.key !== kbd.ENTER && e.key !== kbd.SPACE)
          return;
        e.preventDefault();
        toggleOpen(node);
      }));
      return {
        destroy: unsub
      };
    }
  });
  const overlay = makeElement(name("overlay"), {
    stores: [isVisible],
    returned: ([$isVisible]) => {
      return {
        hidden: $isVisible ? void 0 : true,
        tabindex: -1,
        style: styleToString({
          display: $isVisible ? void 0 : "none"
        }),
        "aria-hidden": "true",
        "data-state": stateAttr($isVisible)
      };
    },
    action: (node) => {
      let unsubEscapeKeydown = noop;
      if (closeOnEscape.get()) {
        const escapeKeydown = useEscapeKeydown(node, {
          handler: () => {
            handleClose();
          }
        });
        if (escapeKeydown && escapeKeydown.destroy) {
          unsubEscapeKeydown = escapeKeydown.destroy;
        }
      }
      const unsubPortal = effect([portal], ([$portal]) => {
        if ($portal === null)
          return noop;
        const portalDestination = getPortalDestination(node, $portal);
        if (portalDestination === null)
          return noop;
        const portalAction = usePortal(node, portalDestination);
        if (portalAction && portalAction.destroy) {
          return portalAction.destroy;
        } else {
          return noop;
        }
      });
      return {
        destroy() {
          unsubEscapeKeydown();
          unsubPortal();
        }
      };
    }
  });
  const arrow = makeElement(name("arrow"), {
    stores: arrowSize,
    returned: ($arrowSize) => ({
      "data-arrow": true,
      style: styleToString({
        position: "absolute",
        width: `var(--arrow-size, ${$arrowSize}px)`,
        height: `var(--arrow-size, ${$arrowSize}px)`
      })
    })
  });
  const close = makeElement(name("close"), {
    returned: () => ({
      type: "button"
    }),
    action: (node) => {
      const unsub = executeCallbacks(addMeltEventListener(node, "click", (e) => {
        if (e.defaultPrevented)
          return;
        handleClose();
      }), addMeltEventListener(node, "keydown", (e) => {
        if (e.defaultPrevented)
          return;
        if (e.key !== kbd.ENTER && e.key !== kbd.SPACE)
          return;
        e.preventDefault();
        toggleOpen();
      }));
      return {
        destroy: unsub
      };
    }
  });
  effect([open, activeTrigger, preventScroll], ([$open, $activeTrigger, $preventScroll]) => {
    if (!isBrowser)
      return;
    const unsubs = [];
    if ($open) {
      if (!$activeTrigger) {
        tick().then(() => {
          const triggerEl2 = document.getElementById(ids.trigger.get());
          if (!isHTMLElement(triggerEl2))
            return;
          activeTrigger.set(triggerEl2);
        });
      }
      if ($preventScroll) {
        unsubs.push(removeScroll());
      }
      const triggerEl = $activeTrigger ?? document.getElementById(ids.trigger.get());
      handleFocus({ prop: openFocus.get(), defaultEl: triggerEl });
    }
    return () => {
      unsubs.forEach((unsub) => unsub());
    };
  });
  return {
    ids,
    elements: {
      trigger,
      content,
      arrow,
      close,
      overlay
    },
    states: {
      open
    },
    options
  };
}
function stateAttr(open) {
  return open ? "open" : "closed";
}
function getAlertDialogData() {
  const NAME = "alert-dialog";
  const PARTS = [
    "action",
    "cancel",
    "content",
    "description",
    "overlay",
    "portal",
    "title",
    "trigger"
  ];
  return { NAME, PARTS };
}
function setCtx$2(props) {
  const { NAME, PARTS } = getAlertDialogData();
  const getAttrs = createBitAttrs(NAME, PARTS);
  const initAlertDialog = createDialog({
    ...removeUndefined(props),
    role: "alertdialog",
    forceVisible: true
  });
  const alertDialog = {
    ...initAlertDialog,
    getAttrs,
    updateOption: getOptionUpdater(initAlertDialog.options)
  };
  setContext(NAME, alertDialog);
  return {
    ...alertDialog,
    updateOption: getOptionUpdater(alertDialog.options),
    getAttrs
  };
}
function getCtx$1() {
  const { NAME } = getAlertDialogData();
  return getContext(NAME);
}
const Alert_dialog = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $idValues, $$unsubscribe_idValues;
  let { preventScroll = void 0 } = $$props;
  let { closeOnEscape = void 0 } = $$props;
  let { closeOnOutsideClick = false } = $$props;
  let { portal = void 0 } = $$props;
  let { open = void 0 } = $$props;
  let { onOpenChange = void 0 } = $$props;
  let { openFocus = void 0 } = $$props;
  let { closeFocus = void 0 } = $$props;
  let { onOutsideClick = void 0 } = $$props;
  const { states: { open: localOpen }, updateOption, ids } = setCtx$2({
    closeOnEscape,
    preventScroll,
    closeOnOutsideClick,
    portal,
    forceVisible: true,
    defaultOpen: open,
    openFocus,
    closeFocus,
    onOutsideClick,
    onOpenChange: ({ next }) => {
      if (open !== next) {
        onOpenChange?.(next);
        open = next;
      }
      return next;
    }
  });
  const idValues = derived([ids.content, ids.description, ids.title], ([$contentId, $descriptionId, $titleId]) => ({
    content: $contentId,
    description: $descriptionId,
    title: $titleId
  }));
  $$unsubscribe_idValues = subscribe(idValues, (value) => $idValues = value);
  if ($$props.preventScroll === void 0 && $$bindings.preventScroll && preventScroll !== void 0)
    $$bindings.preventScroll(preventScroll);
  if ($$props.closeOnEscape === void 0 && $$bindings.closeOnEscape && closeOnEscape !== void 0)
    $$bindings.closeOnEscape(closeOnEscape);
  if ($$props.closeOnOutsideClick === void 0 && $$bindings.closeOnOutsideClick && closeOnOutsideClick !== void 0)
    $$bindings.closeOnOutsideClick(closeOnOutsideClick);
  if ($$props.portal === void 0 && $$bindings.portal && portal !== void 0)
    $$bindings.portal(portal);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.onOpenChange === void 0 && $$bindings.onOpenChange && onOpenChange !== void 0)
    $$bindings.onOpenChange(onOpenChange);
  if ($$props.openFocus === void 0 && $$bindings.openFocus && openFocus !== void 0)
    $$bindings.openFocus(openFocus);
  if ($$props.closeFocus === void 0 && $$bindings.closeFocus && closeFocus !== void 0)
    $$bindings.closeFocus(closeFocus);
  if ($$props.onOutsideClick === void 0 && $$bindings.onOutsideClick && onOutsideClick !== void 0)
    $$bindings.onOutsideClick(onOutsideClick);
  open !== void 0 && localOpen.set(open);
  {
    updateOption("preventScroll", preventScroll);
  }
  {
    updateOption("closeOnEscape", closeOnEscape);
  }
  {
    updateOption("closeOnOutsideClick", closeOnOutsideClick);
  }
  {
    updateOption("portal", portal);
  }
  {
    updateOption("openFocus", openFocus);
  }
  {
    updateOption("closeFocus", closeFocus);
  }
  {
    updateOption("onOutsideClick", onOutsideClick);
  }
  $$unsubscribe_idValues();
  return `${slots.default ? slots.default({ ids: $idValues }) : ``}`;
});
const Alert_dialog_title$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let builder;
  let $$restProps = compute_rest_props($$props, ["level", "asChild", "id", "el"]);
  let $title, $$unsubscribe_title;
  let { level = "h2" } = $$props;
  let { asChild = false } = $$props;
  let { id = void 0 } = $$props;
  let { el = void 0 } = $$props;
  const { elements: { title }, ids, getAttrs } = getCtx$1();
  $$unsubscribe_title = subscribe(title, (value) => $title = value);
  const attrs = getAttrs("title");
  if ($$props.level === void 0 && $$bindings.level && level !== void 0)
    $$bindings.level(level);
  if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0)
    $$bindings.asChild(asChild);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.el === void 0 && $$bindings.el && el !== void 0)
    $$bindings.el(el);
  {
    if (id) {
      ids.title.set(id);
    }
  }
  builder = $title;
  {
    Object.assign(builder, attrs);
  }
  $$unsubscribe_title();
  return `${asChild ? `${slots.default ? slots.default({ builder }) : ``}` : `${((tag) => {
    return tag ? `<${level}${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute("this", el, 0)}>${is_void(tag) ? "" : `${slots.default ? slots.default({ builder }) : ``}`}${is_void(tag) ? "" : `</${tag}>`}` : "";
  })(level)}`}`;
});
const Alert_dialog_action$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let builder;
  let $$restProps = compute_rest_props($$props, ["asChild", "el"]);
  let $close, $$unsubscribe_close;
  let { asChild = false } = $$props;
  let { el = void 0 } = $$props;
  const { elements: { close }, getAttrs } = getCtx$1();
  $$unsubscribe_close = subscribe(close, (value) => $close = value);
  createDispatcher();
  const attrs = getAttrs("action");
  if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0)
    $$bindings.asChild(asChild);
  if ($$props.el === void 0 && $$bindings.el && el !== void 0)
    $$bindings.el(el);
  builder = $close;
  {
    Object.assign(builder, attrs);
  }
  $$unsubscribe_close();
  return `${asChild ? `${slots.default ? slots.default({ builder }) : ``}` : `<button${spread([escape_object(builder), { type: "button" }, escape_object($$restProps)], {})}${add_attribute("this", el, 0)}>${slots.default ? slots.default({ builder }) : ``}</button>`}`;
});
const Alert_dialog_cancel$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let builder;
  let $$restProps = compute_rest_props($$props, ["asChild", "el"]);
  let $close, $$unsubscribe_close;
  let { asChild = false } = $$props;
  let { el = void 0 } = $$props;
  const { elements: { close }, getAttrs } = getCtx$1();
  $$unsubscribe_close = subscribe(close, (value) => $close = value);
  createDispatcher();
  const attrs = getAttrs("cancel");
  if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0)
    $$bindings.asChild(asChild);
  if ($$props.el === void 0 && $$bindings.el && el !== void 0)
    $$bindings.el(el);
  builder = $close;
  {
    Object.assign(builder, attrs);
  }
  $$unsubscribe_close();
  return `${asChild ? `${slots.default ? slots.default({ builder }) : ``}` : `<button${spread([escape_object(builder), { type: "button" }, escape_object($$restProps)], {})}${add_attribute("this", el, 0)}>${slots.default ? slots.default({ builder }) : ``}</button>`}`;
});
const Alert_dialog_portal$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let builder;
  let $$restProps = compute_rest_props($$props, ["asChild", "el"]);
  let $portalled, $$unsubscribe_portalled;
  let { asChild = false } = $$props;
  let { el = void 0 } = $$props;
  const { elements: { portalled }, getAttrs } = getCtx$1();
  $$unsubscribe_portalled = subscribe(portalled, (value) => $portalled = value);
  const attrs = getAttrs("portal");
  if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0)
    $$bindings.asChild(asChild);
  if ($$props.el === void 0 && $$bindings.el && el !== void 0)
    $$bindings.el(el);
  builder = $portalled;
  {
    Object.assign(builder, attrs);
  }
  $$unsubscribe_portalled();
  return `${asChild ? `${slots.default ? slots.default({ builder }) : ``}` : `<div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute("this", el, 0)}>${slots.default ? slots.default({ builder }) : ``}</div>`}`;
});
const Alert_dialog_content$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let builder;
  let $$restProps = compute_rest_props($$props, [
    "transition",
    "transitionConfig",
    "inTransition",
    "inTransitionConfig",
    "outTransition",
    "outTransitionConfig",
    "id",
    "asChild",
    "el"
  ]);
  let $content, $$unsubscribe_content;
  let $open, $$unsubscribe_open;
  let { transition = void 0 } = $$props;
  let { transitionConfig = void 0 } = $$props;
  let { inTransition = void 0 } = $$props;
  let { inTransitionConfig = void 0 } = $$props;
  let { outTransition = void 0 } = $$props;
  let { outTransitionConfig = void 0 } = $$props;
  let { id = void 0 } = $$props;
  let { asChild = false } = $$props;
  let { el = void 0 } = $$props;
  const { elements: { content }, states: { open }, ids, getAttrs } = getCtx$1();
  $$unsubscribe_content = subscribe(content, (value) => $content = value);
  $$unsubscribe_open = subscribe(open, (value) => $open = value);
  const attrs = getAttrs("content");
  if ($$props.transition === void 0 && $$bindings.transition && transition !== void 0)
    $$bindings.transition(transition);
  if ($$props.transitionConfig === void 0 && $$bindings.transitionConfig && transitionConfig !== void 0)
    $$bindings.transitionConfig(transitionConfig);
  if ($$props.inTransition === void 0 && $$bindings.inTransition && inTransition !== void 0)
    $$bindings.inTransition(inTransition);
  if ($$props.inTransitionConfig === void 0 && $$bindings.inTransitionConfig && inTransitionConfig !== void 0)
    $$bindings.inTransitionConfig(inTransitionConfig);
  if ($$props.outTransition === void 0 && $$bindings.outTransition && outTransition !== void 0)
    $$bindings.outTransition(outTransition);
  if ($$props.outTransitionConfig === void 0 && $$bindings.outTransitionConfig && outTransitionConfig !== void 0)
    $$bindings.outTransitionConfig(outTransitionConfig);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0)
    $$bindings.asChild(asChild);
  if ($$props.el === void 0 && $$bindings.el && el !== void 0)
    $$bindings.el(el);
  {
    if (id) {
      ids.content.set(id);
    }
  }
  builder = $content;
  {
    Object.assign(builder, attrs);
  }
  $$unsubscribe_content();
  $$unsubscribe_open();
  return `${asChild && $open ? `${slots.default ? slots.default({ builder }) : ``}` : `${transition && $open ? `<div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute("this", el, 0)}>${slots.default ? slots.default({ builder }) : ``}</div>` : `${inTransition && outTransition && $open ? `<div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute("this", el, 0)}>${slots.default ? slots.default({ builder }) : ``}</div>` : `${inTransition && $open ? `<div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute("this", el, 0)}>${slots.default ? slots.default({ builder }) : ``}</div>` : `${outTransition && $open ? `<div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute("this", el, 0)}>${slots.default ? slots.default({ builder }) : ``}</div>` : `${$open ? `<div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute("this", el, 0)}>${slots.default ? slots.default({ builder }) : ``}</div>` : ``}`}`}`}`}`}`;
});
const Alert_dialog_overlay$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let builder;
  let $$restProps = compute_rest_props($$props, [
    "transition",
    "transitionConfig",
    "inTransition",
    "inTransitionConfig",
    "outTransition",
    "outTransitionConfig",
    "asChild",
    "el"
  ]);
  let $overlay, $$unsubscribe_overlay;
  let $open, $$unsubscribe_open;
  let { transition = void 0 } = $$props;
  let { transitionConfig = void 0 } = $$props;
  let { inTransition = void 0 } = $$props;
  let { inTransitionConfig = void 0 } = $$props;
  let { outTransition = void 0 } = $$props;
  let { outTransitionConfig = void 0 } = $$props;
  let { asChild = false } = $$props;
  let { el = void 0 } = $$props;
  const { elements: { overlay }, states: { open }, getAttrs } = getCtx$1();
  $$unsubscribe_overlay = subscribe(overlay, (value) => $overlay = value);
  $$unsubscribe_open = subscribe(open, (value) => $open = value);
  const attrs = getAttrs("overlay");
  if ($$props.transition === void 0 && $$bindings.transition && transition !== void 0)
    $$bindings.transition(transition);
  if ($$props.transitionConfig === void 0 && $$bindings.transitionConfig && transitionConfig !== void 0)
    $$bindings.transitionConfig(transitionConfig);
  if ($$props.inTransition === void 0 && $$bindings.inTransition && inTransition !== void 0)
    $$bindings.inTransition(inTransition);
  if ($$props.inTransitionConfig === void 0 && $$bindings.inTransitionConfig && inTransitionConfig !== void 0)
    $$bindings.inTransitionConfig(inTransitionConfig);
  if ($$props.outTransition === void 0 && $$bindings.outTransition && outTransition !== void 0)
    $$bindings.outTransition(outTransition);
  if ($$props.outTransitionConfig === void 0 && $$bindings.outTransitionConfig && outTransitionConfig !== void 0)
    $$bindings.outTransitionConfig(outTransitionConfig);
  if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0)
    $$bindings.asChild(asChild);
  if ($$props.el === void 0 && $$bindings.el && el !== void 0)
    $$bindings.el(el);
  builder = $overlay;
  {
    Object.assign(builder, attrs);
  }
  $$unsubscribe_overlay();
  $$unsubscribe_open();
  return `${asChild && $open ? `${slots.default ? slots.default({ builder }) : ``}` : `${transition && $open ? `<div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute("this", el, 0)}></div>` : `${inTransition && outTransition && $open ? `<div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute("this", el, 0)}></div>` : `${inTransition && $open ? `<div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute("this", el, 0)}></div>` : `${outTransition && $open ? `<div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute("this", el, 0)}></div>` : `${$open ? `<div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute("this", el, 0)}></div>` : ``}`}`}`}`}`}`;
});
const Alert_dialog_trigger = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let builder;
  let $$restProps = compute_rest_props($$props, ["asChild", "el"]);
  let $trigger, $$unsubscribe_trigger;
  let { asChild = false } = $$props;
  let { el = void 0 } = $$props;
  const { elements: { trigger }, getAttrs } = getCtx$1();
  $$unsubscribe_trigger = subscribe(trigger, (value) => $trigger = value);
  createDispatcher();
  const attrs = getAttrs("trigger");
  if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0)
    $$bindings.asChild(asChild);
  if ($$props.el === void 0 && $$bindings.el && el !== void 0)
    $$bindings.el(el);
  builder = $trigger;
  {
    Object.assign(builder, attrs);
  }
  $$unsubscribe_trigger();
  return `${asChild ? `${slots.default ? slots.default({ builder }) : ``}` : `<button${spread([escape_object(builder), { type: "button" }, escape_object($$restProps)], {})}${add_attribute("this", el, 0)}>${slots.default ? slots.default({ builder }) : ``}</button>`}`;
});
const Alert_dialog_description$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let builder;
  let $$restProps = compute_rest_props($$props, ["asChild", "id", "el"]);
  let $description, $$unsubscribe_description;
  let { asChild = false } = $$props;
  let { id = void 0 } = $$props;
  let { el = void 0 } = $$props;
  const { elements: { description }, ids, getAttrs } = getCtx$1();
  $$unsubscribe_description = subscribe(description, (value) => $description = value);
  const attrs = getAttrs("description");
  if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0)
    $$bindings.asChild(asChild);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.el === void 0 && $$bindings.el && el !== void 0)
    $$bindings.el(el);
  {
    if (id) {
      ids.description.set(id);
    }
  }
  builder = $description;
  {
    Object.assign(builder, attrs);
  }
  $$unsubscribe_description();
  return `${asChild ? `${slots.default ? slots.default({ builder }) : ``}` : `<div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute("this", el, 0)}>${slots.default ? slots.default({ builder }) : ``}</div>`}`;
});
function getSeparatorData() {
  const NAME = "separator";
  const PARTS = ["root"];
  return {
    NAME,
    PARTS
  };
}
function setCtx$1(props) {
  const { NAME, PARTS } = getSeparatorData();
  const getAttrs = createBitAttrs(NAME, PARTS);
  const separator = { ...createSeparator(removeUndefined(props)), getAttrs };
  return {
    ...separator,
    updateOption: getOptionUpdater(separator.options)
  };
}
const Separator$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let builder;
  let $$restProps = compute_rest_props($$props, ["orientation", "decorative", "asChild", "el"]);
  let $root, $$unsubscribe_root;
  let { orientation = "horizontal" } = $$props;
  let { decorative = true } = $$props;
  let { asChild = false } = $$props;
  let { el = void 0 } = $$props;
  const { elements: { root }, updateOption, getAttrs } = setCtx$1({ orientation, decorative });
  $$unsubscribe_root = subscribe(root, (value) => $root = value);
  const attrs = getAttrs("root");
  if ($$props.orientation === void 0 && $$bindings.orientation && orientation !== void 0)
    $$bindings.orientation(orientation);
  if ($$props.decorative === void 0 && $$bindings.decorative && decorative !== void 0)
    $$bindings.decorative(decorative);
  if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0)
    $$bindings.asChild(asChild);
  if ($$props.el === void 0 && $$bindings.el && el !== void 0)
    $$bindings.el(el);
  {
    updateOption("orientation", orientation);
  }
  {
    updateOption("decorative", decorative);
  }
  builder = $root;
  {
    Object.assign(builder, attrs);
  }
  $$unsubscribe_root();
  return `${asChild ? `${slots.default ? slots.default({ builder }) : ``}` : `<div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute("this", el, 0)}></div>`}`;
});
function getPopoverData() {
  const NAME = "popover";
  const PARTS = ["arrow", "close", "content", "trigger"];
  return {
    NAME,
    PARTS
  };
}
function setCtx(props) {
  const { NAME, PARTS } = getPopoverData();
  const getAttrs = createBitAttrs(NAME, PARTS);
  const popover = {
    ...createPopover({
      positioning: {
        placement: "bottom",
        gutter: 0
      },
      ...removeUndefined(props),
      forceVisible: true
    }),
    getAttrs
  };
  setContext(NAME, popover);
  return {
    ...popover,
    updateOption: getOptionUpdater(popover.options)
  };
}
function getCtx() {
  const { NAME } = getPopoverData();
  return getContext(NAME);
}
function updatePositioning(props) {
  const defaultPlacement = {
    side: "bottom",
    align: "center"
  };
  const withDefaults = { ...defaultPlacement, ...props };
  const { options: { positioning } } = getCtx();
  const updater = getPositioningUpdater(positioning);
  updater(withDefaults);
}
const Dialog_overlay$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let builder;
  let $$restProps = compute_rest_props($$props, [
    "transition",
    "transitionConfig",
    "inTransition",
    "inTransitionConfig",
    "outTransition",
    "outTransitionConfig",
    "asChild",
    "el"
  ]);
  let $overlay, $$unsubscribe_overlay;
  let $open, $$unsubscribe_open;
  let { transition = void 0 } = $$props;
  let { transitionConfig = void 0 } = $$props;
  let { inTransition = void 0 } = $$props;
  let { inTransitionConfig = void 0 } = $$props;
  let { outTransition = void 0 } = $$props;
  let { outTransitionConfig = void 0 } = $$props;
  let { asChild = false } = $$props;
  let { el = void 0 } = $$props;
  const { elements: { overlay }, states: { open }, getAttrs } = getCtx$2();
  $$unsubscribe_overlay = subscribe(overlay, (value) => $overlay = value);
  $$unsubscribe_open = subscribe(open, (value) => $open = value);
  const attrs = getAttrs("overlay");
  if ($$props.transition === void 0 && $$bindings.transition && transition !== void 0)
    $$bindings.transition(transition);
  if ($$props.transitionConfig === void 0 && $$bindings.transitionConfig && transitionConfig !== void 0)
    $$bindings.transitionConfig(transitionConfig);
  if ($$props.inTransition === void 0 && $$bindings.inTransition && inTransition !== void 0)
    $$bindings.inTransition(inTransition);
  if ($$props.inTransitionConfig === void 0 && $$bindings.inTransitionConfig && inTransitionConfig !== void 0)
    $$bindings.inTransitionConfig(inTransitionConfig);
  if ($$props.outTransition === void 0 && $$bindings.outTransition && outTransition !== void 0)
    $$bindings.outTransition(outTransition);
  if ($$props.outTransitionConfig === void 0 && $$bindings.outTransitionConfig && outTransitionConfig !== void 0)
    $$bindings.outTransitionConfig(outTransitionConfig);
  if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0)
    $$bindings.asChild(asChild);
  if ($$props.el === void 0 && $$bindings.el && el !== void 0)
    $$bindings.el(el);
  builder = $overlay;
  {
    Object.assign(builder, attrs);
  }
  $$unsubscribe_overlay();
  $$unsubscribe_open();
  return `${asChild && $open ? `${slots.default ? slots.default({ builder }) : ``}` : `${transition && $open ? ` <div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute("this", el, 0)}></div>` : `${inTransition && outTransition && $open ? ` <div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute("this", el, 0)}></div>` : `${inTransition && $open ? ` <div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute("this", el, 0)}></div>` : `${outTransition && $open ? ` <div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute("this", el, 0)}></div>` : `${$open ? ` <div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute("this", el, 0)}></div>` : ``}`}`}`}`}`}`;
});
const Popover = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $idValues, $$unsubscribe_idValues;
  let { disableFocusTrap = void 0 } = $$props;
  let { closeOnEscape = void 0 } = $$props;
  let { closeOnOutsideClick = void 0 } = $$props;
  let { preventScroll = void 0 } = $$props;
  let { portal = void 0 } = $$props;
  let { open = void 0 } = $$props;
  let { onOpenChange = void 0 } = $$props;
  let { openFocus = void 0 } = $$props;
  let { closeFocus = void 0 } = $$props;
  let { onOutsideClick = void 0 } = $$props;
  const { updateOption, states: { open: localOpen }, ids } = setCtx({
    disableFocusTrap,
    closeOnEscape,
    closeOnOutsideClick,
    preventScroll,
    portal,
    defaultOpen: open,
    openFocus,
    closeFocus,
    onOutsideClick,
    onOpenChange: ({ next }) => {
      if (open !== next) {
        onOpenChange?.(next);
        open = next;
      }
      return next;
    },
    positioning: { gutter: 0, offset: { mainAxis: 1 } }
  });
  const idValues = derived([ids.content, ids.trigger], ([$contentId, $triggerId]) => ({ content: $contentId, trigger: $triggerId }));
  $$unsubscribe_idValues = subscribe(idValues, (value) => $idValues = value);
  if ($$props.disableFocusTrap === void 0 && $$bindings.disableFocusTrap && disableFocusTrap !== void 0)
    $$bindings.disableFocusTrap(disableFocusTrap);
  if ($$props.closeOnEscape === void 0 && $$bindings.closeOnEscape && closeOnEscape !== void 0)
    $$bindings.closeOnEscape(closeOnEscape);
  if ($$props.closeOnOutsideClick === void 0 && $$bindings.closeOnOutsideClick && closeOnOutsideClick !== void 0)
    $$bindings.closeOnOutsideClick(closeOnOutsideClick);
  if ($$props.preventScroll === void 0 && $$bindings.preventScroll && preventScroll !== void 0)
    $$bindings.preventScroll(preventScroll);
  if ($$props.portal === void 0 && $$bindings.portal && portal !== void 0)
    $$bindings.portal(portal);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.onOpenChange === void 0 && $$bindings.onOpenChange && onOpenChange !== void 0)
    $$bindings.onOpenChange(onOpenChange);
  if ($$props.openFocus === void 0 && $$bindings.openFocus && openFocus !== void 0)
    $$bindings.openFocus(openFocus);
  if ($$props.closeFocus === void 0 && $$bindings.closeFocus && closeFocus !== void 0)
    $$bindings.closeFocus(closeFocus);
  if ($$props.onOutsideClick === void 0 && $$bindings.onOutsideClick && onOutsideClick !== void 0)
    $$bindings.onOutsideClick(onOutsideClick);
  open !== void 0 && localOpen.set(open);
  {
    updateOption("disableFocusTrap", disableFocusTrap);
  }
  {
    updateOption("closeOnEscape", closeOnEscape);
  }
  {
    updateOption("closeOnOutsideClick", closeOnOutsideClick);
  }
  {
    updateOption("preventScroll", preventScroll);
  }
  {
    updateOption("portal", portal);
  }
  {
    updateOption("openFocus", openFocus);
  }
  {
    updateOption("closeFocus", closeFocus);
  }
  {
    updateOption("onOutsideClick", onOutsideClick);
  }
  $$unsubscribe_idValues();
  return `${slots.default ? slots.default({ ids: $idValues }) : ``}`;
});
const Popover_content$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let builder;
  let $$restProps = compute_rest_props($$props, [
    "transition",
    "transitionConfig",
    "inTransition",
    "inTransitionConfig",
    "outTransition",
    "outTransitionConfig",
    "asChild",
    "id",
    "side",
    "align",
    "sideOffset",
    "alignOffset",
    "collisionPadding",
    "avoidCollisions",
    "collisionBoundary",
    "sameWidth",
    "fitViewport",
    "strategy",
    "overlap",
    "el"
  ]);
  let $open, $$unsubscribe_open;
  let $content, $$unsubscribe_content;
  let { transition = void 0 } = $$props;
  let { transitionConfig = void 0 } = $$props;
  let { inTransition = void 0 } = $$props;
  let { inTransitionConfig = void 0 } = $$props;
  let { outTransition = void 0 } = $$props;
  let { outTransitionConfig = void 0 } = $$props;
  let { asChild = false } = $$props;
  let { id = void 0 } = $$props;
  let { side = "bottom" } = $$props;
  let { align = "center" } = $$props;
  let { sideOffset = 0 } = $$props;
  let { alignOffset = 0 } = $$props;
  let { collisionPadding = 8 } = $$props;
  let { avoidCollisions = true } = $$props;
  let { collisionBoundary = void 0 } = $$props;
  let { sameWidth = false } = $$props;
  let { fitViewport = false } = $$props;
  let { strategy = "absolute" } = $$props;
  let { overlap = false } = $$props;
  let { el = void 0 } = $$props;
  const { elements: { content }, states: { open }, ids, getAttrs } = getCtx();
  $$unsubscribe_content = subscribe(content, (value) => $content = value);
  $$unsubscribe_open = subscribe(open, (value) => $open = value);
  const attrs = getAttrs("content");
  if ($$props.transition === void 0 && $$bindings.transition && transition !== void 0)
    $$bindings.transition(transition);
  if ($$props.transitionConfig === void 0 && $$bindings.transitionConfig && transitionConfig !== void 0)
    $$bindings.transitionConfig(transitionConfig);
  if ($$props.inTransition === void 0 && $$bindings.inTransition && inTransition !== void 0)
    $$bindings.inTransition(inTransition);
  if ($$props.inTransitionConfig === void 0 && $$bindings.inTransitionConfig && inTransitionConfig !== void 0)
    $$bindings.inTransitionConfig(inTransitionConfig);
  if ($$props.outTransition === void 0 && $$bindings.outTransition && outTransition !== void 0)
    $$bindings.outTransition(outTransition);
  if ($$props.outTransitionConfig === void 0 && $$bindings.outTransitionConfig && outTransitionConfig !== void 0)
    $$bindings.outTransitionConfig(outTransitionConfig);
  if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0)
    $$bindings.asChild(asChild);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.side === void 0 && $$bindings.side && side !== void 0)
    $$bindings.side(side);
  if ($$props.align === void 0 && $$bindings.align && align !== void 0)
    $$bindings.align(align);
  if ($$props.sideOffset === void 0 && $$bindings.sideOffset && sideOffset !== void 0)
    $$bindings.sideOffset(sideOffset);
  if ($$props.alignOffset === void 0 && $$bindings.alignOffset && alignOffset !== void 0)
    $$bindings.alignOffset(alignOffset);
  if ($$props.collisionPadding === void 0 && $$bindings.collisionPadding && collisionPadding !== void 0)
    $$bindings.collisionPadding(collisionPadding);
  if ($$props.avoidCollisions === void 0 && $$bindings.avoidCollisions && avoidCollisions !== void 0)
    $$bindings.avoidCollisions(avoidCollisions);
  if ($$props.collisionBoundary === void 0 && $$bindings.collisionBoundary && collisionBoundary !== void 0)
    $$bindings.collisionBoundary(collisionBoundary);
  if ($$props.sameWidth === void 0 && $$bindings.sameWidth && sameWidth !== void 0)
    $$bindings.sameWidth(sameWidth);
  if ($$props.fitViewport === void 0 && $$bindings.fitViewport && fitViewport !== void 0)
    $$bindings.fitViewport(fitViewport);
  if ($$props.strategy === void 0 && $$bindings.strategy && strategy !== void 0)
    $$bindings.strategy(strategy);
  if ($$props.overlap === void 0 && $$bindings.overlap && overlap !== void 0)
    $$bindings.overlap(overlap);
  if ($$props.el === void 0 && $$bindings.el && el !== void 0)
    $$bindings.el(el);
  {
    if (id) {
      ids.content.set(id);
    }
  }
  builder = $content;
  {
    Object.assign(builder, attrs);
  }
  {
    if ($open) {
      updatePositioning({
        side,
        align,
        sideOffset,
        alignOffset,
        collisionPadding,
        avoidCollisions,
        collisionBoundary,
        sameWidth,
        fitViewport,
        strategy,
        overlap
      });
    }
  }
  $$unsubscribe_open();
  $$unsubscribe_content();
  return `${asChild && $open ? `${slots.default ? slots.default({ builder }) : ``}` : `${transition && $open ? `<div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute("this", el, 0)}>${slots.default ? slots.default({ builder }) : ``}</div>` : `${inTransition && outTransition && $open ? `<div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute("this", el, 0)}>${slots.default ? slots.default({ builder }) : ``}</div>` : `${inTransition && $open ? `<div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute("this", el, 0)}>${slots.default ? slots.default({ builder }) : ``}</div>` : `${outTransition && $open ? `<div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute("this", el, 0)}>${slots.default ? slots.default({ builder }) : ``}</div>` : `${$open ? `<div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute("this", el, 0)}>${slots.default ? slots.default({ builder }) : ``}</div>` : ``}`}`}`}`}`}`;
});
const Popover_trigger = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let attrs;
  let builder;
  let $$restProps = compute_rest_props($$props, ["asChild", "id", "el"]);
  let $trigger, $$unsubscribe_trigger;
  let $open, $$unsubscribe_open;
  let { asChild = false } = $$props;
  let { id = void 0 } = $$props;
  let { el = void 0 } = $$props;
  const { elements: { trigger }, states: { open }, ids, getAttrs } = getCtx();
  $$unsubscribe_trigger = subscribe(trigger, (value) => $trigger = value);
  $$unsubscribe_open = subscribe(open, (value) => $open = value);
  createDispatcher();
  const bitsAttrs = getAttrs("trigger");
  if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0)
    $$bindings.asChild(asChild);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.el === void 0 && $$bindings.el && el !== void 0)
    $$bindings.el(el);
  {
    if (id) {
      ids.trigger.set(id);
    }
  }
  attrs = {
    ...bitsAttrs,
    "aria-controls": $open ? ids.content : void 0
  };
  builder = $trigger;
  {
    Object.assign(builder, attrs);
  }
  $$unsubscribe_trigger();
  $$unsubscribe_open();
  return `${asChild ? `${slots.default ? slots.default({ builder }) : ``}` : `<button${spread([escape_object(builder), { type: "button" }, escape_object($$restProps)], {})}${add_attribute("this", el, 0)}>${slots.default ? slots.default({ builder }) : ``}</button>`}`;
});
const Popover_content = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "transition", "transitionConfig", "align", "sideOffset"]);
  let { class: className = void 0 } = $$props;
  let { transition = flyAndScale } = $$props;
  let { transitionConfig = void 0 } = $$props;
  let { align = "center" } = $$props;
  let { sideOffset = 4 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.transition === void 0 && $$bindings.transition && transition !== void 0)
    $$bindings.transition(transition);
  if ($$props.transitionConfig === void 0 && $$bindings.transitionConfig && transitionConfig !== void 0)
    $$bindings.transitionConfig(transitionConfig);
  if ($$props.align === void 0 && $$bindings.align && align !== void 0)
    $$bindings.align(align);
  if ($$props.sideOffset === void 0 && $$bindings.sideOffset && sideOffset !== void 0)
    $$bindings.sideOffset(sideOffset);
  return `${validate_component(Popover_content$1, "PopoverPrimitive.Content").$$render(
    $$result,
    Object.assign({}, { transition }, { transitionConfig }, { align }, { sideOffset }, $$restProps, {
      class: cn("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none", className)
    }),
    {},
    {
      default: () => {
        return `${slots.default ? slots.default({}) : ``}`;
      }
    }
  )}`;
});
const Root$1 = Popover;
const Trigger$1 = Popover_trigger;
const CommandSeparator = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["alwaysRender", "asChild"]);
  let $render, $$unsubscribe_render;
  let { alwaysRender = false } = $$props;
  let { asChild = false } = $$props;
  const state = getState();
  const render = derived(state, ($state) => !$state.search);
  $$unsubscribe_render = subscribe(render, (value) => $render = value);
  const attrs = {
    "data-cmdk-separator": "",
    role: "separator"
  };
  if ($$props.alwaysRender === void 0 && $$bindings.alwaysRender && alwaysRender !== void 0)
    $$bindings.alwaysRender(alwaysRender);
  if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0)
    $$bindings.asChild(asChild);
  $$unsubscribe_render();
  return `${$render || alwaysRender ? `${asChild ? `${slots.default ? slots.default({ attrs }) : ``}` : `<div${spread([escape_object(attrs), escape_object($$restProps)], {})}></div>`}` : ``}`;
});
const Dialog_overlay = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "transition", "transitionConfig"]);
  let { class: className = void 0 } = $$props;
  let { transition = fade } = $$props;
  let { transitionConfig = { duration: 150 } } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.transition === void 0 && $$bindings.transition && transition !== void 0)
    $$bindings.transition(transition);
  if ($$props.transitionConfig === void 0 && $$bindings.transitionConfig && transitionConfig !== void 0)
    $$bindings.transitionConfig(transitionConfig);
  return `${validate_component(Dialog_overlay$1, "DialogPrimitive.Overlay").$$render(
    $$result,
    Object.assign(
      {},
      { transition },
      { transitionConfig },
      {
        class: cn("fixed inset-0 bg-background/80 ", className)
      },
      $$restProps
    ),
    {},
    {}
  )}`;
});
const Command_separator = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: className = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `${validate_component(CommandSeparator, "CommandPrimitive.Separator").$$render(
    $$result,
    Object.assign(
      {},
      {
        class: cn("-mx-1 h-px bg-border", className)
      },
      $$restProps
    ),
    {},
    {}
  )}`;
});
const Separator = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "orientation", "decorative"]);
  let { class: className = void 0 } = $$props;
  let { orientation = "horizontal" } = $$props;
  let { decorative = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.orientation === void 0 && $$bindings.orientation && orientation !== void 0)
    $$bindings.orientation(orientation);
  if ($$props.decorative === void 0 && $$bindings.decorative && decorative !== void 0)
    $$bindings.decorative(decorative);
  return `${validate_component(Separator$1, "SeparatorPrimitive.Root").$$render(
    $$result,
    Object.assign(
      {},
      {
        class: cn(
          "shrink-0 bg-border",
          orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
          className
        )
      },
      { orientation },
      { decorative },
      $$restProps
    ),
    {},
    {}
  )}`;
});
const Sidebar_project_dialog = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let selectedType;
  let disabled;
  let $$restProps = compute_rest_props($$props, ["projectForm", "params"]);
  let $formData, $$unsubscribe_formData;
  let { projectForm } = $$props;
  let { params } = $$props;
  let open = false;
  const form = superForm(projectForm, { validators: zodClient(projectSchema) });
  const { form: formData, enhance } = form;
  $$unsubscribe_formData = subscribe(formData, (value) => $formData = value);
  if ($$props.projectForm === void 0 && $$bindings.projectForm && projectForm !== void 0)
    $$bindings.projectForm(projectForm);
  if ($$props.params === void 0 && $$bindings.params && params !== void 0)
    $$bindings.params(params);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    selectedType = $formData.type ? {
      label: $formData.type,
      value: $formData.type
    } : void 0;
    disabled = $formData.type !== "renovasi" && $formData.type !== "konstruksi" || $formData.name?.length <= 0;
    $$rendered = `${validate_component(Root$2, "Dialog.Root").$$render(
      $$result,
      {
        closeOnEscape: false,
        closeOnOutsideClick: false,
        onOpenChange: () => {
          $formData.name = "";
          $formData.type = "";
        },
        open
      },
      {
        open: ($$value) => {
          open = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(Trigger$2, "Dialog.Trigger").$$render($$result, { class: $$restProps.class }, {}, {
            default: () => {
              return `${validate_component(Plus, "Plus").$$render($$result, { class: "h-4 w-4" }, {}, {})}`;
            }
          })} ${validate_component(Dialog_overlay, "Dialog.Overlay").$$render(
            $$result,
            {
              class: "fixed inset-0 z-30 bg-background/50 "
            },
            {},
            {}
          )} ${validate_component(Dialog_content, "Dialog.Content").$$render(
            $$result,
            {
              class: "z-[60] w-screen border-none bg-card px-8 py-6"
            },
            {},
            {
              default: () => {
                return ` <form method="POST" action="${"/" + escape(params, true) + "?/create"}" class="space-y-4">${validate_component(Form_field, "Form.Field").$$render($$result, { form, name: "name" }, {}, {
                  default: () => {
                    return `${validate_component(Control, "Form.Control").$$render($$result, {}, {}, {
                      default: ({ attrs }) => {
                        return `${validate_component(Form_label, "Form.Label").$$render($$result, {}, {}, {
                          default: () => {
                            return `Nama Proyek`;
                          }
                        })} ${validate_component(Input, "Input").$$render(
                          $$result,
                          Object.assign({}, attrs, { autocomplete: "off" }, { value: $formData.name }),
                          {
                            value: ($$value) => {
                              $formData.name = $$value;
                              $$settled = false;
                            }
                          },
                          {}
                        )}`;
                      }
                    })}`;
                  }
                })} ${validate_component(Form_field, "Form.Field").$$render($$result, { form, name: "type" }, {}, {
                  default: () => {
                    return `${validate_component(Control, "Form.Control").$$render($$result, {}, {}, {
                      default: ({ attrs }) => {
                        return `${validate_component(Form_label, "Form.Label").$$render($$result, {}, {}, {
                          default: () => {
                            return `Tipe`;
                          }
                        })} ${validate_component(Root$3, "Select.Root").$$render(
                          $$result,
                          {
                            selected: selectedType,
                            onSelectedChange: (v) => {
                              v && ($formData.type = v.value);
                            }
                          },
                          {},
                          {
                            default: () => {
                              return `${validate_component(Select_trigger, "Select.Trigger").$$render($$result, Object.assign({}, attrs), {}, {
                                default: () => {
                                  return `${validate_component(Value, "Select.Value").$$render(
                                    $$result,
                                    {
                                      placeholder: "Select Type",
                                      class: "capitalize"
                                    },
                                    {},
                                    {}
                                  )}`;
                                }
                              })} ${validate_component(Select_content, "Select.Content").$$render($$result, {}, {}, {
                                default: () => {
                                  return `${validate_component(Select_item, "Select.Item").$$render($$result, { value: "konstruksi", label: "Konstruksi" }, {}, {
                                    default: () => {
                                      return `Konstruksi`;
                                    }
                                  })} ${validate_component(Select_item, "Select.Item").$$render($$result, { value: "renovasi", label: "Renovasi" }, {}, {
                                    default: () => {
                                      return `Renovasi`;
                                    }
                                  })}`;
                                }
                              })}`;
                            }
                          }
                        )} <input hidden${add_attribute("name", attrs.name, 0)}${add_attribute("value", $formData.type, 0)}>`;
                      }
                    })}`;
                  }
                })} <div class="flex justify-end gap-2 pt-10">${validate_component(Button, "Button").$$render(
                  $$result,
                  {
                    variant: "outline",
                    class: "bg-transparent"
                  },
                  {},
                  {
                    default: () => {
                      return `Batalkan`;
                    }
                  }
                )} ${validate_component(Form_button, "Form.Button").$$render(
                  $$result,
                  { class: "text-secondary", disabled },
                  {
                    disabled: ($$value) => {
                      disabled = $$value;
                      $$settled = false;
                    }
                  },
                  {
                    default: () => {
                      return `Tambah Proyek`;
                    }
                  }
                )}</div></form> `;
              }
            }
          )}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_formData();
  return $$rendered;
});
const Alert_dialog_title = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "level"]);
  let { class: className = void 0 } = $$props;
  let { level = "h3" } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.level === void 0 && $$bindings.level && level !== void 0)
    $$bindings.level(level);
  return `${validate_component(Alert_dialog_title$1, "AlertDialogPrimitive.Title").$$render(
    $$result,
    Object.assign(
      {},
      {
        class: cn("text-lg font-semibold", className)
      },
      { level },
      $$restProps
    ),
    {},
    {
      default: () => {
        return `${slots.default ? slots.default({}) : ``}`;
      }
    }
  )}`;
});
const Alert_dialog_action = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: className = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `${validate_component(Alert_dialog_action$1, "AlertDialogPrimitive.Action").$$render($$result, Object.assign({}, { class: cn(buttonVariants(), className) }, $$restProps), {}, {
    default: ({ builder }) => {
      return `${slots.default ? slots.default({ builder }) : ``}`;
    }
  })}`;
});
const Alert_dialog_cancel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: className = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `${validate_component(Alert_dialog_cancel$1, "AlertDialogPrimitive.Cancel").$$render(
    $$result,
    Object.assign(
      {},
      {
        class: cn(buttonVariants({ variant: "outline" }), "mt-2 sm:mt-0", className)
      },
      $$restProps
    ),
    {},
    {
      default: ({ builder }) => {
        return `${slots.default ? slots.default({ builder }) : ``}`;
      }
    }
  )}`;
});
const Alert_dialog_portal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, []);
  return `${validate_component(Alert_dialog_portal$1, "AlertDialogPrimitive.Portal").$$render($$result, Object.assign({}, $$restProps), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Alert_dialog_footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: className = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `<div${spread(
    [
      {
        class: escape_attribute_value(cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className))
      },
      escape_object($$restProps)
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</div>`;
});
const Alert_dialog_header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: className = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `<div${spread(
    [
      {
        class: escape_attribute_value(cn("flex flex-col space-y-2 text-center sm:text-left", className))
      },
      escape_object($$restProps)
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</div>`;
});
const Alert_dialog_overlay = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "transition", "transitionConfig"]);
  let { class: className = void 0 } = $$props;
  let { transition = fade } = $$props;
  let { transitionConfig = { duration: 150 } } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.transition === void 0 && $$bindings.transition && transition !== void 0)
    $$bindings.transition(transition);
  if ($$props.transitionConfig === void 0 && $$bindings.transitionConfig && transitionConfig !== void 0)
    $$bindings.transitionConfig(transitionConfig);
  return `${validate_component(Alert_dialog_overlay$1, "AlertDialogPrimitive.Overlay").$$render(
    $$result,
    Object.assign(
      {},
      { transition },
      { transitionConfig },
      {
        class: cn("fixed inset-0 z-50 bg-background/50 backdrop-blur-sm", className)
      },
      $$restProps
    ),
    {},
    {}
  )}`;
});
const Alert_dialog_content = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "transition", "transitionConfig"]);
  let { class: className = void 0 } = $$props;
  let { transition = flyAndScale } = $$props;
  let { transitionConfig = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.transition === void 0 && $$bindings.transition && transition !== void 0)
    $$bindings.transition(transition);
  if ($$props.transitionConfig === void 0 && $$bindings.transitionConfig && transitionConfig !== void 0)
    $$bindings.transitionConfig(transitionConfig);
  return `${validate_component(Alert_dialog_portal, "AlertDialog.Portal").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Alert_dialog_overlay, "AlertDialog.Overlay").$$render($$result, {}, {}, {})} ${validate_component(Alert_dialog_content$1, "AlertDialogPrimitive.Content").$$render(
        $$result,
        Object.assign(
          {},
          { transition },
          { transitionConfig },
          {
            class: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg  sm:rounded-lg md:w-full", className)
          },
          $$restProps
        ),
        {},
        {
          default: () => {
            return `${slots.default ? slots.default({}) : ``}`;
          }
        }
      )}`;
    }
  })}`;
});
const Alert_dialog_description = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: className = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `${validate_component(Alert_dialog_description$1, "AlertDialogPrimitive.Description").$$render(
    $$result,
    Object.assign(
      {},
      {
        class: cn("text-sm text-muted-foreground", className)
      },
      $$restProps
    ),
    {},
    {
      default: () => {
        return `${slots.default ? slots.default({}) : ``}`;
      }
    }
  )}`;
});
const Root = Alert_dialog;
const Trigger = Alert_dialog_trigger;
const Sidebar_project_list = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_formData;
  let { deleteProjectForm } = $$props;
  let { projects } = $$props;
  let { open } = $$props;
  let { params } = $$props;
  let { value } = $$props;
  const form = superForm(deleteProjectForm, {
    validators: zodClient(deleteProjectSchema)
  });
  const { form: formData, enhance } = form;
  $$unsubscribe_formData = subscribe(formData, (value2) => value2);
  if ($$props.deleteProjectForm === void 0 && $$bindings.deleteProjectForm && deleteProjectForm !== void 0)
    $$bindings.deleteProjectForm(deleteProjectForm);
  if ($$props.projects === void 0 && $$bindings.projects && projects !== void 0)
    $$bindings.projects(projects);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.params === void 0 && $$bindings.params && params !== void 0)
    $$bindings.params(params);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  $$unsubscribe_formData();
  return `${each(projects, (project) => {
    return ` ${project.startsWith(value.toLowerCase()) ? `${validate_component(Command_item, "CommandItem").$$render(
      $$result,
      {
        class: "flex h-10 p-0 capitalize",
        value: project,
        onSelect: (value2) => {
          {
            return;
          }
        }
      },
      {},
      {
        default: () => {
          return `<button class="flex h-full flex-1 cursor-default items-center pl-2 text-left capitalize">${validate_component(Check, "Check").$$render(
            $$result,
            {
              class: cn("mr-2 h-4 w-4", params !== project && "text-transparent")
            },
            {},
            {}
          )} <span class="flex-1 truncate">${escape(project)}</span></button> ${validate_component(Root, "AlertDialog.Root").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Trigger, "AlertDialog.Trigger").$$render($$result, { asChild: true }, {}, {
                default: ({ builder }) => {
                  return `${validate_component(Button, "Button").$$render(
                    $$result,
                    {
                      variant: "ghost",
                      size: "sm",
                      type: "submit",
                      class: "hover:bg-transparent hover:text-destructive",
                      builders: [builder]
                    },
                    {},
                    {
                      default: () => {
                        return `${validate_component(Trash, "Trash").$$render($$result, { class: "h-3.5 w-3.5" }, {}, {})} `;
                      }
                    }
                  )} `;
                }
              })}  ${validate_component(Alert_dialog_content, "AlertDialog.Content").$$render($$result, { class: "bg-card" }, {}, {
                default: () => {
                  return `${validate_component(Alert_dialog_header, "AlertDialog.Header").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Alert_dialog_title, "AlertDialog.Title").$$render($$result, {}, {}, {
                        default: () => {
                          return `Are you absolutely sure?`;
                        }
                      })} ${validate_component(Alert_dialog_description, "AlertDialog.Description").$$render($$result, {}, {}, {
                        default: () => {
                          return `This action cannot be undone. This will permanently delete the project.
						`;
                        }
                      })} `;
                    }
                  })} ${validate_component(Alert_dialog_footer, "AlertDialog.Footer").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Alert_dialog_cancel, "AlertDialog.Cancel").$$render($$result, { class: "bg-transparent" }, {}, {
                        default: () => {
                          return `Cancel`;
                        }
                      })} <form method="POST" action="/banjar?/delete">${validate_component(Form_field, "Form.Field").$$render($$result, { form, name: "name", class: "hidden" }, {}, {
                        default: () => {
                          return `${validate_component(Control, "Form.Control").$$render($$result, {}, {}, {
                            default: ({ attrs }) => {
                              return `<input${spread([escape_object(attrs), { autocomplete: "off" }], {})}${add_attribute("value", project, 0)}> `;
                            }
                          })} `;
                        }
                      })} ${validate_component(Alert_dialog_action, "AlertDialog.Action").$$render(
                        $$result,
                        {
                          type: "submit",
                          class: "w-full bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90"
                        },
                        {},
                        {
                          default: () => {
                            return `Continue
							`;
                          }
                        }
                      )}</form> `;
                    }
                  })} `;
                }
              })} `;
            }
          })} `;
        }
      }
    )}` : ``}`;
  })}`;
});
const Sidebar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let params;
  let $$restProps = compute_rest_props($$props, ["data", "isMobileOpen"]);
  let $page, $$unsubscribe_page;
  let $delayed, $$unsubscribe_delayed;
  let $navigating, $$unsubscribe_navigating;
  $$unsubscribe_page = subscribe(page, (value2) => $page = value2);
  $$unsubscribe_navigating = subscribe(navigating, (value2) => $navigating = value2);
  let { data } = $$props;
  let { isMobileOpen } = $$props;
  let value = "";
  let open = false;
  const form = superForm(data.logoutForm, {
    validators: zodClient(logoutSchema),
    delayMs: 250
  });
  const { delayed, enhance } = form;
  $$unsubscribe_delayed = subscribe(delayed, (value2) => $delayed = value2);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.isMobileOpen === void 0 && $$bindings.isMobileOpen && isMobileOpen !== void 0)
    $$bindings.isMobileOpen(isMobileOpen);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    params = $page.params.project;
    $$rendered = `<aside class="${[escape($$restProps.class, true), isMobileOpen ? "translate-x-0" : ""].join(" ").trim()}"><nav class="space-y-2 py-6"><div class="relative mb-4 w-full px-2">${validate_component(Root$1, "Popover.Root").$$render(
      $$result,
      { open },
      {
        open: ($$value) => {
          open = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(Trigger$1, "Popover.Trigger").$$render($$result, { asChild: true }, {}, {
            default: ({ builder }) => {
              return `${validate_component(Button, "Button").$$render(
                $$result,
                {
                  builders: [builder],
                  variant: "outline",
                  class: "w-full items-center justify-between rounded-sm border-none px-4 capitalize text-foreground focus-visible:ring-2"
                },
                {},
                {
                  default: () => {
                    return `${escape(params)} ${validate_component(ChevronDown$1, "ChevronDown").$$render($$result, {}, {}, {})}`;
                  }
                }
              )}`;
            }
          })}  ${validate_component(Popover_content, "Popover.Content").$$render($$result, { class: "w-60 rounded-lg bg-card p-0" }, {}, {
            default: () => {
              return `${validate_component(Command, "Command.Root").$$render(
                $$result,
                {
                  shouldFilter: false,
                  class: "rounded-lg bg-card p-0 shadow-lg"
                },
                {},
                {
                  default: () => {
                    return `${validate_component(Command_input, "Command.Input").$$render(
                      $$result,
                      {
                        placeholder: "Cari Proyek...",
                        class: "h-10",
                        value
                      },
                      {
                        value: ($$value) => {
                          value = $$value;
                          $$settled = false;
                        }
                      },
                      {}
                    )} ${validate_component(Command_separator, "Command.Separator").$$render($$result, { alwaysRender: true }, {}, {})} ${validate_component(Command_empty, "Command.Empty").$$render($$result, {}, {}, {
                      default: () => {
                        return `No project found.`;
                      }
                    })} ${validate_component(Command_group, "Command.Group").$$render($$result, { class: "max-h-[70vh] overflow-y-auto" }, {}, {
                      default: () => {
                        return `${validate_component(Sidebar_project_list, "SidebarProjectList").$$render(
                          $$result,
                          {
                            params,
                            projects: data.projects || [],
                            deleteProjectForm: data.deleteProjectForm,
                            value,
                            open
                          },
                          {
                            value: ($$value) => {
                              value = $$value;
                              $$settled = false;
                            },
                            open: ($$value) => {
                              open = $$value;
                              $$settled = false;
                            }
                          },
                          {}
                        )} ${validate_component(Command_separator, "Command.Separator").$$render($$result, { class: "my-1" }, {}, {})} ${value === "" ? `${validate_component(Command_item, "Command.Item").$$render($$result, { class: "flex h-8 bg-accent p-0" }, {}, {
                          default: () => {
                            return `${validate_component(Sidebar_project_dialog, "SidebarProjectDialog").$$render(
                              $$result,
                              {
                                params,
                                projectForm: data.projectForm,
                                class: "flex h-full flex-1 cursor-pointer items-center justify-center rounded-md p-0"
                              },
                              {},
                              {}
                            )}`;
                          }
                        })}` : ``}`;
                      }
                    })}`;
                  }
                }
              )}`;
            }
          })}`;
        }
      }
    )}</div> <ul class="space-y-1 px-2 font-medium">${each(sidebarItems, ({ Icon, label, href }) => {
      return `<li>${validate_component(Button, "Button").$$render(
        $$result,
        {
          href,
          variant: $page.url.pathname.endsWith(href) ? "default" : "ghost",
          class: "flex w-full rounded-full px-6 focus-visible:ring-2"
        },
        {},
        {
          default: () => {
            return `${validate_component(Icon, "Icon").$$render($$result, { class: "h-5 w-5" }, {}, {})} <span class="ms-4 flex flex-1 items-center truncate">${escape(label)}</span> `;
          }
        }
      )} </li>`;
    })}</ul> <div class="px-2">${validate_component(Separator, "Separator").$$render($$result, {}, {}, {})}</div> <div class="px-2"><form method="POST" action="${"/" + escape(params, true) + "?/logout"}">${validate_component(Form_button, "Form.Button").$$render(
      $$result,
      {
        variant: "ghost",
        class: "flex w-full rounded-full px-6 focus-visible:ring-2",
        disabled: $delayed
      },
      {},
      {
        default: () => {
          return `${$delayed || $navigating ? `${validate_component(Spinners, "Spinner").$$render($$result, { class: "h-5 w-5 animate-spin" }, {}, {})}` : `${validate_component(Log_out, "LogOut").$$render($$result, { class: "h-5 w-5" }, {}, {})}`} <span class="ms-4 flex flex-1 items-center truncate" data-svelte-h="svelte-1olomt0">Log Out</span>`;
        }
      }
    )}</form></div></nav></aside>`;
  } while (!$$settled);
  $$unsubscribe_page();
  $$unsubscribe_delayed();
  $$unsubscribe_navigating();
  return $$rendered;
});
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["isMobileOpen"]);
  let { isMobileOpen } = $$props;
  if ($$props.isMobileOpen === void 0 && $$bindings.isMobileOpen && isMobileOpen !== void 0)
    $$bindings.isMobileOpen(isMobileOpen);
  return `<header${add_attribute("class", $$restProps.class, 0)}>${validate_component(Button, "Button").$$render(
    $$result,
    {
      variant: "ghost",
      class: "inline-flex h-fit items-center rounded-lg p-2 text-sm"
    },
    {},
    {
      default: () => {
        return `${validate_component(Hamburger, "Hamburger").$$render($$result, { class: "h-5 w-5" }, {}, {})} <span class="ms-3" data-svelte-h="svelte-f6bvaw">Menu</span>`;
      }
    }
  )} ${validate_component(Mode_toggle, "ModeToggle").$$render($$result, { class: "inline-flex" }, {}, {})}</header>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let isMobileOpen = false;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(Sidebar, "Sidebar").$$render(
      $$result,
      {
        data,
        class: "fixed left-0 top-0 z-40 h-screen w-64 max-w-[80%] -translate-x-full border-r bg-navbar shadow-md transition-transform duration-300 dark:border-none md:translate-x-0",
        isMobileOpen
      },
      {
        isMobileOpen: ($$value) => {
          isMobileOpen = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Header, "Header").$$render(
      $$result,
      {
        class: "sticky top-0 z-10 flex items-center px-2 py-1.5 shadow backdrop-blur md:hidden md:px-4",
        isMobileOpen
      },
      {
        isMobileOpen: ($$value) => {
          isMobileOpen = $$value;
          $$settled = false;
        }
      },
      {}
    )} <main id="main-content" class="p-4 sm:p-6 md:ml-64"><button${add_attribute("class", cn("invisible fixed inset-0 z-30 block bg-background/80 opacity-0 backdrop-blur-sm transition-all duration-300", isMobileOpen && "visible opacity-100"), 0)}></button> ${slots.default ? slots.default({}) : ``}</main>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Layout as default
};
