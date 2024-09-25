/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ResponseData } from "../models/ResponseData";
import type { SchoolEmailModel } from "../models/SchoolEmailModel";
import type { SchoolModel } from "../models/SchoolModel";
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
export const postSchool = (
  requestBody?: SchoolModel
): CancelablePromise<ResponseData> => {
  return __request({
    method: "POST",
    path: `/school`,
    body: requestBody,
    mediaType: "application/json",
  });
};

/**
 * @param filter
 * @returns ResponseData Success
 * @throws ApiError
 */
export const getSchool = (
  filter: string = "{}"
): CancelablePromise<ResponseData> => {
  return __request({
    method: "GET",
    path: `/school`,
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
export const deleteSchool = (id?: string): CancelablePromise<ResponseData> => {
  return __request({
    method: "DELETE",
    path: `/school/id`,
    query: {
      id: id,
    },
  });
};

/**
 * @param id
 * @returns ResponseData Success
 * @throws ApiError
 */
export const getSchool1 = (id?: string): CancelablePromise<ResponseData> => {
  return __request({
    method: "GET",
    path: `/school/id`,
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
export const putSchool = (
  id?: string,
  requestBody?: SchoolModel
): CancelablePromise<ResponseData> => {
  return __request({
    method: "PUT",
    path: `/school/id`,
    query: {
      id: id,
    },
    body: requestBody,
    mediaType: "application/json",
  });
};

/**
 * @param filter
 * @returns ResponseData Success
 * @throws ApiError
 */
export const getSchool2 = (
  filter: string = "{}"
): CancelablePromise<ResponseData> => {
  return __request({
    method: "GET",
    path: `/school/tree`,
    query: {
      filter: filter,
    },
  });
};

/**
 * @param formData
 * @returns ResponseData Success
 * @throws ApiError
 */
export const postSchool1 = (formData?: {
  File?: Blob;
  IsOverwrite?: boolean;
}): CancelablePromise<ResponseData> => {
  return __request({
    method: "POST",
    path: `/school/import`,
    formData: formData,
    mediaType: "multipart/form-data",
  });
};

/**
 * @param filter
 * @returns ResponseData Success
 * @throws ApiError
 */
export const getSchool3 = (
  filter: string = "{}"
): CancelablePromise<ResponseData> => {
  return __request({
    method: "GET",
    path: `/school/tree-cascader`,
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
export const postSchool2 = (
  requestBody?: SchoolEmailModel
): CancelablePromise<ResponseData> => {
  return __request({
    method: "POST",
    path: `/school/email/code`,
    body: requestBody,
    mediaType: "application/json",
  });
};

/**
 * @param requestBody
 * @returns ResponseData Success
 * @throws ApiError
 */
export const postSchool3 = (
  requestBody?: SchoolEmailModel
): CancelablePromise<ResponseData> => {
  return __request({
    method: "POST",
    path: `/school/email/score-r1`,
    body: requestBody,
    mediaType: "application/json",
  });
};

/**
 * @param requestBody
 * @returns ResponseData Success
 * @throws ApiError
 */
export const postSchool4 = (
  requestBody?: SchoolEmailModel
): CancelablePromise<ResponseData> => {
  return __request({
    method: "POST",
    path: `/school/email/score-r2`,
    body: requestBody,
    mediaType: "application/json",
  });
};

/**
 * @param requestBody
 * @returns ResponseData Success
 * @throws ApiError
 */
export const postSchool5 = (
  requestBody?: SchoolEmailModel
): CancelablePromise<ResponseData> => {
  return __request({
    method: "POST",
    path: `/school/email/score-r3`,
    body: requestBody,
    mediaType: "application/json",
  });
};

/**
 * @param requestBody
 * @returns ResponseData Success
 * @throws ApiError
 */
export const postSchool6 = (
  requestBody?: SchoolEmailModel
): CancelablePromise<ResponseData> => {
  return __request({
    method: "POST",
    path: `/school/email/score-r4`,
    body: requestBody,
    mediaType: "application/json",
  });
};

/**
 * @param requestBody
 * @returns ResponseData Success
 * @throws ApiError
 */
export const postSchool7 = (
  requestBody?: SchoolEmailModel
): CancelablePromise<ResponseData> => {
  return __request({
    method: "POST",
    path: `/school/email/schedule-r2`,
    body: requestBody,
    mediaType: "application/json",
  });
};

/**
 * @param requestBody
 * @returns ResponseData Success
 * @throws ApiError
 */
export const postSchool8 = (
  requestBody?: SchoolEmailModel
): CancelablePromise<ResponseData> => {
  return __request({
    method: "POST",
    path: `/school/email/schedule-r3`,
    body: requestBody,
    mediaType: "application/json",
  });
};

/**
 * @param requestBody
 * @returns ResponseData Success
 * @throws ApiError
 */
export const postSchool9 = (
  requestBody?: SchoolEmailModel
): CancelablePromise<ResponseData> => {
  return __request({
    method: "POST",
    path: `/school/email/schedule-r4`,
    body: requestBody,
    mediaType: "application/json",
  });
};

/**
 * @returns ResponseData Success
 * @throws ApiError
 */
export const putSchool1 = (): CancelablePromise<ResponseData> => {
  return __request({
    method: "PUT",
    path: `/school/refactor`,
  });
};

/**
 * @param filter
 * @returns ResponseData Success
 * @throws ApiError
 */
export const getSchool4 = (
  filter: string = "{}"
): CancelablePromise<ResponseData> => {
  return __request({
    method: "GET",
    path: `/school/export`,
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
export const postSchool10 = (
  requestBody?: SchoolEmailModel
): CancelablePromise<ResponseData> => {
  return __request({
    method: "POST",
    path: `/school/email`,
    body: requestBody,
    mediaType: "application/json",
  });
};