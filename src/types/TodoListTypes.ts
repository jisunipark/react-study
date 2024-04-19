export interface TDItem {
  id: string;
  content: string;
  isChecked: boolean;
  isDeleted: boolean;
}

export type TDList = TDItem[];
