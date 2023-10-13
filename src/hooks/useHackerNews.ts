import { useEffect, useState } from "react";
import axios from "axios";

export type NewsItem = {
  by: string;
  descendants: number;
  id: number;
  kids: number[];
  score: number;
  time: number;
  title: string;
  type: string;
  url: string;
};

const useHackerNews = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const fetchTopNews = async () => {
    try {
      const topStoryIdsResponse = await axios.get(
        "https://hacker-news.firebaseio.com/v0/topstories.json"
      );
      const topStoryIds: number[] = topStoryIdsResponse.data.slice(0, 9);

      const newsPromises = topStoryIds.map(async (id) => {
        const newsItemResponse = await axios.get(
          `https://hacker-news.firebaseio.com/v0/item/${id}.json`
        );
        return newsItemResponse.data as NewsItem;
      });

      const newsData = await Promise.all(newsPromises);
      setNews(newsData);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTopNews();
  }, []);

  return { news, loading };
};

export default useHackerNews;
