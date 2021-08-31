import { db } from "../firebase";

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

export async function getUserInfo(uid: string | undefined) {
  const userRef = db.collection("users").doc(uid);
  const doc = await userRef.get();
  return doc.data();
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
        await db.collection("users").doc(uid).update({ current: item });
      } else {
        await db.collection("users").doc(uid).update({ current: item });
      }
      console.log(doc.data()?.current);

      break;
    case 1:
      if (doc.data()?.planning.length === 0) {
        await db
          .collection("users")
          .doc(uid)
          .update({ planning: { anime: item } });
      } else {
        await db
          .collection("users")
          .doc(uid)
          .update({ planning: { anime: item } });
      }
      console.log(doc.data()?.planning);

      break;
    case 2:
      if (doc.data()?.completed.length === 0) {
        await db
          .collection("users")
          .doc(uid)
          .update({ completed: { anime: item } });
      } else {
        await db
          .collection("users")
          .doc(uid)
          .update({ completed: { anime: item } });
      }
      console.log(doc.data()?.completed);

      break;
    case 3:
      if (doc.data()?.paused.length === 0) {
        await db
          .collection("users")
          .doc(uid)
          .update({ paused: { anime: item } });
      } else {
        await db
          .collection("users")
          .doc(uid)
          .update({ paused: { anime: item } });
      }
      console.log(doc.data()?.paused);

      break;
    case 4:
      if (doc.data()?.dropped.length === 0) {
        await db
          .collection("users")
          .doc(uid)
          .update({ dropped: { anime: item } });
      } else {
        await db
          .collection("users")
          .doc(uid)
          .update({ dropped: { anime: item } });
      }
      console.log(doc.data()?.dropped);

      break;
    default:
      return doc.data();
  }
  return doc.data();
}
