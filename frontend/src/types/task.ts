export type Task = {
  _id: string;
  title: string;
  description: string;
};

export type TaskUpdate = {
  title?: string;
  description?: string;
};
