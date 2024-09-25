/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PublishScoreModel } from "../models/PublishScoreModel";
import type { RegistrationScoreEmailModel } from "../models/RegistrationScoreEmailModel";
import type { RegistrationScoreEmailNotificationImportedModel } from "../models/RegistrationScoreEmailNotificationImportedModel";
import type { RegistrationScoreModel } from "../models/RegistrationScoreModel";
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
export const postRegistrationScore = (
  requestBody?: RegistrationScoreModel
): CancelablePromise<ResponseData> => {
  return __request({
    method: "POST",
    path: `/registrationscore`,
    body: requestBody,
    mediaType: "application/json",
  });
};

/**
 * @param id
 * @returns ResponseData Success
 * @throws ApiError
 */
export const deleteRegistrationScore = (
  id?: string
): CancelablePromise<ResponseData> => {
  return __request({
    method: "DELETE",
    path: `/registrationscore`,
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
export const getRegistrationScore = (
  filter: string = "{}"
): CancelablePromise<ResponseData> => {
  return __request({
    method: "GET",
    path: `/registrationscore`,
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
export const getRegistrationScore1 = (
  id?: string
): CancelablePromise<ResponseData> => {
  return __request({
    method: "GET",
    path: `/registrationscore/id`,
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
export const putRegistrationScore = (
  id?: string,
  requestBody?: RegistrationScoreModel
): CancelablePromise<ResponseData> => {
  return __request({
    method: "PUT",
    path: `/registrationscore/id`,
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
export const postRegistrationScore1 = (formData?: {
  IsOverwrite?: boolean;
  File?: Blob;
}): CancelablePromise<ResponseData> => {
  return __request({
    method: "POST",
    path: `/registrationscore/import`,
    formData: formData,
    mediaType: "multipart/form-data",
  });
};

/**
 * @param requestBody
 * @returns ResponseData Success
 * @throws ApiError
 */
export const postRegistrationScore2 = (
  requestBody?: RegistrationScoreEmailModel
): CancelablePromise<ResponseData> => {
  return __request({
    method: "POST",
    path: `/registrationscore/email`,
    body: requestBody,
    mediaType: "application/json",
  });
};

/**
 * @param filter
 * @returns ResponseData Success
 * @throws ApiError
 */
export const getRegistrationScore2 = (
  filter: string = "{}"
): CancelablePromise<ResponseData> => {
  return __request({
    method: "GET",
    path: `/registrationscore/published`,
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
export const postRegistrationScore3 = (
  requestBody?: PublishScoreModel
): CancelablePromise<ResponseData> => {
  return __request({
    method: "POST",
    path: `/registrationscore/publishscore`,
    body: requestBody,
    mediaType: "application/json",
  });
};

/**
 * @param requestBody
 * @returns ResponseData Success
 * @throws ApiError
 */
export const postRegistrationScore4 = (
  requestBody?: RegistrationScoreEmailNotificationImportedModel
): CancelablePromise<ResponseData> => {
  return __request({
    method: "POST",
    path: `/registrationscore/email-notification-imported`,
    body: requestBody,
    mediaType: "application/json",
  });
};

/**
 * @param keyCode
 * @returns ResponseData Success
 * @throws ApiError
 */
export const getRegistrationScore3 = (
  keyCode?: string
): CancelablePromise<ResponseData> => {
  return __request({
    method: "GET",
    path: `/registrationscore/sync`,
    query: {
      keyCode: keyCode,
    },
  });
};
