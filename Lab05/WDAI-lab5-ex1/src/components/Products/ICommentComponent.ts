import IComment from "./IComment.ts";

export default interface ICommentComponent {
    like: (i: number) => void;
    dislike: (i: number) => void;
    comment: IComment;
}