/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Gender } from "./Gender";
import type { PaymentStatus } from "./PaymentStatus";
import type { PaymentType } from "./PaymentType";
import type { RegistrationExamType } from "./RegistrationExamType";
import type { RegistrationRound } from "./RegistrationRound";
import type { RegistrationStatus } from "./RegistrationStatus";

export type RegistrationModel = {
  index?: number;
  id?: string;
  examType?: RegistrationExamType;
  examTypeName?: string | null;
  fullName?: string | null;
  dayOfBirth?: number;
  monthOfBirth?: number;
  yearOfBirth?: number;
  gender?: Gender;
  block?: number;
  class?: string | null;
  fatherName?: string | null;
  motherName?: string | null;
  email?: string | null;
  tel?: string | null;
  address?: string | null;
  schoolId?: string;
  schoolCode?: string | null;
  schoolName?: string | null;
  round?: RegistrationRound;
  roundName?: string | null;
  ref?: string | null;
  status?: RegistrationStatus;
  isSelfRegistration?: boolean;
  isSelfRegistrationName?: string | null;
  note?: string | null;
  idNo?: string | null;
  registrationNumber?: string | null;
  examId?: string;
  examName?: string | null;
  provinceId?: string;
  provinceName?: string | null;
  districtId?: string;
  districtName?: string | null;
  createdOnDate?: string;
  priceExam?: number;
  isDelivery?: boolean;
  totalPrice?: number;
  deliveryAddress?: string | null;
  deliveryTel?: string | null;
  deliveryName?: string | null;
  registrationExamTime?: string | null;
  paymentStatus?: PaymentStatus;
  paymentStatusName?: string | null;
  paymentModel?: any;
  isUsedForCommunication?: boolean;
  isUsedForCommunicationName?: string | null;
  genderName?: string | null;
  paymentType?: PaymentType;
  paymentTypeName?: string | null;
  parentName?: string | null;
  histories?: Array<any> | null;
  deliveryPrice?: number;
  isDeliveryName?: string | null;
  transactionDate?: string | null;
  paymentDate?: string | null;
  iigDepartmentName?: string | null;
  errorDetail?: string | null;
  paidFee?: number | null;
};

