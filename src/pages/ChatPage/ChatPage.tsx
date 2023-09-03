import Button from '../../components/Button/Button';
import './ChatPage.css'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from "react";
import { setInitialStep, setName, setAge } from '../../store/userSlice';
import { useNavigate } from 'react-router-dom';

export default function ChatPage() {
    const navigate = useNavigate();
    const user = useSelector((state: any) => state.user);
    const dispatch = useDispatch();
    const [messages, setMessages] = useState<Message[]>([]);
    const [userName, setUserName] = useState('');
    const [userAge, setUserAge] = useState('');
    const [seconds, setSeconds] = useState(5);

    const addMessage = (text: string, type: 'bot' | 'user') => {
        setMessages((prevMessages) => [...prevMessages, { text, type }]);
    };

    useEffect(() => {
        if (messages.length < 1 && !user.initialStep) {
            addMessage('Hello, Welcome to student info system!', 'bot');
        }
    }, []);

    const handleGotItClick = () => {
        dispatch(setInitialStep(true));
        addMessage('Got It', 'user');
        addMessage('Enter your name', 'bot');
    };

    const handleNameInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(event.target.value);
    };

    const handleNameSubmit = () => {
        if (userName) {
            dispatch(setName(userName));
            addMessage(`${userName}`, 'user');
            addMessage('Enter your Age', 'bot');
        }
    };

    const handleAgeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setUserAge(event.target.value);
    };

    const handleAgeSubmit = () => {
        if (userAge) {
            dispatch(setAge(userAge));
            addMessage(`${userAge}`, 'user');
            addMessage('Thank you. In 5 seconds, bot will exit', 'bot');
        }
    };

    useEffect(() => {
        if (seconds > 0 && user.name && user.age) {
            const timer = setInterval(() => {
                setSeconds((prevSeconds) => prevSeconds - 1);
                addMessage(`${seconds}`, 'bot');
            }, 1000);

            return () => clearInterval(timer);
        } else if (seconds === 0) {
            navigate('/details')
        }
    }, [seconds, user]);

    return (
        <div className="chat-container">
            <div className="chat">
                {messages.map((message, index) => (
                    <div key={index}>
                        {
                            <div className={message.type === 'user' ? 'user-name' : 'bot-name'}>{message.type === 'user' ? 'User' : 'Bot'}</div>
                        }
                        <div key={index} className={message.type}>
                            {message.text}
                        </div>
                    </div>
                ))}
                {
                    !user.initialStep &&
                    <div style={{ display: 'flex', marginLeft: '0.5rem' }}>
                        <Button text='Got It' onClick={handleGotItClick} style={{ border: '1px solid black', borderRadius: '5px', }} />
                    </div>
                }
                {
                    !user.name && user.initialStep &&
                    <div>
                        <input className='name-field' type='text' onChange={(e) => {
                            handleNameInput(e);
                        }} />
                        <Button text='Submit' onClick={handleNameSubmit} style={{ border: '1px solid black', borderRadius: '5px', marginTop: "0.5rem", marginLeft: "0.5rem" }} />
                    </div>
                }
                {
                    !user.age && user.name && user.initialStep &&
                    <div>
                        <select className='age-field' value={userAge} onChange={handleAgeChange}>
                            <option value="">Select Age</option>
                            {Array.from({ length: 23 }, (_, i) => i + 18).map((value) => (
                                <option key={value} value={value}>
                                    {value}
                                </option>
                            ))}
                        </select>
                        <Button text='Submit' onClick={handleAgeSubmit} style={{ border: '1px solid black', borderRadius: '5px', marginTop: "0.5rem", marginLeft: "0.5rem" }} />
                    </div>
                }
            </div>
        </div>
    )
}

interface Message {
    text: string;
    type: 'bot' | 'user';
}