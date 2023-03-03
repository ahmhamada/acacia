export interface AddHandOverForm {
  items: Item[];
  contractId: number;
}

interface Item {
  item: string;
  acceptance: boolean;
  note: string;
  fixFees: string;
}
