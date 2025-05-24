import { useQuery } from '@tanstack/react-query';
import {
    getFirestore,
    collection,
    query,
    where,
    getDocs,
    Firestore,
} from 'firebase/firestore';
import { app } from '@/data/firebase';

const db = getFirestore(app);

export const usePublicWishes = (shareId: string | null) => {
    return useQuery({
        queryKey: ['publicWishes', shareId],
        queryFn: async () => {
            if (!shareId) return { wishes: [], ownerName: 'Usuario' };

            // 1. Buscar el user por shareId
            const userSnap = await getDocs(
                query(collection(db, 'users'), where('shareId', '==', shareId))
            );

            if (userSnap.empty) return { wishes: [], ownerName: 'Usuario' };

            const userDoc = userSnap.docs[0];
            const uid = userDoc.id;
            const ownerName = userDoc.data().name || 'Usuario';

            // 2. Buscar los wishes por uid
            const wishesSnap = await getDocs(
                query(collection(db, 'wishes'), where('uid', '==', uid))
            );

            const wishes = wishesSnap.docs.map(doc => ({
                id: doc.id,
                ...(doc.data() as any),
            }));

            return { wishes, ownerName };
        },
        enabled: !!shareId,
    });
};
