/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PublishType } from "./PublishType";
import type { RegistrationExamType } from "./RegistrationExamType";
import type { RegistrationRound } from "./RegistrationRound";

export type ExamPublishedItemModel = {
  id?: string;
  examId?: string;
  registrationExamType?: RegistrationExamType;
  registrationRound?: RegistrationRound;
  type?: PublishType;
};

