import React, { useCallback } from "react";
import { TFilter, TFilterConfig } from "../../types";

type TextProps = {
  filterConfig: TFilterConfig;
  setFilterConfig: React.Dispatch<React.SetStateAction<TFilterConfig>>;
};

export function Text({ filterConfig, setFilterConfig }: TextProps) {
  const onHandleChange = (value: string, name: string) => {
    const newFilterConfig = filterConfig.map((filter) => {
      if (filter.field === name) {
        value.includes(filter.value[0]);
      }
      return filter;
    });
    setFilterConfig(newFilterConfig);
  };

  return (
    <div>
      <input
        type="text"
        onChange={(e) => onHandleChange(e.target.value, "title")}
      />
    </div>
  );
}
