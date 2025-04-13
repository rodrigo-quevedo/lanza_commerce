type NotificationNumberProps = {
    notificationAmmount: number
}

interface ProductCategory {
    id: number,
    name: string,
    image: string, 
    creationAt: string,
    updatedAt: string
}

interface FetchState {
    loading: boolean,
    error: string | null
}

type ReadAuthProps = {
    isAuth: boolean
}

type SetIsAuthProps = {
    setIsAuth: React.Dispatch<React.SetStateAction<boolean>>
}

type AuthProps = ReadAuthProps & SetIsAuthProps;
