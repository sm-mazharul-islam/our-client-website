// import React, { } from 'react';

// import Card from '@mui/material/Card';
// import CardHeader from '@mui/material/CardHeader';
// import CardMedia from '@mui/material/CardMedia';
// import CardContent from '@mui/material/CardContent';


// import Avatar from '@mui/material/Avatar';

// import Typography from '@mui/material/Typography';






// import { Button, Grid, Rating, Stack } from '@mui/material';
// import { Link } from 'react-router-dom';


// const TestimonialCard = ({ article }) => {
//     const { name,  review,  photo,  rating } = article
//     // console.log(props.article);
//     return (
//         <>
//             <Grid >
//                 <Card sx={{ maxWidth: 345  }}  >
//                     <CardHeader style={{ backgroundColor: '#bdbdbd' }}
//                         avatar={
//                             <Avatar aria-label="recipe">
//                                 <img style={{ width: '70px' }} src="https://www.kreedon.com/wp-content/uploads/2022/03/thumb-1920-549198-2.jpg" alt="" />
//                             </Avatar>
//                         }


//                         // title={name}
//                         subheader="Welcome"
//                     />
//                     <CardMedia 


//                         component="img"
//                         height="194"
//                         image={photo}
//                         alt="Paella dish"
//                     />
//                        <Avatar alt="Remy Sharp" src={photo} style={{marginLeft:'125px', width:'30%', height:'100px'}}/>
//                     <CardContent>
//                         <Typography
//                             variant="body2" color="text.secondary" style={{ color: 'black', paddingBottom: '5px' }}>
//                        Name :  {name}
//                         </Typography>
//                         <Typography
//                             variant="body2" color="text.secondary">
//                             Review : {review}
//                         </Typography>
                      
//                         <Stack spacing={1} style={{ marginLeft: '95px' }}>
//                             <Rating name="half-rating" defaultValue={rating} precision={0.5} readOnly />

//                         </Stack>
//                     </CardContent>

//                     <Stack spacing={2}>
//                         {/* <Link
//                             style={{ textDecoration: 'none', display: "block", paddingBottom: "40px" }}
//                             to={`/details/${_id}`}>
//                             <Button variant="contained">Order Now</Button>
//                         </Link> */}
//                     </Stack>
//                 </Card>
//             </Grid>

//         </>

//     )

// };

// export default TestimonialCard;

/*https://www.kreedon.com/wp-content/uploads/2022/03/thumb-1920-549198-2.jpg  */




import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// import './ReviewCard.css'
import  { Autoplay,Pagination, Navigation } from "swiper";
import { Container, Grid, Rating, Stack } from "@mui/material";

import './TestimonialCard.css'


export default function TestimonialCard() {
  const [swiperRef, setSwiperRef] = useState(null);


  const [car, setCar] = useState([]);
  useEffect(() => {
      fetch('http://localhost:7000/userReview')
          .then(res => res.json())
          .then(data => setCar(data))
  }, [])




  return (
    <>
     <Container>

     {/* <h2 style={{color:'white', border:'1px solid gray', width:'365px', margin:'auto', padding:'10px', background:'blue'}}>Our Customer Review</h2> */}
     
<h2>Our Customer Review</h2>
     




{/* <Grid container spacing={2}> */}

     <Swiper 
     loop={true}
     pagination={{ clickable: true }}
     slidesPerView={1}
     breakpoints={{
         0: {
             slidesPerView: 1,
             spaceBetween: 10,
         },
         640: {
             slidesPerView: 2,
             spaceBetween: 10,
         },
         768: {
             slidesPerView: 3,
             spaceBetween: 10,
         },
         1024: {
             slidesPerView: 4,
             spaceBetween: 10,
         },
     }}
     autoplay={{
         delay: 2500,
         disableOnInteraction: false,
     }}
     spaceBetween={10} 
        onSwiper={setSwiperRef}
        
    
        centeredSlides={false}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper "
      >
      


          {
              car.map((review) => (
               <SwiperSlide  className="swiper-slide1">
               
                        
                        <div style={{width:'100%'}} >
                            <div>
                                <div style={{ objectFit:'cover'}}>
                                    <img className="reviewImg" style={{width:'100px',height:'100px', margin:'auto', borderRadius:'50%'}} src={review.photo} alt="" />
                                </div>
                                <div >
                                <h4 className=
                                    " mt-4">Name:  {review.name}</h4>

                                <p style={{textAlign:'center'}}> <span > <small> {review.review.slice(0,150)} </small> </span></p>
                                
{/* 

                                <Stack spacing={1} style={{ marginLeft: '95px' }}>
                             <Rating name="half-rating" defaultValue={review.rating} precision={0.5} readOnly />
                      </Stack> */}
                               
                                <div className='user'>
                            </div>
                            </div>
                        </div>
                        </div>

</SwiperSlide>

))}


      </Swiper>
          
        
      {/* </Grid> */}
     </Container>
  
    </>
  );
}
