/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type RegistrationCodeModel = {
  index?: number;
  id?: string;
  registrationNumber?: string | null;
  fullName?: string | null;
  code?: string | null;
  startDate?: string | null;
  endDate?: string | null;
  note?: string | null;
  isSent?: boolean;
};

