import { useEffect, useState } from 'react';
import useAuth from './useAuth';

const useNotes = () => {
  const { token } = useAuth();

  const [notes, setNotes] = useState([]);
  const [errorMsg, setErrorMessage] = useState('');
  const [searchParams, setSearchParams] = useState(new URLSearchParams());
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        setLoading(true);

        const res = await fetch(
          `http://localhost:8000/notes?${searchParams.toString()}`,
          {
            headers: {
              Authorization: token,
            },
          }
        );

        const body = await res.json();

        if (!res.ok) {
          throw new Error(body.message);
        }

        setNotes(body.data.notes);
      } catch (err) {
        setErrorMessage(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (token) {
      fetchNotes();
    }
  }, [searchParams, token]);

  return { notes, searchParams, setSearchParams, errorMsg, loading };
};

export default useNotes;

