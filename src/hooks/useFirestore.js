import { useMutation } from 'react-query';
import { db, timestamp } from '../firebase/config';

// const deleteDocument = (id) => {};

export default function useAddDoc(collection) {
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
