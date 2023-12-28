export type TTodo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export type TFilter = { field: keyof TTodo; value: any[]; type: string };

export type TFilterConfig = TFilter[];
