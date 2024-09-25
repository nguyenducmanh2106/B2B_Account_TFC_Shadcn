/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RegistrationRound } from "./RegistrationRound";

export type RegistrationScoreModel = {
  index?: number;
  id?: string;
  round?: RegistrationRound;
  registrationNumber?: string | null;
  fullName?: string | null;
  readingScoreTitle?: string | null;
  readingScore?: number | null;
  readingCEFR?: string | null;
  listeningScoreTitle?: string | null;
  listeningScore?: number | null;
  listeningCEFR?: string | null;
  grammaScore?: number | null;
  grammaCEFR?: string | null;
  totalScore?: number | null;
  totalScoreCEFR?: string | null;
  nlnn?: string | null;
  lexileScore?: string | null;
  personalPrize?: string | null;
  nationalFinalRound?: string | null;
  cityRankingRound?: string | null;
  examDate?: string | null;
  speakingScore?: number | null;
  speakingCEFR?: string | null;
  writingScore?: number | null;
  note?: string | null;
  group?: string | null;
  isSent?: boolean;
  startTime?: string | null;
  endTime?: string | null;
};

