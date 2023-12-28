import React, { useCallback } from "react";
import { TFilterConfig } from "../types";

type FiltersProps = {
  filterConfig: TFilterConfig;
  setFilterConfig: React.Dispatch<React.SetStateAction<TFilterConfig>>;
};

export default function Filters({
  filterConfig,
  setFilterConfig,
}: FiltersProps) {
  const completedFilter = filterConfig.filter(
    (filter) => filter.field === "completed"
  )[0];

  const resultFilters = filterConfig.map((filter) => {
    if (filter.field === "completed") {
      return completedFilter;
    }
    return filter;
  });

  const checked = useCallback(
    (type: boolean) => {
      return completedFilter.value.includes(type);
    },
    [completedFilter]
  );

  // Update filter functions
  const handleCompleted = (value: boolean) => {
    if (completedFilter.value.includes(value)) {
      const index = completedFilter.value.indexOf(value);
      completedFilter.value.splice(index, 1);
    } else {
      completedFilter.value.push(value);
    }
    setFilterConfig(resultFilters);
  };

  return (
    <div>
      <h1>Filters</h1>
      <div>
        <h2>Completed</h2>
        <label>
          <input
            type="checkbox"
            checked={checked(true)}
            onChange={() => handleCompleted(true)}
          />
          <span>Completed</span>
        </label>
        <label>
          <input
            type="checkbox"
            checked={checked(false)}
            onChange={() => handleCompleted(false)}
          />
          <span>Not Completed</span>
        </label>
      </div>
    </div>
  );
}
