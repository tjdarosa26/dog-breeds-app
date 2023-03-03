import React from 'react'
import styles from '../style/BreedsList.module.scss'
import useDogBreeds from '../query-hooks/useDogBreeds';

export default function BreedsList ({setBreedId}) {

    const dogBreeds = useDogBreeds()

    const clickOnBreed = (e) => {
        setBreedId(e.target.id)
    }

    return(
        <>
            <div id={styles.howToUseContainer}>
                <p>Select a dog breed to see the info!</p>
            </div>

            {dogBreeds.isLoading && 
            <div className={styles.loading}>
                <div className={styles.spinnerBorder}>
                    <div className={styles.spinnerInside}/>
                </div>
            </div>}

            {dogBreeds.isError && 
            <div className={styles.error}>
                Oops, somthing went wrong...
            </div>}
            
            {dogBreeds.isSuccess && 

                <ul id={styles.breedsList}>
                
                    {dogBreeds.data.data.map((dogBreed) => (
                
                    
                    <li
                    key={dogBreed.id}
                    id={dogBreed.id}
                    className={styles.listItem}
                    onClick={clickOnBreed}>
            
            
                        <p 
                        className={styles.listItem}
                        id={dogBreed.id}>
                            
                            {dogBreed.name}
                        
                        </p>
            
            
                    </li>
                    
                
                    ))}
                </ul>
            }
        </>
    )
}
