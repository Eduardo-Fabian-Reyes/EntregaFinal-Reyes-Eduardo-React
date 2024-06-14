import { collection, getDocs, query, where, doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";

export const getProducts = async (category) => {
    let productsCollection = collection(db, "products");
    if (category) {
        productsCollection = query(productsCollection, where("categoria", "==", category));
    }
    const productSnapshot = await getDocs(productsCollection);
    const productList = productSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data()}));
    return productList;
};

export const getProductById = async (id, category) => {
    let productRef = doc(db, "products", id);
    if (category) {
        productRef = query(productRef, where("categoria", "==", category));
    }
    const productDoc = await getDoc(productRef);
    if (productDoc.exists()) {
        return {id: productDoc.id, ...productDoc.data()};
    } else {
        throw new Error("Lo sentimos, producto no encontrado")
    }
};