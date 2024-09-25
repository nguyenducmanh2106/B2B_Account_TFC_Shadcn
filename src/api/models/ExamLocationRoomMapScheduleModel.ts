/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RegistrationExamType } from "./RegistrationExamType";
import type { SelectOptionModel } from "./SelectOptionModel";

export type ExamLocationRoomMapScheduleModel = {
  id?: string;
  examId?: string;
  examScheduleId?: string;
  examLocationId?: string;
  examLocationRoomId?: string;
  examLocationScheduleId?: string;
  examType?: RegistrationExamType;
  amount?: number;
  examTypeSelect?: SelectOptionModel;
  examLocationScheduleSelect?: SelectOptionModel;
};

