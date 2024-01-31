import React from 'react'
import {Chip, Tooltip} from '@mui/material'
import styles from './Card.module.css'

const Card = ({data, type}) => {
  
    const getCard = (type) => {
        switch(type){
            case "album":{
                // eslint-disable-next-line no-unused-vars
                const {image, follows, title, slug, songs} = data;
                return (
                    <Tooltip title={`${songs.length} songs`} placement='top' arrow>
                        <div className={styles.wrapper}>
                            <div className={styles.card}>
                                <img src={image} alt='Album'/>
                                <div className={styles.banner}>
                                    <Chip label={`${follows} Follows`} size='small' className={styles.chip}/>
                                </div>
                            </div>
                            <div className={styles.titleWrapper}>
                            <p>{title}</p>
                            </div>
                        </div>
                    </Tooltip>
                );
            }



            case "song": {
                const {image, likes, title} = data;

                return (
                    <div className={styles.wrapper}>
                    <div className={styles.card}>
                        <img src={image} alt='Song'/>
                        <div className={styles.banner}>
                             <div className={styles.pill}>
                                <p>{likes} Likes</p>
                             </div>
                        </div>
                    </div>
                    <div className={styles.titleWrapper}>
                    <p>{title}</p>
                    </div>
                </div>
                );

            }

            default:
                return <></>;
        }
    }

    return getCard(type);
}

export default Card