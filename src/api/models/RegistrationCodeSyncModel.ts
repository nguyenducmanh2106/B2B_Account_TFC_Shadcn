/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RegistrationExamType } from "./RegistrationExamType";

export type RegistrationCodeSyncModel = {
  examId?: string;
  examType?: RegistrationExamType;
  mockTestId?: string;
  startDate?: string;
  endDate?: string;
  isOverwrite?: boolean;
};

