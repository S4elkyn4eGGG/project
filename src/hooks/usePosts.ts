import { postsActions } from 'store/posts/actions';
import { mainActions } from 'store/main/actions';
import firebaseModule from '../api/firebase';

export const getPosts: () => Promise<void> = async (): Promise<void> => {
  mainActions.updateLoading(true);

  const handlePosts = (snapshot: any) => {
    const postsResponse = snapshot.docs.map((doc: any) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });

    postsActions.updatePosts(postsResponse);

    mainActions.updateLoading(false);
  };

  const snapshot: any = await firebaseModule.db.collection('posts').get();

  handlePosts(snapshot);
};

export default getPosts;
