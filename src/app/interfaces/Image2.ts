import { Breed } from "./Breed"

export default interface Image {
    breeds: Breed[]
    id: string
    url: string
    width: number
    height: number
}