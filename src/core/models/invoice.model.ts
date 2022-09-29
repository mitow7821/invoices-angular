import { InvoiceStatus } from '../types/enums/invoice-status.enum';
import { PaymentTerm } from '../types/enums/payment-term.enum';
import { ClientData } from '../types/interfaces/client-data.interface';
import { InvoiceItem } from '../types/interfaces/invoice-item.interface';
import { PersonalData } from '../types/interfaces/personal-data.interface';

export interface Invoice {
  id: string;
  status: InvoiceStatus;
  billFrom: PersonalData;
  billTo: ClientData;
  invoiceDate: Date;
  paymentTerms: PaymentTerm;
  projectDescription: string;
  items: InvoiceItem[];
}
