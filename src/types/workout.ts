export interface IExercise {
  id?: string;
  name: string;
  time: number;
}

export interface IPlan {
  id: string;
  name: string;
  exercises: IExercise[];
}
