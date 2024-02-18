import { useState, useEffect } from 'react';
import axios from 'axios';

import { TestRecipe, FetchVariant } from '@/types';

const useFetch = (variant: FetchVariant) => {
  const [data, setData] = useState<TestRecipe[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<unknown>(null);
  if (variant === 'test') {
    var recipes: TestRecipe[] = [];
  }
  const fetchData = async (variant: FetchVariant) => {
    setLoading(true);
    try {
      if (variant === 'random') {
        const res = await axios.get(
          `https://api.spoonacular.com/recipes/random?number=10&apiKey=${process.env.API_KEY}`
        );
        setData(res.data.recipes);
      }

      if (variant === 'category') {
        const res = await axios.get(
          `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.API_KEY}`
        );
        setData(res.data.results);
      }

      if (variant === 'test') {
        for (let i = 0; i < 10; i++) {
          recipes.push({
            title: 'food',
            instructions: 'test',
            image: 'https://spoonacular.com/recipeImages/642276-556x370.jpg',
            id: i,
            time: "10 min",
          });
        }
        setData(recipes);
      }
    } catch (error) {
      console.error(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(variant);
  }, []);

  const refetch = (variant: FetchVariant) => {
    setLoading(true);
    fetchData(variant);
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;
