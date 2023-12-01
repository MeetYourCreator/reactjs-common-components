import { useState, useEffect } from 'react';
import { UseAxiosInput } from './types';
import axios from 'axios';

export const useAxios = ({ method, url, params }: UseAxiosInput) => {
  const [response, setResponse] = useState<any>({
    data: {},
    config: {},
    headers: {},
    request: {},
  });
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    axios({
      method: method,
      url: url,
      params: params,
    })
      .then((response) => {
        setResponse({
          data: response.data,
          config: response.config,
          headers: response.headers,
          request: response.request,
          status: response.status,
        });
      })
      .then((response) => response)
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [method, url, params]);

  if (loading) return 'Loading...';
  if (error) return `Error return: ${error}`;
  return response;
};
