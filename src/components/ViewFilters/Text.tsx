import React from "react";
import {TFilterConfig} from "../../types";

type TextProps = {
  filterConfig: TFilterConfig;
  setFilterConfig: React.Dispatch<React.SetStateAction<TFilterConfig>>;
};

export function Text({ filterConfig, setFilterConfig }: TextProps) {

  const textFilter = filterConfig.filter(
    (filter) => filter.field === "title"
  )[0];

  const resultFilters = (textValue: string) => filterConfig.map((filter) => {
    if (filter.field === "title") {
      textFilter.value = textValue
    }
    return filter;
  });

  const handleChange = (param: string) => {
    setFilterConfig(resultFilters(param));
  };

  return (
    <div>
      <input
        type="text"
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
}
