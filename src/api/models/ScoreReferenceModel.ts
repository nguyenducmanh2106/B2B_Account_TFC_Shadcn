/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ExamScoreType } from "./ExamScoreType";
import type { RegistrationExamType } from "./RegistrationExamType";

export type ScoreReferenceModel = {
  id?: string;
  examType?: RegistrationExamType;
  scoreType?: ExamScoreType;
  cefr?: string | null;
  name?: string | null;
  range?: string | null;
  year?: number;
};

