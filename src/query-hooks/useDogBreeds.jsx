import axios from 'axios'
import { useQuery } from 'react-query'

const url = 'https://api.thedogapi.com/v1/breeds'
const fetchDogBreeds = () => axios.get(url)

export default function useDogBreeds() {
    return useQuery('dogBreeds', fetchDogBreeds)
}