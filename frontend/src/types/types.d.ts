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

interface Product {
    id: number,
    title: string,
    slug: string,
    price: number,
    description: string,
    category: {id: number},
    images: string[]//urls
}

type ProductProps = {
    product: Product
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
