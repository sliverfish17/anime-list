import axios from "axios";
import { db } from "../firebase";
import { arrayUnion, arrayRemove } from "firebase/firestore";
import { ISearch } from "../types/service";

async function createUser(
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

export const idToPromise = (animeId: number): Promise<ISearch> => {
  return axios
    .get(`https://api.jikan.moe/v3/anime/${animeId}`)
    .then((data) => data?.data);
};

export async function getAnime(ids: number[] | undefined): Promise<ISearch[]> {
  if (!ids) return [];
  return Promise.all(ids.map((id) => idToPromise(id)));
}

async function newAnimeCheck(
  uid: string | undefined,
  name: string,
  item: number,
  doc: any
) {
  if (doc.data()?.current.length === 0) {
    await db
      .collection("users")
      .doc(uid)
      .update({ [name]: [item] });
  } else {
    await db
      .collection("users")
      .doc(uid)
      .update({ [name]: arrayUnion(item) });
  }
}

export async function setNewAnime(
  uid: string | undefined,
  list: number,
  item: number
) {
  const userRef = db.collection("users").doc(uid);
  const doc = await userRef.get();
  const names = ["current", "planning", "completed", "paused", "dropped"];
  for (let i = 0; i < names.length; i++) {
    if (list === i) {
      await newAnimeCheck(uid, names[i], item, doc);
      break;
    }
  }

  return doc.data();
}

export function transferAnime(
  animeId: number,
  oldList: string,
  newList: any,
  uid: string | undefined
) {
  db.collection("users")
    .doc(uid)
    .get()
    .then((doc) => {
      const userArr = doc.data();
      if (userArr) {
        console.log(userArr);
        userArr[oldList] = userArr[oldList].filter((e) => e !== animeId);
        userArr[newList].push(animeId);
        db.collection("users").doc(uid).set(userArr);
      }
    });
}

export async function deleteAnime(
  uid: string | undefined,
  item: number,
  name: string
) {
  await db
    .collection("users")
    .doc(uid)
    .update({ [name]: arrayRemove(item) });
}
