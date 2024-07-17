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
