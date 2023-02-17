import { createContext, useContext, useReducer, useMemo } from "react";

const MaterialUI = createContext();

MaterialUI.displayName = "MaterialUIContext";

function reducer(state, action) {
  switch (action.type) {
    case "OPEN_CONFIGURATOR": {
      return { ...state, openConfigurator: action.value };
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function MaterialUIControllerProvider({ children }) {
  const initialState = {
    openConfigurator: false,
  };

  const [controller, dispatch] = useReducer(reducer, initialState);

  const value = useMemo(() => [controller, dispatch], [controller, dispatch]);

  return <MaterialUI.Provider value={value}>{children}</MaterialUI.Provider>;
}

function useMaterialUIController() {
  const context = useContext(MaterialUI);

  if (!context) {
    throw new Error(
      "useMaterialUIController should be used inside the MaterialUIControllerProvider."
    );
  }

  return context;
}

const setOpenConfigurator = (dispatch, value) =>
  dispatch({ type: "OPEN_CONFIGURATOR", value });

export {
  MaterialUIControllerProvider,
  useMaterialUIController,
  setOpenConfigurator,
};
