type ComponentParams = {
    text: string
}

export default function ButtonText({text}: ComponentParams) {
    return (
        <span
            className="text-black text-xs
                        sm:hidden
        ">
            {text}
        </span>
    )
}