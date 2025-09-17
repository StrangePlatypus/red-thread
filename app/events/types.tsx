export interface Event {
    id: number,
    title: string,
    date: Date,
    address: string,
    postalCode: number,
    city: string,
    description?: string,
}