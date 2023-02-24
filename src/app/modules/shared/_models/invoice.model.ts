export interface Invoice {
  issuingDate: Date;
  dueDate: Date;
  totalInvoiceValue: number;
  feesInvoiceValue: number;
  rentInvoiceValue: number;
  TaxesAmount: number
}
