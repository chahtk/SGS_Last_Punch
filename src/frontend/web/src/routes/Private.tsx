import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Chat from '../components/Main/Chat';
import Welcome from '../pages/Welcome';
import WsCreator from '../pages/CreateWs';

export default function PrivateRoute() {
  return (
    <Routes>
      <Route path="/" element={<Welcome></Welcome>}></Route>
      <Route path="/create-workspace" element={<WsCreator />}></Route>
      <Route path="/chat" element={<Chat />}></Route>
      <Route path="/*" element={<Navigate to={'/'}></Navigate>}></Route>
    </Routes>
  );
}
