import { useMutation, useQuery } from "@tanstack/react-query"

import { Code, type ExamModel, type ProvinceModel, type ResponseData } from "@/api"
import { getExam, getExam1 } from "@/api/services/ExamService"
import { getAministrativeDivisions1 } from "@/api/services/AministrativeDivisionsService"

export function useAministrativeDivisionProvinceId(provinceId: string) {
  return useQuery({
    queryKey: ["use-aministrativedivisions-province", provinceId],
    queryFn: async () => {
      if (!provinceId) return {}
      const response = await getAministrativeDivisions1(provinceId) as ResponseData<ProvinceModel>
      if (response.code != Code._200) return {}

      return response.data
    },
  })
}
