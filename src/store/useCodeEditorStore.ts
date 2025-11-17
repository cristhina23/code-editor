import { create } from "zustand";
import { CodeEditorState } from "../types";

const getInitialState = () => {
  //if we're on the server, return default values

  if ( typeof window === "undefined" ) {
    return {
      language: "javascript",
      theme: "vs-dark",
      fontSize: 16,
    }
  }

  //if we're on the client, return persisted values
  const savedLanguage = localStorage.getItem("editor-language") || "javascript";
  const savedTheme = localStorage.getItem("editor-theme") || "vs-dark";
  const savedFontSize = localStorage.getItem("editor-font-size") || 16;

  return {
    language: savedLanguage,
    theme: savedTheme,
    fontSize: Number(savedFontSize),
  }
}

export const useCodeEditorStore = create<CodeEditorState>((set, get) =>{
  const initialState = getInitialState();

  return {
    ...initialState,
    output: "",
    isRunning: false,
    error: null,
    editor: null,
    executionResult: null,
    //getCode: () => get().editor?.getValue() || "",
})