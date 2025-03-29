type UserRole = "Educationist" | "Therapist" | "Child";

interface getChildRecordResponse {
  msg: string;
  msgCode: string;
  code: number;
  data: {
    id: number;
    childId: number;
    authorId: number;
    authorRole: UserRole;
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
    authorRole: UserRole;
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
    authorRole: UserRole;
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
    authorRole: UserRole;
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
    authorRole: UserRole;
    content: string;
    createdAt: string;
    symptoms: string[];
  }[];
}

interface postReadBody {
  recordId: number;
  userId: number;
  userRole: UserRole;
}

interface getReadRecordResponse {
  msg: string;
  msgCode: string;
  code: number;
  data: {
    recordId: number;
    userId: number;
    userRole: UserRole;
    readAt: string;
  };
}

interface postRecordResponse {
  msg: string;
  msgCode: string;
  code: number;
  data: {
    id: number;
    childId: number;
    authorId: number;
    authorRole: UserRole;
    authorName: string;
    content: string;
    createdAt: string;
    symptoms: string[];
  };
}

interface getTherapistChildResponse {
  msg: string;
  msgCode: string;
  code: number;
  data: {
    id: number;
    name: string;
    parentName: string;
    email: string;
    birthDate: string;
    supportLevel: number;
    class: string;
    token: string;
  }[];
}

interface getEducationistChildResponse {
  msg: string;
  msgCode: string;
  code: number;
  data: {
    id: number;
    name: string;
    parentName: string;
    email: string;
    birthDate: string;
    supportLevel: number;
    class: string;
    token: string;
  }[];
} 

interface getChildTherapistResponse {
  msg: string;
  msgCode: string;
  code: number;
  data: {
    id: number;
    name: string;
    specialization: string;
    token: string;
    email: string;
    licenseNumber: string;
  }[];
}

interface getChildEducationistResponse {
  msg: string;
  msgCode: string;
  code: number;
  data: {
    id: number;
    name: string;
    specialization: string;
    token: string;
    email: string;
  }[];
}

interface getReadRecordResponse {
  msg: string;
  msgCode: string;
  code: number;
  data: {
    recordId: number;
    userId: number;
    userRole: UserRole;
    readAt: string;
  };
}

interface postReadRecordResponse {
  msg: string;
  msgCode: string;
  code: number;
}

interface postTherapistBody {
  name: string;
  email: string;
  licenseNumber: string;
  specialization: string;
}

interface postTherapistResponse {
  msg: string;
  msgCode: string;
  code: number;
}

interface getUnreadRecordsResponse {
  msg: string;
  msgCode: string;
  code: number;
  data: {
    id: number;
    childId: number;
    authorId: number;
    authorRole: UserRole;
    authorName: string;
    content: string;
    createdAt: string;
    symptoms: string[];
  }[];
}

interface postNotificationTokenResponse {
  msg: string;
  msgCode: string;
  code: number;
}

interface getUserResponse {
  msg: string;
  msgCode: string;
  code: number;
  data: {
    id: number;
    role: UserRole;
    name: string;
    parentName: string;
    email: string;
    birthDate: string;
    supportLevel: number;
    class: string;
    age: number;
    token: string;
  };
}
