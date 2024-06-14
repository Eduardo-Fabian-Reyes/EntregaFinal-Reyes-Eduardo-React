// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { collection, getDocs, getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBSfJYKTYIJbNOHSoBVQn4Ha7DS92PBbek",
    authDomain: "ecommerce-reactjs-57755-8c122.firebaseapp.com",
    projectId: "ecommerce-reactjs-57755-8c122",
    storageBucket: "ecommerce-reactjs-57755-8c122.appspot.com",
    messagingSenderId: "129113141485",
    appId: "1:129113141485:web:3aa29128dbb8fa9a491ce4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db};

// export async function getProducts(){
//     const response = await getDocs(collection(db, 'products'));

//     const listaProds=[];
//     response.forEach((prod) => listaProds.push({id: prod.id, ...prod.data()}));
//     return listaProds;
// }