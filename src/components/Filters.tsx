import React from "react";
import { TFilterConfig } from "../types";
import { Completed, Text } from "./ViewFilters";
import styles from "../App.module.css";

type FiltersProps = {
  filterConfig: TFilterConfig;
  setFilterConfig: React.Dispatch<React.SetStateAction<TFilterConfig>>;
};

export default function Filters({
  filterConfig,
  setFilterConfig,
}: FiltersProps) {
  return (
    <>
      <h1>Filters</h1>
      {/*<div className={styles["filter-section"]}>*/}
      {/*  <h3>Search</h3>*/}
      {/*  <Text filterConfig={filterConfig} setFilterConfig={setFilterConfig} />*/}
      {/*</div>*/}
      <div className={styles["filter-section"]}>
        <h3>Completed</h3>
        <Completed
          filterConfig={filterConfig}
          setFilterConfig={setFilterConfig}
        />
      </div>
    </>
  );
}
