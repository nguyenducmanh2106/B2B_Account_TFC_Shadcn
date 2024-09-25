/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PublishScheduleModel } from "../models/PublishScheduleModel";
import type { RegistrationRound } from "../models/RegistrationRound";
import type { RegistrationScheduleEmailModel } from "../models/RegistrationScheduleEmailModel";
import type { RegistrationScheduleEmailNotificationImportedModel } from "../models/RegistrationScheduleEmailNotificationImportedModel";
import type { RegistrationScheduleModel } from "../models/RegistrationScheduleModel";
import type { ResponseData } from "../models/ResponseData";
import type { CancelablePromise } from "../core/CancelablePromise";
import {
  request as __request,
  useRequest,
} from "../core/request";

/**
 * @param requestBody
 * @returns ResponseData Success
 * @throws ApiError
 */
export const postRegistrationSchedule = (
  requestBody?: RegistrationScheduleModel
): CancelablePromise<ResponseData> => {
  return __request({
    method: "POST",
    path: `/registrationschedule`,
    body: requestBody,
    mediaType: "application/json",
  });
};

/**
 * @param id
 * @returns ResponseData Success
 * @throws ApiError
 */
export const deleteRegistrationSchedule = (
  id?: string
): CancelablePromise<ResponseData> => {
  return __request({
    method: "DELETE",
    path: `/registrationschedule`,
    query: {
      id: id,
    },
  });
};

/**
 * @param filter
 * @returns ResponseData Success
 * @throws ApiError
 */
export const getRegistrationSchedule = (
  filter: string = "{}"
): CancelablePromise<ResponseData> => {
  return __request({
    method: "GET",
    path: `/registrationschedule`,
    query: {
      filter: filter,
    },
  });
};

/**
 * @param id
 * @returns ResponseData Success
 * @throws ApiError
 */
export const getRegistrationSchedule1 = (
  id?: string
): CancelablePromise<ResponseData> => {
  return __request({
    method: "GET",
    path: `/registrationschedule/id`,
    query: {
      id: id,
    },
  });
};

/**
 * @param id
 * @param requestBody
 * @returns ResponseData Success
 * @throws ApiError
 */
export const putRegistrationSchedule = (
  id?: string,
  requestBody?: RegistrationScheduleModel
): CancelablePromise<ResponseData> => {
  return __request({
    method: "PUT",
    path: `/registrationschedule/id`,
    query: {
      id: id,
    },
    body: requestBody,
    mediaType: "application/json",
  });
};

/**
 * @param formData
 * @returns ResponseData Success
 * @throws ApiError
 */
export const postRegistrationSchedule1 = (formData?: {
  IsOverwrite?: boolean;
  File?: Blob;
}): CancelablePromise<ResponseData> => {
  return __request({
    method: "POST",
    path: `/registrationschedule/import`,
    formData: formData,
    mediaType: "multipart/form-data",
  });
};

/**
 * @param requestBody
 * @returns ResponseData Success
 * @throws ApiError
 */
export const postRegistrationSchedule2 = (
  requestBody?: RegistrationScheduleEmailModel
): CancelablePromise<ResponseData> => {
  return __request({
    method: "POST",
    path: `/registrationschedule/email`,
    body: requestBody,
    mediaType: "application/json",
  });
};

/**
 * @param filter
 * @returns ResponseData Success
 * @throws ApiError
 */
export const getRegistrationSchedule2 = (
  filter: string = "{}"
): CancelablePromise<ResponseData> => {
  return __request({
    method: "GET",
    path: `/registrationschedule/published`,
    query: {
      filter: filter,
    },
  });
};

/**
 * @param filter
 * @returns ResponseData Success
 * @throws ApiError
 */
export const getRegistrationSchedule3 = (
  filter: string = "{}"
): CancelablePromise<ResponseData> => {
  return __request({
    method: "GET",
    path: `/registrationschedule/export`,
    query: {
      filter: filter,
    },
  });
};

/**
 * @param requestBody
 * @returns ResponseData Success
 * @throws ApiError
 */
export const postRegistrationSchedule3 = (
  requestBody?: PublishScheduleModel
): CancelablePromise<ResponseData> => {
  return __request({
    method: "POST",
    path: `/registrationschedule/publishschedule`,
    body: requestBody,
    mediaType: "application/json",
  });
};

/**
 * @param requestBody
 * @returns ResponseData Success
 * @throws ApiError
 */
export const postRegistrationSchedule4 = (
  requestBody?: RegistrationScheduleEmailNotificationImportedModel
): CancelablePromise<ResponseData> => {
  return __request({
    method: "POST",
    path: `/registrationschedule/email-notification-imported`,
    body: requestBody,
    mediaType: "application/json",
  });
};

/**
 * @param examId
 * @param round
 * @returns ResponseData Success
 * @throws ApiError
 */
export const getRegistrationSchedule4 = (
  examId?: string,
  round?: RegistrationRound
): CancelablePromise<ResponseData> => {
  return __request({
    method: "GET",
    path: `/registrationschedule/export-registration-schedule`,
    query: {
      ExamId: examId,
      Round: round,
    },
  });
};

/**
 * @param examId
 * @param round
 * @returns ResponseData Success
 * @throws ApiError
 */
export const getRegistrationSchedule5 = (
  examId?: string,
  round?: RegistrationRound
): CancelablePromise<ResponseData> => {
  return __request({
    method: "GET",
    path: `/registrationschedule/export-pdf-registration-schedule`,
    query: {
      ExamId: examId,
      Round: round,
    },
  });
};