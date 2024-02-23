import React, { useState, useEffect, useCallback } from 'react';

type ContentItem = {
  id: number;
  title: string;
  body: string;
}

const ContentList: React.FC = () => {

  const [content, setContent] = useState<ContentItem[]>([]);

  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data: ContentItem[] = await response.json();
      setContent(data);
    } catch (error: any) {
      setError(error.message || 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  }, []); 
  useEffect(() => {
    fetchData();
  }, [fetchData]); 


  if (isLoading) {
    return <div>Loading...</div>;
  }


  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Content List</h2>
      <ul>
        {content.map(item => (
          <li key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContentList;
