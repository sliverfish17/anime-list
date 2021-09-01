import axios from "axios";
import { db } from "../firebase";
import { arrayUnion } from "firebase/firestore";
import { ISearch } from "../types/service";

export async function createUser(
  displayName: string,
  email: string,
  photoURL: string,
  uid: string
) {
  try {
    await db.collection("users").doc(uid).set({
      id: uid,
      name: displayName,
      email: email,
      photo: photoURL,
      current: [],
      planning: [],
      completed: [],
      paused: [],
      dropped: [],
    });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export async function loginCheck(
  displayName: string,
  email: string,
  photoURL: string,
  uid: string
) {
  const userRef = db.collection("users").doc(uid);
  const doc = await userRef.get();
  if (!doc.exists) {
    createUser(displayName, email, photoURL, uid);
  } else {
    return doc.data();
  }
}

export function getCurrentUser(uuid: string | undefined) {
  if (uuid) {
    const docRef = db.collection("users").doc(uuid);
    return docRef
      .get()
      .then((doc) => {
        return doc.data();
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }
}

export const idToPromise = (id: number): Promise<ISearch> => {
  return axios
    .get(`https://api.jikan.moe/v3/anime/${id}`)
    .then((data) => data?.data);
};

export function getAnime(ids: number[]): Promise<ISearch[]> {
  return Promise.all(ids?.map((id) => idToPromise(id)));
}

export async function setNewAnime(
  uid: string | undefined,
  list: number,
  item: number
) {
  const userRef = db.collection("users").doc(uid);
  const doc = await userRef.get();

  switch (list) {
    case 0:
      if (doc.data()?.current.length === 0) {
        await db
          .collection("users")
          .doc(uid)
          .update({ current: [item] });
      } else {
        await db
          .collection("users")
          .doc(uid)
          .update({ current: arrayUnion(item) });
      }

      break;
    case 1:
      if (doc.data()?.planning.length === 0) {
        await db
          .collection("users")
          .doc(uid)
          .update({ planning: [item] });
      } else {
        await db
          .collection("users")
          .doc(uid)
          .update({ planning: arrayUnion(item) });
      }

      break;
    case 2:
      if (doc.data()?.completed.length === 0) {
        await db
          .collection("users")
          .doc(uid)
          .update({ completed: [item] });
      } else {
        await db
          .collection("users")
          .doc(uid)
          .update({ completed: arrayUnion(item) });
      }

      break;
    case 3:
      if (doc.data()?.paused.length === 0) {
        await db
          .collection("users")
          .doc(uid)
          .update({ paused: [item] });
      } else {
        await db
          .collection("users")
          .doc(uid)
          .update({ paused: arrayUnion(item) });
      }

      break;
    case 4:
      if (doc.data()?.dropped.length === 0) {
        await db
          .collection("users")
          .doc(uid)
          .update({ dropped: [item] });
      } else {
        await db
          .collection("users")
          .doc(uid)
          .update({ dropped: arrayUnion(item) });
      }

      break;
    default:
      return doc.data();
  }
  return doc.data();
}
