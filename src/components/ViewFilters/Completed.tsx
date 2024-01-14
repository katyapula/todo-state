import React, { useCallback } from "react";
import {TFilterConfig} from "../../types";

type CompletedProps = {
  filterConfig: TFilterConfig;
  setFilterConfig: React.Dispatch<React.SetStateAction<TFilterConfig>>;
};

export function Completed({ filterConfig, setFilterConfig }: CompletedProps) {
  const completedFilter = filterConfig.filter(
    (filter) => filter.field === "completed"
  )[0];

  const resultFilters = filterConfig.map((filter) => {
    if (filter.field === "completed") {
      return completedFilter;
    }
    return filter;
  });

  const filterValue = completedFilter.value;

  const checked = useCallback(
    (param: boolean) => {
      return filterValue.includes(param);
    },
    [completedFilter]
  );

  // Update filter functions
  const handleCompleted = (param: boolean) => {
    if (filterValue.includes(param)) {
      const index = filterValue.indexOf(param);
      filterValue.splice(index, 1);
    } else {
      filterValue.push(param);
    }
    setFilterConfig(resultFilters);
  };

  return (
    <div>
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
  );
}
