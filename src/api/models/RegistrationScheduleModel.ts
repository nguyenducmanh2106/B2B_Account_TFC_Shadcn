/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RegistrationRound } from "./RegistrationRound";

export type RegistrationScheduleModel = {
  index?: number;
  id?: string;
  examId?: string;
  registrationNumber?: string | null;
  examDate?: string | null;
  examTime?: string | null;
  examRoom?: string | null;
  examAddress?: string | null;
  address?: string | null;
  mapLink?: string | null;
  round?: RegistrationRound;
  note?: string | null;
  isSent?: boolean;
};

