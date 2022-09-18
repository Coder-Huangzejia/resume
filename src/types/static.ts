export interface FormStaticType {
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
  evaluation:string;
  reward:string
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
  dueTime: string;
  department: string;
  position: string;
  jobDescription:string;
  startTime:string;
  dimission:boolean
}
export interface DrawerVisibleType {
  basicDrawerVisible: boolean;
  techDrawerVisible: boolean;
  jobDrawerVisible:boolean
}
export type JobDataType=Array<JobDataItemType>