/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ExamModel } from "../models/ExamModel";
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
export const postExam = (
  requestBody?: ExamModel
): CancelablePromise<ResponseData> => {
  return __request({
    method: "POST",
    path: `/exam`,
    body: requestBody,
    mediaType: "application/json",
  });
};

/**
 * @param filter
 * @returns ResponseData Success
 * @throws ApiError
 */
export const getExam = (
  filter: string = "{}"
): CancelablePromise<ResponseData> => {
  return __request({
    method: "GET",
    path: `/exam`,
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
export const deleteExam = (id?: string): CancelablePromise<ResponseData> => {
  return __request({
    method: "DELETE",
    path: `/exam/id`,
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
export const getExam1 = (id?: string): CancelablePromise<ResponseData> => {
  return __request({
    method: "GET",
    path: `/exam/id`,
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
export const putExam = (
  id?: string,
  requestBody?: ExamModel
): CancelablePromise<ResponseData> => {
  return __request({
    method: "PUT",
    path: `/exam/id`,
    query: {
      id: id,
    },
    body: requestBody,
    mediaType: "application/json",
  });
};

/**
 * @param id
 * @returns ResponseData Success
 * @throws ApiError
 */
export const postExam1 = (id?: string): CancelablePromise<ResponseData> => {
  return __request({
    method: "POST",
    path: `/exam/bootstrap`,
    query: {
      id: id,
    },
  });
};
