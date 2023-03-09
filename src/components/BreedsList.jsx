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
            <div id={styles.howToUse}>
                <p>Select a dog breed below!</p>
            </div>

            {dogBreeds.isLoading && 
            <div className={styles}>
                <div className={styles}>
                    <div className={styles}/>
                </div>
            </div>}

            {dogBreeds.isError && 
            <div className={styles}>
                Oops, somthing went wrong...
            </div>}
            
            {dogBreeds.isSuccess && 

                <div id={styles.listContainer}>
                    <ul id={styles.list}>
                    
                        {dogBreeds.data.data.map((dogBreed) => (
                    
                    
                        <li
                        key={dogBreed.id}
                        id={dogBreed.id}
                        className={styles}
                        onClick={clickOnBreed}>
                            <p
                            className={styles}
                            id={dogBreed.id}>
                    
                                {dogBreed.name}
                    
                            </p>
                        </li>
                    
                    
                        ))}
                    </ul>
                </div>
            }
        </>
    )
}
