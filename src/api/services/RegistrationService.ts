/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PICType } from "../models/PICType";
import type { RegistrationExamType } from "../models/RegistrationExamType";
import type { RegistrationModel } from "../models/RegistrationModel";
import type { RegistrationRound } from "../models/RegistrationRound";
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
export const postRegistration = (
  requestBody?: RegistrationModel
): CancelablePromise<ResponseData> => {
  return __request({
    method: "POST",
    path: `/registration`,
    body: requestBody,
    mediaType: "application/json",
  });
};

/**
 * @param id
 * @returns ResponseData Success
 * @throws ApiError
 */
export const deleteRegistration = (
  id?: string
): CancelablePromise<ResponseData> => {
  return __request({
    method: "DELETE",
    path: `/registration`,
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
export const getRegistration = (
  filter: string = "{}"
): CancelablePromise<ResponseData> => {
  return __request({
    method: "GET",
    path: `/registration`,
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
export const putRegistration = (formData?: {
  File?: Blob;
}): CancelablePromise<ResponseData> => {
  return __request({
    method: "PUT",
    path: `/registration`,
    formData: formData,
    mediaType: "multipart/form-data",
  });
};

/**
 * @param key
 * @returns ResponseData Success
 * @throws ApiError
 */
export const getRegistration1 = (
  key?: string
): CancelablePromise<ResponseData> => {
  return __request({
    method: "GET",
    path: `/registration/getbykey`,
    query: {
      key: key,
    },
  });
};

/**
 * @param id
 * @returns ResponseData Success
 * @throws ApiError
 */
export const getRegistration2 = (
  id?: string
): CancelablePromise<ResponseData> => {
  return __request({
    method: "GET",
    path: `/registration/id`,
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
export const putRegistration1 = (
  id?: string,
  requestBody?: RegistrationModel
): CancelablePromise<ResponseData> => {
  return __request({
    method: "PUT",
    path: `/registration/id`,
    query: {
      id: id,
    },
    body: requestBody,
    mediaType: "application/json",
  });
};

/**
 * @param registrationNumber
 * @returns ResponseData Success
 * @throws ApiError
 */
export const getRegistration3 = (
  registrationNumber?: string
): CancelablePromise<ResponseData> => {
  return __request({
    method: "GET",
    path: `/registration/registrationnumber`,
    query: {
      registrationNumber: registrationNumber,
    },
  });
};

/**
 * @param formData
 * @returns ResponseData Success
 * @throws ApiError
 */
export const postRegistration1 = (formData?: {
  RegistrationExamType?: RegistrationExamType;
  ExamId?: string;
  SchoolId?: string;
  "PIC.Id"?: string;
  "PIC.ObjectId"?: string;
  "PIC.PICType"?: PICType;
  "PIC.Name"?: string;
  "PIC.JobTitle"?: string;
  "PIC.Tel"?: string;
  "PIC.Email"?: string;
  File?: Blob;
}): CancelablePromise<ResponseData> => {
  return __request({
    method: "POST",
    path: `/registration/import`,
    formData: formData,
    mediaType: "multipart/form-data",
  });
};

/**
 * @param formData
 * @returns ResponseData Success
 * @throws ApiError
 */
export const postRegistration2 = (formData?: {
  RegistrationExamType?: RegistrationExamType;
  ExamId?: string;
  SchoolId?: string;
  "PIC.Id"?: string;
  "PIC.ObjectId"?: string;
  "PIC.PICType"?: PICType;
  "PIC.Name"?: string;
  "PIC.JobTitle"?: string;
  "PIC.Tel"?: string;
  "PIC.Email"?: string;
  File?: Blob;
}): CancelablePromise<ResponseData> => {
  return __request({
    method: "POST",
    path: `/registration/import2`,
    formData: formData,
    mediaType: "multipart/form-data",
  });
};

/**
 * @param id
 * @returns ResponseData Success
 * @throws ApiError
 */
export const postRegistration3 = (
  id?: string
): CancelablePromise<ResponseData> => {
  return __request({
    method: "POST",
    path: `/registration/email/code`,
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
export const postRegistration4 = (
  id?: string
): CancelablePromise<ResponseData> => {
  return __request({
    method: "POST",
    path: `/registration/email/registration`,
    query: {
      id: id,
    },
  });
};

/**
 * @param id
 * @param round
 * @returns ResponseData Success
 * @throws ApiError
 */
export const postRegistration5 = (
  id?: string,
  round?: RegistrationRound
): CancelablePromise<ResponseData> => {
  return __request({
    method: "POST",
    path: `/registration/email/registration-payment`,
    query: {
      id: id,
      round: round,
    },
  });
};

/**
 * @param id
 * @param round
 * @returns ResponseData Success
 * @throws ApiError
 */
export const postRegistration6 = (
  id?: string,
  round?: RegistrationRound
): CancelablePromise<ResponseData> => {
  return __request({
    method: "POST",
    path: `/registration/email/score`,
    query: {
      id: id,
      round: round,
    },
  });
};

/**
 * @param id
 * @param round
 * @returns ResponseData Success
 * @throws ApiError
 */
export const postRegistration7 = (
  id?: string,
  round?: RegistrationRound
): CancelablePromise<ResponseData> => {
  return __request({
    method: "POST",
    path: `/registration/email/schedule`,
    query: {
      id: id,
      round: round,
    },
  });
};

/**
 * @param filter
 * @returns ResponseData Success
 * @throws ApiError
 */
export const getRegistration4 = (
  filter: string = "{}"
): CancelablePromise<ResponseData> => {
  return __request({
    method: "GET",
    path: `/registration/export`,
    query: {
      filter: filter,
    },
  });
};

/**
 * @param registrationId
 * @returns ResponseData Success
 * @throws ApiError
 */
export const postRegistration8 = (
  registrationId?: string
): CancelablePromise<ResponseData> => {
  return __request({
    method: "POST",
    path: `/registration/rebuildregistrationnumbersingle`,
    query: {
      registrationId: registrationId,
    },
  });
};

/**
 * @param id
 * @returns ResponseData Success
 * @throws ApiError
 */
export const putRegistration2 = (
  id?: string
): CancelablePromise<ResponseData> => {
  return __request({
    method: "PUT",
    path: `/registration/activate`,
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
export const getRegistration5 = (
  id?: string
): CancelablePromise<ResponseData> => {
  return __request({
    method: "GET",
    path: `/registration/agent/template`,
    query: {
      id: id,
    },
  });
};

/**
 * @param formData
 * @returns ResponseData Success
 * @throws ApiError
 */
export const postRegistration9 = (formData?: {
  RegistrationExamType?: RegistrationExamType;
  ExamId?: string;
  SchoolId?: string;
  "PIC.Id"?: string;
  "PIC.ObjectId"?: string;
  "PIC.PICType"?: PICType;
  "PIC.Name"?: string;
  "PIC.JobTitle"?: string;
  "PIC.Tel"?: string;
  "PIC.Email"?: string;
  File?: Blob;
}): CancelablePromise<ResponseData> => {
  return __request({
    method: "POST",
    path: `/registration/agent/import`,
    formData: formData,
    mediaType: "multipart/form-data",
  });
};

/**
 * @param formData
 * @returns ResponseData Success
 * @throws ApiError
 */
export const postRegistration10 = (formData?: {
  RegistrationExamType?: RegistrationExamType;
  ExamId?: string;
  SchoolId?: string;
  "PIC.Id"?: string;
  "PIC.ObjectId"?: string;
  "PIC.PICType"?: PICType;
  "PIC.Name"?: string;
  "PIC.JobTitle"?: string;
  "PIC.Tel"?: string;
  "PIC.Email"?: string;
  File?: Blob;
}): CancelablePromise<ResponseData> => {
  return __request({
    method: "POST",
    path: `/registration/agent/import2`,
    formData: formData,
    mediaType: "multipart/form-data",
  });
};
