export interface ContractPayload {
  startDate: string;
  endDate: string;
  attachment: string;
  totalTaxesAmount?: number;
  rentalperiod: number;
  annualRentalFees: number;
  electricityFixedFees: number;
  electricityConsumption: number;
  gasFixedFees: number;
  gasConsumption: number;
  waterFixedFees: number;
  waterConsumption: number;
  totalValue: number;
  insuranceAmount: number;
  commissionAmount: number;
  paymentWay: number;
  contractType: number;
  propertyId: number;
  installment: Installment[];
  tenantData: TenantData;
}

export interface Installment {
  issuingDate: string;
  dueDate: string;
  totalInvoiceValue: number;
  feesInvoiceValue: number;
  rentInvoiceValue: number;
}

export interface TenantData {
  name: string;
  tenantNationalId: number;
  telephone: number;
  birthDay: string;
  email: string;
  idPhoto: string;
  vat?: string;
}
