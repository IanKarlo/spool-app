import { useQuery, useMutation } from "@tanstack/react-query";
import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://138.197.240.62/api", // Replace with your API base URL
  timeout: 10000, // Set a timeout for requests
  headers: {
    "Content-Type": "application/json",
    "if-none-match": "nah",
  },
});

export const useGetChildRecord = (
  childId: number | null,
  page?: number,
  limit?: number
) => {
  return useQuery({
    queryKey: ["getChildRecord", childId, page, limit],
    queryFn: async () => {
      try {
        const params = new URLSearchParams();
        if (page !== undefined) params.append("page", page.toString());
        if (limit !== undefined) params.append("limit", limit.toString());
        const response = await apiClient.get<getChildRecordResponse>(
          `/record/child/${childId}${
            params.toString() ? `?${params.toString()}` : ""
          }`
        );
        return response.data;
      } catch (error) {
        console.error("Erro na API GET Registro da Criança:", error);
        throw error;
      }
    },
    enabled: !!childId,
  });
};

export const useGetChildTherapistRecord = (
  childId: number | null,
  therapistId: number | null
) => {
  return useQuery({
    queryKey: ["getChildTherapistRecord", childId, therapistId],
    queryFn: async () => {
      try {
        const response = await apiClient.get<getChildTherapistRecordResponse>(
          `/record/child/${childId}/therapist/${therapistId}`
        );
        return response.data;
      } catch (error) {
        console.error(
          "Erro na API GET Registro do Terapeuta da Criança:",
          error
        );
        throw error;
      }
    },
    enabled: !!childId && !!therapistId,
  });
};

export const useGetChildEducationistRecord = (
  childId: number | null,
  educationistId: number | null
) => {
  return useQuery({
    queryKey: ["getChildEducationistRecord", childId, educationistId],
    queryFn: async () => {
      try {
        const response = await apiClient.get<getChildEducationistRecord>(
          `/record/child/${childId}/educationist/${educationistId}`
        );
        return response.data;
      } catch (error) {
        console.error(
          "Erro na API GET Registro do Educador da Criança:",
          error
        );
        throw error;
      }
    },
    enabled: !!childId && !!educationistId,
  });
};

export const useGetEducationistRecord = (educationistId: number | null) => {
  return useQuery({
    queryKey: ["getEducationistRecord", educationistId],
    queryFn: async () => {
      try {
        const response = await apiClient.get<getEducationistRecordResponse>(
          `/record/educationist/${educationistId}`
        );
        return response.data;
      } catch (error) {
        console.error("Erro na API GET Registro do Educador:", error);
        throw error;
      }
    },
    enabled: !!educationistId,
  });
};

export const useGetTherapistRecord = (therapistId: number | null) => {
  return useQuery({
    queryKey: ["getTherapistRecord", therapistId],
    queryFn: async () => {
      try {
        const response = await apiClient.get<getTherapistRecordResponse>(
          `/record/therapist/${therapistId}`
        );
        return response.data;
      } catch (error) {
        console.error("Erro na API GET Registro do Terapeuta:", error);
        throw error;
      }
    },
    enabled: !!therapistId,
  });
};

export const usePostRecord = () => {
  return useMutation({
    mutationFn: async (data: {
      childId: number;
      authorId: number;
      authorRole: string;
      authorName: string;
      symptoms: string[];
      content: string;
    }) => {
      try {
        const response = await apiClient.post<postRecordResponse>(
          "/record",
          data
        );
        return response.data;
      } catch (error) {
        console.error("Erro na API POST Registro:", error);
        throw error;
      }
    },
  });
};

export const useGetChildEducationist = (childId: number | null) => {
  return useQuery({
    queryKey: ["getChildEducationist", childId],
    queryFn: async () => {
      try {
        const response = await apiClient.get<getChildEducationistResponse>(
          `/educationist/${childId}`
        );
        return response.data;
      } catch (error) {
        console.error("Erro na API GET Educador da Criança:", error);
        throw error;
      }
    },
    enabled: !!childId,
  });
};

export const useGetChildTherapist = (childId: number | null) => {
  return useQuery({
    queryKey: ["getChildTherapist", childId],
    queryFn: async () => {
      try {
        const response = await apiClient.get<getChildTherapistResponse>(
          `/therapist/${childId}`
        );
        return response.data;
      } catch (error) {
        console.error("Erro na API GET Terapeuta da Criança:", error);
        throw error;
      }
    },
    enabled: !!childId,
  });
};

export const useGetReadRecord = (recordId: number | null) => {
  return useQuery({
    queryKey: ["getReadRecord", recordId],
    queryFn: async () => {
      try {
        const response = await apiClient.get<getReadRecordResponse>(
          `/read/${recordId}`
        );
        return response.data;
      } catch (error) {
        console.error("Erro na API GET Registro Lido:", error);
        throw error;
      }
    },
    enabled: !!recordId,
  });
};

export const usePostRead = () => {
  return useMutation({
    mutationFn: async (data: postReadBody) => {
      try {
        const response = await apiClient.post<postReadRecordResponse>(
          "/read",
          data
        );
        return response.data;
      } catch (error) {
        console.error("Erro na API POST Leitura:", error);
        throw error;
      }
    },
  });
};

export const useGetSymptoms = () => {
  return useQuery({
    queryKey: ["getSymptoms"],
    queryFn: async () => {
      try {
        const response = await apiClient.get("/symptoms");
        return response.data;
      } catch (error) {
        console.error("Erro na API GET Sintomas:", error);
        throw error;
      }
    },
  });
};

export const useGetEducationistChild = (educationistId: number | null) => {
  return useQuery({
    queryKey: ["getEducationistChild", educationistId],
    queryFn: async () => {
      try {
        const response = await apiClient.get<getEducationistChildResponse>(
          `/child/educationist/${educationistId}`
        );
        return response.data;
      } catch (error) {
        console.error("Erro na API GET Criança do Educador:", error);
        throw error;
      }
    },
    enabled: !!educationistId,
  });
};

export const useGetTherapistChild = (therapistId: number | null) => {
  return useQuery({
    queryKey: ["getTherapistChild", therapistId],
    queryFn: async () => {
      try {
        const response = await apiClient.get<getTherapistChildResponse>(
          `/child/therapist/${therapistId}`
        );
        return response.data;
      } catch (error) {
        console.error("Erro na API GET Criança do Terapeuta:", error);
        throw error;
      }
    },
    enabled: !!therapistId,
  });
};

export const usePostTherapist = () => {
  return useMutation({
    mutationFn: async (data: postTherapistBody) => {
      try {
        const response = await apiClient.post<postTherapistResponse>(
          "/therapist",
          data
        );
        return response.data;
      } catch (error) {
        console.error("Erro na API POST Terapeuta:", error);
        throw error;
      }
    },
  });
};

export const useGetUnreadRecords = (userId: number | null) => {
  return useQuery({
    queryKey: ["getUnreadRecords", userId],
    queryFn: async () => {
      try {
        const response = await apiClient.get<getUnreadRecordsResponse>(
          `/alerts/${userId}`
        );
        return response.data;
      } catch (error) {
        console.error("Erro na API GET Registros não lidos:", error);
        throw error;
      }
    },
    enabled: !!userId,
  });
};

export const usePostNotificationToken = () => {
  return useMutation({
    mutationFn: async (data: {
      userId: number;
      deviceToken: string;
      userRole: string;
    }) => {
      try {
        const response = await apiClient.post<postNotificationTokenResponse>(
          "/notification/device-token",
          data
        );
        return response.data;
      } catch (error) {
        console.error("Erro na API POST Token de Notificação:", error);
        throw error;
      }
    },
  });
};

export const useGetUserByToken = (token: string | null) => {
  return useQuery({
    queryKey: ["getUserByToken", token],
    queryFn: async () => {
      try {
        const response = await apiClient.get<getUserResponse>(`/user/${token}`);
        return response.data;
      } catch (error) {
        console.error("Erro na API GET Usuário pelo token:", error);
        throw error;
      }
    },
    enabled: !!token,
  });
};
