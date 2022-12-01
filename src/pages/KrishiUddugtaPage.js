import React, {Component, Fragment} from 'react';
import PageTop from "../components/PageTop/PageTop";
import Footer from "../components/Footer/Footer";
import Header from '../components/Header/Header';
import Orthouddug from '../components/Orthouddug/Orthouddug';
import FarmToProkriti from '../components/FarmToProkriti/FarmToProkriti';

class KrishiUddugtaPage extends Component {
    componentDidMount() {
        window.scroll(0, 0)

    }
    render() {
        return (
            <Fragment>
                <Header title="ফার্ম টু ডাইনিং"/>
                <PageTop pagetitle="ফার্ম টু ডাইনিং"/>
                {/* <Orthouddug /> */}
                <FarmToProkriti />
                

                <Footer/>


            </Fragment>
        );
    }
}

export default KrishiUddugtaPage;