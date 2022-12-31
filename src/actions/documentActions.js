import * as documentAction from "./action";
import { v4 as uuidv4 } from "uuid";

export const setDocument = (skinCd) => {
  return {
    type: documentAction.SET_SKIN,
    payload: {
      id: uuidv4(),
      skinCd,
    },
  };
};

export const updateDocument = (skinCd) => {
  return {
    type: documentAction.UPDATE_SKIN,
    payload: {
      skinCd,
    },
  };
};
