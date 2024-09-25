/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RegistrationExamType } from "./RegistrationExamType";
import type { RegistrationRound } from "./RegistrationRound";

export type RegistrationScheduleEmailModel = {
  examId?: string;
  provinceId?: string;
  districtId?: string;
  schoolId?: string;
  isSent?: boolean | null;
  isTest?: boolean;
  registrationScheduleId?: string;
  emailTest?: Array<string> | null;
  round?: RegistrationRound;
  examType?: RegistrationExamType;
};

