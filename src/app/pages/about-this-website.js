import React, { Component } from 'react';
import ButtonCta1 from '../elements/buttonCta1';
import ButtonCta2 from '../elements/buttonCta2';

class AboutThisWebsite extends React.Component {
    render() {
        const title = "A webpack platform setup";
        const subTitle = "With react, babel, uglifyers, fontawesome, a prefixer and hot-loader";
        return (
        <div>
            <h1>{title}</h1>
            <h3>{subTitle}</h3>
            <ButtonCta1 /> <ButtonCta2 />
        </div>
        )
    }
}

export default AboutThisWebsite;