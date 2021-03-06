import React, {useContext, useEffect} from 'react';
import Text from '../../components/Content/Text';
import TextImage from '../../components/Content/TextImage';
import CallToAction from '../../components/CallToAction/CallToAction';
import gsap from 'gsap';
import covid from '../../assets/images/covid19.png'
import pocus from '../../assets/images/pocus-covid.gif'
import VideoPresentation from '../../components/VideoPresentation/VideoPresentation';
import {Helmet} from 'react-helmet';
import Slider from '../../components/Slider/Slider';
import StatisticList from '../../components/StatisticNumber/StatisticList';
import PartnerList from '../../components/Partner/ParternList';
import Layout from '../Layout';
import Teaser from '../../components/Teaser/Teaser';
import configuration from '../../utils/constants';

const Home = () => {

    let tl = gsap.timeline();
    useEffect(() => {
        gsap.to('.page', 0, {visibility: 'visible'});
        tl.from('.teaser-wrapper', 1.5, {y: 500, opacity: 0, ease: 'power4.out'}, .25)
             .from('.teaser', 1.95, {scale: 2.5, autoRound: false, ease: 'power4.out'}, .05)
             .from('.teaser-text h1', .7, {y: 20, opacity: 0, ease: 'power4.out'}, 1.2)
             .from('.teaser-text p', .7, {y: 20, opacity: 0, ease: 'power4.out'}, 1.45)
             .from('.screen', .65, {y: 200, opacity: 0, ease: 'power4.out'}, 1.7)
             .from('.train', .65, {y: 200, opacity: 0, ease: 'power4.out'}, 1.95);
    });

    return (
        <Layout className="page">
            <Helmet>
                <title>Home - {configuration.appTitle}</title>
            </Helmet>
            <Teaser teaser="An AI tool for early screening of COVID-19 & pneumonia from ultrasound recordings (POCUS)"/>
            <section className="start container">
                <div className="row">
                    <div
                        className="screen col-10 offset-1 col-sm-12 mb-5 mb-md-0 offset-sm-0 col-md-6 col-lg-5 offset-lg-1">
                        <CallToAction action="/screen" title="Screen"
                                      text="Use our AI to detect COVID-19, pneumonia or healthy patient from POCUS images."
                                      linkTitle="Start screening" className="primary"/>
                    </div>
                    <div className="train col-10 offset-1 col-sm-12 offset-sm-0 col-md-6 col-lg-5">
                        <CallToAction action="/train" title="Train the AI"
                                      text="Send us your POCUS images to train our AI about COVID-19, pneumonia or healthy patient."
                                      linkTitle="Start training" className="secondary"/>
                    </div>
                </div>
            </section>
            <section className="container spacer">
                <Text title="Our sponsors"
                      text="We would like to address a special to all of our sponsors. They are helping us with hosting, data collection, promotion and so on. Without them we would never have achieved what we did."/>
                <div className="row">
                    <div className="col-lg-10 offset-lg-1">
                        <PartnerList/>
                    </div>
                </div>
            </section>
            <section className="container spacer">
                <Text title="Statistics"
                      text="Here are some statistics about our infrastructure. You can find the number of COVID-19 cases detected by the AI, the size of our dataset used to train the AI and the number of organizations that are working with us."/>
                <StatisticList/>
            </section>
            <section className="container spacer pb-3">
                <VideoPresentation title="Presentation video" videoId="1hJaVLGvzng"/>
            </section>
            <section className="container spacer pt-4">
                <Text title="The team"
                      text="We are all very proud of our collaboration, mixing a pediatrician, a medical geneticist, a deep learning and drug discovery specialist, a medical biophysics and data specialist, an economist data scientist and an actuary data scientist. Everyone brought major contribution to this project and we believe we found something that could actually help COVID-19 detection and therefore improve treatments when given at early stage."/>
                <div className="row">
                    <div className="col-lg-10 offset-lg-1">
                        <Slider/>
                    </div>
                </div>
            </section>
            <section className="container spacer">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1">
                        <TextImage orientation="textLeft" title="Early screening" subtitle="The impact" image={covid}
                                   text="Early screening enables to save life by starting the therapy earlier and avoiding people to continue to contaminate others."/>
                    </div>
                </div>
            </section>
            <section className="container spacer">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1">
                        <TextImage title="Why POCUS?" subtitle="Focusing" image={pocus}
                                   text="We focused on POCUS images, because ultrasound imaging is an easy, cost-effective and non-invasive method. It is available in almost any medical facility. Our model can identify with a 96% recall and 88% precision COVID-19 cases."/>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Home;
