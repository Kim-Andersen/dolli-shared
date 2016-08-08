// @flow

export type Account = {
  _id: string,
  name: string,
  email: string,
  isVirtual: boolean,
  picture?: string
};

export type Transport = {
  type: string,
  by?: string,
  time?: string
};

export type Project = {
  _id: string,
  title: string,
  owner: string,
  createdAt: Date,
  updatedAt?: Date,
  startAt?: Date,
  endAt?: Date,
  productionAddress?: Address,
  callsheetSettings?: any,
  nonWorkingDates?: Array<Date>,
  numTotalWorkingDays?: Number,
  backgroundImageUri?: string
};

export type Phone = {
  countryCode?: string,
  number?: string
};

export type Address = {
  name?: string,
  street?: string,
  postcode?: string,
  city?: string,
  coordinates?: any,
  phone?: Phone,
  registrationNumber?: string
};

export type CallSheet = {
  _id: string,
  date: Date,
  number: Number,
  creator: Account,
  createdAt: Date,
  project: string,
  updatedAt?: Date,
  publishedAt?: Date,
  productionAddress?: Address
  // lastPublisher?: Account,

};

export type Crew = {
  role: string,
  phone?: Phone
};

export type Cast = {
  characterName: string,
  idNo?: string
};

export type Extra = {
  _id: string,
  createdAt: Date,
  updatedAt?: Date,
  project: string,
  idNo?: string,
  name: string
};

export type ProjectAccessRole = {};
export type ProjectMemberType = {};

export type Member = {
  _id: string,
  type: ProjectMemberType,
  crew?: Crew,
  cast?: Cast,
  createdAt: Date,
  updatedAt?: Date,
  project: string,
  account: Account,
  accessRole: ProjectAccessRole,
};
