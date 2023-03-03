import React, { useState } from 'react'
import BreedsList from '../components/BreedsList'
import BreedCard from '../components/BreedCard'
import styles from '../style/Dashboard.module.scss'


export default function Dashboard () {
    const [breedId, setBreedId] = useState(1)


    return(
        <>
            <div id={styles.dashboard}>
                
                <BreedCard breedId={breedId}/>
                
                <BreedsList setBreedId={setBreedId} />
                
            </div>
            
        </>
    )
}
