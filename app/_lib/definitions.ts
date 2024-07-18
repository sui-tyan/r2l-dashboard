export type LoginFormSchema = {
  email: string;
  password: string;
};

export type RecentUploadType = {
  title: string;
  authors: Array<string>;
  publishedDate: string;
  fileUri: string;
};

export type FormStateSchema = {
  type: string;
  message: string;
};

export type UploadFormSchema = {
  research_title: string;
  research_author: string;
  research_published_date: string;
  research_publisher: string;
  research_institution: string;
  research_abstract: string;
};
