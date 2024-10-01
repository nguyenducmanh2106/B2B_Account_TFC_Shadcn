import { useQuery } from "@tanstack/react-query"

import { Code, type ResponseData, type SchoolModel } from "@/api"
import { getSchool, getSchool1 } from "@/api/services/SchoolService"

export function useSchool(provinceId?: string | undefined, districtId?: string | undefined) {
  return useQuery({
    queryKey: ["use-school", provinceId, districtId],
    queryFn: async () => {
      if (!provinceId) return []

      const filter = {
        provinceId: provinceId,
        districtId: districtId
      }
      const response = await getSchool(JSON.stringify(filter)) as ResponseData<SchoolModel[]>
      if (response.code != Code._200) return []

      return response.data
    },
  })
}

export function useSchoolId(schoolId?: string) {
  return useQuery({
    queryKey: ["use-school", schoolId],
    queryFn: async () => {
      if (!schoolId) return {}
      const response = await getSchool1(schoolId) as ResponseData<SchoolModel>
      if (response.code != Code._200) return {}

      return response.data
    },
  })
}

