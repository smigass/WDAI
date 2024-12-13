export default function Button({clickAction, text}: { clickAction: () => void, text: string }) {
    return (
        <button onClick={clickAction}>
            {text}
        </button>
    )
}
