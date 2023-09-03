import Button from '../../components/Button/Button'
import TextComponent from '../../components/Text/Text';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css'

export default function LandingPage() {
    const navigate = useNavigate();

    const goToChat = () => {
        navigate('/chat');
    };

    return (
        <div>
            <TextComponent textType='h2' textString='Enter into student info system' />
            <div className='button-container'>
                <Button text='Enroll Now' onClick={goToChat} style={{ border: '1px solid black', borderRadius: '5px', alignItems: 'center', marginTop: '0.5rem', marginLeft: '0.5rem', marginRight: '0.5rem' }} />
            </div>
        </div>
    )
}