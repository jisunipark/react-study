export interface TDItem {
  id: number;
  content: string;
  isChecked: boolean;
  isDeleted: boolean;
}

export type TDList = TDItem[];
