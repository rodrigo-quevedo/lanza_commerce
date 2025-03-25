type NotificationNumberProps = {
    number: number,
    notificationClassName: string
}



interface FakeStoreCathegory {
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