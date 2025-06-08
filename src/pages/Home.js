import React from 'react'
import Banner from '../components/Banner';
import Premium from '../components/Premium';
import Entertainment from '../components/Entertainment';
import CrouselTemplate from '../components/CrouselTemplate';
import Navigation from '../components/Navigation';

export default function Home() {
    return (
        <>
            <Navigation />
            <Banner />
            <CrouselTemplate url="discover/movie" heading="Recomended Videos" />
            <Entertainment />
            <Premium />
            <CrouselTemplate url="movie/upcoming" heading="Upcomings" />
            <CrouselTemplate url="discover/tv" heading="Tv Shows" type="tv" />
        </>
    )
}
