/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type RegistrationCodeEmailModel = {
  examId?: string;
  provinceId?: string;
  districtId?: string;
  schoolId?: string;
  isSent?: boolean | null;
  isTest?: boolean;
  registrationCodeId?: string;
  emailTest?: Array<string> | null;
};

