/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RegistrationExamType } from "./RegistrationExamType";
import type { RegistrationRound } from "./RegistrationRound";

export type RegistrationScoreEmailModel = {
  examId?: string;
  isTest?: boolean;
  emailTest?: Array<string> | null;
  round?: RegistrationRound;
  examType?: RegistrationExamType;
  registrationScoreId?: string | null;
  provinceId?: string;
  districtId?: string;
  schoolId?: string;
  isSent?: boolean | null;
};

