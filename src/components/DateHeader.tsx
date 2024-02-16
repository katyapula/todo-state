import React from "react";
import { useSelector } from "react-redux";
import { selectDate } from "../core/slices";

type DateHeaderProps = {};

export default function DateHeader({}: DateHeaderProps) {
  const today = new Date();
  const setDate = useSelector(selectDate);
  console.log(setDate);
  const formatDate = (date: Date, format: string) => {
    const map: Record<string, any> = {
      mm: date.getMonth() + 1,
      dd: date.getDate(),
      yyyy: date.getFullYear(),
      yy: date.getFullYear().toString().slice(-2),
    };

    return format.replace(/mm|dd|yyyy|yy/gi, (matched) => map[matched]);
  };

  return (
    <>
      <h1>It's {formatDate(today, setDate)} today</h1>
      <h1>It's today</h1>
    </>
  );
}
