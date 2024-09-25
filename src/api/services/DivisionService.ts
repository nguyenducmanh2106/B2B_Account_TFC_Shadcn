/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DivisionEmailModel } from "../models/DivisionEmailModel";
import type { DivisionModel } from "../models/DivisionModel";
import type { ResponseData } from "../models/ResponseData";
import type { CancelablePromise } from "../core/CancelablePromise";
import {
  request as __request,
  useRequest,
} from "../core/request";

/**
 * @returns ResponseData Success
 * @throws ApiError
 */
export const postDivision = (): CancelablePromise<ResponseData> => {
  return __request({
    method: "POST",
    path: `/division/bootstrap`,
  });
};

/**
 * @param filter
 * @returns ResponseData Success
 * @throws ApiError
 */
export const getDivision = (
  filter: string = "{}"
): CancelablePromise<ResponseData> => {
  return __request({
    method: "GET",
    path: `/division`,
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
export const getDivision1 = (id?: string): CancelablePromise<ResponseData> => {
  return __request({
    method: "GET",
    path: `/division/id`,
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
export const putDivision = (
  id?: string,
  requestBody?: DivisionModel
): CancelablePromise<ResponseData> => {
  return __request({
    method: "PUT",
    path: `/division/id`,
    query: {
      id: id,
    },
    body: requestBody,
    mediaType: "application/json",
  });
};

/**
 * @param requestBody
 * @returns ResponseData Success
 * @throws ApiError
 */
export const postDivision1 = (
  requestBody?: DivisionModel
): CancelablePromise<ResponseData> => {
  return __request({
    method: "POST",
    path: `/division/create`,
    body: requestBody,
    mediaType: "application/json",
  });
};

/**
 * @param id
 * @returns ResponseData Success
 * @throws ApiError
 */
export const deleteDivision = (id: string): CancelablePromise<ResponseData> => {
  return __request({
    method: "DELETE",
    path: `/division/delete/${id}`,
  });
};

/**
 * @param requestBody
 * @returns ResponseData Success
 * @throws ApiError
 */
export const deleteDivision1 = (
  requestBody?: Array<string>
): CancelablePromise<ResponseData> => {
  return __request({
    method: "DELETE",
    path: `/division/multidelete`,
    body: requestBody,
    mediaType: "application/json",
  });
};

/**
 * @param requestBody
 * @returns ResponseData Success
 * @throws ApiError
 */
export const postDivision2 = (
  requestBody?: DivisionEmailModel
): CancelablePromise<ResponseData> => {
  return __request({
    method: "POST",
    path: `/division/email/registration-r1`,
    body: requestBody,
    mediaType: "application/json",
  });
};

/**
 * @param requestBody
 * @returns ResponseData Success
 * @throws ApiError
 */
export const postDivision3 = (
  requestBody?: DivisionEmailModel
): CancelablePromise<ResponseData> => {
  return __request({
    method: "POST",
    path: `/division/email/registration-r2`,
    body: requestBody,
    mediaType: "application/json",
  });
};

/**
 * @param requestBody
 * @returns ResponseData Success
 * @throws ApiError
 */
export const postDivision4 = (
  requestBody?: DivisionEmailModel
): CancelablePromise<ResponseData> => {
  return __request({
    method: "POST",
    path: `/division/email/score-r1`,
    body: requestBody,
    mediaType: "application/json",
  });
};

/**
 * @param requestBody
 * @returns ResponseData Success
 * @throws ApiError
 */
export const postDivision5 = (
  requestBody?: DivisionEmailModel
): CancelablePromise<ResponseData> => {
  return __request({
    method: "POST",
    path: `/division/email/score-r2`,
    body: requestBody,
    mediaType: "application/json",
  });
};

/**
 * @param requestBody
 * @returns ResponseData Success
 * @throws ApiError
 */
export const postDivision6 = (
  requestBody?: DivisionEmailModel
): CancelablePromise<ResponseData> => {
  return __request({
    method: "POST",
    path: `/division/email/score-r3`,
    body: requestBody,
    mediaType: "application/json",
  });
};

/**
 * @param requestBody
 * @returns ResponseData Success
 * @throws ApiError
 */
export const postDivision7 = (
  requestBody?: DivisionEmailModel
): CancelablePromise<ResponseData> => {
  return __request({
    method: "POST",
    path: `/division/email/score-r4`,
    body: requestBody,
    mediaType: "application/json",
  });
};

/**
 * @param requestBody
 * @returns ResponseData Success
 * @throws ApiError
 */
export const postDivision8 = (
  requestBody?: DivisionEmailModel
): CancelablePromise<ResponseData> => {
  return __request({
    method: "POST",
    path: `/division/email/schedule-r2`,
    body: requestBody,
    mediaType: "application/json",
  });
};

/**
 * @param requestBody
 * @returns ResponseData Success
 * @throws ApiError
 */
export const postDivision9 = (
  requestBody?: DivisionEmailModel
): CancelablePromise<ResponseData> => {
  return __request({
    method: "POST",
    path: `/division/email/schedule-r3`,
    body: requestBody,
    mediaType: "application/json",
  });
};

/**
 * @param requestBody
 * @returns ResponseData Success
 * @throws ApiError
 */
export const postDivision10 = (
  requestBody?: DivisionEmailModel
): CancelablePromise<ResponseData> => {
  return __request({
    method: "POST",
    path: `/division/email/schedule-r4`,
    body: requestBody,
    mediaType: "application/json",
  });
};