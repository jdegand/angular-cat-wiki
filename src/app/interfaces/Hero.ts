import { Breed } from "./Breed"

export default interface Hero {
    id?: string
    url: string
    breeds?: Breed[]
    width: number
    height: number
}