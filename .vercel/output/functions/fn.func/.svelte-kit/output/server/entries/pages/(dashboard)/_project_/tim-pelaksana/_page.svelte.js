import { c as create_ssr_component, s as spread, b as escape_attribute_value, d as escape_object, a as add_attribute, v as validate_component, m as missing_component, f as each, e as escape } from "../../../../../chunks/ssr.js";
import { M as Mode_toggle } from "../../../../../chunks/mode-toggle.js";
import { c as compute_rest_props, g as getContext, s as setContext, a as subscribe, d as set_store_value } from "../../../../../chunks/lifecycle.js";
import { w as writable, d as derived, r as readable } from "../../../../../chunks/index2.js";
import { d as createElHelpers, w as withGet, m as makeElement, a as styleToString, p as portalAttr, e as effect, g as isHTMLElement, b as executeCallbacks, c as addMeltEventListener, F as FIRST_LAST_KEYS, k as kbd, S as SELECTION_KEYS, u as useEscapeKeydown, n as noop, r as isElementDisabled, s as safeOnMount, t as addEventListener, i as isBrowser, v as disabledAttr, o as omit, h as is_void, j as cn, l as flyAndScale, B as Button, q as buttonVariants } from "../../../../../chunks/index3.js";
import "clsx";
import { q as createTypeaheadSearch, t as toWritableStores, g as generateIds, d as derivedVisible, u as usePopper, a as getPortalDestination, s as handleRovingFocus, b as usePortal, v as sleep, i as createSeparator, w as removeHighlight, h as handleFocus, r as removeScroll, x as getNextFocusable, y as getPreviousFocusable, z as addHighlight, o as overridable, e as removeUndefined, f as getOptionUpdater, j as getPositioningUpdater, k as getCtx$1, C as Check, P as Plus, R as Root$1, T as Trigger$1, D as Dialog_content, m as Root$2, S as Select_trigger, V as Value, n as Select_content, p as Select_item, A as CaretSort } from "../../../../../chunks/index5.js";
import "dequal";
import { c as createBitAttrs, a as createDispatcher, I as Input } from "../../../../../chunks/input.js";
import { nanoid } from "nanoid/non-secure";
import { t as tick } from "../../../../../chunks/scheduler.js";
import { M as MagnifyingGlass } from "../../../../../chunks/MagnifyingGlass.js";
import { tv } from "tailwind-variants";
const ArrowDown = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}><path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 2C7.77614 2 8 2.22386 8 2.5L8 11.2929L11.1464 8.14645C11.3417 7.95118 11.6583 7.95118 11.8536 8.14645C12.0488 8.34171 12.0488 8.65829 11.8536 8.85355L7.85355 12.8536C7.75979 12.9473 7.63261 13 7.5 13C7.36739 13 7.24021 12.9473 7.14645 12.8536L3.14645 8.85355C2.95118 8.65829 2.95118 8.34171 3.14645 8.14645C3.34171 7.95118 3.65829 7.95118 3.85355 8.14645L7 11.2929L7 2.5C7 2.22386 7.22386 2 7.5 2Z"${add_attribute("fill", color, 0)}></path></svg>`;
});
const ArrowDown$1 = ArrowDown;
const ArrowUp = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}><path fill-rule="evenodd" clip-rule="evenodd" d="M7.14645 2.14645C7.34171 1.95118 7.65829 1.95118 7.85355 2.14645L11.8536 6.14645C12.0488 6.34171 12.0488 6.65829 11.8536 6.85355C11.6583 7.04882 11.3417 7.04882 11.1464 6.85355L8 3.70711L8 12.5C8 12.7761 7.77614 13 7.5 13C7.22386 13 7 12.7761 7 12.5L7 3.70711L3.85355 6.85355C3.65829 7.04882 3.34171 7.04882 3.14645 6.85355C2.95118 6.65829 2.95118 6.34171 3.14645 6.14645L7.14645 2.14645Z"${add_attribute("fill", color, 0)}></path></svg>`;
});
const ArrowUp$1 = ArrowUp;
const ChevronLeft = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}><path fill-rule="evenodd" clip-rule="evenodd" d="M8.84182 3.13514C9.04327 3.32401 9.05348 3.64042 8.86462 3.84188L5.43521 7.49991L8.86462 11.1579C9.05348 11.3594 9.04327 11.6758 8.84182 11.8647C8.64036 12.0535 8.32394 12.0433 8.13508 11.8419L4.38508 7.84188C4.20477 7.64955 4.20477 7.35027 4.38508 7.15794L8.13508 3.15794C8.32394 2.95648 8.64036 2.94628 8.84182 3.13514Z"${add_attribute("fill", color, 0)}></path></svg>`;
});
const ChevronLeft$1 = ChevronLeft;
const ChevronRight = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}><path fill-rule="evenodd" clip-rule="evenodd" d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"${add_attribute("fill", color, 0)}></path></svg>`;
});
const ChevronRight$1 = ChevronRight;
const Printer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, []);
  return `<svg${add_attribute("class", $$restProps.class, 0)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect width="12" height="8" x="6" y="14"></rect></svg>`;
});
const Edit = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, []);
  return `<svg${add_attribute("class", $$restProps.class, 0)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 13.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-5.5"></path><polyline points="14 2 14 8 20 8"></polyline><path d="M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z"></path></svg>`;
});
const SUB_OPEN_KEYS = {
  ltr: [...SELECTION_KEYS, kbd.ARROW_RIGHT],
  rtl: [...SELECTION_KEYS, kbd.ARROW_LEFT]
};
const SUB_CLOSE_KEYS = {
  ltr: [kbd.ARROW_LEFT],
  rtl: [kbd.ARROW_RIGHT]
};
const menuIdParts = ["menu", "trigger"];
const defaults$1 = {
  arrowSize: 8,
  positioning: {
    placement: "bottom"
  },
  preventScroll: true,
  closeOnEscape: true,
  closeOnOutsideClick: true,
  portal: void 0,
  loop: false,
  dir: "ltr",
  defaultOpen: false,
  typeahead: true,
  closeOnItemClick: true,
  onOutsideClick: void 0
};
function createMenuBuilder(opts) {
  const { name, selector } = createElHelpers(opts.selector);
  const { preventScroll, arrowSize, positioning, closeOnEscape, closeOnOutsideClick, portal, forceVisible, typeahead, loop, closeFocus, disableFocusFirstItem, closeOnItemClick, onOutsideClick } = opts.rootOptions;
  const rootOpen = opts.rootOpen;
  const rootActiveTrigger = opts.rootActiveTrigger;
  const nextFocusable = opts.nextFocusable;
  const prevFocusable = opts.prevFocusable;
  const isUsingKeyboard = withGet.writable(false);
  const lastPointerX = withGet(writable(0));
  const pointerGraceIntent = withGet(writable(null));
  const pointerDir = withGet(writable("right"));
  const currentFocusedItem = withGet(writable(null));
  const pointerMovingToSubmenu = withGet(derived([pointerDir, pointerGraceIntent], ([$pointerDir, $pointerGraceIntent]) => {
    return (e) => {
      const isMovingTowards = $pointerDir === $pointerGraceIntent?.side;
      return isMovingTowards && isPointerInGraceArea(e, $pointerGraceIntent?.area);
    };
  }));
  const { typed, handleTypeaheadSearch } = createTypeaheadSearch();
  const rootIds = toWritableStores({ ...generateIds(menuIdParts), ...opts.ids });
  const isVisible = derivedVisible({
    open: rootOpen,
    forceVisible,
    activeTrigger: rootActiveTrigger
  });
  const rootMenu = makeElement(name(), {
    stores: [isVisible, portal, rootIds.menu, rootIds.trigger],
    returned: ([$isVisible, $portal, $rootMenuId, $rootTriggerId]) => {
      return {
        role: "menu",
        hidden: $isVisible ? void 0 : true,
        style: styleToString({
          display: $isVisible ? void 0 : "none"
        }),
        id: $rootMenuId,
        "aria-labelledby": $rootTriggerId,
        "data-state": $isVisible ? "open" : "closed",
        "data-portal": portalAttr($portal),
        tabindex: -1
      };
    },
    action: (node) => {
      let unsubPopper = noop;
      const unsubDerived = effect([isVisible, rootActiveTrigger, positioning, closeOnOutsideClick, portal, closeOnEscape], ([$isVisible, $rootActiveTrigger, $positioning, $closeOnOutsideClick, $portal, $closeOnEscape]) => {
        unsubPopper();
        if (!$isVisible || !$rootActiveTrigger)
          return;
        tick().then(() => {
          setMeltMenuAttribute(node, selector);
          const popper = usePopper(node, {
            anchorElement: $rootActiveTrigger,
            open: rootOpen,
            options: {
              floating: $positioning,
              modal: {
                closeOnInteractOutside: $closeOnOutsideClick,
                shouldCloseOnInteractOutside: (e) => {
                  onOutsideClick.get()?.(e);
                  if (e.defaultPrevented)
                    return false;
                  if (isHTMLElement($rootActiveTrigger) && $rootActiveTrigger.contains(e.target)) {
                    return false;
                  }
                  return true;
                },
                onClose: () => {
                  rootOpen.set(false);
                  $rootActiveTrigger.focus();
                },
                open: $isVisible
              },
              portal: getPortalDestination(node, $portal),
              escapeKeydown: $closeOnEscape ? void 0 : null
            }
          });
          if (popper && popper.destroy) {
            unsubPopper = popper.destroy;
          }
        });
      });
      const unsubEvents = executeCallbacks(addMeltEventListener(node, "keydown", (e) => {
        const target = e.target;
        const menuEl = e.currentTarget;
        if (!isHTMLElement(target) || !isHTMLElement(menuEl))
          return;
        const isKeyDownInside = target.closest('[role="menu"]') === menuEl;
        if (!isKeyDownInside)
          return;
        if (FIRST_LAST_KEYS.includes(e.key)) {
          handleMenuNavigation(e, loop.get() ?? false);
        }
        if (e.key === kbd.TAB) {
          e.preventDefault();
          rootOpen.set(false);
          handleTabNavigation(e, nextFocusable, prevFocusable);
          return;
        }
        const isCharacterKey = e.key.length === 1;
        const isModifierKey = e.ctrlKey || e.altKey || e.metaKey;
        if (!isModifierKey && isCharacterKey && typeahead.get() === true) {
          handleTypeaheadSearch(e.key, getMenuItems(menuEl));
        }
      }));
      return {
        destroy() {
          unsubDerived();
          unsubEvents();
          unsubPopper();
        }
      };
    }
  });
  const rootTrigger = makeElement(name("trigger"), {
    stores: [rootOpen, rootIds.menu, rootIds.trigger],
    returned: ([$rootOpen, $rootMenuId, $rootTriggerId]) => {
      return {
        "aria-controls": $rootMenuId,
        "aria-expanded": $rootOpen,
        "data-state": $rootOpen ? "open" : "closed",
        id: $rootTriggerId,
        tabindex: 0
      };
    },
    action: (node) => {
      applyAttrsIfDisabled(node);
      rootActiveTrigger.update((p) => {
        if (p)
          return p;
        return node;
      });
      const unsub = executeCallbacks(addMeltEventListener(node, "click", (e) => {
        const $rootOpen = rootOpen.get();
        const triggerEl = e.currentTarget;
        if (!isHTMLElement(triggerEl))
          return;
        handleOpen(triggerEl);
        if (!$rootOpen)
          e.preventDefault();
      }), addMeltEventListener(node, "keydown", (e) => {
        const triggerEl = e.currentTarget;
        if (!isHTMLElement(triggerEl))
          return;
        if (!(SELECTION_KEYS.includes(e.key) || e.key === kbd.ARROW_DOWN))
          return;
        e.preventDefault();
        handleOpen(triggerEl);
        const menuId = triggerEl.getAttribute("aria-controls");
        if (!menuId)
          return;
        const menu = document.getElementById(menuId);
        if (!menu)
          return;
        const menuItems = getMenuItems(menu);
        if (!menuItems.length)
          return;
        handleRovingFocus(menuItems[0]);
      }));
      return {
        destroy: unsub
      };
    }
  });
  const rootArrow = makeElement(name("arrow"), {
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
            rootOpen.set(false);
            const $rootActiveTrigger = rootActiveTrigger.get();
            if ($rootActiveTrigger)
              $rootActiveTrigger.focus();
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
  const item = makeElement(name("item"), {
    returned: () => {
      return {
        role: "menuitem",
        tabindex: -1,
        "data-orientation": "vertical"
      };
    },
    action: (node) => {
      setMeltMenuAttribute(node, selector);
      applyAttrsIfDisabled(node);
      const unsub = executeCallbacks(addMeltEventListener(node, "pointerdown", (e) => {
        const itemEl = e.currentTarget;
        if (!isHTMLElement(itemEl))
          return;
        if (isElementDisabled(itemEl)) {
          e.preventDefault();
          return;
        }
      }), addMeltEventListener(node, "click", (e) => {
        const itemEl = e.currentTarget;
        if (!isHTMLElement(itemEl))
          return;
        if (isElementDisabled(itemEl)) {
          e.preventDefault();
          return;
        }
        if (e.defaultPrevented) {
          handleRovingFocus(itemEl);
          return;
        }
        if (closeOnItemClick.get()) {
          sleep(1).then(() => {
            rootOpen.set(false);
          });
        }
      }), addMeltEventListener(node, "keydown", (e) => {
        onItemKeyDown(e);
      }), addMeltEventListener(node, "pointermove", (e) => {
        onMenuItemPointerMove(e);
      }), addMeltEventListener(node, "pointerleave", (e) => {
        onMenuItemPointerLeave(e);
      }), addMeltEventListener(node, "focusin", (e) => {
        onItemFocusIn(e);
      }), addMeltEventListener(node, "focusout", (e) => {
        onItemFocusOut(e);
      }));
      return {
        destroy: unsub
      };
    }
  });
  const group = makeElement(name("group"), {
    returned: () => {
      return (groupId) => ({
        role: "group",
        "aria-labelledby": groupId
      });
    }
  });
  const groupLabel = makeElement(name("group-label"), {
    returned: () => {
      return (groupId) => ({
        id: groupId
      });
    }
  });
  const checkboxItemDefaults = {
    defaultChecked: false,
    disabled: false
  };
  const createCheckboxItem = (props) => {
    const withDefaults = { ...checkboxItemDefaults, ...props };
    const checkedWritable = withDefaults.checked ?? writable(withDefaults.defaultChecked ?? null);
    const checked = overridable(checkedWritable, withDefaults.onCheckedChange);
    const disabled = writable(withDefaults.disabled);
    const checkboxItem = makeElement(name("checkbox-item"), {
      stores: [checked, disabled],
      returned: ([$checked, $disabled]) => {
        return {
          role: "menuitemcheckbox",
          tabindex: -1,
          "data-orientation": "vertical",
          "aria-checked": isIndeterminate($checked) ? "mixed" : $checked ? "true" : "false",
          "data-disabled": disabledAttr($disabled),
          "data-state": getCheckedState($checked)
        };
      },
      action: (node) => {
        setMeltMenuAttribute(node, selector);
        applyAttrsIfDisabled(node);
        const unsub = executeCallbacks(addMeltEventListener(node, "pointerdown", (e) => {
          const itemEl = e.currentTarget;
          if (!isHTMLElement(itemEl))
            return;
          if (isElementDisabled(itemEl)) {
            e.preventDefault();
            return;
          }
        }), addMeltEventListener(node, "click", (e) => {
          const itemEl = e.currentTarget;
          if (!isHTMLElement(itemEl))
            return;
          if (isElementDisabled(itemEl)) {
            e.preventDefault();
            return;
          }
          if (e.defaultPrevented) {
            handleRovingFocus(itemEl);
            return;
          }
          checked.update((prev) => {
            if (isIndeterminate(prev))
              return true;
            return !prev;
          });
          if (closeOnItemClick.get()) {
            tick().then(() => {
              rootOpen.set(false);
            });
          }
        }), addMeltEventListener(node, "keydown", (e) => {
          onItemKeyDown(e);
        }), addMeltEventListener(node, "pointermove", (e) => {
          const itemEl = e.currentTarget;
          if (!isHTMLElement(itemEl))
            return;
          if (isElementDisabled(itemEl)) {
            onItemLeave(e);
            return;
          }
          onMenuItemPointerMove(e, itemEl);
        }), addMeltEventListener(node, "pointerleave", (e) => {
          onMenuItemPointerLeave(e);
        }), addMeltEventListener(node, "focusin", (e) => {
          onItemFocusIn(e);
        }), addMeltEventListener(node, "focusout", (e) => {
          onItemFocusOut(e);
        }));
        return {
          destroy: unsub
        };
      }
    });
    const isChecked = derived(checked, ($checked) => $checked === true);
    const _isIndeterminate = derived(checked, ($checked) => $checked === "indeterminate");
    return {
      elements: {
        checkboxItem
      },
      states: {
        checked
      },
      helpers: {
        isChecked,
        isIndeterminate: _isIndeterminate
      },
      options: {
        disabled
      }
    };
  };
  const createMenuRadioGroup = (args = {}) => {
    const valueWritable = args.value ?? writable(args.defaultValue ?? null);
    const value = overridable(valueWritable, args.onValueChange);
    const radioGroup = makeElement(name("radio-group"), {
      returned: () => ({
        role: "group"
      })
    });
    const radioItemDefaults = {
      disabled: false
    };
    const radioItem = makeElement(name("radio-item"), {
      stores: [value],
      returned: ([$value]) => {
        return (itemProps) => {
          const { value: itemValue, disabled } = { ...radioItemDefaults, ...itemProps };
          const checked = $value === itemValue;
          return {
            disabled,
            role: "menuitemradio",
            "data-state": checked ? "checked" : "unchecked",
            "aria-checked": checked,
            "data-disabled": disabledAttr(disabled),
            "data-value": itemValue,
            "data-orientation": "vertical",
            tabindex: -1
          };
        };
      },
      action: (node) => {
        setMeltMenuAttribute(node, selector);
        const unsub = executeCallbacks(addMeltEventListener(node, "pointerdown", (e) => {
          const itemEl = e.currentTarget;
          if (!isHTMLElement(itemEl))
            return;
          const itemValue = node.dataset.value;
          const disabled = node.dataset.disabled;
          if (disabled || itemValue === void 0) {
            e.preventDefault();
            return;
          }
        }), addMeltEventListener(node, "click", (e) => {
          const itemEl = e.currentTarget;
          if (!isHTMLElement(itemEl))
            return;
          const itemValue = node.dataset.value;
          const disabled = node.dataset.disabled;
          if (disabled || itemValue === void 0) {
            e.preventDefault();
            return;
          }
          if (e.defaultPrevented) {
            if (!isHTMLElement(itemEl))
              return;
            handleRovingFocus(itemEl);
            return;
          }
          value.set(itemValue);
          if (closeOnItemClick.get()) {
            tick().then(() => {
              rootOpen.set(false);
            });
          }
        }), addMeltEventListener(node, "keydown", (e) => {
          onItemKeyDown(e);
        }), addMeltEventListener(node, "pointermove", (e) => {
          const itemEl = e.currentTarget;
          if (!isHTMLElement(itemEl))
            return;
          const itemValue = node.dataset.value;
          const disabled = node.dataset.disabled;
          if (disabled || itemValue === void 0) {
            onItemLeave(e);
            return;
          }
          onMenuItemPointerMove(e, itemEl);
        }), addMeltEventListener(node, "pointerleave", (e) => {
          onMenuItemPointerLeave(e);
        }), addMeltEventListener(node, "focusin", (e) => {
          onItemFocusIn(e);
        }), addMeltEventListener(node, "focusout", (e) => {
          onItemFocusOut(e);
        }));
        return {
          destroy: unsub
        };
      }
    });
    const isChecked = derived(value, ($value) => {
      return (itemValue) => {
        return $value === itemValue;
      };
    });
    return {
      elements: {
        radioGroup,
        radioItem
      },
      states: {
        value
      },
      helpers: {
        isChecked
      }
    };
  };
  const { elements: { root: separator } } = createSeparator({
    orientation: "horizontal"
  });
  const subMenuDefaults = {
    ...defaults$1,
    disabled: false,
    positioning: {
      placement: "right-start",
      gutter: 8
    }
  };
  const createSubmenu = (args) => {
    const withDefaults = { ...subMenuDefaults, ...args };
    const subOpenWritable = withDefaults.open ?? writable(false);
    const subOpen = overridable(subOpenWritable, withDefaults?.onOpenChange);
    const options = toWritableStores(omit(withDefaults, "ids"));
    const { positioning: positioning2, arrowSize: arrowSize2, disabled } = options;
    const subActiveTrigger = withGet(writable(null));
    const subOpenTimer = withGet(writable(null));
    const pointerGraceTimer = withGet(writable(0));
    const subIds = toWritableStores({ ...generateIds(menuIdParts), ...withDefaults.ids });
    safeOnMount(() => {
      const subTrigger2 = document.getElementById(subIds.trigger.get());
      if (subTrigger2) {
        subActiveTrigger.set(subTrigger2);
      }
    });
    const subIsVisible = derivedVisible({
      open: subOpen,
      forceVisible,
      activeTrigger: subActiveTrigger
    });
    const subMenu = makeElement(name("submenu"), {
      stores: [subIsVisible, subIds.menu, subIds.trigger],
      returned: ([$subIsVisible, $subMenuId, $subTriggerId]) => {
        return {
          role: "menu",
          hidden: $subIsVisible ? void 0 : true,
          style: styleToString({
            display: $subIsVisible ? void 0 : "none"
          }),
          id: $subMenuId,
          "aria-labelledby": $subTriggerId,
          "data-state": $subIsVisible ? "open" : "closed",
          // unit tests fail on `.closest` if the id starts with a number
          // so using a data attribute
          "data-id": $subMenuId,
          tabindex: -1
        };
      },
      action: (node) => {
        let unsubPopper = noop;
        const unsubDerived = effect([subIsVisible, positioning2], ([$subIsVisible, $positioning]) => {
          unsubPopper();
          if (!$subIsVisible)
            return;
          const activeTrigger = subActiveTrigger.get();
          if (!activeTrigger)
            return;
          tick().then(() => {
            const parentMenuEl = getParentMenu(activeTrigger);
            const popper = usePopper(node, {
              anchorElement: activeTrigger,
              open: subOpen,
              options: {
                floating: $positioning,
                portal: isHTMLElement(parentMenuEl) ? parentMenuEl : void 0,
                modal: null,
                focusTrap: null,
                escapeKeydown: null
              }
            });
            if (popper && popper.destroy) {
              unsubPopper = popper.destroy;
            }
          });
        });
        const unsubEvents = executeCallbacks(addMeltEventListener(node, "keydown", (e) => {
          if (e.key === kbd.ESCAPE) {
            return;
          }
          const target = e.target;
          const menuEl = e.currentTarget;
          if (!isHTMLElement(target) || !isHTMLElement(menuEl))
            return;
          const isKeyDownInside = target.closest('[role="menu"]') === menuEl;
          if (!isKeyDownInside)
            return;
          if (FIRST_LAST_KEYS.includes(e.key)) {
            e.stopImmediatePropagation();
            handleMenuNavigation(e, loop.get() ?? false);
            return;
          }
          const isCloseKey = SUB_CLOSE_KEYS["ltr"].includes(e.key);
          const isModifierKey = e.ctrlKey || e.altKey || e.metaKey;
          const isCharacterKey = e.key.length === 1;
          if (isCloseKey) {
            const $subActiveTrigger = subActiveTrigger.get();
            e.preventDefault();
            subOpen.update(() => {
              if ($subActiveTrigger) {
                handleRovingFocus($subActiveTrigger);
              }
              return false;
            });
            return;
          }
          if (e.key === kbd.TAB) {
            e.preventDefault();
            rootOpen.set(false);
            handleTabNavigation(e, nextFocusable, prevFocusable);
            return;
          }
          if (!isModifierKey && isCharacterKey && typeahead.get() === true) {
            handleTypeaheadSearch(e.key, getMenuItems(menuEl));
          }
        }), addMeltEventListener(node, "pointermove", (e) => {
          onMenuPointerMove(e);
        }), addMeltEventListener(node, "focusout", (e) => {
          const $subActiveTrigger = subActiveTrigger.get();
          if (isUsingKeyboard.get()) {
            const target = e.target;
            const submenuEl = document.getElementById(subIds.menu.get());
            if (!isHTMLElement(submenuEl) || !isHTMLElement(target))
              return;
            if (!submenuEl.contains(target) && target !== $subActiveTrigger) {
              subOpen.set(false);
            }
          } else {
            const menuEl = e.currentTarget;
            const relatedTarget = e.relatedTarget;
            if (!isHTMLElement(relatedTarget) || !isHTMLElement(menuEl))
              return;
            if (!menuEl.contains(relatedTarget) && relatedTarget !== $subActiveTrigger) {
              subOpen.set(false);
            }
          }
        }));
        return {
          destroy() {
            unsubDerived();
            unsubPopper();
            unsubEvents();
          }
        };
      }
    });
    const subTrigger = makeElement(name("subtrigger"), {
      stores: [subOpen, disabled, subIds.menu, subIds.trigger],
      returned: ([$subOpen, $disabled, $subMenuId, $subTriggerId]) => {
        return {
          role: "menuitem",
          id: $subTriggerId,
          tabindex: -1,
          "aria-controls": $subMenuId,
          "aria-expanded": $subOpen,
          "data-state": $subOpen ? "open" : "closed",
          "data-disabled": disabledAttr($disabled),
          "aria-haspopop": "menu"
        };
      },
      action: (node) => {
        setMeltMenuAttribute(node, selector);
        applyAttrsIfDisabled(node);
        subActiveTrigger.update((p) => {
          if (p)
            return p;
          return node;
        });
        const unsubTimer = () => {
          clearTimerStore(subOpenTimer);
          window.clearTimeout(pointerGraceTimer.get());
          pointerGraceIntent.set(null);
        };
        const unsubEvents = executeCallbacks(addMeltEventListener(node, "click", (e) => {
          if (e.defaultPrevented)
            return;
          const triggerEl = e.currentTarget;
          if (!isHTMLElement(triggerEl) || isElementDisabled(triggerEl))
            return;
          handleRovingFocus(triggerEl);
          if (!subOpen.get()) {
            subOpen.update((prev) => {
              const isAlreadyOpen = prev;
              if (!isAlreadyOpen) {
                subActiveTrigger.set(triggerEl);
                return !prev;
              }
              return prev;
            });
          }
        }), addMeltEventListener(node, "keydown", (e) => {
          const $typed = typed.get();
          const triggerEl = e.currentTarget;
          if (!isHTMLElement(triggerEl) || isElementDisabled(triggerEl))
            return;
          const isTypingAhead = $typed.length > 0;
          if (isTypingAhead && e.key === kbd.SPACE)
            return;
          if (SUB_OPEN_KEYS["ltr"].includes(e.key)) {
            if (!subOpen.get()) {
              triggerEl.click();
              e.preventDefault();
              return;
            }
            const menuId = triggerEl.getAttribute("aria-controls");
            if (!menuId)
              return;
            const menuEl = document.getElementById(menuId);
            if (!isHTMLElement(menuEl))
              return;
            const firstItem = getMenuItems(menuEl)[0];
            handleRovingFocus(firstItem);
          }
        }), addMeltEventListener(node, "pointermove", (e) => {
          if (!isMouse(e))
            return;
          onItemEnter(e);
          if (e.defaultPrevented)
            return;
          const triggerEl = e.currentTarget;
          if (!isHTMLElement(triggerEl))
            return;
          if (!isFocusWithinSubmenu(subIds.menu.get())) {
            handleRovingFocus(triggerEl);
          }
          const openTimer = subOpenTimer.get();
          if (!subOpen.get() && !openTimer && !isElementDisabled(triggerEl)) {
            subOpenTimer.set(window.setTimeout(() => {
              subOpen.update(() => {
                subActiveTrigger.set(triggerEl);
                return true;
              });
              clearTimerStore(subOpenTimer);
            }, 100));
          }
        }), addMeltEventListener(node, "pointerleave", (e) => {
          if (!isMouse(e))
            return;
          clearTimerStore(subOpenTimer);
          const submenuEl = document.getElementById(subIds.menu.get());
          const contentRect = submenuEl?.getBoundingClientRect();
          if (contentRect) {
            const side = submenuEl?.dataset.side;
            const rightSide = side === "right";
            const bleed = rightSide ? -5 : 5;
            const contentNearEdge = contentRect[rightSide ? "left" : "right"];
            const contentFarEdge = contentRect[rightSide ? "right" : "left"];
            pointerGraceIntent.set({
              area: [
                // Apply a bleed on clientX to ensure that our exit point is
                // consistently within polygon bounds
                { x: e.clientX + bleed, y: e.clientY },
                { x: contentNearEdge, y: contentRect.top },
                { x: contentFarEdge, y: contentRect.top },
                { x: contentFarEdge, y: contentRect.bottom },
                { x: contentNearEdge, y: contentRect.bottom }
              ],
              side
            });
            window.clearTimeout(pointerGraceTimer.get());
            pointerGraceTimer.set(window.setTimeout(() => {
              pointerGraceIntent.set(null);
            }, 300));
          } else {
            onTriggerLeave(e);
            if (e.defaultPrevented)
              return;
            pointerGraceIntent.set(null);
          }
        }), addMeltEventListener(node, "focusout", (e) => {
          const triggerEl = e.currentTarget;
          if (!isHTMLElement(triggerEl))
            return;
          removeHighlight(triggerEl);
          const relatedTarget = e.relatedTarget;
          if (!isHTMLElement(relatedTarget))
            return;
          const menuId = triggerEl.getAttribute("aria-controls");
          if (!menuId)
            return;
          const menu = document.getElementById(menuId);
          if (menu && !menu.contains(relatedTarget)) {
            subOpen.set(false);
          }
        }), addMeltEventListener(node, "focusin", (e) => {
          onItemFocusIn(e);
        }));
        return {
          destroy() {
            unsubTimer();
            unsubEvents();
          }
        };
      }
    });
    const subArrow = makeElement(name("subarrow"), {
      stores: arrowSize2,
      returned: ($arrowSize) => ({
        "data-arrow": true,
        style: styleToString({
          position: "absolute",
          width: `var(--arrow-size, ${$arrowSize}px)`,
          height: `var(--arrow-size, ${$arrowSize}px)`
        })
      })
    });
    effect([rootOpen], ([$rootOpen]) => {
      if (!$rootOpen) {
        subActiveTrigger.set(null);
        subOpen.set(false);
      }
    });
    effect([pointerGraceIntent], ([$pointerGraceIntent]) => {
      if (!isBrowser || $pointerGraceIntent)
        return;
      window.clearTimeout(pointerGraceTimer.get());
    });
    effect([subOpen], ([$subOpen]) => {
      if (!isBrowser)
        return;
      if ($subOpen && isUsingKeyboard.get()) {
        sleep(1).then(() => {
          const menuEl = document.getElementById(subIds.menu.get());
          if (!menuEl)
            return;
          const menuItems = getMenuItems(menuEl);
          if (!menuItems.length)
            return;
          handleRovingFocus(menuItems[0]);
        });
      }
      if (!$subOpen) {
        const focusedItem = currentFocusedItem.get();
        const subTriggerEl = document.getElementById(subIds.trigger.get());
        if (focusedItem) {
          sleep(1).then(() => {
            const menuEl = document.getElementById(subIds.menu.get());
            if (!menuEl)
              return;
            if (menuEl.contains(focusedItem)) {
              removeHighlight(focusedItem);
            }
          });
        }
        if (!subTriggerEl || document.activeElement === subTriggerEl)
          return;
        removeHighlight(subTriggerEl);
      }
    });
    return {
      ids: subIds,
      elements: {
        subTrigger,
        subMenu,
        subArrow
      },
      states: {
        subOpen
      },
      options
    };
  };
  safeOnMount(() => {
    const triggerEl = document.getElementById(rootIds.trigger.get());
    if (isHTMLElement(triggerEl) && rootOpen.get()) {
      rootActiveTrigger.set(triggerEl);
    }
    const unsubs = [];
    const handlePointer = () => isUsingKeyboard.set(false);
    const handleKeyDown = () => {
      isUsingKeyboard.set(true);
      unsubs.push(executeCallbacks(addEventListener(document, "pointerdown", handlePointer, { capture: true, once: true }), addEventListener(document, "pointermove", handlePointer, { capture: true, once: true })));
    };
    const keydownListener = (e) => {
      if (e.key === kbd.ESCAPE && closeOnEscape.get()) {
        rootOpen.set(false);
        return;
      }
    };
    unsubs.push(addEventListener(document, "keydown", handleKeyDown, { capture: true }));
    unsubs.push(addEventListener(document, "keydown", keydownListener));
    return () => {
      unsubs.forEach((unsub) => unsub());
    };
  });
  effect([rootOpen, currentFocusedItem], ([$rootOpen, $currentFocusedItem]) => {
    if (!$rootOpen && $currentFocusedItem) {
      removeHighlight($currentFocusedItem);
    }
  });
  effect([rootOpen], ([$rootOpen]) => {
    if (!isBrowser)
      return;
    if (!$rootOpen) {
      const $rootActiveTrigger = rootActiveTrigger.get();
      if (!$rootActiveTrigger)
        return;
      const $closeFocus = closeFocus.get();
      if (!$rootOpen && $rootActiveTrigger) {
        handleFocus({ prop: $closeFocus, defaultEl: $rootActiveTrigger });
      }
    }
  });
  effect([rootOpen, preventScroll], ([$rootOpen, $preventScroll]) => {
    if (!isBrowser)
      return;
    const unsubs = [];
    if (opts.removeScroll && $rootOpen && $preventScroll) {
      unsubs.push(removeScroll());
    }
    sleep(1).then(() => {
      const menuEl = document.getElementById(rootIds.menu.get());
      if (menuEl && $rootOpen && isUsingKeyboard.get()) {
        if (disableFocusFirstItem.get()) {
          handleRovingFocus(menuEl);
          return;
        }
        const menuItems = getMenuItems(menuEl);
        if (!menuItems.length)
          return;
        handleRovingFocus(menuItems[0]);
      }
    });
    return () => {
      unsubs.forEach((unsub) => unsub());
    };
  });
  effect(rootOpen, ($rootOpen) => {
    if (!isBrowser)
      return;
    const handlePointer = () => isUsingKeyboard.set(false);
    const handleKeyDown = (e) => {
      isUsingKeyboard.set(true);
      if (e.key === kbd.ESCAPE && $rootOpen && closeOnEscape.get()) {
        rootOpen.set(false);
        return;
      }
    };
    return executeCallbacks(addEventListener(document, "pointerdown", handlePointer, { capture: true, once: true }), addEventListener(document, "pointermove", handlePointer, { capture: true, once: true }), addEventListener(document, "keydown", handleKeyDown, { capture: true }));
  });
  function handleOpen(triggerEl) {
    rootOpen.update((prev) => {
      const isOpen = !prev;
      if (isOpen) {
        nextFocusable.set(getNextFocusable(triggerEl));
        prevFocusable.set(getPreviousFocusable(triggerEl));
        rootActiveTrigger.set(triggerEl);
      }
      return isOpen;
    });
  }
  function onItemFocusIn(e) {
    const itemEl = e.currentTarget;
    if (!isHTMLElement(itemEl))
      return;
    const $currentFocusedItem = currentFocusedItem.get();
    if ($currentFocusedItem) {
      removeHighlight($currentFocusedItem);
    }
    addHighlight(itemEl);
    currentFocusedItem.set(itemEl);
  }
  function onItemFocusOut(e) {
    const itemEl = e.currentTarget;
    if (!isHTMLElement(itemEl))
      return;
    removeHighlight(itemEl);
  }
  function onItemEnter(e) {
    if (isPointerMovingToSubmenu(e)) {
      e.preventDefault();
    }
  }
  function onItemLeave(e) {
    if (isPointerMovingToSubmenu(e)) {
      return;
    }
    const target = e.target;
    if (!isHTMLElement(target))
      return;
    const parentMenuEl = getParentMenu(target);
    if (!parentMenuEl)
      return;
    handleRovingFocus(parentMenuEl);
  }
  function onTriggerLeave(e) {
    if (isPointerMovingToSubmenu(e)) {
      e.preventDefault();
    }
  }
  function onMenuPointerMove(e) {
    if (!isMouse(e))
      return;
    const target = e.target;
    const currentTarget = e.currentTarget;
    if (!isHTMLElement(currentTarget) || !isHTMLElement(target))
      return;
    const $lastPointerX = lastPointerX.get();
    const pointerXHasChanged = $lastPointerX !== e.clientX;
    if (currentTarget.contains(target) && pointerXHasChanged) {
      const newDir = e.clientX > $lastPointerX ? "right" : "left";
      pointerDir.set(newDir);
      lastPointerX.set(e.clientX);
    }
  }
  function onMenuItemPointerMove(e, currTarget = null) {
    if (!isMouse(e))
      return;
    onItemEnter(e);
    if (e.defaultPrevented)
      return;
    if (currTarget) {
      handleRovingFocus(currTarget);
      return;
    }
    const currentTarget = e.currentTarget;
    if (!isHTMLElement(currentTarget))
      return;
    handleRovingFocus(currentTarget);
  }
  function onMenuItemPointerLeave(e) {
    if (!isMouse(e))
      return;
    onItemLeave(e);
  }
  function onItemKeyDown(e) {
    const $typed = typed.get();
    const isTypingAhead = $typed.length > 0;
    if (isTypingAhead && e.key === kbd.SPACE) {
      e.preventDefault();
      return;
    }
    if (SELECTION_KEYS.includes(e.key)) {
      e.preventDefault();
      const itemEl = e.currentTarget;
      if (!isHTMLElement(itemEl))
        return;
      itemEl.click();
    }
  }
  function isIndeterminate(checked) {
    return checked === "indeterminate";
  }
  function getCheckedState(checked) {
    return isIndeterminate(checked) ? "indeterminate" : checked ? "checked" : "unchecked";
  }
  function isPointerMovingToSubmenu(e) {
    return pointerMovingToSubmenu.get()(e);
  }
  function getParentMenu(element) {
    const parentMenuEl = element.closest('[role="menu"]');
    if (!isHTMLElement(parentMenuEl))
      return null;
    return parentMenuEl;
  }
  return {
    elements: {
      trigger: rootTrigger,
      menu: rootMenu,
      overlay,
      item,
      group,
      groupLabel,
      arrow: rootArrow,
      separator
    },
    builders: {
      createCheckboxItem,
      createSubmenu,
      createMenuRadioGroup
    },
    states: {
      open: rootOpen
    },
    helpers: {
      handleTypeaheadSearch
    },
    ids: rootIds,
    options: opts.rootOptions
  };
}
function handleTabNavigation(e, nextFocusable, prevFocusable) {
  if (e.shiftKey) {
    const $prevFocusable = prevFocusable.get();
    if ($prevFocusable) {
      e.preventDefault();
      sleep(1).then(() => $prevFocusable.focus());
      prevFocusable.set(null);
    }
  } else {
    const $nextFocusable = nextFocusable.get();
    if ($nextFocusable) {
      e.preventDefault();
      sleep(1).then(() => $nextFocusable.focus());
      nextFocusable.set(null);
    }
  }
}
function getMenuItems(menuElement) {
  return Array.from(menuElement.querySelectorAll(`[data-melt-menu-id="${menuElement.id}"]`)).filter((item) => isHTMLElement(item));
}
function applyAttrsIfDisabled(element) {
  if (!element || !isElementDisabled(element))
    return;
  element.setAttribute("data-disabled", "");
  element.setAttribute("aria-disabled", "true");
}
function clearTimerStore(timerStore) {
  if (!isBrowser)
    return;
  const timer = timerStore.get();
  if (timer) {
    window.clearTimeout(timer);
    timerStore.set(null);
  }
}
function isMouse(e) {
  return e.pointerType === "mouse";
}
function setMeltMenuAttribute(element, selector) {
  if (!element)
    return;
  const menuEl = element.closest(`${selector()}, ${selector("submenu")}`);
  if (!isHTMLElement(menuEl))
    return;
  element.setAttribute("data-melt-menu-id", menuEl.id);
}
function handleMenuNavigation(e, loop) {
  e.preventDefault();
  const currentFocusedItem = document.activeElement;
  const currentTarget = e.currentTarget;
  if (!isHTMLElement(currentFocusedItem) || !isHTMLElement(currentTarget))
    return;
  const menuItems = getMenuItems(currentTarget);
  if (!menuItems.length)
    return;
  const candidateNodes = menuItems.filter((item) => {
    if (item.hasAttribute("data-disabled") || item.getAttribute("disabled") === "true") {
      return false;
    }
    return true;
  });
  const currentIndex = candidateNodes.indexOf(currentFocusedItem);
  let nextIndex;
  switch (e.key) {
    case kbd.ARROW_DOWN:
      if (loop) {
        nextIndex = currentIndex < candidateNodes.length - 1 ? currentIndex + 1 : 0;
      } else {
        nextIndex = currentIndex < candidateNodes.length - 1 ? currentIndex + 1 : currentIndex;
      }
      break;
    case kbd.ARROW_UP:
      if (loop) {
        nextIndex = currentIndex > 0 ? currentIndex - 1 : candidateNodes.length - 1;
      } else {
        nextIndex = currentIndex < 0 ? candidateNodes.length - 1 : currentIndex > 0 ? currentIndex - 1 : 0;
      }
      break;
    case kbd.HOME:
      nextIndex = 0;
      break;
    case kbd.END:
      nextIndex = candidateNodes.length - 1;
      break;
    default:
      return;
  }
  handleRovingFocus(candidateNodes[nextIndex]);
}
function isPointerInGraceArea(e, area) {
  if (!area)
    return false;
  const cursorPos = { x: e.clientX, y: e.clientY };
  return isPointInPolygon(cursorPos, area);
}
function isPointInPolygon(point, polygon) {
  const { x, y } = point;
  let inside = false;
  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const xi = polygon[i].x;
    const yi = polygon[i].y;
    const xj = polygon[j].x;
    const yj = polygon[j].y;
    const intersect = yi > y !== yj > y && x < (xj - xi) * (y - yi) / (yj - yi) + xi;
    if (intersect)
      inside = !inside;
  }
  return inside;
}
function isFocusWithinSubmenu(submenuId) {
  const activeEl = document.activeElement;
  if (!isHTMLElement(activeEl))
    return false;
  const submenuEl = activeEl.closest(`[data-id="${submenuId}"]`);
  return isHTMLElement(submenuEl);
}
function stateAttr(open) {
  return open ? "open" : "closed";
}
const defaults = {
  arrowSize: 8,
  positioning: {
    placement: "bottom"
  },
  preventScroll: true,
  closeOnEscape: true,
  closeOnOutsideClick: true,
  portal: void 0,
  loop: false,
  dir: "ltr",
  defaultOpen: false,
  forceVisible: false,
  typeahead: true,
  closeFocus: void 0,
  disableFocusFirstItem: false,
  closeOnItemClick: true,
  onOutsideClick: void 0
};
function createDropdownMenu(props) {
  const withDefaults = { ...defaults, ...props };
  const rootOptions = toWritableStores(omit(withDefaults, "ids"));
  const openWritable = withDefaults.open ?? writable(withDefaults.defaultOpen);
  const rootOpen = overridable(openWritable, withDefaults?.onOpenChange);
  const rootActiveTrigger = withGet(writable(null));
  const nextFocusable = withGet(writable(null));
  const prevFocusable = withGet(writable(null));
  const { elements, builders, ids, states, options } = createMenuBuilder({
    rootOptions,
    rootOpen,
    rootActiveTrigger: withGet(rootActiveTrigger),
    nextFocusable: withGet(nextFocusable),
    prevFocusable: withGet(prevFocusable),
    selector: "dropdown-menu",
    removeScroll: true,
    ids: withDefaults.ids
  });
  return {
    ids,
    elements,
    states,
    builders,
    options
  };
}
function generateId() {
  return nanoid(10);
}
function getMenuData() {
  const NAME = "menu";
  const SUB_NAME = "menu-submenu";
  const RADIO_GROUP_NAME = "menu-radiogroup";
  const CHECKBOX_ITEM_NAME = "menu-checkboxitem";
  const RADIO_ITEM_NAME = "menu-radioitem";
  const GROUP_NAME = "menu-group";
  const PARTS = [
    "arrow",
    "checkbox-indicator",
    "checkbox-item",
    "content",
    "group",
    "item",
    "label",
    "radio-group",
    "radio-item",
    "radio-indicator",
    "separator",
    "sub-content",
    "sub-trigger",
    "trigger"
  ];
  return {
    NAME,
    SUB_NAME,
    RADIO_GROUP_NAME,
    CHECKBOX_ITEM_NAME,
    RADIO_ITEM_NAME,
    GROUP_NAME,
    PARTS
  };
}
function getCtx() {
  const { NAME } = getMenuData();
  return getContext(NAME);
}
function setCtx(props) {
  const { NAME, PARTS } = getMenuData();
  const getAttrs = createBitAttrs("menu", PARTS);
  const dropdownMenu = {
    ...createDropdownMenu({ ...removeUndefined(props), forceVisible: true }),
    getAttrs
  };
  setContext(NAME, dropdownMenu);
  return {
    ...dropdownMenu,
    updateOption: getOptionUpdater(dropdownMenu.options)
  };
}
function setCheckboxItem(props) {
  const { CHECKBOX_ITEM_NAME } = getMenuData();
  const { builders: { createCheckboxItem }, getAttrs } = getCtx();
  const checkboxItem = createCheckboxItem(removeUndefined(props));
  setContext(CHECKBOX_ITEM_NAME, checkboxItem.states.checked);
  return {
    ...checkboxItem,
    updateOption: getOptionUpdater(checkboxItem.options),
    getAttrs
  };
}
function getCheckboxIndicator() {
  const { CHECKBOX_ITEM_NAME } = getMenuData();
  return getContext(CHECKBOX_ITEM_NAME);
}
function getGroupLabel() {
  const { GROUP_NAME } = getMenuData();
  const id = getContext(GROUP_NAME) ?? generateId();
  const { elements: { groupLabel }, getAttrs } = getCtx();
  return { groupLabel, id, getAttrs };
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
const Menu_label = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let builder;
  let $$restProps = compute_rest_props($$props, ["asChild", "el"]);
  let $groupLabel, $$unsubscribe_groupLabel;
  let { asChild = false } = $$props;
  let { el = void 0 } = $$props;
  const { groupLabel, id, getAttrs } = getGroupLabel();
  $$unsubscribe_groupLabel = subscribe(groupLabel, (value) => $groupLabel = value);
  const attrs = getAttrs("label");
  if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0)
    $$bindings.asChild(asChild);
  if ($$props.el === void 0 && $$bindings.el && el !== void 0)
    $$bindings.el(el);
  builder = $groupLabel(id);
  {
    Object.assign(builder, attrs);
  }
  $$unsubscribe_groupLabel();
  return `${asChild ? `${slots.default ? slots.default({ builder }) : ``}` : `<div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute("this", el, 0)}>${slots.default ? slots.default({ builder }) : ``}</div>`}`;
});
const Menu_separator = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let builder;
  let $$restProps = compute_rest_props($$props, ["asChild", "el"]);
  let $separator, $$unsubscribe_separator;
  let { asChild = false } = $$props;
  let { el = void 0 } = $$props;
  const { elements: { separator }, getAttrs } = getCtx();
  $$unsubscribe_separator = subscribe(separator, (value) => $separator = value);
  const attrs = getAttrs("separator");
  if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0)
    $$bindings.asChild(asChild);
  if ($$props.el === void 0 && $$bindings.el && el !== void 0)
    $$bindings.el(el);
  builder = $separator;
  {
    Object.assign(builder, attrs);
  }
  $$unsubscribe_separator();
  return `${asChild ? `${slots.default ? slots.default({ builder }) : ``}` : `<div${spread([escape_object($separator), escape_object($$restProps)], {})}${add_attribute("this", el, 0)}></div>`}`;
});
const Menu_checkbox_item = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let builder;
  let $$restProps = compute_rest_props($$props, ["checked", "onCheckedChange", "disabled", "asChild", "el"]);
  let $checkboxItem, $$unsubscribe_checkboxItem;
  let { checked = void 0 } = $$props;
  let { onCheckedChange = void 0 } = $$props;
  let { disabled = void 0 } = $$props;
  let { asChild = false } = $$props;
  let { el = void 0 } = $$props;
  const { elements: { checkboxItem }, states: { checked: localChecked }, updateOption, getAttrs } = setCheckboxItem({
    disabled,
    defaultChecked: checked,
    onCheckedChange: ({ next }) => {
      if (checked !== next) {
        onCheckedChange?.(next);
        checked = next;
      }
      return next;
    }
  });
  $$unsubscribe_checkboxItem = subscribe(checkboxItem, (value) => $checkboxItem = value);
  createDispatcher();
  const attrs = getAttrs("checkbox-item");
  if ($$props.checked === void 0 && $$bindings.checked && checked !== void 0)
    $$bindings.checked(checked);
  if ($$props.onCheckedChange === void 0 && $$bindings.onCheckedChange && onCheckedChange !== void 0)
    $$bindings.onCheckedChange(onCheckedChange);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0)
    $$bindings.asChild(asChild);
  if ($$props.el === void 0 && $$bindings.el && el !== void 0)
    $$bindings.el(el);
  checked !== void 0 && localChecked.set(checked);
  {
    updateOption("disabled", disabled);
  }
  builder = $checkboxItem;
  {
    Object.assign(builder, attrs);
  }
  $$unsubscribe_checkboxItem();
  return `${asChild ? `${slots.default ? slots.default({ builder }) : ``}` : `<div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute("this", el, 0)}>${slots.default ? slots.default({ builder }) : ``}</div>`}`;
});
const Menu_checkbox_indicator = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["asChild", "el"]);
  let $checked, $$unsubscribe_checked;
  let { asChild = false } = $$props;
  let { el = void 0 } = $$props;
  const checked = getCheckboxIndicator();
  $$unsubscribe_checked = subscribe(checked, (value) => $checked = value);
  const { getAttrs } = getCtx();
  const attrs = getAttrs("checkbox-indicator");
  if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0)
    $$bindings.asChild(asChild);
  if ($$props.el === void 0 && $$bindings.el && el !== void 0)
    $$bindings.el(el);
  $$unsubscribe_checked();
  return `${asChild ? `${slots.default ? slots.default({ attrs, checked: $checked }) : ``}` : `<div${spread([escape_object($$restProps), escape_object(attrs)], {})}${add_attribute("this", el, 0)}>${$checked ? `${slots.default ? slots.default({ attrs, checked: $checked }) : ``}` : ``}</div>`}`;
});
const Dialog_title$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
const Menu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $idValues, $$unsubscribe_idValues;
  let { closeOnOutsideClick = void 0 } = $$props;
  let { closeOnEscape = void 0 } = $$props;
  let { portal = void 0 } = $$props;
  let { open = void 0 } = $$props;
  let { onOpenChange = void 0 } = $$props;
  let { preventScroll = void 0 } = $$props;
  let { loop = void 0 } = $$props;
  let { dir = void 0 } = $$props;
  let { typeahead = void 0 } = $$props;
  let { closeFocus = void 0 } = $$props;
  let { disableFocusFirstItem = void 0 } = $$props;
  let { closeOnItemClick = void 0 } = $$props;
  let { onOutsideClick = void 0 } = $$props;
  const { states: { open: localOpen }, updateOption, ids } = setCtx({
    closeOnOutsideClick,
    closeOnEscape,
    portal,
    forceVisible: true,
    defaultOpen: open,
    preventScroll,
    loop,
    dir,
    typeahead,
    closeFocus,
    disableFocusFirstItem,
    closeOnItemClick,
    onOutsideClick,
    onOpenChange: ({ next }) => {
      if (open !== next) {
        onOpenChange?.(next);
        open = next;
      }
      return next;
    }
  });
  const idValues = derived([ids.menu, ids.trigger], ([$menuId, $triggerId]) => ({ menu: $menuId, trigger: $triggerId }));
  $$unsubscribe_idValues = subscribe(idValues, (value) => $idValues = value);
  if ($$props.closeOnOutsideClick === void 0 && $$bindings.closeOnOutsideClick && closeOnOutsideClick !== void 0)
    $$bindings.closeOnOutsideClick(closeOnOutsideClick);
  if ($$props.closeOnEscape === void 0 && $$bindings.closeOnEscape && closeOnEscape !== void 0)
    $$bindings.closeOnEscape(closeOnEscape);
  if ($$props.portal === void 0 && $$bindings.portal && portal !== void 0)
    $$bindings.portal(portal);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.onOpenChange === void 0 && $$bindings.onOpenChange && onOpenChange !== void 0)
    $$bindings.onOpenChange(onOpenChange);
  if ($$props.preventScroll === void 0 && $$bindings.preventScroll && preventScroll !== void 0)
    $$bindings.preventScroll(preventScroll);
  if ($$props.loop === void 0 && $$bindings.loop && loop !== void 0)
    $$bindings.loop(loop);
  if ($$props.dir === void 0 && $$bindings.dir && dir !== void 0)
    $$bindings.dir(dir);
  if ($$props.typeahead === void 0 && $$bindings.typeahead && typeahead !== void 0)
    $$bindings.typeahead(typeahead);
  if ($$props.closeFocus === void 0 && $$bindings.closeFocus && closeFocus !== void 0)
    $$bindings.closeFocus(closeFocus);
  if ($$props.disableFocusFirstItem === void 0 && $$bindings.disableFocusFirstItem && disableFocusFirstItem !== void 0)
    $$bindings.disableFocusFirstItem(disableFocusFirstItem);
  if ($$props.closeOnItemClick === void 0 && $$bindings.closeOnItemClick && closeOnItemClick !== void 0)
    $$bindings.closeOnItemClick(closeOnItemClick);
  if ($$props.onOutsideClick === void 0 && $$bindings.onOutsideClick && onOutsideClick !== void 0)
    $$bindings.onOutsideClick(onOutsideClick);
  open !== void 0 && localOpen.set(open);
  {
    updateOption("closeOnOutsideClick", closeOnOutsideClick);
  }
  {
    updateOption("closeOnEscape", closeOnEscape);
  }
  {
    updateOption("portal", portal);
  }
  {
    updateOption("preventScroll", preventScroll);
  }
  {
    updateOption("loop", loop);
  }
  {
    updateOption("dir", dir);
  }
  {
    updateOption("closeFocus", closeFocus);
  }
  {
    updateOption("disableFocusFirstItem", disableFocusFirstItem);
  }
  {
    updateOption("typeahead", typeahead);
  }
  {
    updateOption("closeOnItemClick", closeOnItemClick);
  }
  {
    updateOption("onOutsideClick", onOutsideClick);
  }
  $$unsubscribe_idValues();
  return `${slots.default ? slots.default({ ids: $idValues }) : ``}`;
});
const Menu_content = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  let $menu, $$unsubscribe_menu;
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
  const { elements: { menu }, states: { open }, ids, getAttrs } = getCtx();
  $$unsubscribe_menu = subscribe(menu, (value) => $menu = value);
  $$unsubscribe_open = subscribe(open, (value) => $open = value);
  createDispatcher();
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
      ids.menu.set(id);
    }
  }
  builder = $menu;
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
  $$unsubscribe_menu();
  return `${asChild && $open ? `${slots.default ? slots.default({ builder }) : ``}` : `${transition && $open ? `<div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute("this", el, 0)}>${slots.default ? slots.default({ builder }) : ``}</div>` : `${inTransition && outTransition && $open ? `<div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute("this", el, 0)}>${slots.default ? slots.default({ builder }) : ``}</div>` : `${inTransition && $open ? `<div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute("this", el, 0)}>${slots.default ? slots.default({ builder }) : ``}</div>` : `${outTransition && $open ? `<div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute("this", el, 0)}>${slots.default ? slots.default({ builder }) : ``}</div>` : `${$open ? `<div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute("this", el, 0)}>${slots.default ? slots.default({ builder }) : ``}</div>` : ``}`}`}`}`}`}`;
});
const Menu_trigger = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let builder;
  let $$restProps = compute_rest_props($$props, ["asChild", "id", "el"]);
  let $trigger, $$unsubscribe_trigger;
  let { asChild = false } = $$props;
  let { id = void 0 } = $$props;
  let { el = void 0 } = $$props;
  const { elements: { trigger }, ids, getAttrs } = getCtx();
  $$unsubscribe_trigger = subscribe(trigger, (value) => $trigger = value);
  createDispatcher();
  const attrs = getAttrs("trigger");
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
  builder = $trigger;
  {
    Object.assign(builder, attrs);
  }
  $$unsubscribe_trigger();
  return `${asChild ? `${slots.default ? slots.default({ builder }) : ``}` : `<button${spread([escape_object(builder), { type: "button" }, escape_object($$restProps)], {})}${add_attribute("this", el, 0)}>${slots.default ? slots.default({ builder }) : ``}</button>`}`;
});
const Dialog_title = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: className = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `${validate_component(Dialog_title$1, "DialogPrimitive.Title").$$render(
    $$result,
    Object.assign(
      {},
      {
        class: cn("text-lg font-semibold leading-none tracking-tight", className)
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
const Dialog_footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
const Dialog_header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: className = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `<div${spread(
    [
      {
        class: escape_attribute_value(cn("flex flex-col space-y-1.5 text-center sm:text-left", className))
      },
      escape_object($$restProps)
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</div>`;
});
const derivedKeys = (storeMap) => {
  const entries = Object.entries(storeMap);
  const keys = entries.map(([key]) => key);
  return derived(entries.map(([, store]) => store), ($stores) => {
    return Object.fromEntries($stores.map((store, idx) => [keys[idx], store]));
  });
};
const Subscribe = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, []);
  let $values, $$unsubscribe_values;
  const values = derivedKeys($$restProps);
  $$unsubscribe_values = subscribe(values, (value) => $values = value);
  $$unsubscribe_values();
  return `${slots.default ? slots.default({ ...$values }) : ``}`;
});
const PropsRenderer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { instance = void 0 } = $$props;
  let { config } = $$props;
  let { props = void 0 } = $$props;
  if ($$props.instance === void 0 && $$bindings.instance && instance !== void 0)
    $$bindings.instance(instance);
  if ($$props.config === void 0 && $$bindings.config && config !== void 0)
    $$bindings.config(config);
  if ($$props.props === void 0 && $$bindings.props && props !== void 0)
    $$bindings.props(props);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${config.children.length === 0 ? `${validate_component(config.component || missing_component, "svelte:component").$$render(
      $$result,
      Object.assign({}, props ?? {}, { this: instance }),
      {
        this: ($$value) => {
          instance = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `${validate_component(config.component || missing_component, "svelte:component").$$render(
      $$result,
      Object.assign({}, props ?? {}, { this: instance }),
      {
        this: ($$value) => {
          instance = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${each(config.children, (child) => {
            return `${validate_component(Render, "Render").$$render($$result, { of: child }, {}, {})}`;
          })}`;
        }
      }
    )}`}`;
  } while (!$$settled);
  return $$rendered;
});
const isReadable = (value) => {
  return value?.subscribe instanceof Function;
};
const Undefined = readable(void 0);
const ComponentRenderer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { config } = $$props;
  let instance;
  if ($$props.config === void 0 && $$bindings.config && config !== void 0)
    $$bindings.config(config);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${isReadable(config.props) ? `${validate_component(Subscribe, "Subscribe").$$render($$result, { props: config.props }, {}, {
      default: ({ props }) => {
        return `${validate_component(PropsRenderer, "PropsRenderer").$$render(
          $$result,
          { config, props, instance },
          {
            instance: ($$value) => {
              instance = $$value;
              $$settled = false;
            }
          },
          {}
        )}`;
      }
    })}` : `${validate_component(PropsRenderer, "PropsRenderer").$$render(
      $$result,
      { config, props: config.props, instance },
      {
        instance: ($$value) => {
          instance = $$value;
          $$settled = false;
        }
      },
      {}
    )}`}`;
  } while (!$$settled);
  return $$rendered;
});
const Render = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $readableConfig, $$unsubscribe_readableConfig;
  let { of: config } = $$props;
  const readableConfig = isReadable(config) ? config : Undefined;
  $$unsubscribe_readableConfig = subscribe(readableConfig, (value) => $readableConfig = value);
  if ($$props.of === void 0 && $$bindings.of && config !== void 0)
    $$bindings.of(config);
  $$unsubscribe_readableConfig();
  return `${isReadable(config) ? ` ${escape($readableConfig)}` : `${typeof config !== "object" ? `${escape(config)}` : `${validate_component(ComponentRenderer, "ComponentRenderer").$$render($$result, { config }, {}, {})}`}`}`;
});
class ComponentRenderConfig {
  component;
  props;
  constructor(component, props) {
    this.component = component;
    this.props = props;
  }
  eventHandlers = [];
  on(type, handler) {
    this.eventHandlers.push([type, handler]);
    return this;
  }
  children = [];
  slot(...children) {
    this.children = children;
    return this;
  }
}
function createRender(component, props) {
  return new ComponentRenderConfig(component, props);
}
class Column {
  header;
  footer;
  height;
  plugins;
  constructor({ header, footer, height, plugins }) {
    this.header = header;
    this.footer = footer;
    this.height = height;
    this.plugins = plugins;
  }
  // TODO Workaround for https://github.com/vitejs/vite/issues/9528
  isFlat() {
    return "__flat" in this;
  }
  // TODO Workaround for https://github.com/vitejs/vite/issues/9528
  isData() {
    return "__data" in this;
  }
  // TODO Workaround for https://github.com/vitejs/vite/issues/9528
  isDisplay() {
    return "__display" in this;
  }
  // TODO Workaround for https://github.com/vitejs/vite/issues/9528
  isGroup() {
    return "__group" in this;
  }
}
class FlatColumn extends Column {
  // TODO Workaround for https://github.com/vitejs/vite/issues/9528
  __flat = true;
  id;
  constructor({ header, footer, plugins, id }) {
    super({ header, footer, plugins, height: 1 });
    this.id = id ?? String(header);
  }
}
class DataColumn extends FlatColumn {
  // TODO Workaround for https://github.com/vitejs/vite/issues/9528
  __data = true;
  cell;
  accessorKey;
  accessorFn;
  constructor({ header, footer, plugins, cell, accessor, id }) {
    super({ header, footer, plugins, id: "Initialization not complete" });
    this.cell = cell;
    if (accessor instanceof Function) {
      this.accessorFn = accessor;
    } else {
      this.accessorKey = accessor;
    }
    if (id === void 0 && this.accessorKey === void 0 && header === void 0) {
      throw new Error("A column id, string accessor, or header is required");
    }
    const accessorKeyId = typeof this.accessorKey === "string" ? this.accessorKey : null;
    this.id = id ?? accessorKeyId ?? String(header);
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getValue(item) {
    if (this.accessorFn !== void 0) {
      return this.accessorFn(item);
    }
    if (this.accessorKey !== void 0) {
      return item[this.accessorKey];
    }
    return void 0;
  }
}
class DisplayColumn extends FlatColumn {
  // TODO Workaround for https://github.com/vitejs/vite/issues/9528
  __display = true;
  cell;
  data;
  constructor({ header, footer, plugins, id, cell, data: data2 }) {
    super({ header, footer, plugins, id });
    this.cell = cell;
    this.data = data2;
  }
}
class GroupColumn extends Column {
  // TODO Workaround for https://github.com/vitejs/vite/issues/9528
  __group = true;
  columns;
  ids;
  constructor({ header, footer, columns, plugins }) {
    const height = Math.max(...columns.map((c) => c.height)) + 1;
    super({ header, footer, height, plugins });
    this.columns = columns;
    this.ids = getFlatColumnIds(columns);
  }
}
const getFlatColumnIds = (columns) => columns.flatMap((c) => c.isFlat() ? [c.id] : c.isGroup() ? c.ids : []);
const getFlatColumns = (columns) => {
  return columns.flatMap((c) => c.isFlat() ? [c] : c.isGroup() ? getFlatColumns(c.columns) : []);
};
const getCounter = (items) => {
  const result = /* @__PURE__ */ new Map();
  items.forEach((item) => {
    result.set(item, (result.get(item) ?? 0) + 1);
  });
  return result;
};
const getDuplicates = (items) => {
  return Array.from(getCounter(items).entries()).filter(([, count]) => count !== 1).map(([key]) => key);
};
const stringifyCss = (style) => {
  return Object.entries(style).map(([name, value]) => `${name}:${value}`).join(";");
};
const mergeAttributes = (a, b) => {
  if (a.style === void 0 && b.style === void 0) {
    return { ...a, ...b };
  }
  return {
    ...a,
    ...b,
    style: {
      ...typeof a.style === "object" ? a.style : {},
      ...typeof b.style === "object" ? b.style : {}
    }
  };
};
const finalizeAttributes = (attrs) => {
  if (attrs.style === void 0 || typeof attrs.style !== "object") {
    return attrs;
  }
  return {
    ...attrs,
    style: stringifyCss(attrs.style)
  };
};
class TableComponent {
  id;
  constructor({ id }) {
    this.id = id;
  }
  attrsForName = {};
  attrs() {
    return derived(Object.values(this.attrsForName), ($attrsArray) => {
      let $mergedAttrs = {};
      $attrsArray.forEach(($attrs) => {
        $mergedAttrs = mergeAttributes($mergedAttrs, $attrs);
      });
      return finalizeAttributes($mergedAttrs);
    });
  }
  propsForName = {};
  props() {
    return derivedKeys(this.propsForName);
  }
  state;
  injectState(state) {
    this.state = state;
  }
  applyHook(pluginName, hook) {
    if (hook.props !== void 0) {
      this.propsForName[pluginName] = hook.props;
    }
    if (hook.attrs !== void 0) {
      this.attrsForName[pluginName] = hook.attrs;
    }
  }
}
class BodyCell extends TableComponent {
  row;
  constructor({ id, row }) {
    super({ id });
    this.row = row;
  }
  attrs() {
    return derived(super.attrs(), ($baseAttrs) => {
      return {
        ...$baseAttrs,
        role: "cell"
      };
    });
  }
  rowColId() {
    return `${this.row.id}:${this.column.id}`;
  }
  dataRowColId() {
    if (!this.row.isData()) {
      return void 0;
    }
    return `${this.row.dataId}:${this.column.id}`;
  }
  // TODO Workaround for https://github.com/vitejs/vite/issues/9528
  isData() {
    return "__data" in this;
  }
  // TODO Workaround for https://github.com/vitejs/vite/issues/9528
  isDisplay() {
    return "__display" in this;
  }
}
class DataBodyCell extends BodyCell {
  // TODO Workaround for https://github.com/vitejs/vite/issues/9528
  __data = true;
  column;
  label;
  value;
  constructor({ row, column, label, value }) {
    super({ id: column.id, row });
    this.column = column;
    this.label = label;
    this.value = value;
  }
  render() {
    if (this.label === void 0) {
      return `${this.value}`;
    }
    if (this.state === void 0) {
      throw new Error("Missing `state` reference");
    }
    return this.label(this, this.state);
  }
  clone() {
    const clonedCell = new DataBodyCell({
      row: this.row,
      column: this.column,
      label: this.label,
      value: this.value
    });
    return clonedCell;
  }
}
class DisplayBodyCell extends BodyCell {
  // TODO Workaround for https://github.com/vitejs/vite/issues/9528
  __display = true;
  column;
  label;
  constructor({ row, column, label }) {
    super({ id: column.id, row });
    this.column = column;
    this.label = label;
  }
  render() {
    if (this.state === void 0) {
      throw new Error("Missing `state` reference");
    }
    return this.label(this, this.state);
  }
  clone() {
    const clonedCell = new DisplayBodyCell({
      row: this.row,
      column: this.column,
      label: this.label
    });
    return clonedCell;
  }
}
const nonUndefined = (value) => value !== void 0;
class BodyRow extends TableComponent {
  cells;
  /**
   * Get the cell with a given column id.
   *
   * **This includes hidden cells.**
   */
  cellForId;
  depth;
  parentRow;
  subRows;
  constructor({ id, cells, cellForId, depth = 0, parentRow }) {
    super({ id });
    this.cells = cells;
    this.cellForId = cellForId;
    this.depth = depth;
    this.parentRow = parentRow;
  }
  attrs() {
    return derived(super.attrs(), ($baseAttrs) => {
      return {
        ...$baseAttrs,
        role: "row"
      };
    });
  }
  // TODO Workaround for https://github.com/vitejs/vite/issues/9528
  isData() {
    return "__data" in this;
  }
  // TODO Workaround for https://github.com/vitejs/vite/issues/9528
  isDisplay() {
    return "__display" in this;
  }
}
class DataBodyRow extends BodyRow {
  // TODO Workaround for https://github.com/vitejs/vite/issues/9528
  __data = true;
  dataId;
  original;
  constructor({ id, dataId, original, cells, cellForId, depth = 0, parentRow }) {
    super({ id, cells, cellForId, depth, parentRow });
    this.dataId = dataId;
    this.original = original;
  }
  clone({ includeCells = false, includeSubRows = false } = {}) {
    const clonedRow = new DataBodyRow({
      id: this.id,
      dataId: this.dataId,
      cellForId: this.cellForId,
      cells: this.cells,
      original: this.original,
      depth: this.depth
    });
    if (includeCells) {
      const clonedCellsForId = Object.fromEntries(Object.entries(clonedRow.cellForId).map(([id, cell]) => {
        const clonedCell = cell.clone();
        clonedCell.row = clonedRow;
        return [id, clonedCell];
      }));
      const clonedCells = clonedRow.cells.map(({ id }) => clonedCellsForId[id]);
      clonedRow.cellForId = clonedCellsForId;
      clonedRow.cells = clonedCells;
    }
    if (includeSubRows) {
      const clonedSubRows = this.subRows?.map((row) => row.clone({ includeCells, includeSubRows }));
      clonedRow.subRows = clonedSubRows;
    } else {
      clonedRow.subRows = this.subRows;
    }
    return clonedRow;
  }
}
const getBodyRows = (data2, flatColumns, { rowDataId } = {}) => {
  const rows = data2.map((item, idx) => {
    const id = idx.toString();
    return new DataBodyRow({
      id,
      dataId: rowDataId !== void 0 ? rowDataId(item, idx) : id,
      original: item,
      cells: [],
      cellForId: {}
    });
  });
  data2.forEach((item, rowIdx) => {
    const cells = flatColumns.map((col) => {
      if (col.isData()) {
        const dataCol = col;
        const value = dataCol.getValue(item);
        return new DataBodyCell({
          row: rows[rowIdx],
          column: dataCol,
          label: col.cell,
          value
        });
      }
      if (col.isDisplay()) {
        const displayCol = col;
        return new DisplayBodyCell({
          row: rows[rowIdx],
          column: displayCol,
          label: col.cell
        });
      }
      throw new Error("Unrecognized `FlatColumn` implementation");
    });
    rows[rowIdx].cells = cells;
    flatColumns.forEach((c, colIdx) => {
      rows[rowIdx].cellForId[c.id] = cells[colIdx];
    });
  });
  return rows;
};
const getColumnedBodyRows = (rows, columnIdOrder) => {
  const columnedRows = rows.map((row) => {
    const clonedRow = row.clone();
    clonedRow.cells = [];
    clonedRow.cellForId = {};
    return clonedRow;
  });
  if (rows.length === 0 || columnIdOrder.length === 0)
    return rows;
  rows.forEach((row, rowIdx) => {
    const cells = row.cells.map((cell) => {
      const clonedCell = cell.clone();
      clonedCell.row = columnedRows[rowIdx];
      return clonedCell;
    });
    const visibleCells = columnIdOrder.map((cid) => {
      return cells.find((c) => c.id === cid);
    }).filter(nonUndefined);
    columnedRows[rowIdx].cells = visibleCells;
    cells.forEach((cell) => {
      columnedRows[rowIdx].cellForId[cell.id] = cell;
    });
  });
  return columnedRows;
};
const NBSP = " ";
class HeaderCell extends TableComponent {
  label;
  colspan;
  colstart;
  constructor({ id, label, colspan, colstart }) {
    super({ id });
    this.label = label;
    this.colspan = colspan;
    this.colstart = colstart;
  }
  render() {
    if (this.label instanceof Function) {
      if (this.state === void 0) {
        throw new Error("Missing `state` reference");
      }
      return this.label(this, this.state);
    }
    return this.label;
  }
  attrs() {
    return derived(super.attrs(), ($baseAttrs) => {
      return {
        ...$baseAttrs,
        role: "columnheader",
        colspan: this.colspan
      };
    });
  }
  // TODO Workaround for https://github.com/vitejs/vite/issues/9528
  isFlat() {
    return "__flat" in this;
  }
  // TODO Workaround for https://github.com/vitejs/vite/issues/9528
  isData() {
    return "__data" in this;
  }
  // TODO Workaround for https://github.com/vitejs/vite/issues/9528
  isFlatDisplay() {
    return "__flat" in this && "__display" in this;
  }
  // TODO Workaround for https://github.com/vitejs/vite/issues/9528
  isGroup() {
    return "__group" in this;
  }
  // TODO Workaround for https://github.com/vitejs/vite/issues/9528
  isGroupDisplay() {
    return "__group" in this && "__display" in this;
  }
}
class FlatHeaderCell extends HeaderCell {
  // TODO Workaround for https://github.com/vitejs/vite/issues/9528
  __flat = true;
  constructor({ id, label, colstart }) {
    super({ id, label, colspan: 1, colstart });
  }
  clone() {
    return new FlatHeaderCell({
      id: this.id,
      label: this.label,
      colstart: this.colstart
    });
  }
}
class DataHeaderCell extends FlatHeaderCell {
  // TODO Workaround for https://github.com/vitejs/vite/issues/9528
  __data = true;
  accessorKey;
  accessorFn;
  constructor({ id, label, accessorKey, accessorFn, colstart }) {
    super({ id, label, colstart });
    this.accessorKey = accessorKey;
    this.accessorFn = accessorFn;
  }
  clone() {
    return new DataHeaderCell({
      id: this.id,
      label: this.label,
      accessorFn: this.accessorFn,
      accessorKey: this.accessorKey,
      colstart: this.colstart
    });
  }
}
class FlatDisplayHeaderCell extends FlatHeaderCell {
  // TODO Workaround for https://github.com/vitejs/vite/issues/9528
  __display = true;
  constructor({ id, label = NBSP, colstart }) {
    super({ id, label, colstart });
  }
  clone() {
    return new FlatDisplayHeaderCell({
      id: this.id,
      label: this.label,
      colstart: this.colstart
    });
  }
}
class GroupHeaderCell extends HeaderCell {
  // TODO Workaround for https://github.com/vitejs/vite/issues/9528
  __group = true;
  ids;
  allId;
  allIds;
  constructor({ label, ids, allIds, colspan, colstart }) {
    super({ id: `[${ids.join(",")}]`, label, colspan, colstart });
    this.ids = ids;
    this.allId = `[${allIds.join(",")}]`;
    this.allIds = allIds;
  }
  setIds(ids) {
    this.ids = ids;
    this.id = `[${this.ids.join(",")}]`;
  }
  pushId(id) {
    this.ids = [...this.ids, id];
    this.id = `[${this.ids.join(",")}]`;
  }
  clone() {
    return new GroupHeaderCell({
      label: this.label,
      ids: this.ids,
      allIds: this.allIds,
      colspan: this.colspan,
      colstart: this.colstart
    });
  }
}
class GroupDisplayHeaderCell extends GroupHeaderCell {
  // TODO Workaround for https://github.com/vitejs/vite/issues/9528
  __display = true;
  constructor({ label = NBSP, ids, allIds, colspan = 1, colstart }) {
    super({ label, ids, allIds, colspan, colstart });
  }
  clone() {
    return new GroupDisplayHeaderCell({
      label: this.label,
      ids: this.ids,
      allIds: this.allIds,
      colspan: this.colspan,
      colstart: this.colstart
    });
  }
}
const sum = (nums) => nums.reduce((a, b) => a + b, 0);
const getNullMatrix = (width, height) => {
  const result = [];
  for (let i = 0; i < height; i++) {
    result.push(Array(width).fill(null));
  }
  return result;
};
const getTransposed = (matrix) => {
  const height = matrix.length;
  if (height === 0) {
    return matrix;
  }
  const width = matrix[0].length;
  const result = getNullMatrix(height, width);
  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
      result[i][j] = matrix[j][i];
    }
  }
  return result;
};
class HeaderRow extends TableComponent {
  cells;
  constructor({ id, cells }) {
    super({ id });
    this.cells = cells;
  }
  attrs() {
    return derived(super.attrs(), ($baseAttrs) => {
      return {
        ...$baseAttrs,
        role: "row"
      };
    });
  }
  clone() {
    return new HeaderRow({
      id: this.id,
      cells: this.cells
    });
  }
}
const getHeaderRows = (columns, flatColumnIds = []) => {
  const rowMatrix = getHeaderRowMatrix(columns);
  let columnMatrix = getTransposed(rowMatrix);
  columnMatrix = getOrderedColumnMatrix(columnMatrix, flatColumnIds);
  populateGroupHeaderCellIds(columnMatrix);
  return headerRowsForRowMatrix(getTransposed(columnMatrix));
};
const getHeaderRowMatrix = (columns) => {
  const maxColspan = sum(columns.map((c) => c.isGroup() ? c.ids.length : 1));
  const maxHeight = Math.max(...columns.map((c) => c.height));
  const rowMatrix = getNullMatrix(maxColspan, maxHeight);
  let cellOffset = 0;
  columns.forEach((c) => {
    const heightOffset = maxHeight - c.height;
    loadHeaderRowMatrix(rowMatrix, c, heightOffset, cellOffset);
    cellOffset += c.isGroup() ? c.ids.length : 1;
  });
  return rowMatrix.map((cells, rowIdx) => cells.map((cell, columnIdx) => {
    if (cell !== null)
      return cell;
    if (rowIdx === maxHeight - 1)
      return new FlatDisplayHeaderCell({ id: columnIdx.toString(), colstart: columnIdx });
    const flatId = rowMatrix[maxHeight - 1][columnIdx]?.id ?? columnIdx.toString();
    return new GroupDisplayHeaderCell({ ids: [], allIds: [flatId], colstart: columnIdx });
  }));
};
const loadHeaderRowMatrix = (rowMatrix, column, rowOffset, cellOffset) => {
  if (column.isData()) {
    rowMatrix[rowMatrix.length - 1][cellOffset] = new DataHeaderCell({
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      label: column.header,
      accessorFn: column.accessorFn,
      accessorKey: column.accessorKey,
      id: column.id,
      colstart: cellOffset
    });
    return;
  }
  if (column.isDisplay()) {
    rowMatrix[rowMatrix.length - 1][cellOffset] = new FlatDisplayHeaderCell({
      id: column.id,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      label: column.header,
      colstart: cellOffset
    });
    return;
  }
  if (column.isGroup()) {
    for (let i = 0; i < column.ids.length; i++) {
      rowMatrix[rowOffset][cellOffset + i] = new GroupHeaderCell({
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        label: column.header,
        colspan: 1,
        allIds: column.ids,
        ids: [],
        colstart: cellOffset
      });
    }
    let childCellOffset = 0;
    column.columns.forEach((c) => {
      loadHeaderRowMatrix(rowMatrix, c, rowOffset + 1, cellOffset + childCellOffset);
      childCellOffset += c.isGroup() ? c.ids.length : 1;
    });
    return;
  }
};
const getOrderedColumnMatrix = (columnMatrix, flatColumnIds) => {
  if (flatColumnIds.length === 0) {
    return columnMatrix;
  }
  const orderedColumnMatrix = [];
  flatColumnIds.forEach((key, columnIdx) => {
    const nextColumn = columnMatrix.find((columnCells) => {
      const flatCell = columnCells[columnCells.length - 1];
      if (!flatCell.isFlat()) {
        throw new Error("The last element of each column must be a `FlatHeaderCell`");
      }
      return flatCell.id === key;
    });
    if (nextColumn !== void 0) {
      orderedColumnMatrix.push(nextColumn.map((column) => {
        const clonedColumn = column.clone();
        clonedColumn.colstart = columnIdx;
        return clonedColumn;
      }));
    }
  });
  return orderedColumnMatrix;
};
const populateGroupHeaderCellIds = (columnMatrix) => {
  columnMatrix.forEach((columnCells) => {
    const lastCell = columnCells[columnCells.length - 1];
    if (!lastCell.isFlat()) {
      throw new Error("The last element of each column must be a `FlatHeaderCell`");
    }
    columnCells.forEach((c) => {
      if (c.isGroup()) {
        c.pushId(lastCell.id);
      }
    });
  });
};
const headerRowsForRowMatrix = (rowMatrix) => {
  return rowMatrix.map((rowCells, rowIdx) => {
    return new HeaderRow({ id: rowIdx.toString(), cells: getMergedRow(rowCells) });
  });
};
const getMergedRow = (cells) => {
  if (cells.length === 0) {
    return cells;
  }
  const mergedCells = [];
  let startIdx = 0;
  let endIdx = 1;
  while (startIdx < cells.length) {
    const cell = cells[startIdx].clone();
    if (!cell.isGroup()) {
      mergedCells.push(cell);
      startIdx++;
      continue;
    }
    endIdx = startIdx + 1;
    const ids = [...cell.ids];
    while (endIdx < cells.length) {
      const nextCell = cells[endIdx];
      if (!nextCell.isGroup()) {
        break;
      }
      if (cell.allId !== nextCell.allId) {
        break;
      }
      ids.push(...nextCell.ids);
      endIdx++;
    }
    cell.setIds(ids);
    cell.colspan = endIdx - startIdx;
    mergedCells.push(cell);
    startIdx = endIdx;
  }
  return mergedCells;
};
const createViewModel = (table, columns, { rowDataId } = {}) => {
  const { data: data2, plugins } = table;
  const $flatColumns = getFlatColumns(columns);
  const flatColumns = readable($flatColumns);
  const originalRows = derived([data2, flatColumns], ([$data, $flatColumns2]) => {
    return getBodyRows($data, $flatColumns2, { rowDataId });
  });
  const _visibleColumns = writable([]);
  const _headerRows = writable();
  const _rows = writable([]);
  const _pageRows = writable([]);
  const _tableAttrs = writable({
    role: "table"
  });
  const _tableHeadAttrs = writable({});
  const _tableBodyAttrs = writable({
    role: "rowgroup"
  });
  const pluginInitTableState = {
    data: data2,
    columns,
    flatColumns: $flatColumns,
    tableAttrs: _tableAttrs,
    tableHeadAttrs: _tableHeadAttrs,
    tableBodyAttrs: _tableBodyAttrs,
    visibleColumns: _visibleColumns,
    headerRows: _headerRows,
    originalRows,
    rows: _rows,
    pageRows: _pageRows
  };
  const pluginInstances = Object.fromEntries(Object.entries(plugins).map(([pluginName, plugin]) => {
    const columnOptions = Object.fromEntries($flatColumns.map((c) => {
      const option = c.plugins?.[pluginName];
      if (option === void 0)
        return void 0;
      return [c.id, option];
    }).filter(nonUndefined));
    return [
      pluginName,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      plugin({ pluginName, tableState: pluginInitTableState, columnOptions })
    ];
  }));
  const pluginStates = Object.fromEntries(Object.entries(pluginInstances).map(([key, pluginInstance]) => [
    key,
    pluginInstance.pluginState
  ]));
  const tableState = {
    data: data2,
    columns,
    flatColumns: $flatColumns,
    tableAttrs: _tableAttrs,
    tableHeadAttrs: _tableHeadAttrs,
    tableBodyAttrs: _tableBodyAttrs,
    visibleColumns: _visibleColumns,
    headerRows: _headerRows,
    originalRows,
    rows: _rows,
    pageRows: _pageRows,
    pluginStates
  };
  const deriveTableAttrsFns = Object.values(pluginInstances).map((pluginInstance) => pluginInstance.deriveTableAttrs).filter(nonUndefined);
  let tableAttrs = readable({
    role: "table"
  });
  deriveTableAttrsFns.forEach((fn) => {
    tableAttrs = fn(tableAttrs);
  });
  const finalizedTableAttrs = derived(tableAttrs, ($tableAttrs) => {
    const $finalizedAttrs = finalizeAttributes($tableAttrs);
    _tableAttrs.set($finalizedAttrs);
    return $finalizedAttrs;
  });
  const deriveTableHeadAttrsFns = Object.values(pluginInstances).map((pluginInstance) => pluginInstance.deriveTableBodyAttrs).filter(nonUndefined);
  let tableHeadAttrs = readable({});
  deriveTableHeadAttrsFns.forEach((fn) => {
    tableHeadAttrs = fn(tableHeadAttrs);
  });
  const finalizedTableHeadAttrs = derived(tableHeadAttrs, ($tableHeadAttrs) => {
    const $finalizedAttrs = finalizeAttributes($tableHeadAttrs);
    _tableHeadAttrs.set($finalizedAttrs);
    return $finalizedAttrs;
  });
  const deriveTableBodyAttrsFns = Object.values(pluginInstances).map((pluginInstance) => pluginInstance.deriveTableBodyAttrs).filter(nonUndefined);
  let tableBodyAttrs = readable({
    role: "rowgroup"
  });
  deriveTableBodyAttrsFns.forEach((fn) => {
    tableBodyAttrs = fn(tableBodyAttrs);
  });
  const finalizedTableBodyAttrs = derived(tableBodyAttrs, ($tableBodyAttrs) => {
    const $finalizedAttrs = finalizeAttributes($tableBodyAttrs);
    _tableBodyAttrs.set($finalizedAttrs);
    return $finalizedAttrs;
  });
  const deriveFlatColumnsFns = Object.values(pluginInstances).map((pluginInstance) => pluginInstance.deriveFlatColumns).filter(nonUndefined);
  let visibleColumns = flatColumns;
  deriveFlatColumnsFns.forEach((fn) => {
    visibleColumns = fn(visibleColumns);
  });
  const injectedColumns = derived(visibleColumns, ($visibleColumns) => {
    _visibleColumns.set($visibleColumns);
    return $visibleColumns;
  });
  const columnedRows = derived([originalRows, injectedColumns], ([$originalRows, $injectedColumns]) => {
    return getColumnedBodyRows($originalRows, $injectedColumns.map((c) => c.id));
  });
  const deriveRowsFns = Object.values(pluginInstances).map((pluginInstance) => pluginInstance.deriveRows).filter(nonUndefined);
  let rows = columnedRows;
  deriveRowsFns.forEach((fn) => {
    rows = fn(rows);
  });
  const injectedRows = derived(rows, ($rows) => {
    $rows.forEach((row) => {
      row.injectState(tableState);
      row.cells.forEach((cell) => {
        cell.injectState(tableState);
      });
    });
    Object.entries(pluginInstances).forEach(([pluginName, pluginInstance]) => {
      $rows.forEach((row) => {
        if (pluginInstance.hooks?.["tbody.tr"] !== void 0) {
          row.applyHook(pluginName, pluginInstance.hooks["tbody.tr"](row));
        }
        row.cells.forEach((cell) => {
          if (pluginInstance.hooks?.["tbody.tr.td"] !== void 0) {
            cell.applyHook(pluginName, pluginInstance.hooks["tbody.tr.td"](cell));
          }
        });
      });
    });
    _rows.set($rows);
    return $rows;
  });
  const derivePageRowsFns = Object.values(pluginInstances).map((pluginInstance) => pluginInstance.derivePageRows).filter(nonUndefined);
  let pageRows = injectedRows;
  derivePageRowsFns.forEach((fn) => {
    pageRows = fn(pageRows);
  });
  const injectedPageRows = derived(pageRows, ($pageRows) => {
    $pageRows.forEach((row) => {
      row.injectState(tableState);
      row.cells.forEach((cell) => {
        cell.injectState(tableState);
      });
    });
    Object.entries(pluginInstances).forEach(([pluginName, pluginInstance]) => {
      $pageRows.forEach((row) => {
        if (pluginInstance.hooks?.["tbody.tr"] !== void 0) {
          row.applyHook(pluginName, pluginInstance.hooks["tbody.tr"](row));
        }
        row.cells.forEach((cell) => {
          if (pluginInstance.hooks?.["tbody.tr.td"] !== void 0) {
            cell.applyHook(pluginName, pluginInstance.hooks["tbody.tr.td"](cell));
          }
        });
      });
    });
    _pageRows.set($pageRows);
    return $pageRows;
  });
  const headerRows = derived(injectedColumns, ($injectedColumns) => {
    const $headerRows = getHeaderRows(columns, $injectedColumns.map((c) => c.id));
    $headerRows.forEach((row) => {
      row.injectState(tableState);
      row.cells.forEach((cell) => {
        cell.injectState(tableState);
      });
    });
    Object.entries(pluginInstances).forEach(([pluginName, pluginInstance]) => {
      $headerRows.forEach((row) => {
        if (pluginInstance.hooks?.["thead.tr"] !== void 0) {
          row.applyHook(pluginName, pluginInstance.hooks["thead.tr"](row));
        }
        row.cells.forEach((cell) => {
          if (pluginInstance.hooks?.["thead.tr.th"] !== void 0) {
            cell.applyHook(pluginName, pluginInstance.hooks["thead.tr.th"](cell));
          }
        });
      });
    });
    _headerRows.set($headerRows);
    return $headerRows;
  });
  return {
    tableAttrs: finalizedTableAttrs,
    tableHeadAttrs: finalizedTableHeadAttrs,
    tableBodyAttrs: finalizedTableBodyAttrs,
    visibleColumns: injectedColumns,
    flatColumns: $flatColumns,
    headerRows,
    originalRows,
    rows: injectedRows,
    pageRows: injectedPageRows,
    pluginStates
  };
};
let Table$1 = class Table {
  data;
  plugins;
  constructor(data2, plugins) {
    this.data = data2;
    this.plugins = plugins;
  }
  createColumns(columns) {
    const ids = getFlatColumnIds(columns);
    const duplicateIds = getDuplicates(ids);
    if (duplicateIds.length !== 0) {
      throw new Error(`Duplicate column ids not allowed: "${duplicateIds.join('", "')}"`);
    }
    return columns;
  }
  column(def) {
    return new DataColumn(def);
  }
  group(def) {
    return new GroupColumn(def);
  }
  display(def) {
    return new DisplayColumn(def);
  }
  createViewModel(columns, options) {
    return createViewModel(this, columns, options);
  }
};
const createTable = (data2, plugins = {}) => {
  return new Table$1(data2, plugins);
};
const getTokens = (key) => {
  let keyWithoutBracket = key.replace(/\[(\d+)\]/g, ".$1");
  if (keyWithoutBracket.startsWith(".")) {
    keyWithoutBracket = keyWithoutBracket.slice(1);
  }
  return keyWithoutBracket.split(".");
};
const getNested = (root, keyTokens) => {
  let current = root;
  for (const key of keyTokens) {
    if (current == null) {
      return void 0;
    }
    current = current[key];
  }
  return current;
};
const clonedWithPrototype = (source) => {
  const clone = Object.create(source);
  Object.assign(clone, source);
  return clone;
};
function keyed(parent, path) {
  const keyTokens = getTokens(path);
  if (keyTokens.some((token) => token === "__proto__")) {
    throw new Error('key cannot include "__proto__"');
  }
  const branchTokens = keyTokens.slice(0, keyTokens.length - 1);
  const leafToken = keyTokens[keyTokens.length - 1];
  const keyedValue = derived(parent, ($parent) => getNested($parent, keyTokens));
  const set = (value) => {
    parent.update(($parent) => {
      if ($parent == null) {
        return $parent;
      }
      const newParent = Array.isArray($parent) ? [...$parent] : clonedWithPrototype($parent);
      getNested(newParent, branchTokens)[leafToken] = value;
      return newParent;
    });
  };
  const update = (fn) => {
    parent.update(($parent) => {
      if ($parent == null) {
        return $parent;
      }
      const newValue = fn(getNested($parent, keyTokens));
      const newParent = Array.isArray($parent) ? [...$parent] : clonedWithPrototype($parent);
      getNested(newParent, branchTokens)[leafToken] = newValue;
      return newParent;
    });
  };
  return {
    subscribe: keyedValue.subscribe,
    set,
    update
  };
}
const getFilteredRows$1 = (rows, filterValues, columnOptions) => {
  const $filteredRows = rows.map((row) => {
    const { subRows } = row;
    if (subRows === void 0) {
      return row;
    }
    const filteredSubRows = getFilteredRows$1(subRows, filterValues, columnOptions);
    const clonedRow = row.clone();
    clonedRow.subRows = filteredSubRows;
    return clonedRow;
  }).filter((row) => {
    if ((row.subRows?.length ?? 0) !== 0) {
      return true;
    }
    for (const [columnId, columnOption] of Object.entries(columnOptions)) {
      const bodyCell = row.cellForId[columnId];
      if (!bodyCell.isData()) {
        continue;
      }
      const { value } = bodyCell;
      const filterValue = filterValues[columnId];
      if (filterValue === void 0) {
        continue;
      }
      const isMatch = columnOption.fn({ value, filterValue });
      if (!isMatch) {
        return false;
      }
    }
    return true;
  });
  return $filteredRows;
};
const addColumnFilters = ({ serverSide = false } = {}) => ({ columnOptions, tableState }) => {
  const filterValues = writable({});
  const preFilteredRows = writable([]);
  const filteredRows = writable([]);
  const pluginState = { filterValues, preFilteredRows };
  const deriveRows = (rows) => {
    return derived([rows, filterValues], ([$rows, $filterValues]) => {
      preFilteredRows.set($rows);
      if (serverSide) {
        filteredRows.set($rows);
        return $rows;
      }
      const _filteredRows = getFilteredRows$1($rows, $filterValues, columnOptions);
      filteredRows.set(_filteredRows);
      return _filteredRows;
    });
  };
  return {
    pluginState,
    deriveRows,
    hooks: {
      "thead.tr.th": (headerCell) => {
        const filterValue = keyed(filterValues, headerCell.id);
        const props = derived([], () => {
          const columnOption = columnOptions[headerCell.id];
          if (columnOption === void 0) {
            return void 0;
          }
          filterValue.set(columnOption.initialFilterValue);
          const preFilteredValues = derived(preFilteredRows, ($rows) => {
            if (headerCell.isData()) {
              return $rows.map((row) => {
                const cell = row.cellForId[headerCell.id];
                return cell?.value;
              });
            }
            return [];
          });
          const values = derived(filteredRows, ($rows) => {
            if (headerCell.isData()) {
              return $rows.map((row) => {
                const cell = row.cellForId[headerCell.id];
                return cell?.value;
              });
            }
            return [];
          });
          const render = columnOption.render?.({
            id: headerCell.id,
            filterValue,
            ...tableState,
            values,
            preFilteredRows,
            preFilteredValues
          });
          return { render };
        });
        return { props };
      }
    }
  };
};
const textPrefixFilter = ({ filterValue, value }) => {
  if (filterValue === "") {
    return true;
  }
  return String(value).toLowerCase().startsWith(String(filterValue).toLowerCase());
};
readable(void 0);
const recordSetStore = (initial = {}) => {
  const withFalseRemoved = (record) => {
    return Object.fromEntries(Object.entries(record).filter(([, v]) => v));
  };
  const { subscribe: subscribe2, update, set } = writable(withFalseRemoved(initial));
  const updateAndRemoveFalse = (fn) => {
    update(($recordSet) => {
      const newRecordSet = fn($recordSet);
      return withFalseRemoved(newRecordSet);
    });
  };
  const toggle = (item) => {
    update(($recordSet) => {
      if ($recordSet[item] === true) {
        delete $recordSet[item];
        return $recordSet;
      }
      return {
        ...$recordSet,
        [item]: true
      };
    });
  };
  const add = (item) => {
    update(($recordSet) => ({
      ...$recordSet,
      [item]: true
    }));
  };
  const addAll = (items) => {
    update(($recordSet) => ({
      ...$recordSet,
      ...Object.fromEntries(items.map((item) => [item, true]))
    }));
  };
  const remove = (item) => {
    update(($recordSet) => {
      delete $recordSet[item];
      return $recordSet;
    });
  };
  const removeAll = (items) => {
    update(($recordSet) => {
      for (const item of items) {
        delete $recordSet[item];
      }
      return $recordSet;
    });
  };
  const clear = () => {
    set({});
  };
  return {
    subscribe: subscribe2,
    update: updateAndRemoveFalse,
    set: (newValue) => updateAndRemoveFalse(() => newValue),
    toggle,
    add,
    addAll,
    remove,
    removeAll,
    clear
  };
};
const isShiftClick = (event) => {
  if (!(event instanceof MouseEvent))
    return false;
  return event.shiftKey;
};
const addHiddenColumns = ({ initialHiddenColumnIds = [] } = {}) => () => {
  const hiddenColumnIds = writable(initialHiddenColumnIds);
  const pluginState = { hiddenColumnIds };
  const deriveFlatColumns = (flatColumns) => {
    return derived([flatColumns, hiddenColumnIds], ([$flatColumns, $hiddenColumnIds]) => {
      if ($hiddenColumnIds.length === 0) {
        return $flatColumns;
      }
      return $flatColumns.filter((c) => !$hiddenColumnIds.includes(c.id));
    });
  };
  return {
    pluginState,
    deriveFlatColumns
  };
};
const MIN_PAGE_SIZE = 1;
const createPageStore = ({ items, initialPageSize, initialPageIndex, serverSide, serverItemCount }) => {
  const pageSize = writable(initialPageSize);
  const updatePageSize = (fn) => {
    pageSize.update(($pageSize) => {
      const newPageSize = fn($pageSize);
      return Math.max(newPageSize, MIN_PAGE_SIZE);
    });
  };
  const setPageSize = (newPageSize) => updatePageSize(() => newPageSize);
  const pageIndex = writable(initialPageIndex);
  function calcPageCountAndLimitIndex([$pageSize, $itemCount]) {
    const $pageCount = Math.ceil($itemCount / $pageSize);
    pageIndex.update(($pageIndex) => {
      if ($pageCount > 0 && $pageIndex >= $pageCount) {
        return $pageCount - 1;
      }
      return $pageIndex;
    });
    return $pageCount;
  }
  let pageCount;
  if (serverSide && serverItemCount != null) {
    pageCount = derived([pageSize, serverItemCount], calcPageCountAndLimitIndex);
  } else {
    const itemCount = derived(items, ($items) => $items.length);
    pageCount = derived([pageSize, itemCount], calcPageCountAndLimitIndex);
  }
  const hasPreviousPage = derived(pageIndex, ($pageIndex) => {
    return $pageIndex > 0;
  });
  const hasNextPage = derived([pageIndex, pageCount], ([$pageIndex, $pageCount]) => {
    return $pageIndex < $pageCount - 1;
  });
  return {
    pageSize: {
      subscribe: pageSize.subscribe,
      update: updatePageSize,
      set: setPageSize
    },
    pageIndex,
    pageCount,
    serverItemCount,
    hasPreviousPage,
    hasNextPage
  };
};
const addPagination = ({ initialPageIndex = 0, initialPageSize = 10, serverSide = false, serverItemCount } = {}) => () => {
  const prePaginatedRows = writable([]);
  const paginatedRows = writable([]);
  const { pageSize, pageIndex, pageCount, hasPreviousPage, hasNextPage } = createPageStore({
    items: prePaginatedRows,
    initialPageIndex,
    initialPageSize,
    serverSide,
    serverItemCount
  });
  const pluginState = {
    pageSize,
    pageIndex,
    pageCount,
    hasPreviousPage,
    hasNextPage
  };
  const derivePageRows = (rows) => {
    return derived([rows, pageSize, pageIndex], ([$rows, $pageSize, $pageIndex]) => {
      prePaginatedRows.set($rows);
      if (serverSide) {
        paginatedRows.set($rows);
        return $rows;
      }
      const startIdx = $pageIndex * $pageSize;
      const _paginatedRows = $rows.slice(startIdx, startIdx + $pageSize);
      paginatedRows.set(_paginatedRows);
      return _paginatedRows;
    });
  };
  return {
    pluginState,
    derivePageRows
  };
};
const compare = (a, b) => {
  if (Array.isArray(a) && Array.isArray(b)) {
    return compareArray(a, b);
  }
  if (typeof a === "number" && typeof b === "number")
    return a - b;
  return a < b ? -1 : a > b ? 1 : 0;
};
const compareArray = (a, b) => {
  const minLength = Math.min(a.length, b.length);
  for (let i = 0; i < minLength; i++) {
    const order = compare(a[i], b[i]);
    if (order !== 0)
      return order;
  }
  return 0;
};
const DEFAULT_TOGGLE_ORDER = ["asc", "desc", void 0];
const createSortKeysStore = (initKeys) => {
  const { subscribe: subscribe2, update, set } = writable(initKeys);
  const toggleId = (id, { multiSort = true, toggleOrder = DEFAULT_TOGGLE_ORDER } = {}) => {
    update(($sortKeys) => {
      const keyIdx = $sortKeys.findIndex((key2) => key2.id === id);
      const key = $sortKeys[keyIdx];
      const order = key?.order;
      const orderIdx = toggleOrder.findIndex((o) => o === order);
      const nextOrderIdx = (orderIdx + 1) % toggleOrder.length;
      const nextOrder = toggleOrder[nextOrderIdx];
      if (!multiSort) {
        if (nextOrder === void 0) {
          return [];
        }
        return [{ id, order: nextOrder }];
      }
      if (keyIdx === -1 && nextOrder !== void 0) {
        return [...$sortKeys, { id, order: nextOrder }];
      }
      if (nextOrder === void 0) {
        return [...$sortKeys.slice(0, keyIdx), ...$sortKeys.slice(keyIdx + 1)];
      }
      return [
        ...$sortKeys.slice(0, keyIdx),
        { id, order: nextOrder },
        ...$sortKeys.slice(keyIdx + 1)
      ];
    });
  };
  const clearId = (id) => {
    update(($sortKeys) => {
      const keyIdx = $sortKeys.findIndex((key) => key.id === id);
      if (keyIdx === -1) {
        return $sortKeys;
      }
      return [...$sortKeys.slice(0, keyIdx), ...$sortKeys.slice(keyIdx + 1)];
    });
  };
  return {
    subscribe: subscribe2,
    update,
    set,
    toggleId,
    clearId
  };
};
const getSortedRows = (rows, sortKeys, columnOptions) => {
  const $sortedRows = [...rows];
  $sortedRows.sort((a, b) => {
    for (const key of sortKeys) {
      const invert = columnOptions[key.id]?.invert ?? false;
      const cellA = a.cellForId[key.id];
      const cellB = b.cellForId[key.id];
      let order = 0;
      const compareFn = columnOptions[key.id]?.compareFn;
      const getSortValue = columnOptions[key.id]?.getSortValue;
      if (!cellA.isData()) {
        return 0;
      }
      const valueA = cellA.value;
      const valueB = cellB.value;
      if (compareFn !== void 0) {
        order = compareFn(valueA, valueB);
      } else if (getSortValue !== void 0) {
        const sortValueA = getSortValue(valueA);
        const sortValueB = getSortValue(valueB);
        order = compare(sortValueA, sortValueB);
      } else if (typeof valueA === "string" || typeof valueA === "number") {
        order = compare(valueA, valueB);
      } else if (valueA instanceof Date || valueB instanceof Date) {
        const sortValueA = valueA instanceof Date ? valueA.getTime() : 0;
        const sortValueB = valueB instanceof Date ? valueB.getTime() : 0;
        order = compare(sortValueA, sortValueB);
      }
      if (order !== 0) {
        let orderFactor = 1;
        if (key.order === "desc") {
          orderFactor *= -1;
        }
        if (invert) {
          orderFactor *= -1;
        }
        return order * orderFactor;
      }
    }
    return 0;
  });
  for (let i = 0; i < $sortedRows.length; i++) {
    const { subRows } = $sortedRows[i];
    if (subRows === void 0) {
      continue;
    }
    const sortedSubRows = getSortedRows(subRows, sortKeys, columnOptions);
    const clonedRow = $sortedRows[i].clone();
    clonedRow.subRows = sortedSubRows;
    $sortedRows[i] = clonedRow;
  }
  return $sortedRows;
};
const addSortBy = ({ initialSortKeys = [], disableMultiSort = false, isMultiSortEvent = isShiftClick, toggleOrder, serverSide = false } = {}) => ({ columnOptions }) => {
  const disabledSortIds = Object.entries(columnOptions).filter(([, option]) => option.disable === true).map(([columnId]) => columnId);
  const sortKeys = createSortKeysStore(initialSortKeys);
  const preSortedRows = writable([]);
  const deriveRows = (rows) => {
    return derived([rows, sortKeys], ([$rows, $sortKeys]) => {
      preSortedRows.set($rows);
      if (serverSide) {
        return $rows;
      }
      return getSortedRows($rows, $sortKeys, columnOptions);
    });
  };
  const pluginState = { sortKeys, preSortedRows };
  return {
    pluginState,
    deriveRows,
    hooks: {
      "thead.tr.th": (cell) => {
        const disabled = disabledSortIds.includes(cell.id);
        const props = derived(sortKeys, ($sortKeys) => {
          const key = $sortKeys.find((k) => k.id === cell.id);
          const toggle = (event) => {
            if (!cell.isData())
              return;
            if (disabled)
              return;
            sortKeys.toggleId(cell.id, {
              multiSort: disableMultiSort ? false : isMultiSortEvent(event),
              toggleOrder
            });
          };
          const clear = () => {
            if (!cell.isData())
              return;
            if (disabledSortIds.includes(cell.id))
              return;
            sortKeys.clearId(cell.id);
          };
          return {
            order: key?.order,
            toggle,
            clear,
            disabled
          };
        });
        return { props };
      },
      "tbody.tr.td": (cell) => {
        const props = derived(sortKeys, ($sortKeys) => {
          const key = $sortKeys.find((k) => k.id === cell.id);
          return {
            order: key?.order
          };
        });
        return { props };
      }
    }
  };
};
const getFilteredRows = (rows, filterValue, columnOptions, { tableCellMatches, fn, includeHiddenColumns }) => {
  const $filteredRows = rows.map((row) => {
    const { subRows } = row;
    if (subRows === void 0) {
      return row;
    }
    const filteredSubRows = getFilteredRows(subRows, filterValue, columnOptions, {
      tableCellMatches,
      fn,
      includeHiddenColumns
    });
    const clonedRow = row.clone();
    clonedRow.subRows = filteredSubRows;
    return clonedRow;
  }).filter((row) => {
    if ((row.subRows?.length ?? 0) !== 0) {
      return true;
    }
    const rowCellMatches = Object.values(row.cellForId).map((cell) => {
      const options = columnOptions[cell.id];
      if (options?.exclude === true) {
        return false;
      }
      const isHidden = row.cells.find((c) => c.id === cell.id) === void 0;
      if (isHidden && !includeHiddenColumns) {
        return false;
      }
      if (!cell.isData()) {
        return false;
      }
      let value = cell.value;
      if (options?.getFilterValue !== void 0) {
        value = options?.getFilterValue(value);
      }
      const matches = fn({ value: String(value), filterValue });
      if (matches) {
        const dataRowColId = cell.dataRowColId();
        if (dataRowColId !== void 0) {
          tableCellMatches[dataRowColId] = matches;
        }
      }
      return matches;
    });
    return rowCellMatches.includes(true);
  });
  return $filteredRows;
};
const addTableFilter = ({ fn = textPrefixFilter, initialFilterValue = "", includeHiddenColumns = false, serverSide = false } = {}) => ({ columnOptions }) => {
  const filterValue = writable(initialFilterValue);
  const preFilteredRows = writable([]);
  const tableCellMatches = recordSetStore();
  const pluginState = { filterValue, preFilteredRows };
  const deriveRows = (rows) => {
    return derived([rows, filterValue], ([$rows, $filterValue]) => {
      preFilteredRows.set($rows);
      tableCellMatches.clear();
      const $tableCellMatches = {};
      const $filteredRows = getFilteredRows($rows, $filterValue, columnOptions, {
        tableCellMatches: $tableCellMatches,
        fn,
        includeHiddenColumns
      });
      tableCellMatches.set($tableCellMatches);
      if (serverSide) {
        return $rows;
      }
      return $filteredRows;
    });
  };
  return {
    pluginState,
    deriveRows,
    hooks: {
      "tbody.tr.td": (cell) => {
        const props = derived([filterValue, tableCellMatches], ([$filterValue, $tableCellMatches]) => {
          const dataRowColId = cell.dataRowColId();
          return {
            matches: $filterValue !== "" && dataRowColId !== void 0 && ($tableCellMatches[dataRowColId] ?? false)
          };
        });
        return { props };
      }
    }
  };
};
const Table2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: className = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `<div class="w-full overflow-auto"><table${spread(
    [
      {
        class: escape_attribute_value(cn("w-full caption-bottom text-sm", className))
      },
      escape_object($$restProps)
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</table></div>`;
});
const Table_body = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: className = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `<tbody${spread(
    [
      {
        class: escape_attribute_value(cn("[&_tr:last-child]:border-0", className))
      },
      escape_object($$restProps)
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</tbody>`;
});
const Table_cell = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: className = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `<td${spread(
    [
      {
        class: escape_attribute_value(cn("p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className))
      },
      escape_object($$restProps)
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</td>`;
});
const Table_head = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: className = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `<th${spread(
    [
      {
        class: escape_attribute_value(cn("h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className))
      },
      escape_object($$restProps)
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</th>`;
});
const Table_header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: className = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return ` <thead${spread(
    [
      {
        class: escape_attribute_value(cn("[&_tr]:border-b", className))
      },
      escape_object($$restProps)
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</thead>`;
});
const Table_row = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: className = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `<tr${spread(
    [
      {
        class: escape_attribute_value(cn("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", className))
      },
      escape_object($$restProps)
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</tr>`;
});
const Dropdown_menu_label = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "inset"]);
  let { class: className = void 0 } = $$props;
  let { inset = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.inset === void 0 && $$bindings.inset && inset !== void 0)
    $$bindings.inset(inset);
  return `${validate_component(Menu_label, "DropdownMenuPrimitive.Label").$$render(
    $$result,
    Object.assign(
      {},
      {
        class: cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className)
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
const Dropdown_menu_content = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "sideOffset", "transition", "transitionConfig"]);
  let { class: className = void 0 } = $$props;
  let { sideOffset = 4 } = $$props;
  let { transition = flyAndScale } = $$props;
  let { transitionConfig = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.sideOffset === void 0 && $$bindings.sideOffset && sideOffset !== void 0)
    $$bindings.sideOffset(sideOffset);
  if ($$props.transition === void 0 && $$bindings.transition && transition !== void 0)
    $$bindings.transition(transition);
  if ($$props.transitionConfig === void 0 && $$bindings.transitionConfig && transitionConfig !== void 0)
    $$bindings.transitionConfig(transitionConfig);
  return `${validate_component(Menu_content, "DropdownMenuPrimitive.Content").$$render(
    $$result,
    Object.assign(
      {},
      { transition },
      { transitionConfig },
      { sideOffset },
      {
        class: cn("z-50 min-w-[8rem] rounded-md border bg-popover p-1 text-popover-foreground shadow-md focus:outline-none", className)
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
const Dropdown_menu_separator = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: className = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `${validate_component(Menu_separator, "DropdownMenuPrimitive.Separator").$$render(
    $$result,
    Object.assign(
      {},
      {
        class: cn("-mx-1 my-1 h-px bg-muted", className)
      },
      $$restProps
    ),
    {},
    {}
  )}`;
});
const Dropdown_menu_checkbox_item = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "checked"]);
  let { class: className = void 0 } = $$props;
  let { checked = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.checked === void 0 && $$bindings.checked && checked !== void 0)
    $$bindings.checked(checked);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(Menu_checkbox_item, "DropdownMenuPrimitive.CheckboxItem").$$render(
      $$result,
      Object.assign(
        {},
        {
          class: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-[disabled]:opacity-50", className)
        },
        $$restProps,
        { checked }
      ),
      {
        checked: ($$value) => {
          checked = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<span class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">${validate_component(Menu_checkbox_indicator, "DropdownMenuPrimitive.CheckboxIndicator").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Check, "Check").$$render($$result, { class: "h-4 w-4" }, {}, {})}`;
            }
          })}</span> ${slots.default ? slots.default({}) : ``}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const Root = Menu;
const Trigger = Menu_trigger;
const Data_table_print = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data: data2 } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data2 !== void 0)
    $$bindings.data(data2);
  return `${validate_component(Table2, "Table").$$render(
    $$result,
    {
      class: "border-collapse border border-black"
    },
    {},
    {
      default: () => {
        return `${validate_component(Table_header, "TableHeader").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Table_row, "TableRow").$$render($$result, { class: "bg-[#7030A0]" }, {}, {
              default: () => {
                return `${validate_component(Table_head, "TableHead").$$render(
                  $$result,
                  {
                    class: "w-[50px] border border-black text-center text-lg font-bold text-white"
                  },
                  {},
                  {
                    default: () => {
                      return `NO.`;
                    }
                  }
                )} ${validate_component(Table_head, "TableHead").$$render(
                  $$result,
                  {
                    class: "border border-black text-center text-lg font-bold text-white"
                  },
                  {},
                  {
                    default: () => {
                      return `PEKERJAAN`;
                    }
                  }
                )} ${validate_component(Table_head, "TableHead").$$render(
                  $$result,
                  {
                    class: "border border-black text-center text-lg font-bold text-white"
                  },
                  {},
                  {
                    default: () => {
                      return `PELAKSANA`;
                    }
                  }
                )} ${validate_component(Table_head, "TableHead").$$render(
                  $$result,
                  {
                    class: "border border-black text-center text-lg font-bold text-white"
                  },
                  {},
                  {
                    default: () => {
                      return `STATUS`;
                    }
                  }
                )}`;
              }
            })}`;
          }
        })} ${validate_component(Table_body, "TableBody").$$render($$result, { class: "font-semibold text-black" }, {}, {
          default: () => {
            return `${each(data2, ({ id, pekerjaan, spk, pelaksana, status }) => {
              return `${validate_component(Table_row, "TableRow").$$render($$result, { class: "border-none" }, {}, {
                default: () => {
                  return `${validate_component(Table_cell, "TableCell").$$render(
                    $$result,
                    {
                      class: "border-t border-black text-center"
                    },
                    {},
                    {
                      default: () => {
                        return `${escape(id)}.`;
                      }
                    }
                  )} ${validate_component(Table_cell, "TableCell").$$render($$result, { class: "border border-black" }, {}, {
                    default: () => {
                      return `${escape(pekerjaan)}`;
                    }
                  })} ${validate_component(Table_cell, "TableCell").$$render($$result, { class: "border border-black" }, {}, {
                    default: () => {
                      return `${escape(pelaksana)}`;
                    }
                  })} ${validate_component(Table_cell, "TableCell").$$render(
                    $$result,
                    {
                      class: cn("border-t border-black text-center", status === "Finish" && "bg-[#FFFF00]")
                    },
                    {},
                    {
                      default: () => {
                        return `${escape(status)} `;
                      }
                    }
                  )} `;
                }
              })} ${validate_component(Table_row, "TableRow").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Table_cell, "TableCell").$$render($$result, {}, {}, {})} ${validate_component(Table_cell, "TableCell").$$render($$result, { class: "border border-black" }, {}, {
                    default: () => {
                      return `SPK`;
                    }
                  })} ${validate_component(Table_cell, "TableCell").$$render($$result, { class: "border border-black" }, {}, {
                    default: () => {
                      return `${escape(spk)}`;
                    }
                  })} ${validate_component(Table_cell, "TableCell").$$render(
                    $$result,
                    {
                      class: cn(status === "Finish" && "bg-[#FFFF00]")
                    },
                    {},
                    {}
                  )} `;
                }
              })}`;
            })}`;
          }
        })}`;
      }
    }
  )}`;
});
const data = [
  {
    "id": 1,
    "pekerjaan": "Gambar Arsitek",
    "spk": "K019/SPK-ARS/IV/2023",
    "pelaksana": "Anggraini Dini",
    "gambar": "",
    "status": "Finish"
  },
  {
    "id": 2,
    "pekerjaan": "Gambar Interior",
    "spk": "K019/SPK-IND/IV/2023",
    "pelaksana": "Nurul Septiani",
    "gambar": "",
    "status": "Finish"
  },
  {
    "id": 3,
    "pekerjaan": "Gambar Struktur",
    "spk": "K019/SPK-STR/IV/2023",
    "pelaksana": "Adnan Ardiansyah",
    "gambar": "",
    "status": "Finish"
  },
  {
    "id": 4,
    "pekerjaan": "Analisa Struktur",
    "spk": "K019/SPK-ENG/IV/2023",
    "pelaksana": "Dona Lisa",
    "gambar": "",
    "status": "Finish"
  },
  {
    "id": 5,
    "pekerjaan": "Rencana Anggaran",
    "spk": "K019/SPK-EST/IV/2023",
    "pelaksana": "Isnaini T Q",
    "gambar": "",
    "status": "Finish"
  },
  {
    "id": 6,
    "pekerjaan": "Jadwal Project",
    "spk": "K019/SPK-PLA/IV/2023",
    "pelaksana": "Isnaini T Q",
    "gambar": "",
    "status": "Finish"
  },
  {
    "id": 7,
    "pekerjaan": "Procurement",
    "spk": "K019/SPK-PRC/IV/2023",
    "pelaksana": "Hertia Lestari",
    "gambar": "",
    "status": "On Progress"
  },
  {
    "id": 8,
    "pekerjaan": "Konstruksi",
    "spk": "K019/SPK-PRO/IV/2022",
    "pelaksana": "M Jamaludin",
    "gambar": "",
    "status": "On Progress"
  },
  {
    "id": 9,
    "pekerjaan": "Interior",
    "spk": "K019/SPK-INT/IV/2022",
    "pelaksana": "Akbar Fauzi",
    "gambar": "",
    "status": "On Progress"
  }
];
const css = {
  code: "@page{size:auto;margin:0mm}@media print{body{visibility:hidden;-webkit-print-color-adjust:exact;print-color-adjust:exact}}",
  map: null
};
const Data_table_toolbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $hiddenColumnIds, $$unsubscribe_hiddenColumnIds;
  let $filterValue, $$unsubscribe_filterValue;
  let { tableModel } = $$props;
  const { pluginStates, flatColumns } = tableModel;
  const { hiddenColumnIds } = pluginStates.hide;
  $$unsubscribe_hiddenColumnIds = subscribe(hiddenColumnIds, (value) => $hiddenColumnIds = value);
  const { filterValue } = pluginStates.filter;
  $$unsubscribe_filterValue = subscribe(filterValue, (value) => $filterValue = value);
  const ids = flatColumns.map((col) => col.id);
  const hidableCols = ["spk", "pelaksana", "status"];
  let hideForId = Object.fromEntries(ids.map((id) => [id, true]));
  if ($$props.tableModel === void 0 && $$bindings.tableModel && tableModel !== void 0)
    $$bindings.tableModel(tableModel);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    set_store_value(hiddenColumnIds, $hiddenColumnIds = Object.entries(hideForId).filter(([, hide]) => !hide).map(([id]) => id), $hiddenColumnIds);
    $$rendered = `<div class="flex flex-col items-center justify-between space-y-3 p-4 md:flex-row md:space-x-4 md:space-y-0"><div class="w-full md:w-1/2"><form class="flex items-center"><label for="simple-search" class="sr-only" data-svelte-h="svelte-1teuda">Search</label> <div class="relative w-full"><div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">${validate_component(MagnifyingGlass, "MagnifyingGlass").$$render($$result, { class: "h-5 w-5 text-muted-foreground" }, {}, {})}</div> ${validate_component(Input, "Input").$$render(
      $$result,
      {
        type: "text",
        id: "simple-search",
        class: "bg-tertiary pl-10 text-sm transition-none focus-visible:ring-2",
        placeholder: "Search",
        required: true,
        value: $filterValue
      },
      {
        value: ($$value) => {
          $filterValue = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div></form></div> <div class="flex w-full flex-shrink-0 flex-col items-stretch justify-end space-y-2 md:w-auto md:flex-row md:items-center md:space-x-3 md:space-y-0"><div class="flex w-full items-center space-x-3 md:w-auto">${validate_component(Button, "Button").$$render(
      $$result,
      {
        variant: "default",
        class: "w-full items-center focus-visible:ring-2 md:w-auto",
        type: "button"
      },
      {},
      {
        default: () => {
          return `${validate_component(Printer, "Printer").$$render($$result, { class: "-ml-0.5 mr-2 h-4 w-4" }, {}, {})}
				Print Data`;
        }
      }
    )}  ${validate_component(Root, "DropdownMenu.Root").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Trigger, "DropdownMenu.Trigger").$$render($$result, { asChild: true }, {}, {
          default: ({ builder }) => {
            return `${validate_component(Button, "Button").$$render(
              $$result,
              {
                variant: "secondary",
                class: "w-full items-center focus-visible:ring-2 md:w-auto",
                type: "button",
                builders: [builder]
              },
              {},
              {
                default: () => {
                  return `${validate_component(Plus, "Plus").$$render($$result, { class: "-ml-1 mr-1.5 h-4 w-4" }, {}, {})}
						Add Data`;
                }
              }
            )}`;
          }
        })} ${validate_component(Dropdown_menu_content, "DropdownMenu.Content").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Dropdown_menu_label, "DropdownMenu.Label").$$render($$result, {}, {}, {
              default: () => {
                return `Toggle columns`;
              }
            })} ${validate_component(Dropdown_menu_separator, "DropdownMenu.Separator").$$render($$result, {}, {}, {})} ${each(flatColumns, (col) => {
              return `${hidableCols.includes(col.id) ? `${validate_component(Dropdown_menu_checkbox_item, "DropdownMenu.CheckboxItem").$$render(
                $$result,
                { checked: hideForId[col.id] },
                {
                  checked: ($$value) => {
                    hideForId[col.id] = $$value;
                    $$settled = false;
                  }
                },
                {
                  default: () => {
                    return `${escape(col.header)} `;
                  }
                }
              )}` : ``}`;
            })}`;
          }
        })}`;
      }
    })}</div></div></div> <div class="invisible fixed left-0 top-0 w-full p-6 print:visible" id="section-to-print">${validate_component(Data_table_print, "DataTablePrint").$$render($$result, { data }, {}, {})} </div>`;
  } while (!$$settled);
  $$unsubscribe_hiddenColumnIds();
  $$unsubscribe_filterValue();
  return $$rendered;
});
const Data_table_actions = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `  ${validate_component(Root$1, "Dialog.Root").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Trigger$1, "Dialog.Trigger").$$render(
        $$result,
        {
          class: cn(buttonVariants({ variant: "ghost" }), "relative h-auto w-fit p-0.5 hover:bg-transparent")
        },
        {},
        {
          default: () => {
            return `<span class="sr-only" data-svelte-h="svelte-rsbkxi">Open menu</span> ${validate_component(Edit, "Edit").$$render($$result, { class: "h-[14px]" }, {}, {})}`;
          }
        }
      )} ${validate_component(Dialog_content, "Dialog.Content").$$render($$result, { class: "sm:max-w-[425px]" }, {}, {
        default: () => {
          return `${validate_component(Dialog_header, "Dialog.Header").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Dialog_title, "Dialog.Title").$$render($$result, {}, {}, {
                default: () => {
                  return `Edit Data`;
                }
              })}`;
            }
          })} ${validate_component(Dialog_footer, "Dialog.Footer").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Button, "Button").$$render($$result, { type: "submit" }, {}, {
                default: () => {
                  return `Save changes`;
                }
              })}`;
            }
          })}`;
        }
      })}`;
    }
  })}`;
});
const Data_table_pagination = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $pageIndex, $$unsubscribe_pageIndex;
  let $pageCount, $$unsubscribe_pageCount;
  let $hasPreviousPage, $$unsubscribe_hasPreviousPage;
  let $hasNextPage, $$unsubscribe_hasNextPage;
  let { tableModel } = $$props;
  const { pluginStates } = tableModel;
  const { hasNextPage, hasPreviousPage, pageIndex, pageCount, pageSize } = pluginStates.page;
  $$unsubscribe_hasNextPage = subscribe(hasNextPage, (value) => $hasNextPage = value);
  $$unsubscribe_hasPreviousPage = subscribe(hasPreviousPage, (value) => $hasPreviousPage = value);
  $$unsubscribe_pageIndex = subscribe(pageIndex, (value) => $pageIndex = value);
  $$unsubscribe_pageCount = subscribe(pageCount, (value) => $pageCount = value);
  if ($$props.tableModel === void 0 && $$bindings.tableModel && tableModel !== void 0)
    $$bindings.tableModel(tableModel);
  $$unsubscribe_pageIndex();
  $$unsubscribe_pageCount();
  $$unsubscribe_hasPreviousPage();
  $$unsubscribe_hasNextPage();
  return `<div class="flex flex-col items-center justify-between gap-4 border-t p-4 min-[420px]:flex-row"><div class="flex w-full flex-1 items-center justify-between text-sm text-muted-foreground"><div class="flex items-center justify-center text-sm font-medium">Page ${escape($pageIndex + 1)} of ${escape($pageCount)}</div> <div class="flex items-center space-x-2"><p class="sr-only text-sm font-medium" data-svelte-h="svelte-qkerdp">Rows per page</p> ${validate_component(Root$2, "Select.Root").$$render(
    $$result,
    {
      onSelectedChange: (selected) => pageSize.set(Number(selected?.value)),
      selected: { value: "9", label: "9" }
    },
    {},
    {
      default: () => {
        return `${validate_component(Select_trigger, "Select.Trigger").$$render($$result, { class: "w-[80px]" }, {}, {
          default: () => {
            return `${validate_component(Value, "Select.Value").$$render($$result, { placeholder: "Select page size" }, {}, {})}`;
          }
        })} ${validate_component(Select_content, "Select.Content").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Select_item, "Select.Item").$$render($$result, { value: "3" }, {}, {
              default: () => {
                return `3`;
              }
            })} ${validate_component(Select_item, "Select.Item").$$render($$result, { value: "6" }, {}, {
              default: () => {
                return `6`;
              }
            })} ${validate_component(Select_item, "Select.Item").$$render($$result, { value: "9" }, {}, {
              default: () => {
                return `9`;
              }
            })}`;
          }
        })}`;
      }
    }
  )}</div></div> <ul class="inline-flex items-stretch -space-x-px"><li>${validate_component(Button, "Button").$$render(
    $$result,
    {
      variant: "outline",
      class: "rounded-r-none bg-transparent px-3 py-1.5",
      disabled: !$hasPreviousPage
    },
    {},
    {
      default: () => {
        return `<span class="sr-only" data-svelte-h="svelte-z31jm6">Previous</span> ${validate_component(ChevronLeft$1, "ChevronLeft").$$render($$result, { class: "h-4 w-4" }, {}, {})}`;
      }
    }
  )}</li> ${each({ length: $pageCount }, (_, i) => {
    return `<li>${validate_component(Button, "Button").$$render(
      $$result,
      {
        variant: "ghost",
        class: cn("rounded-none border px-3.5 py-2", $pageIndex === i && "bg-accent"),
        disabled: $pageIndex === i
      },
      {},
      {
        default: () => {
          return `${escape(i + 1)} `;
        }
      }
    )} </li>`;
  })} <li>${validate_component(Button, "Button").$$render(
    $$result,
    {
      variant: "outline",
      class: "rounded-l-none bg-transparent px-3 py-1.5",
      disabled: !$hasNextPage
    },
    {},
    {
      default: () => {
        return `<span class="sr-only" data-svelte-h="svelte-xiiv6y">Next</span> ${validate_component(ChevronRight$1, "ChevronRight").$$render($$result, { class: "h-4 w-4" }, {}, {})}`;
      }
    }
  )}</li></ul></div>`;
});
const Data_table_column_header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { props } = $$props;
  if ($$props.props === void 0 && $$bindings.props && props !== void 0)
    $$bindings.props(props);
  return `${!props.sort.disabled ? `<div class="flex items-center">${validate_component(Button, "Button").$$render(
    $$result,
    {
      variant: "ghost",
      class: "h-8 p-0 text-xs font-bold uppercase text-muted-foreground hover:bg-transparent data-[state=open]:bg-accent"
    },
    {},
    {
      default: () => {
        return `${slots.default ? slots.default({}) : ``} ${props.sort.order === "desc" ? `${validate_component(ArrowDown$1, "ArrowDown").$$render($$result, { class: "ml-2 h-4 w-4" }, {}, {})}` : `${props.sort.order === "asc" ? `${validate_component(ArrowUp$1, "ArrowUp").$$render($$result, { class: "ml-2 h-4 w-4" }, {}, {})}` : `${validate_component(CaretSort, "CaretSort").$$render($$result, { class: "ml-2 h-4 w-4" }, {}, {})}`}`}`;
      }
    }
  )}</div>` : `${slots.default ? slots.default({}) : ``}`}`;
});
const Badge = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "href", "variant"]);
  let { class: className = void 0 } = $$props;
  let { href = void 0 } = $$props;
  let { variant = "default" } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
    $$bindings.variant(variant);
  return `${((tag) => {
    return tag ? `<${href ? "a" : "span"}${spread(
      [
        { href: escape_attribute_value(href) },
        {
          class: escape_attribute_value(cn(badgeVariants({ variant, className })))
        },
        escape_object($$restProps)
      ],
      {}
    )}>${is_void(tag) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag) ? "" : `</${tag}>`}` : "";
  })(href ? "a" : "span")}`;
});
const badgeVariants = tv({
  base: "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 select-none",
  variants: {
    variant: {
      default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
      secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
      tertiary: "border-transparent bg-tertiary text-tertiary-foreground hover:bg-tertiary/80",
      destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
      outline: "text-foreground"
    }
  },
  defaultVariants: {
    variant: "default"
  }
});
const Data_table_status = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { status } = $$props;
  if ($$props.status === void 0 && $$bindings.status && status !== void 0)
    $$bindings.status(status);
  return `${validate_component(Badge, "Badge").$$render(
    $$result,
    {
      variant: status === "Finish" ? "secondary" : "tertiary",
      class: "rounded-full "
    },
    {},
    {
      default: () => {
        return `${escape(status)}`;
      }
    }
  )}`;
});
const Data_table = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $tableAttrs, $$unsubscribe_tableAttrs;
  let $headerRows, $$unsubscribe_headerRows;
  let $tableBodyAttrs, $$unsubscribe_tableBodyAttrs;
  let $pageRows, $$unsubscribe_pageRows;
  let { data: data2 } = $$props;
  const table = createTable(readable(data2), {
    filter: addTableFilter({
      fn: ({ filterValue, value }) => value.toLowerCase().includes(filterValue.toLowerCase())
    }),
    sort: addSortBy({ toggleOrder: ["asc", "desc"] }),
    // todo: set this to localStorage
    page: addPagination({ initialPageSize: 9 }),
    colFilter: addColumnFilters(),
    hide: addHiddenColumns()
  });
  const columns = table.createColumns([
    table.column({ accessor: "id", header: "No", id: "no" }),
    table.column({
      accessor: "pekerjaan",
      header: "Pekerjaan"
    }),
    table.column({ accessor: "spk", header: "SPK" }),
    table.column({
      accessor: "pelaksana",
      header: "Pelaksana"
    }),
    table.column({
      accessor: "status",
      header: "Status",
      cell: ({ value }) => createRender(Data_table_status, { status: value })
    }),
    table.column({ accessor: "gambar", header: "Gambar" }),
    table.column({
      accessor: ({ id }) => id,
      header: "",
      cell: ({ value }) => createRender(Data_table_actions, { id: value }),
      plugins: { sort: { disable: true } }
    })
  ]);
  const tableModel = table.createViewModel(columns);
  const { headerRows, pageRows, tableAttrs, tableBodyAttrs } = tableModel;
  $$unsubscribe_headerRows = subscribe(headerRows, (value) => $headerRows = value);
  $$unsubscribe_pageRows = subscribe(pageRows, (value) => $pageRows = value);
  $$unsubscribe_tableAttrs = subscribe(tableAttrs, (value) => $tableAttrs = value);
  $$unsubscribe_tableBodyAttrs = subscribe(tableBodyAttrs, (value) => $tableBodyAttrs = value);
  if ($$props.data === void 0 && $$bindings.data && data2 !== void 0)
    $$bindings.data(data2);
  $$unsubscribe_tableAttrs();
  $$unsubscribe_headerRows();
  $$unsubscribe_tableBodyAttrs();
  $$unsubscribe_pageRows();
  return `<div class="relative overflow-hidden rounded-lg bg-card shadow-md">${validate_component(Data_table_toolbar, "DataTableToolbar").$$render($$result, { tableModel }, {}, {})} ${validate_component(Table2, "Table.Root").$$render($$result, Object.assign({}, $tableAttrs, { class: "text-left" }), {}, {
    default: () => {
      return `${validate_component(Table_header, "Table.Header").$$render($$result, { class: "bg-tertiary border-t" }, {}, {
        default: () => {
          return `${each($headerRows, (headerRow) => {
            return `${validate_component(Subscribe, "Subscribe").$$render($$result, { rowAttrs: headerRow.attrs() }, {}, {
              default: () => {
                return `${validate_component(Table_row, "Table.Row").$$render($$result, {}, {}, {
                  default: () => {
                    return `${each(headerRow.cells, (cell) => {
                      return `${validate_component(Subscribe, "Subscribe").$$render($$result, { attrs: cell.attrs(), props: cell.props() }, {}, {
                        default: ({ attrs, props }) => {
                          return `${validate_component(Table_head, "Table.Head").$$render($$result, Object.assign({}, attrs, { class: "px-4" }), {}, {
                            default: () => {
                              return `${validate_component(Data_table_column_header, "DataTableColumnHeader").$$render($$result, { props }, {}, {
                                default: () => {
                                  return `${validate_component(Render, "Render").$$render($$result, { of: cell.render() }, {}, {})} `;
                                }
                              })} `;
                            }
                          })} `;
                        }
                      })}`;
                    })} `;
                  }
                })} `;
              }
            })}`;
          })}`;
        }
      })} ${validate_component(Table_body, "Table.Body").$$render($$result, Object.assign({}, $tableBodyAttrs), {}, {
        default: () => {
          return `${each($pageRows, (row) => {
            return `${validate_component(Subscribe, "Subscribe").$$render($$result, { rowAttrs: row.attrs() }, {}, {
              default: ({ rowAttrs }) => {
                return `${validate_component(Table_row, "Table.Row").$$render($$result, Object.assign({}, rowAttrs), {}, {
                  default: () => {
                    return `${each(row.cells, (cell) => {
                      return `${validate_component(Subscribe, "Subscribe").$$render($$result, { attrs: cell.attrs() }, {}, {
                        default: ({ attrs }) => {
                          return `${validate_component(Table_cell, "Table.Cell").$$render($$result, Object.assign({}, attrs, { class: "whitespace-nowrap px-4 py-3" }), {}, {
                            default: () => {
                              return `${cell.id === "task" ? `${validate_component(Render, "Render").$$render($$result, { of: cell.render() }, {}, {})}` : `${cell.id === "" ? `<div class="flex justify-end">${validate_component(Render, "Render").$$render($$result, { of: cell.render() }, {}, {})} </div>` : `${validate_component(Render, "Render").$$render($$result, { of: cell.render() }, {}, {})}`}`} `;
                            }
                          })} `;
                        }
                      })}`;
                    })} `;
                  }
                })} `;
              }
            })}`;
          })}`;
        }
      })}`;
    }
  })} ${validate_component(Data_table_pagination, "DataTablePagination").$$render($$result, { tableModel }, {}, {})}</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="mb-4 flex items-center"><h1 class="text-xl font-semibold" data-svelte-h="svelte-1ljq728">Tim Pelaksana</h1> ${validate_component(Mode_toggle, "ModeToggle").$$render($$result, {}, {}, {})}</div> ${validate_component(Data_table, "DataTable").$$render($$result, { data }, {}, {})}`;
});
export {
  Page as default
};
