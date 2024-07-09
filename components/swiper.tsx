'use client'

import { metadata } from '@/app/metadata';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';

import { Autoplay, EffectFade, Grid, Pagination, Scrollbar } from 'swiper/modules'


const SwiperContainer = () => {
    return (
        <>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination, Autoplay]}
                autoplay={{ delay: 2750 }}
                loop={true}
                className="mySwiper"
            >
                <SwiperSlide><p className='text-center'>{metadata.section[5].quote}</p></SwiperSlide>
                <SwiperSlide><p className='text-center'>{metadata.section[5].quote1}</p></SwiperSlide>
                <SwiperSlide><p className='text-center'>{metadata.section[5].quote2}</p></SwiperSlide>
            </Swiper>
        </>
    )
}

export default SwiperContainer

// {JavaScript} Typescript, HTML, CSS, Node JS, AWS
// Python, Pandas, GitHub, Dynamo DB, Mongo DB, Redux, Next JS, React JS, Express JS
// Powershell, Linux, Yaml, 
// Figma
// Jira, Bitbucket, 