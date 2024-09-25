/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RegistrationExamType } from "./RegistrationExamType";
import type { SchoolEmailType } from "./SchoolEmailType";

export type SchoolEmailModel = {
  type?: SchoolEmailType;
  examId?: string;
  schoolIds?: Array<string> | null;
  examType?: RegistrationExamType;
  emails?: Array<string> | null;
};

