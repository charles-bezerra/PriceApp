import { defaultID } from "../constants";
import { getRealm } from "../services/realm.service";

export const saveLogo = async (logo) => {
  const realm = await getRealm();
  try {
    const result = realm.objectForPrimaryKey('Logo', logo.id);
    if (!result) {
      realm.write(() => {
        const newlogo = realm.create('Logo', logo);
        return newlogo;
      });
      return true;
    }
    else {
      return false;
    }
  }
  catch (err) {
    console.log(error);
    return false;
  }
};

export const updateLogo = async (newLogo) => {
  const realm = await getRealm();
  try {
    realm.write(() => {
      const logo = realm.objectForPrimaryKey("Logo", newLogo.id);

      Object
        .keys(newLogo)
        .forEach((key) => {
          if (key !== "id" && logo[key] !== newLogo[key]) {
            logo[key] = newLogo[key];
          }
        });
    });

    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const saveCurrentLogo = async (newLogo) => {
  newLogo.id = defaultID;
  const saved = await saveLogo(newLogo);

  if (saved) {
    return true;
  }
  else {
    const updated = await updateLogo(newLogo);
    if (updated) return true;
    else return false;
  }
};

export const getLogo = async (id) => {
  const realm = await getRealm();

  try {
    const logo = realm.objectForPrimaryKey('Logo', id);
    
    if (logo) {
      const logoStringify = JSON.stringify(logo);
      return JSON.parse(logoStringify);
    }
    else 
      return null;
  }
  catch (err) {
    console.log(err);
    return null;
  }
}