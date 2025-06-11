export interface Course {
  id: string;
  name: string;
  description: string;
}

export interface Student {
  id: string;
  name: string;
  grade: string;
  courses: Course[];
}
