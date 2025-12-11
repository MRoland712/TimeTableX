export interface TeachersModel {
  id: number;
  name: string;
  subject: string;
  homework?: string[];
  days: string[];
  avatar: string;
}
