import storage from '@react-native-firebase/storage';
import {Platform} from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';

export const updateProfileImage = async image => {
  return new Promise(async resolve => {
    try {
      console.warn('image', image);
      const filename = image.substring(image.lastIndexOf('/') + 1);
      const pathForFirebaseStorage = await getPathForFirebaseStorage(image);
      await storage().ref(filename).putFile(pathForFirebaseStorage);
      await storage()
        .ref(filename)
        .getDownloadURL()
        .then(url => {
          console.warn('url', url);
          resolve(url);
        });
    } catch (error) {
      console.warn(error);
    }
  });
};

const getPathForFirebaseStorage = async uri => {
  if (Platform.OS === 'ios') {
    return uri;
  }
  const stat = await RNFetchBlob.fs.stat(uri);
  return stat.path;
};
