import React from 'react';
import HomeSlider from '../../components/HomeSlider/HomeSlider';
import TopPlant from '../../components/TopPlant/TopPlant';
import { useLoaderData } from 'react-router';
import PlantCareTips from '../../components/PlantCareTips/PlantCareTips';
import GreenExperts from '../../components/GreenExperts/GreenExperts';



const Home = () => {

    const topPlants = useLoaderData()
    return (
        <div className="bg-green-50">
            <HomeSlider></HomeSlider>
            <TopPlant plants={topPlants}></TopPlant>
            <PlantCareTips></PlantCareTips>
            <GreenExperts></GreenExperts>
        </div>
    );
};

export default Home;