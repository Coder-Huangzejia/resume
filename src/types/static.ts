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
export interface DrawerVisibleType {
  basicDrawerVisible: boolean;
  techDrawerVisible: boolean;
}
