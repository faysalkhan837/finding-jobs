import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import { Autoplay } from 'swiper/modules';
import { useLoaderData } from 'react-router-dom';
import JobBox from '../../Component/JobBox/JobBox';
import SectionTitle from '../../Share/SectionTitle/SectionTitle';



const Home = () => {
    
    const jobsData = useLoaderData();
    const GraphicsDesign = jobsData.filter(data => data.category === "Graphics Design");
    const DigitalMarketing = jobsData.filter(data => data.category === "Digital Marketing");
    const WebDevelopment = jobsData.filter(data => data.category === "Web Development");
    const title = "Find Your Jobs"
    
    
    return (
        <div className="">
            {/* banar section */}
            <div>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}

                    modules={[Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src="/ban1.png" className='' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/ban2.png" className='' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/ban3.png" className='' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/ban4.png" className='' />
                    </SwiperSlide>
                </Swiper>
            </div>
            <SectionTitle title={title}></SectionTitle>
            {/* tab section */}
            <div className='text-center'>
                <Tabs defaultIndex={0}>
                    <TabList>
                        <Tab>Graphics Design</Tab>
                        <Tab>Digital Marketing</Tab>
                        <Tab>Web Development</Tab>
                    </TabList>

                    <TabPanel>
                        <JobBox items={GraphicsDesign}></JobBox>
                    </TabPanel>
                    <TabPanel>
                        <JobBox items={DigitalMarketing}></JobBox>
                    </TabPanel>
                    <TabPanel>
                        <JobBox items={WebDevelopment}></JobBox>
                    </TabPanel>
                </Tabs>
                <JobBox></JobBox>
            </div>
            
        </div>
    );
};

export default Home;