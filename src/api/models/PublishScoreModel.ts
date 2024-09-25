/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RegistrationExamType } from "./RegistrationExamType";
import type { RegistrationRound } from "./RegistrationRound";

export type PublishScoreModel = {
  examId?: string;
  examType?: RegistrationExamType;
  round?: RegistrationRound;
};

