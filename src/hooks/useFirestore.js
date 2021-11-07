import { useMutation, useQuery, useQueryClient } from 'react-query';
import { db, timestamp } from '../firebase/config';

export function useAddDoc(collection) {
  const ref = db.collection(collection);

  const addDocument = async (doc) => {
    try {
      const createdAt = timestamp.fromDate(new Date());
      return ref.add({ ...doc, createdAt });
    } catch (e) {
      throw new Error(e.message);
    }
  };

  return useMutation(addDocument);
}

export function useCollection(collection) {
  const ref = db.collection(collection);
  const queryClient = useQueryClient();

  const fetchDocs = async () => {
    try {
      const snapshots = await ref.get();

      if (snapshots.empty) {
        throw new Error('Could not fetch recipes');
      }

      let results = [];

      snapshots.docs.forEach((doc) => {
        results.push({ id: doc.id, ...doc.data() });
      });

      return results;
    } catch (e) {
      throw new Error(e.message);
    }
  };

  return useQuery(collection, fetchDocs, {
    onSuccess: () => {
      queryClient.invalidateQueries(collection);
    },
  });
}
