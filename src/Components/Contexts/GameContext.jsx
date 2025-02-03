import { createContext, useContext, useEffect, useReducer } from "react";
import { compareArrNum } from "../../utils";

const Context = createContext();

const initialState = {
  trackList: [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ],
  currentSymbol: "O",
  playerXturnTrack: [],
  playerOturnTrack: [],
  playerXName: "Rohit",
  playerOName: "Shiv",
  result: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "SET/SYMBOL":
      return {
        ...state,
        currentSymbol: action.payload,
      };
    case "UPDATE/TRACKLIST":
      return {
        ...state,
        trackList: action.payload,
      };
    case "SET/PLAYERXNAME":
      return {
        ...state,
        playerXName: action.payload,
      };
    case "SET/PLAYERONAME":
      return {
        ...state,
        playerOName: action.payload,
      };
    case "UPDATE/PLAYERXTRACK":
      return {
        ...state,
        playerXturnTrack: [...state.playerXturnTrack, action.payload],
      };
    case "UPDATE/PLAYEROTRACK":
      return {
        ...state,
        playerOturnTrack: [...state.playerOturnTrack, action.payload],
      };
    case "SET/RESULT":
      return {
        ...state,
        result: action.payload,
        playerOturnTrack: [],
        playerXturnTrack: [],
      };
    case "RESTART":
      return {
        ...initialState,
      };

    default:
      throw new Error("Cant find action type");
  }
}

function ContextProvider({ children }) {
  const [
    {
      playerOturnTrack,
      playerXturnTrack,
      playerOName,
      playerXName,
      trackList,
      currentSymbol,
      result,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  function handleNameChange(newName, playerNum) {
    if (playerNum === "X")
      dispatch({ type: "SET/PLAYERXNAME", payload: newName });
    if (playerNum === "O")
      dispatch({ type: "SET/PLAYERONAME", payload: newName });
  }

  function handleTrackListChange(newList) {
    dispatch({ type: "UPDATE/TRACKLIST", payload: newList });
  }

  function handleCurrentSymbolChange(symbol) {
    dispatch({ type: "SET/SYMBOL", payload: symbol });
  }

  function handlePlayerTurnTrack(player, pushedElement) {
    if (player === "X")
      dispatch({ type: "UPDATE/PLAYERXTRACK", payload: pushedElement });
    if (player === "O")
      dispatch({ type: "UPDATE/PLAYEROTRACK", payload: pushedElement });
  }

  function handleRestart() {
    dispatch({ type: "RESTART" });
  }

  function checkWon() {
    if (playerXturnTrack.length >= 3 && compareArrNum(playerXturnTrack))
      dispatch({ type: "SET/RESULT", payload: playerXName });
    else if (playerOturnTrack.length >= 3 && compareArrNum(playerOturnTrack))
      dispatch({ type: "SET/RESULT", payload: playerOName });
  }

  useEffect(() => {
    checkWon();
  }, [checkWon]);

  return (
    <Context.Provider
      value={{
        result,
        playerOName,
        playerXName,
        playerXturnTrack,
        playerOturnTrack,
        trackList,
        handleNameChange,
        handleTrackListChange,
        handleCurrentSymbolChange,
        handlePlayerTurnTrack,
        currentSymbol,
        handleRestart,
      }}
    >
      {children}
    </Context.Provider>
  );
}

function useGameContext() {
  const context = useContext(Context);
  return context;
}

export default ContextProvider;
export { useGameContext };
