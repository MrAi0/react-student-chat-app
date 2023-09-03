import { useSelector } from "react-redux";
import './UserPage.css'
import TextComponent from "../../components/Text/Text";

export default function UserPage() {
    const user = useSelector((state: any) => state.user);

    return (
        <div className="user-details">
            <TextComponent textString={` ✨ Your name ${user.name} aged ${user.age} has been added to student system. You may now exit.`} textType="p" style={{ color: 'green', fontSize: 25, fontWeight: 'bolder', "textAlign": "center" }} />
        </div>
    )

}