import axios from 'axios'
import { useQuery } from 'react-query'

const fetchDogBreed = async (breedId) => {
    // BREED INFO
    const breedInfoUrl = `https://api.thedogapi.com/v1/breeds/${breedId}`
    // console.log(breedInfoUrl)
    const breedInfo = await axios.get(breedInfoUrl)
    // console.log(breedInfo);

    // BREED IMAGE
    const imgId = breedInfo.data?.reference_image_id
    // console.log(imgId)
    const imgUrl = `https://api.thedogapi.com/v1/images/${imgId}?size=full`
    // console.log(imgUrl)
    const breedImg = await axios.get(imgUrl)
    // console.log(breedImg)


    return {breedInfo, breedImg}
}

export default function useDogBreed(breedId){
    return useQuery(['breed', breedId], () => fetchDogBreed(breedId))
}