export type bite = {
  id: string,
  biteData: biteData,
}

export type biteData = {
  title: string;
  description: string;
  type: biteType;
  upvotes: number;
  dateCreated: Date;
  author: string;
  commitment: commitment | null;
  status: biteStatus;
}

export enum biteStatus {
  Active,
  Inactive,
}

export enum biteType {
  Web = 1,
  Mobile = 2,
  Sharepoint = 3,
  Cms = 4,
  Rp = 5,
  Entrepreneurship = 6,
  Other = 7
}

export type commitment = {
  author: string;
  description: string;
  format: string;
  dateCreated: Date;
  expectedDate: Date;
  status: commitmentStatus;
};

export enum commitmentStatus {
  Incomplete,
  Complete
}
