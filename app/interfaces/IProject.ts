export interface Iproject {
    _id? :string,
    id?: string,
    name: string,
    description: string,
    homepage: string,
    createdAt?: number, // created date in timestamp
    thumbnail?: string //webp preview image
}