/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RegistrationRound } from "./RegistrationRound";

export type DivisionEmailModel = {
  examId?: string;
  divisionId?: string;
  emails?: Array<string> | null;
  round?: RegistrationRound;
};

