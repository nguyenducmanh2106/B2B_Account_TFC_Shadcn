/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AgencyModel } from "../models/AgencyModel";
import type { ResponseData } from "../models/ResponseData";
import type { CancelablePromise } from "../core/CancelablePromise";
import {
  request as __request,
  useRequest,
} from "../core/request";

/**
 * @param provinceId
 * @param page
 * @param size
 * @param textSearch
 * @returns ResponseData Success
 * @throws ApiError
 */
export const getAgency = (
  provinceId?: string,
  page?: number,
  size?: number,
  textSearch?: string
): CancelablePromise<ResponseData> => {
  return __request({
    method: "GET",
    path: `/agency`,
    query: {
      ProvinceId: provinceId,
      Page: page,
      Size: size,
      TextSearch: textSearch,
    },
  });
};

/**
 * @param id
 * @returns ResponseData Success
 * @throws ApiError
 */
export const getAgency1 = (id?: string): CancelablePromise<ResponseData> => {
  return __request({
    method: "GET",
    path: `/agency/id`,
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
export const putAgency = (
  id?: string,
  requestBody?: AgencyModel
): CancelablePromise<ResponseData> => {
  return __request({
    method: "PUT",
    path: `/agency/id`,
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
export const postAgency = (
  requestBody?: AgencyModel
): CancelablePromise<ResponseData> => {
  return __request({
    method: "POST",
    path: `/agency/create`,
    body: requestBody,
    mediaType: "application/json",
  });
};

/**
 * @param id
 * @returns ResponseData Success
 * @throws ApiError
 */
export const deleteAgency = (id: string): CancelablePromise<ResponseData> => {
  return __request({
    method: "DELETE",
    path: `/agency/delete/${id}`,
  });
};

/**
 * @param requestBody
 * @returns ResponseData Success
 * @throws ApiError
 */
export const deleteAgency1 = (
  requestBody?: Array<string>
): CancelablePromise<ResponseData> => {
  return __request({
    method: "DELETE",
    path: `/agency/multidelete`,
    body: requestBody,
    mediaType: "application/json",
  });
};