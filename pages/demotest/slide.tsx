import Head from 'next/head'
import React from 'react'
import Layout from '../../components/Layout'

// import { Slide, Zoom } from 'react-slideshow-image';
// import 'react-slideshow-image/dist/styles.css'
// import { Card } from 'react-bootstrap';
// import { CardContent, Typography } from '@mui/material';
// import Image from 'next/image';

// const images = [
//     '/images/1.jpg',
//     '/images/2.jpg',
//     '/images/3.jpg',
//     '/images/5.jpg',
//     '/images/4.jpg',
//     '/images/6.jpg'
// ];

// const slideImages = [
//     {
//         url: '/slide/slide4.jpg',
//         caption: 'Slide 1'
//     },
//     {
//         url: '/slide/slide5.jpg',
//         caption: 'Slide 2'
//     },
//     {
//         url: '/slide/slide6.jpg',
//         caption: 'Slide 3'
//     },
// ];
const Index = () => {
    return (
        <Layout>
            <Head>
                <title>Demo test</title>
            </Head>
            {/* //              <Zoom scale={0.4}>
//                 { 
//                     images.map((each, index) => <Image key={index} style={{ width: "100%" }} src={each} />)
//                 }
//             </Zoom>
//             <Slide >
//                 {slideImages.map((slideImage, index) => (
//                     <Card className="each-slide" key={index}>
//                         <CardContent style={{ 'backgroundImage': `url(${slideImage.url})` }}>
//                              <CardContent> 
//                             <Image src={slideImage.url} alt="" />
//                             <Typography>{slideImage.caption}</Typography>
//                         </CardContent>
//                     </Card>
//                 ))}
//             </Slide> */}
        </Layout>
    )
}

export default Index