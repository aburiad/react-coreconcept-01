import React from "react";

const Hero = ()=>{
    const heroNames = [
        {heroName: 'Alamgir',Naika: 'shabana'},
        {heroName: 'Razzak',Naika: 'Kobori'},
        {heroName: 'salman',Naika: 'shabur'}
    ];
    return(
        
        <div>
            {
                heroNames.map(({heroName,Naika})=>{
                   return(
                    <h3 style={{display:'inline-block',padding:'30px',backgroundColor:'green',margin: '10px'}}>{heroName + ' ' + Naika}</h3>
                   )
                })
            }
        </div>
    )
}
export default Hero;