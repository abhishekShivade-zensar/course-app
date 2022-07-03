import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc, setDoc,collection,writeBatch,query,getDocs } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDdXEzTKKjyddv0BFGuWkOHH6VrW4_Od9g",
    authDomain: "courses-app-58d02.firebaseapp.com",
    projectId: "courses-app-58d02",
    storageBucket: "courses-app-58d02.appspot.com",
    messagingSenderId: "844934059450",
    appId: "1:844934059450:web:5d293a07bef79edc817983"
  };

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore()

//for adding our project data to firebase or firestore
export const addCollectionAndDocuments=async(collectionKey,objectsToAdd)=>{
    const collectionRef=collection(db,collectionKey)
    const batch=writeBatch(db)

    objectsToAdd.forEach((object) => {
        const docRef=doc(collectionRef,object.title.toLowerCase())
        batch.set(docRef,object)
    })
    await batch.commit()
    console.log('done')
}

export const getCourseData=async()=>{
    const collectionRef=collection(db,'courses')
    const q = query(collectionRef)
    const querySnapshot= await getDocs(q)

    const courseData=querySnapshot.docs.reduce((acc,docSnapshot)=>{
        const {title,items}=docSnapshot.data()
        acc[title.toLowerCase()]=items
        return acc
    },{})

    return courseData
}

export const createUserDocumentFromAuth = async (userAuth,additionalInformation={}) => {
    const userDocRef = doc(db, 'users', userAuth.uid)

    console.log(userDocRef)

    const userSnapshot = await getDoc(userDocRef)
    console.log(userSnapshot)
    console.log(userSnapshot.exists())

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth
        const createdAt = new Date()

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            })
        } catch (error) {
            console.log(`error creating an user ${error.message}`)
        }
    }

    return userDocRef
}