export interface TestRecipe {
  title: string;
  instructions: string;
  image: string;
  id: number;
  time: string;
}

export type FetchVariant = 'random' | 'test' | 'category';
