import React from 'react';
import './Person.css'
const heroNames= ['alamgir','razzak','elias','jashim'];
const Person = () => {
    return (
        <div>
            {
                heroNames.map((hero)=>{
                    return (
                        <div style={{backgroundColor:'red',padding:'30px',display:'inline-block',margin:'10px'}}>
                            <h2>{hero}</h2>
                        </div>
                    )
                })
            }
        </div>
    );
};


export default Person;