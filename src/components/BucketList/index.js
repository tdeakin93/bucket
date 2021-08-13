import React, {useState} from 'react';
import Bucket from './../Bucket';
import BucketForm from "./../BucketForm";
import styles from './../BucketList';

function BucketList() {

    const [bucket, setBucket] = useState("");
    const [bucketList, setBucketList] = useState([]);

    return (
      <div>
            <h1 className={styles.bucket}>What the buck is going on</h1>
            <div>your item: {bucket}</div>
        
            <BucketForm bucketList={bucketList} setBucketList={setBucketList} bucket={bucket} setBucket={setBucket}/>
            
        <ul>
          {bucketList.map((item, index) => (
            <Bucket key={index}>{item}</Bucket>
          ))}
        </ul>
      </div>
    );
}

export default BucketList;