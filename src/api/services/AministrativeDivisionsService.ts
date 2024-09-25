/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
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
export const getAministrativeDivisions =
  (): CancelablePromise<ResponseData> => {
    return __request({
      method: "GET",
      path: `/aministrativedivisions/province`,
    });
  };

/**
 * @param id
 * @returns ResponseData Success
 * @throws ApiError
 */
export const getAministrativeDivisions1 = (
  id: string
): CancelablePromise<ResponseData> => {
  return __request({
    method: "GET",
    path: `/aministrativedivisions/province/${id}`,
  });
};

/**
 * @param pid
 * @returns ResponseData Success
 * @throws ApiError
 */
export const getAministrativeDivisions2 = (
  pid: string
): CancelablePromise<ResponseData> => {
  return __request({
    method: "GET",
    path: `/aministrativedivisions/province/${pid}/district`,
  });
};

/**
 * @param pid
 * @param id
 * @returns ResponseData Success
 * @throws ApiError
 */
export const getAministrativeDivisions3 = (
  pid: string,
  id: string
): CancelablePromise<ResponseData> => {
  return __request({
    method: "GET",
    path: `/aministrativedivisions/province/${pid}/district/${id}`,
  });
};

/**
 * @param pid
 * @param did
 * @returns ResponseData Success
 * @throws ApiError
 */
export const getAministrativeDivisions4 = (
  pid: string,
  did: string
): CancelablePromise<ResponseData> => {
  return __request({
    method: "GET",
    path: `/aministrativedivisions/province/${pid}/district/${did}/ward`,
  });
};

/**
 * @param pid
 * @param did
 * @param id
 * @returns ResponseData Success
 * @throws ApiError
 */
export const getAministrativeDivisions5 = (
  pid: string,
  did: string,
  id: string
): CancelablePromise<ResponseData> => {
  return __request({
    method: "GET",
    path: `/aministrativedivisions/province/${pid}/district/${did}/ward/${id}`,
  });
};

/**
 * @param formData
 * @returns ResponseData Success
 * @throws ApiError
 */
export const postAministrativeDivisions = (formData?: {
  File?: Blob;
}): CancelablePromise<ResponseData> => {
  return __request({
    method: "POST",
    path: `/aministrativedivisions/province/import`,
    formData: formData,
    mediaType: "multipart/form-data",
  });
};

/**
 * @param formData
 * @returns ResponseData Success
 * @throws ApiError
 */
export const postAministrativeDivisions1 = (formData?: {
  File?: Blob;
}): CancelablePromise<ResponseData> => {
  return __request({
    method: "POST",
    path: `/aministrativedivisions/district/import`,
    formData: formData,
    mediaType: "multipart/form-data",
  });
};

/**
 * @param formData
 * @returns ResponseData Success
 * @throws ApiError
 */
export const postAministrativeDivisions2 = (formData?: {
  File?: Blob;
}): CancelablePromise<ResponseData> => {
  return __request({
    method: "POST",
    path: `/aministrativedivisions/ward/import`,
    formData: formData,
    mediaType: "multipart/form-data",
  });
};