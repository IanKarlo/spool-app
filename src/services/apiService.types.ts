interface getChildRecordResponse {
  msg: string;
  msgCode: string;
  code: number;
  data: {
    id: number;
    childId: number;
    authorId: number;
    authorRole: string;
    content: string;
    createdAt: string;
    symptoms: string[];
  }[];
}

interface getChildTherapistRecordResponse {
  msg: string;
  msgCode: string;
  code: number;
  data: {
    id: number;
    childId: number;
    authorId: number;
    authorRole: string;
    content: string;
    createdAt: string;
    symptoms: string[];
  }[];
}

interface getChildEducationistRecord {
  msg: string;
  msgCode: string;
  code: number;
  data: {
    id: number;
    childId: number;
    authorId: number;
    authorRole: string;
    content: string;
    createdAt: string;
    symptoms: string[];
  }[];
}

interface getEducationistRecordResponse {
  msg: string;
  msgCode: string;
  code: number;
  data: {
    id: number;
    childId: number;
    authorId: number;
    authorRole: string;
    content: string;
    createdAt: string;
    symptoms: string[];
  }[];
}

interface getTherapistRecordResponse {
  msg: string;
  msgCode: string;
  code: number;
  data: {
    id: number;
    childId: number;
    authorId: number;
    authorRole: string;
    content: string;
    createdAt: string;
    symptoms: string[];
  }[];
}

interface postReadBody {
  msg: string;
  msgCode: string;
  code: number;
  data: {
    recordId: number;
    userId: number;
    userRole: "Educationist" | "Therapist" | "Child";
  };
}

interface getReadRecordResponse {
  msg: string;
  msgCode: string;
  code: number;
  data: {
    recordId: number;
    userId: number;
    userRole: "Educationist" | "Therapist" | "Child";
    readAt: string;
  };
}
