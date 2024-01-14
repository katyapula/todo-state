export type TTodo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

type TType = "intersect" | "text";
type TValue = boolean | string;

export type TIntersectFilter = {
  type: "intersect";
  value: boolean[];
  field: keyof TTodo;
};
export type TTextFilter = {
  type: "text";
  value: string;
  field: keyof TTodo;
};

export type TFilter = {
  type: TType;
  value: any;
  field: keyof TTodo;
}

export type TFilterConfig = TFilter[];
