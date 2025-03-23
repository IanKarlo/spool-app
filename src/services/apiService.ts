import axios from "axios";

class ApiService {
  private apiClient;

  constructor() {
    this.apiClient = axios.create({
      baseURL: "http://localhost:3000", // Replace with your API base URL
      timeout: 10000, // Set a timeout for requests
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  public async getChildRecord(childId: string) {
    try {
      const response = await this.apiClient.get<getChildRecordResponse>(
        `/record/child/${childId}`
      );
      return response.data;
    } catch (error) {
      console.error("Erro na API GET Registro da Criança:", error);
      throw error;
    }
  }

  public async getChildTherapistRecord(childId: string, therapistId: string) {
    try {
      const response = await this.apiClient.get<getChildTherapistRecordResponse>(
        `/record/child/${childId}/therapist/${therapistId}`
      );
      return response.data;
    } catch (error) {
      console.error("Erro na API GET Registro do Terapeuta da Criança:", error);
      throw error;
    }
  }

  public async getChildEducationistRecord(
    childId: string,
    educationistId: string
  ) {
    try {
      const response = await this.apiClient.get<getChildEducationistRecord>(
        `/record/child/${childId}/educationist/${educationistId}`
      );
      return response.data;
    } catch (error) {
      console.error("Erro na API GET Registro do Educador da Criança:", error);
      throw error;
    }
  }

  public async getEducationistRecord(educationistId: string) {
    try {
      const response = await this.apiClient.get<getEducationistRecordResponse>(
        `/record/educationist/${educationistId}`
      );
      return response.data;
    } catch (error) {
      console.error("Erro na API GET Registro do Educador:", error);
      throw error;
    }
  }

  public async getTherapistRecord(therapistId: string) {
    try {
      const response = await this.apiClient.get<getTherapistRecordResponse>(
        `/record/therapist/${therapistId}`
      );
      return response.data;
    } catch (error) {
      console.error("Erro na API GET Registro do Terapeuta:", error);
      throw error;
    }
  }

  public async postRecord(data: any) {
    try {
      const response = await this.apiClient.post(`/record`, data);
      return response.data;
    } catch (error) {
      console.error("Erro na API POST Registro:", error);
      throw error;
    }
  }

  public async getChildEducationist(childId: string) {
    try {
      const response = await this.apiClient.get(
        `/child/${childId}/educationist`
      );
      return response.data;
    } catch (error) {
      console.error("Erro na API GET Educador da Criança:", error);
      throw error;
    }
  }

  public async getChildTherapist(childId: string) {
    try {
      const response = await this.apiClient.get(`/child/${childId}/therapist`);
      return response.data;
    } catch (error) {
      console.error("Erro na API GET Terapeuta da Criança:", error);
      throw error;
    }
  }

  public async getReadRecord(recordId: string) {
    try {
      const response = await this.apiClient.get(`/read/${recordId}`);
      return response.data;
    } catch (error) {
      console.error("Erro na API GET Registro Lido:", error);
      throw error;
    }
  }

  public async postRead(data: any) {
    try {
      const response = await this.apiClient.post(`/read`, data);
      return response.data;
    } catch (error) {
      console.error("Erro na API POST Leitura:", error);
      throw error;
    }
  }

  public async getSymptoms() {
    try {
      const response = await this.apiClient.get(`/symptoms`);
      return response.data;
    } catch (error) {
      console.error("Erro na API GET Sintomas:", error);
      throw error;
    }
  }

  public async getEducationistChild(educationistId: string) {
    try {
      const response = await this.apiClient.get(
        `/educationist/${educationistId}/child`
      );
      return response.data;
    } catch (error) {
      console.error("Erro na API GET Criança do Educador:", error);
      throw error;
    }
  }

  public async getTherapistChild(therapistId: string) {
    try {
      const response = await this.apiClient.get(
        `/therapist/${therapistId}/child`
      );
      return response.data;
    } catch (error) {
      console.error("Erro na API GET Criança do Terapeuta:", error);
      throw error;
    }
  }

  public async postTherapist(data: any) {
    try {
      const response = await this.apiClient.post(`/therapist`, data);
      return response.data;
    } catch (error) {
      console.error("Erro na API POST Terapeuta:", error);
      throw error;
    }
  }
}

export const apiService = new ApiService();

// Usage example:
// import { apiService } from "./services/apiService";
// const data = await apiService.getChildRecord('123');
