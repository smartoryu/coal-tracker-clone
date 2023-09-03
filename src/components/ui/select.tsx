"use client";

import { useId } from "react";
import ReactSelect, {
  ActionMeta,
  GroupBase,
  OptionsOrGroups,
  StylesConfig,
} from "react-select";

interface ISelect {
  onChange?: (newValue: unknown, actionMeta: ActionMeta<unknown>) => void;
  options?: OptionsOrGroups<unknown, GroupBase<unknown>>;
  placeholder?: React.ReactNode;
}

export function Select({ onChange, options, placeholder }: ISelect) {
  return (
    <ReactSelect
      instanceId={useId()}
      options={options}
      placeholder={placeholder}
      onChange={onChange}
      styles={customStyles}
    />
  );
}

const customStyles: StylesConfig<unknown, false, GroupBase<unknown>> = {
  container: (base) => ({
    ...base,
    border: "2px solid",
    borderColor: "#fff",
    borderRadius: "4px",
    boxShadow: "none",
  }),
  dropdownIndicator: (base) => ({
    ...base,
    color: "#fff",
    ":hover": {
      color: "#fff",
    },
  }),

  singleValue: (base) => ({
    ...base,
    color: "#fff",
  }),
  control: (base) => ({
    ...base,
    boxShadow: "none",
    border: "none",
    background: "none",
    color: "#fffff",
  }),

  option: (base, state) => {
    let backgroundColor = "white";
    if (state.isSelected) backgroundColor = "#EEE";
    if (state.isFocused) backgroundColor = "#EEE";
    return {
      ...base,
      backgroundColor,
      color: "#000",
    };
  },

  input: (base) => ({
    ...base,
    width: 200,
    color: "#fff",
    caretColor: "#fff",
  }),

  placeholder: (base) => ({
    ...base,
    color: "#fff",
  }),
};
