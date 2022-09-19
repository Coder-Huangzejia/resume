import { MomentInput } from "moment";


export interface educationOption {
  JuniorCollege:string;
  Undergraduate:string;
  SuperUndergraduate:string;
  Master:string;
}
export const educationSelect:educationOption ={
  'JuniorCollege':'大专',
  'Undergraduate':'本科',
  'SuperUndergraduate':'985全日制本科',
  'Master':'研究生',
}
export interface BasicDataType {
  name: string;
  mobile: string;
  email: string;
  school: string;
  frontEndTime: string;
  salary: string;
  github: string;
  blog: string;
  major: string;
  age: number;
  evaluation: string;
  reward: string;
  education:keyof educationOption
}
export interface TechDataItemType {
  name: string;
  select: boolean;
}
export interface TechDataType {
  tools: TechDataItemType[];
  webgl: TechDataItemType[];
  list: TechDataItemType[];
  frame: TechDataItemType[];
}
export interface JobDataItemType {
  companyName: string;
  period: Array<MomentInput>;
  department: string;
  position: string;
  jobDescription: string;
}
export interface DrawerVisibleType {
  basicDrawerVisible: boolean;
  techDrawerVisible: boolean;
  jobDrawerVisible: boolean;
  workDrawerVisible: boolean;
}
export interface WorkDataItemType {
  workName: string;
  skill: string;
  content: string;
}
export type JobDataType = Array<JobDataItemType>;
export type WorkDataType = Array<WorkDataItemType>;
