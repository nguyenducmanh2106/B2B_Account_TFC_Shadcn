import { useMutation, useQuery } from "@tanstack/react-query"

import { Code, type ExamModel, type ResponseData } from "@/api"
import { getExam, getExam1 } from "@/api/services/ExamService"

export function useExamId(id: string) {
  return useQuery({
    queryKey: ["use-exam-id", id],
    queryFn: async () => {
      if (!id) return {}
      const response = await getExam1(id) as ResponseData<ExamModel>
      if (response.code != Code._200) return {}

      return response.data
    },
  })
}

export function useUserMutation() {
  return useMutation({
    mutationFn: async (params: any) => {
      const response = await getExam1(id) as ResponseData<ExamModel>
      console.log(response)
      if (response.code != Code._200) return {}

      return response.data
    }
  })
}

export function useExam(filter: string) {
  return useQuery({
    queryKey: ["use-exam"],
    queryFn: async () => {
      const response = await getExam(filter) as ResponseData<ExamModel[]>
      if (response.code != Code._200) return []
      const data = response.data?.map((item: ExamModel) => {
        return {
          label: item.name,
          value: item.id
        }
      })
      return data
    },
  })
}

