import { useQuery, useMutation } from '@tanstack/react-query'
import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:3000/api", // Replace with your API base URL
  timeout: 10000, // Set a timeout for requests
  headers: {
    "Content-Type": "application/json",
  },
});

export const useGetChildRecord = (childId: number) => {
  return useQuery({
    queryKey: ['getChildRecord', childId],
    queryFn: async () => {
      try {
        const response = await apiClient.get<getChildRecordResponse>(
          `/record/child/${childId}`
        );
        return response.data;
      } catch (error) {
        console.error("Erro na API GET Registro da Criança:", error);
        throw error;
      }
    },
  });
};

export const useGetChildTherapistRecord = (childId: string, therapistId: number) => {
  return useQuery({
    queryKey: ['getChildTherapistRecord', childId, therapistId],
    queryFn: async () => {
      try {
        const response = await apiClient.get<getChildTherapistRecordResponse>(
          `/record/child/${childId}/therapist/${therapistId}`
        );
        return response.data;
      } catch (error) {
        console.error("Erro na API GET Registro do Terapeuta da Criança:", error);
        throw error;
      }
    },
  });
};

export const useGetChildEducationistRecord = (childId: string, educationistId: number) => {
  return useQuery({
    queryKey: ['getChildEducationistRecord', childId, educationistId],
    queryFn: async () => {
      try {
        const response = await apiClient.get<getChildEducationistRecord>(
          `/record/child/${childId}/educationist/${educationistId}`
        );
        return response.data;
      } catch (error) {
        console.error("Erro na API GET Registro do Educador da Criança:", error);
        throw error;
      }
    },
  });
};

export const useGetEducationistRecord = (educationistId: number) => {
  return useQuery({
    queryKey: ['getEducationistRecord', educationistId],
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
  });
};

export const useGetTherapistRecord = (therapistId: number) => {
  return useQuery({
    queryKey: ['getTherapistRecord', therapistId],
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
  });
};

export const usePostRecord = () => {
  return useMutation({
    mutationFn: async (data: any) => {
      try {
        const response = await apiClient.post('/record', data);
        return response.data;
      } catch (error) {
        console.error("Erro na API POST Registro:", error);
        throw error;
      }
    },
  });
};

export const useGetChildEducationist = (childId: number) => {
  return useQuery({
    queryKey: ['getChildEducationist', childId],
    queryFn: async () => {
      try {
        const response = await apiClient.get(
          `/child/${childId}/educationist`
        );
        return response.data;
      } catch (error) {
        console.error("Erro na API GET Educador da Criança:", error);
        throw error;
      }
    },
  });
};

export const useGetChildTherapist = (childId: number) => {
  return useQuery({
    queryKey: ['getChildTherapist', childId],
    queryFn: async () => {
      try {
        const response = await apiClient.get(`/child/${childId}/therapist`);
        return response.data;
      } catch (error) {
        console.error("Erro na API GET Terapeuta da Criança:", error);
        throw error;
      }
    },
  });
};

export const useGetReadRecord = (recordId: number) => {
  return useQuery({
    queryKey: ['getReadRecord', recordId],
    queryFn: async () => {
      try {
        const response = await apiClient.get(`/read/${recordId}`);
        return response.data;
      } catch (error) {
        console.error("Erro na API GET Registro Lido:", error);
        throw error;
      }
    },
  });
};

export const usePostRead = () => {
  return useMutation({
    mutationFn: async (data: postReadBody) => {
      try {
        const response = await apiClient.post('/read', data);
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
    queryKey: ['getSymptoms'],
    queryFn: async () => {
      try {
        const response = await apiClient.get('/symptoms');
        return response.data;
      } catch (error) {
        console.error("Erro na API GET Sintomas:", error);
        throw error;
      }
    },
  });
};

export const useGetEducationistChild = (educationistId: number) => {
  return useQuery({
    queryKey: ['getEducationistChild', educationistId],
    queryFn: async () => {
      try {
        const response = await apiClient.get(
          `/educationist/${educationistId}/child`
        );
        return response.data;
      } catch (error) {
        console.error("Erro na API GET Criança do Educador:", error);
        throw error;
      }
    },
  });
};

export const useGetTherapistChild = (therapistId: number) => {
  return useQuery({
    queryKey: ['getTherapistChild', therapistId],
    queryFn: async () => {
      try {
        const response = await apiClient.get(
          `/therapist/${therapistId}/child`
        );
        return response.data;
      } catch (error) {
        console.error("Erro na API GET Criança do Terapeuta:", error);
        throw error;
      }
    },
  });
};

export const usePostTherapist = () => {
  return useMutation({
    mutationFn: async (data: any) => {
      try {
        const response = await apiClient.post('/therapist', data);
        return response.data;
      } catch (error) {
        console.error("Erro na API POST Terapeuta:", error);
        throw error;
      }
    },
  });
};




