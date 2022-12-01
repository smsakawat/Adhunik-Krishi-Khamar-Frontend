import React from 'react';
import AppRoute from "./router/AppRoute";
import {BrowserRouter} from "react-router-dom";
import { MessengerChat } from "react-messenger-chat-plugin";

function App() {
    return (
        <BrowserRouter>
            <AppRoute/>
            <MessengerChat
    pageId="455120307946675"
    language="English"
    themeColor={"#000000"}
    bottomSpacing={20}
    loggedInGreeting="loggedInGreeting"
    loggedOutGreeting="loggedOutGreeting"
    greetingDialogDisplay={"show"}
    debugMode={true}
    onMessengerShow={() => {
      console.log("onMessengerShow");
    }}
    onMessengerHide={() => {
      console.log("onMessengerHide");
    }}
    onMessengerDialogShow={() => {
      console.log("onMessengerDialogShow");
    }}
    onMessengerDialogHide={() => {
      console.log("onMessengerDialogHide");
    }}
    onMessengerMounted={() => {
      console.log("onMessengerMounted");
    }}
    onMessengerLoad={() => {
      console.log("onMessengerLoad");
    }}
  />
        </BrowserRouter>
    );
}

export default App;
