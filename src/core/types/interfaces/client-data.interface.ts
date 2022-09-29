import { PersonalData } from './personal-data.interface';

export interface ClientData extends PersonalData {
  name: string;
  email: string;
}
