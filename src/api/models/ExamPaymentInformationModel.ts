/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RegistrationExamType } from "./RegistrationExamType";
import type { RegistrationRound } from "./RegistrationRound";

export type ExamPaymentInformationModel = {
  id?: string;
  examId?: string;
  registrationRound?: RegistrationRound;
  registrationExamType?: RegistrationExamType;
  accountHolder?: string | null;
  accountNumber?: string | null;
  accountBranch?: string | null;
  message?: string | null;
};

