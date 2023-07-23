import axios from "./axios.ts";


type Book = {

}

export default {
    getBooks(page: int = 1): Book[] {
        axios.get("")
    }
}