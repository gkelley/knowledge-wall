export type bite = {
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
  Web,
  Mobile,
  Sharepoint,
  Cms,
  Rp,
  Entrepreneurship
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