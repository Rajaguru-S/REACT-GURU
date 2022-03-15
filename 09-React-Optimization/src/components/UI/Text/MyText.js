import React from 'react';
import MyParagraph from './MyParagraph';

const MyText = props => {
    console.log('MyText');
    return <MyParagraph>{props.show ? 'Raja' : ''}</MyParagraph>
}

export default React.memo(MyText);