import {userError} from "./AddStudent.tsx";

const UserError = ({color, text}: userError) => {
    return <li style={{color: color}}>{text}</li>
}
export default UserError