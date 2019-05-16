export type bite = {
  id: string;
  biteData: biteData;
};

export type biteData = {
  title: string;
  description: string;
  // biteTypes Id Number
  type: number;
  upvotes: number;
  dateCreated: Date;
  author: string;
  commitment: commitment | null;
  status: biteStatus;
};

export enum biteStatus {
  Active,
  Inactive
}

export const biteTypes = [
  {
    displayName: "Web",
    color: "#ACE9DB"
  },
  {
    displayName: "Mobile",
    color: "#B6E4C7"
  },
  {
    displayName: "Entrepreneurship",
    color: "#B3D4EB"
  },
  {
    displayName: "CMS",
    color: "#FDDDAA"
  },
  {
    displayName: "RP",
    color: "#EBBAB4"
  },
  {
    displayName: "Sharepoint",
    color: "#DBBDE5"
  },
  {
    displayName: "Other",
    color: "#f49ac2"
  }
];

export const formatTypes = [
  {
    displayName: "BFF",
    image: "https://img.icons8.com/bubbles/50/000000/brain.png",
  },
  {
    displayName: "Lightning Talk",
    image: "https://img.icons8.com/ultraviolet/40/000000/conflict.png"
  },
  {
    displayName: "Dev Breakfast",
    image: "https://img.icons8.com/dusk/64/000000/restaurant.png"
  },
  {
    displayName: "Blog Post",
    image: "https://img.icons8.com/dusk/64/000000/google-blog-search.png"
  },
  {
    displayName: "Seminar",
    image: "https://img.icons8.com/ios/50/000000/conference-filled.png"
  },
  {
    displayName: "Other",
    image: "https://img.icons8.com/ios/50/000000/online-group-studying.png"
  },
];

export type commitment = {
  author: string;
  description: string;
  // formatTypes Id Number
  format: number;
  dateCreated: Date;
  expectedDate: Date;
  status: commitmentStatus;
};

export enum commitmentStatus {
  Incomplete,
  Complete
}
