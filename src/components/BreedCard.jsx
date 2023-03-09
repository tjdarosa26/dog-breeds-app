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
            weight, 
            height, 
            life_span
        } = breedInfo?.data

    // console.log(dogBreedData)
    

    return(
        <>
            {dogBreedData.isLoading && <div>
                <div id={styles}>
                        <div className={styles}>
                            <div className={styles}/>
                        </div>
                </div>
            </div>}

            {dogBreedData.isError && <div>
                <div id={styles}>
                        <p>Oops, something went wrong...</p>
                </div>
            </div>}

            {dogBreedData.isSuccess && 
            <div id={styles.card}>
                <div id={styles.info}>
                    

                    {/* ------------- NAME ------------- */}
                    <p id={styles.name}>
                        {name}
                    </p>


                    {/* ------------- ORIGIN ------------- */}
         
                    <div id={styles.info}>
                        <p className={styles}>
                            <mark>Origin:</mark> {origin ? origin : "N/A"}
                        </p>
                        {/* ------------- WEIGHT ------------- */}
                        <p className={styles}>
                            <mark>Weight:</mark> {weight.metric} kg ({weight.imperial} lb)
                        </p>
                        {/* ------------- HEIGHT ------------- */}
                        <p className={styles}>
                            <mark>Height:</mark> {height.metric} cm ({height.imperial} in)
                        </p>
                        {/* ------------- LIFE SPAN ------------- */}
                        <p className={styles}>
                            <mark>Life span:</mark> {life_span}
                        </p>
                    </div>
                 

                </div>

                {/* ------------- IMAGE ------------- */}
                <div id={styles.imgBackground}>
                    <div id={styles.imgContainer}>
                        <img src={breedImg.data.url} alt="Dog" id={styles.img}/>
                    </div>
                </div>
                <div id={styles.moreInfo}>
                   Click on the picture above for more info! 
                </div>
            </div>}
        </>
    )
}
