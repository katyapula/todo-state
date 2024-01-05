export type TTodo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

type TType = "intersect" | "text";
type TValue = boolean | string;

type TIntersectFilter = {
  type: "intersect";
  value: boolean[];
  field: keyof TTodo;
};
type TTextFilter = {
  type: "text";
  value: string;
  field: keyof TTodo;
};

export type TFilter = TIntersectFilter | TTextFilter;

export type TFilterConfig = TFilter[];
