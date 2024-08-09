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

export type CurrentSelectedResearch = {
  research_title: string;
  research_author: string;
  research_published_date: string;
  research_publisher: string;
  research_institution: string;
  research_abstract: string;
  file_uri: string;
};

export type ResetPasswordSchema = {
  'new-password': string;
  'retype-password': string;
};

export type SessionObj = {
  account_id: string;
  role: string;
};

export type RequestPasswordForm = {
  token: string;
  'new-password': string;
  'retype-password': string;
  email: string;
};
