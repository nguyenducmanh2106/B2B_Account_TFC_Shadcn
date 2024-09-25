/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RegistrationExamType } from "./RegistrationExamType";
import type { RegistrationRound } from "./RegistrationRound";

export type ExamPaymentModel = {
  id?: string;
  examId?: string;
  registrationExamType?: RegistrationExamType;
  price?: number;
  registrationRound?: RegistrationRound;
};

