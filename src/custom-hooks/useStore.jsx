import { useEffect, useState } from "react";

let globalState = {};
let listeners = [];
let actions = {};

export default function useStore() {
  const setState = useState(globalState)[1];

  const dispatch = (identifier, payload) => {
    if (typeof identifier === "function") {
      identifier();
    } else {
      const newState = actions[identifier](globalState, payload);
      globalState = { ...globalState, ...newState };

      listeners.forEach((li) => li(globalState));
    }
  };

  useEffect(() => {
    listeners.push(setState);

    return () => listeners.filter((li) => li !== setState);
  }, [setState]);

  return [globalState, dispatch];
}

export const initStore = (storeActions, initialState) => {
  if (initialState) {
    globalState = { ...globalState, ...initialState };
  }
  actions = { ...actions, ...storeActions };
};
