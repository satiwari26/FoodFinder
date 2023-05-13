import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';
import { ref, uploadString, getDownloadURL } from 'firebase/storage';
import { firebase, storage } from './firebaseConfig';

const firestore = getFirestore();

// Function to add a new post to Firestore
export const addPost = async (image, description) => {
  try {
    // Upload the image to Firebase Storage and get the download URL
    const imageUrl = await uploadImageToStorage(image);

    // Add the post to the 'posts' collection in Firestore
    const docRef = await addDoc(collection(firestore, 'posts'), {
      image: imageUrl,
      description: description,
    });

    console.log('Document ID:', docRef.id);
    return docRef.id;
  } catch (error) {
    console.error('Error adding post:', error);
    throw error;
  }
};

// Function to get all posts from Firestore
export const getPosts = async () => {
  try {
    const querySnapshot = await getDocs(collection(firestore, 'posts'));
    const posts = [];
    querySnapshot.forEach((doc) => {
      posts.push({ id: doc.id, ...doc.data() });
    });
    return posts;
  } catch (error) {
    console.error('Error getting posts:', error);
    throw error;
  }
};

// Function to upload an image to Firebase Storage and get the download URL
const uploadImageToStorage = async (image) => {
  try {
    // Implement the code to upload the image to Firebase Storage here
    // You can use the Firebase Storage SDK or any other method to upload the image
    // Return the download URL of the uploaded image

    // Example using Firebase Storage SDK
    const storageRef = ref(storage, `images/${image.name}`);
    await uploadString(storageRef, image, 'data_url');
    const imageUrl = await getDownloadURL(storageRef);

    return imageUrl;
  } catch (error) {
    console.error('Error uploading image:', error);
    throw error;
  }
};