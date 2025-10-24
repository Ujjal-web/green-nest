import React from 'react';
import HomeSlider from '../../components/HomeSlider/HomeSlider';
import TopPlant from '../../components/TopPlant/TopPlant';
import { useLoaderData } from 'react-router';



const Home = () => {

    const topPlants = useLoaderData()
    return (
        <div>
            <HomeSlider></HomeSlider>
            <TopPlant plants={topPlants}></TopPlant>
        </div>
    );
};

export default Home;