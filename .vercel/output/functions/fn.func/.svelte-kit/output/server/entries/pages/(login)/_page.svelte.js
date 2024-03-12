import { c as create_ssr_component, s as spread, d as escape_object, a as add_attribute, f as each, e as escape, v as validate_component, b as escape_attribute_value } from "../../../chunks/ssr.js";
import { c as compute_rest_props, a as subscribe } from "../../../chunks/lifecycle.js";
import { j as cn } from "../../../chunks/index3.js";
import "clsx";
import { n as navigating } from "../../../chunks/stores2.js";
import { g as getFormField, c as generateId, d as getDataFsError, F as Form_field, C as Control, a as Form_label, b as Form_button, S as Spinners } from "../../../chunks/index6.js";
import { I as Input } from "../../../chunks/input.js";
import { s as superForm, z as zodClient, b as loginSchema } from "../../../chunks/index4.js";
import "just-clone";
import "ts-deepmerge";
import "../../../chunks/index.js";
import "devalue";
import "memoize-weak";
const Description = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let descriptionAttrs;
  let $$restProps = compute_rest_props($$props, ["id", "asChild", "el"]);
  let $errors, $$unsubscribe_errors;
  let $descriptionId, $$unsubscribe_descriptionId;
  const { descriptionId, errors } = getFormField();
  $$unsubscribe_descriptionId = subscribe(descriptionId, (value) => $descriptionId = value);
  $$unsubscribe_errors = subscribe(errors, (value) => $errors = value);
  let { id = generateId() } = $$props;
  let { asChild = false } = $$props;
  let { el = void 0 } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0)
    $$bindings.asChild(asChild);
  if ($$props.el === void 0 && $$bindings.el && el !== void 0)
    $$bindings.el(el);
  {
    descriptionId.set(id);
  }
  descriptionAttrs = {
    id: $descriptionId,
    "data-fs-error": getDataFsError($errors),
    "data-fs-description": "",
    ...$$restProps
  };
  $$unsubscribe_errors();
  $$unsubscribe_descriptionId();
  return ` ${asChild ? `${slots.default ? slots.default({ descriptionAttrs }) : ``}` : `<div${spread([escape_object(descriptionAttrs)], {})}${add_attribute("this", el, 0)}>${slots.default ? slots.default({ descriptionAttrs }) : ``}</div>`}`;
});
const Field_errors = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let errorAttr;
  let fieldErrorsAttrs;
  let errorAttrs;
  let $$restProps = compute_rest_props($$props, ["id", "asChild", "el"]);
  let $fieldErrorsId, $$unsubscribe_fieldErrorsId;
  let $errors, $$unsubscribe_errors;
  const { fieldErrorsId, errors } = getFormField();
  $$unsubscribe_fieldErrorsId = subscribe(fieldErrorsId, (value) => $fieldErrorsId = value);
  $$unsubscribe_errors = subscribe(errors, (value) => $errors = value);
  let { id = generateId() } = $$props;
  let { asChild = false } = $$props;
  let { el = void 0 } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0)
    $$bindings.asChild(asChild);
  if ($$props.el === void 0 && $$bindings.el && el !== void 0)
    $$bindings.el(el);
  errorAttr = getDataFsError($errors);
  {
    fieldErrorsId.set(id);
  }
  fieldErrorsAttrs = {
    id: $fieldErrorsId,
    "data-fs-error": errorAttr,
    "data-fs-field-errors": "",
    "aria-live": "assertive",
    ...$$restProps
  };
  errorAttrs = {
    "data-fs-field-error": "",
    "data-fs-error": errorAttr
  };
  $$unsubscribe_fieldErrorsId();
  $$unsubscribe_errors();
  return ` ${asChild ? `${slots.default ? slots.default({
    errors: $errors,
    fieldErrorsAttrs,
    errorAttrs
  }) : ``}` : `<div${spread([escape_object(fieldErrorsAttrs)], {})}${add_attribute("this", el, 0)}>${slots.default ? slots.default({
    errors: $errors,
    fieldErrorsAttrs,
    errorAttrs
  }) : ` ${each($errors, (error) => {
    return `<div${spread([escape_object(errorAttrs)], {})}>${escape(error)}</div>`;
  })} `}</div>`}`;
});
const Form_description = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: className = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `${validate_component(Description, "FormPrimitive.Description").$$render(
    $$result,
    Object.assign(
      {},
      {
        class: cn("text-[0.8rem] text-muted-foreground", className)
      },
      $$restProps
    ),
    {},
    {
      default: ({ descriptionAttrs }) => {
        return `${slots.default ? slots.default({ descriptionAttrs }) : ``}`;
      }
    }
  )}`;
});
const Form_field_errors = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "errorClasses"]);
  let { class: className = void 0 } = $$props;
  let { errorClasses = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.errorClasses === void 0 && $$bindings.errorClasses && errorClasses !== void 0)
    $$bindings.errorClasses(errorClasses);
  return `${validate_component(Field_errors, "FormPrimitive.FieldErrors").$$render(
    $$result,
    Object.assign(
      {},
      {
        class: cn("text-[0.8rem] font-medium text-destructive", className)
      },
      $$restProps
    ),
    {},
    {
      default: ({ errors, fieldErrorsAttrs, errorAttrs }) => {
        return `${slots.default ? slots.default({ errors, fieldErrorsAttrs, errorAttrs }) : ` ${each(errors, (error) => {
          return `<div${spread(
            [
              escape_object(errorAttrs),
              {
                class: escape_attribute_value(cn(errorClasses))
              }
            ],
            {}
          )}>${escape(error)}</div>`;
        })} `}`;
      }
    }
  )}`;
});
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: className = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return ` <div${spread(
    [
      {
        class: escape_attribute_value(cn("rounded-xl border bg-card text-card-foreground shadow", className))
      },
      escape_object($$restProps)
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</div>`;
});
const Card_content = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: className = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `<div${spread(
    [
      {
        class: escape_attribute_value(cn("p-6 pt-0", className))
      },
      escape_object($$restProps)
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</div>`;
});
const LoginForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $formData, $$unsubscribe_formData;
  let $delayed, $$unsubscribe_delayed;
  let $navigating, $$unsubscribe_navigating;
  $$unsubscribe_navigating = subscribe(navigating, (value) => $navigating = value);
  let { data } = $$props;
  const form = superForm(data, {
    validators: zodClient(loginSchema),
    delayMs: 150
  });
  const { form: formData, enhance, delayed } = form;
  $$unsubscribe_formData = subscribe(formData, (value) => $formData = value);
  $$unsubscribe_delayed = subscribe(delayed, (value) => $delayed = value);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `  <form method="POST">${validate_component(Form_field, "Form.Field").$$render($$result, { form, name: "password" }, {}, {
      default: () => {
        return `${validate_component(Control, "Form.Control").$$render($$result, {}, {}, {
          default: ({ attrs }) => {
            return `${validate_component(Form_label, "Form.Label").$$render($$result, {}, {}, {
              default: () => {
                return `Password`;
              }
            })} ${validate_component(Input, "Input").$$render(
              $$result,
              Object.assign({}, attrs, { type: "password" }, { class: "bg-accent focus-visible:ring-2" }, { value: $formData.password }),
              {
                value: ($$value) => {
                  $formData.password = $$value;
                  $$settled = false;
                }
              },
              {}
            )}`;
          }
        })} ${validate_component(Form_description, "Form.Description").$$render($$result, { class: "sr-only" }, {}, {
          default: () => {
            return `Enter the password to login.`;
          }
        })} ${validate_component(Form_field_errors, "Form.FieldErrors").$$render($$result, {}, {}, {})}`;
      }
    })} ${validate_component(Form_button, "Form.Button").$$render(
      $$result,
      {
        class: "mt-2 w-full focus-visible:ring-2",
        disabled: $delayed || !!$navigating
      },
      {},
      {
        default: () => {
          return `${$delayed || $navigating ? `${validate_component(Spinners, "Spinner").$$render($$result, { class: "mr-2 h-4 w-4 animate-spin" }, {}, {})}
			Loading` : `Masuk`}`;
        }
      }
    )}</form>`;
  } while (!$$settled);
  $$unsubscribe_formData();
  $$unsubscribe_delayed();
  $$unsubscribe_navigating();
  return $$rendered;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<main class="flex min-h-[100dvh] flex-col items-center justify-center">${validate_component(Card, "Card").$$render(
    $$result,
    {
      class: "w-[400px] max-w-full max-sm:border-none max-sm:bg-background max-sm:shadow-none"
    },
    {},
    {
      default: () => {
        return `${validate_component(Card_content, "CardContent").$$render($$result, { class: "p-6" }, {}, {
          default: () => {
            return `${validate_component(LoginForm, "LoginForm").$$render($$result, { data: data.form }, {}, {})}`;
          }
        })}`;
      }
    }
  )}</main>`;
});
export {
  Page as default
};
