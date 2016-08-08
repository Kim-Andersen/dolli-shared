// @flow

export type Account = {
  _id: string,
  name: string,
  email: string,
  isVirtual: boolean,
  picture?: string
};

export type Project = {
  _id: string,
  title: string,
  owner: string | Account,
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

export type Transport = {
  type: string,
  by?: string | ProjectMember,
  time?: string
};

export type CallSheet = {
  _id: string,
  date: Date,
  number: Number,
  creator: string | Account,
  createdAt: Date,
  project: string | Project,
  updatedAt?: Date,
  publishedAt?: Date,
  productionAddress?: Address,
  lastPublisher?: string | Account
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
  project: string | Project,
  idNo?: string,
  name: string
};

export type ProjectAccessRole = {};
export type ProjectMemberType = {};

export type ProjectMember = {
  _id: string,
  type: ProjectMemberType,
  crew?: Crew,
  cast?: Cast,
  createdAt: Date,
  updatedAt?: Date,
  project: string | Project,
  account: string | Account,
  accessRole: ProjectAccessRole,
};
