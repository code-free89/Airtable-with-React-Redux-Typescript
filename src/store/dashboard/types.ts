export type Student = {
  id: string;
  name: string;
}

export type ClassInfo = {
  name: string;
  students: string;
}

export type DashboardState = {
  status: number;
  classInfos: ClassInfo[];
}