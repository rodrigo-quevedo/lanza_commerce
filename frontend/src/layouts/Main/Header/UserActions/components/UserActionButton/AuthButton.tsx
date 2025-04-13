
type Props = {
    text: string
    primary?: boolean
}

export default function AuthButton ({text, primary}: Props) {
    return (
        <button className={`
            flex-1 sm:flex-none
            text-black sm:text-white
            border-1 border-black sm:border-white rounded-4xl
            py-2 px-3
            m-2
            ${primary? 
                `
                bg-[#A61713] sm:bg-white
                text-white sm:text-black! font-medium
                border-[#A61713]! sm:border-black
                `
                : 
                ""
            }

            hover:cursor-pointer hover:scale-105 transition-all
        `}>
            {text}
        </button>
    )
}

