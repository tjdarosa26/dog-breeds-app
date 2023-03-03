import React from 'react'
import styles from '../style/BreedCard.module.scss'
import useDogBreed from '../query-hooks/useDogBreed'

export default function BreedCard ({breedId}) {
    
    const dogBreedData = useDogBreed(breedId)
    const breedInfo = dogBreedData?.data?.breedInfo
    const breedImg = dogBreedData?.data?.breedImg

    if (breedInfo)
        var {
            name, 
            origin, 
            temperament, 
            weight, 
            height, 
            life_span
        } = breedInfo?.data

    // console.log(dogBreedData)
    

    return(
        <>
            {dogBreedData.isLoading && <div>
                <div id={styles.loading}>
                        <div className={styles.spinnerBorder}>
                            <div className={styles.spinnerInside}/>
                        </div>
                </div>
            </div>}

            {dogBreedData.isError && <div>
                <div id={styles.error}>
                        <p>Oops, something went wrong...</p>
                </div>
            </div>}

            {dogBreedData.isSuccess && 
            <div id={styles.breed}>
                <div id={styles.breedInfoContainer}>
                    
                    {/* ------------- NAME ------------- */}
                    <p id={styles.breedName}>
                        {name}
                    </p>

                    {/* ------------- ORIGIN ------------- */}
         
                    <p className={styles.info}>
                        <mark>Origin:</mark> {origin ? origin : "N/A"}
                    </p>
             

                    {/* ------------- TEMPERAMENT ------------- */}
               
                    <p className={styles.info}>
                        <mark>Temperament:</mark> {temperament}
                    </p>
                   

                    {/* ------------- WEIGHT ------------- */}
                 
                    <p className={styles.info}>
                        <mark>Weight:</mark> {weight.metric} kg ({weight.imperial} lb)
                    </p>
                

                    {/* ------------- HEIGHT ------------- */}
                 
                    <p className={styles.info}>
                        <mark>Height:</mark> {height.metric} cm ({height.imperial} in)
                    </p>
                  

                    {/* ------------- LIFE SPAN ------------- */}
                
                    <p className={styles.info}>
                        <mark>Life span:</mark> {life_span}
                    </p>
                 

                </div>

                {/* ------------- IMAGE ------------- */}
                <div id={styles.imgContainer}>
                    <div id={styles.img}>
                        <img src={breedImg.data.url} alt="Dog" id={styles.dogBreedImg}/>
                    </div>
                </div>
            </div>}
        </>
    )
}
