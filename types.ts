// تعريف أنواع التقييمات
export interface AssessmentItem {
  id: string;
  name: string; // مثال: نشاط 1, اختبار قصير
  maxGrade: number;
}

// تعريف المادة الدراسية
export interface Subject {
  id: string;
  name: string;
  code: string;
  assessments: AssessmentItem[];
}

// تعريف درجات الطالب لمادة معينة
export interface StudentGrade {
  [assessmentId: string]: number | null; // e.g., { 'assessment-1': 10, 'assessment-2': 8 }
}

// تعريف الطالب
export interface Student {
  id: string;
  name: string;
  classId: string; // معرف الشعبة
  grades: {
    [subjectId: string]: StudentGrade;
  };
}

// تعريف الشعبة الدراسية
export interface Class {
  id:string;
  name: string;
  stage: string; // المرحلة الدراسية
  year: string; // العام الدراسي
}

// تعريف مستوى التقييم
export interface GradingLevel {
  id: string;
  name: string;
  minPercentage: number;
}


// تعريف إعدادات التطبيق
export interface AppSettings {
  schoolName: string;
  teacherName: string;
  supervisorName: string;
  managerName: string;
  schoolLogo: string | null; // base64 encoded image
  gradingLevels: GradingLevel[];
}

// تعريف نوع الصفحة النشطة
export type ActivePage = 'dashboard' | 'subjects' | 'students' | 'settings' | 'reports' | 'statistics' | 'about';