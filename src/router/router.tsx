import { Route, Routes } from 'react-router-dom';
import LandingPage from '../pages/LandingPage/LandingPage';
import ChatPage from '../pages/ChatPage/ChatPage';
import UserPage from '../pages/UserPage/UserPage';


export default function RouterComponent() {
    return (
        <Routes>
            <Route path="/" Component={LandingPage} />
            <Route path="/chat" Component={ChatPage} />
            <Route path="/details" Component={UserPage} />
        </Routes>
    );
}