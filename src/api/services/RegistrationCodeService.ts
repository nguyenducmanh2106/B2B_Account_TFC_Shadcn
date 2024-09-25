/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RegistrationCodeEmailModel } from "../models/RegistrationCodeEmailModel";
import type { RegistrationCodeModel } from "../models/RegistrationCodeModel";
import type { RegistrationCodeSyncModel } from "../models/RegistrationCodeSyncModel";
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
export const postRegistrationCode = (
  requestBody?: RegistrationCodeModel
): CancelablePromise<ResponseData> => {
  return __request({
    method: "POST",
    path: `/registrationcode`,
    body: requestBody,
    mediaType: "application/json",
  });
};

/**
 * @param id
 * @returns ResponseData Success
 * @throws ApiError
 */
export const deleteRegistrationCode = (
  id?: string
): CancelablePromise<ResponseData> => {
  return __request({
    method: "DELETE",
    path: `/registrationcode`,
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
export const getRegistrationCode = (
  filter: string = "{}"
): CancelablePromise<ResponseData> => {
  return __request({
    method: "GET",
    path: `/registrationcode`,
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
export const getRegistrationCode1 = (
  id?: string
): CancelablePromise<ResponseData> => {
  return __request({
    method: "GET",
    path: `/registrationcode/id`,
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
export const putRegistrationCode = (
  id?: string,
  requestBody?: RegistrationCodeModel
): CancelablePromise<ResponseData> => {
  return __request({
    method: "PUT",
    path: `/registrationcode/id`,
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
export const postRegistrationCode1 = (formData?: {
  IsOverwrite?: boolean;
  File?: Blob;
}): CancelablePromise<ResponseData> => {
  return __request({
    method: "POST",
    path: `/registrationcode/import`,
    formData: formData,
    mediaType: "multipart/form-data",
  });
};

/**
 * @param requestBody
 * @returns ResponseData Success
 * @throws ApiError
 */
export const postRegistrationCode2 = (
  requestBody?: RegistrationCodeEmailModel
): CancelablePromise<ResponseData> => {
  return __request({
    method: "POST",
    path: `/registrationcode/email`,
    body: requestBody,
    mediaType: "application/json",
  });
};

/**
 * @returns ResponseData Success
 * @throws ApiError
 */
export const getRegistrationCode2 = (): CancelablePromise<ResponseData> => {
  return __request({
    method: "GET",
    path: `/registrationcode/elearning/get-mocktest`,
  });
};

/**
 * @param requestBody
 * @returns ResponseData Success
 * @throws ApiError
 */
export const putRegistrationCode1 = (
  requestBody?: RegistrationCodeSyncModel
): CancelablePromise<ResponseData> => {
  return __request({
    method: "PUT",
    path: `/registrationcode/elearning/sync`,
    body: requestBody,
    mediaType: "application/json",
  });
};
