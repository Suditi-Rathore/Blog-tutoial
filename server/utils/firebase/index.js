import {initializeApp} from 'firebase/app';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';


class FirebaseFunction{
    #app;
    #storage;
    
    constructor() {
        const firebaseConfig = {
          apiKey: "AIzaSyB_ADRjZcY5WcAIYyoYtJimVGs7tN7CzXo",
          authDomain: "social-media-f7e71.firebaseapp.com",
          projectId: "social-media-f7e71",
          storageBucket: "social-media-f7e71.appspot.com",
          messagingSenderId: "439276637861",
          appId: "1:439276637861:web:f3cc27fb2b876b658b074c",
          measurementId: "G-3TW1R44NYH"
        };
        
          const app = initializeApp(firebaseConfig);
          const storage = getStorage(app);
    
          this.#app = app;
          this.#storage = storage;
        }
    
        uploadMedia(fileName, media){
            try{
              const storageRef = ref(this.#storage, fileName);
              return uploadBytes(storageRef, media);
            } catch(error){
              throw error;
            }
          }
    
        
      fetchDownloadUrl(fileName){
        try{
          const storageRef = ref(this.#storage, fileName);
          return getDownloadURL(storageRef)
        } catch(error){
          throw error;
        }
      }    
}

export default new FirebaseFunction();
