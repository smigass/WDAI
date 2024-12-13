import User from "./IUser.ts";

export default interface IComment {
    id: number;
    postId: number;
    body: string;
    likes: number;
    user: User
}