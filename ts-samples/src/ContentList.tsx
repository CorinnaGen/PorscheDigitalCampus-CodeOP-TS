import React, { useState, useEffect, useCallback } from 'react';

// Define interface for the content item fetched from the API
type ContentItem = {
  id: number;
  title: string;
  body: string;
}

//add example with a partial

// Define the component
const ContentList: React.FC = () => {
  // State to store the fetched content
  const [content, setContent] = useState<ContentItem[]>([]);
  // State to track loading state
  const [isLoading, setIsLoading] = useState<boolean>(true);
  // State to track error state
  const [error, setError] = useState<string | null>(null);

  // Fetch data from the API
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
  }, []); // Empty dependency array ensures that useCallback creates the function only once

  // Call fetchData when the component mounts
  useEffect(() => {
    fetchData();
  }, [fetchData]); // useCallback ensures that fetchData remains stable between renders

  // Render loading state
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Render error state
  if (error) {
    return <div>Error: {error}</div>;
  }

  // Render content list
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
