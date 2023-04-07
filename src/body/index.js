import React from "react";
import './style.css'

const Body = () => {
    return(
        <div className="wrap__main">
            <div className="main__images">
                <img src={'https://static.wixstatic.com/media/d78df6_4517dc1e0b1545bf84dccd915203c870.jpg/v1/fill/w_460,h_460,al_c,q_80,enc_auto/d78df6_4517dc1e0b1545bf84dccd915203c870.jpg'} className="image1"/>
                <img src={'https://static.wixstatic.com/media/d78df6_9f4f79dd27814710b261e3acb931156e.jpg/v1/fill/w_458,h_687,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/d78df6_9f4f79dd27814710b261e3acb931156e.jpg'} className="image2"/>
                <img src={'https://static.wixstatic.com/media/d78df6_914d12d64a57420c99737b9933ebe7fc.jpg/v1/fill/w_687,h_687,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/d78df6_914d12d64a57420c99737b9933ebe7fc.jpg'} className="image3"/>
                <img src={'https://static.wixstatic.com/media/d78df6_3eea4c192eed4667a602ead5652459c5.jpg/v1/fill/w_687,h_687,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/d78df6_3eea4c192eed4667a602ead5652459c5.jpg'} className="image4"/>
                <img src={'https://static.wixstatic.com/media/d78df6_b572be78b8984e2db58978eb21e433d7.jpg/v1/fill/w_687,h_687,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/d78df6_b572be78b8984e2db58978eb21e433d7.jpg'} className="image5"/>
                <img src={'https://static.wixstatic.com/media/d78df6_afe9335eb67640c988d648f7671308e5.jpg/v1/fill/w_687,h_687,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/d78df6_afe9335eb67640c988d648f7671308e5.jpg'} className="image6"/>
                <img src={'https://static.wixstatic.com/media/d78df6_b9747effc3074458a295cf5674f8c73c.jpg/v1/fill/w_687,h_687,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/d78df6_b9747effc3074458a295cf5674f8c73c.jpg'} className="image7"/>
                <img src={'https://static.wixstatic.com/media/d78df6_394a136048754355ad8432b30522c761.jpg/v1/fill/w_687,h_687,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/d78df6_394a136048754355ad8432b30522c761.jpg'} className="image8"/>
                <img src={'https://static.wixstatic.com/media/d78df6_24dc2b5011604bc7ada79cbd953a7c5a.jpg/v1/fill/w_687,h_687,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/d78df6_24dc2b5011604bc7ada79cbd953a7c5a.jpg'} className="image9"/>
            </div>

            <footer className="main__madeby">
                <span className="madeby__text">© 2035 Олег Марков. Сайт создан на Wix.com.</span>
                <div className="madeby__links">
                    <a href="https://www.facebook.com/"><img src={"https://static.wixstatic.com/media/8d2c2a4846503b9067e2fd2f590445c2.wix_mp/v1/fill/w_17,h_17,al_c,usm_0.66_1.00_0.01,enc_auto/8d2c2a4846503b9067e2fd2f590445c2.wix_mp"} target="_blank"/></a>
                    <a href="http://www.flickr.com/photos/wixcom/page1/"><img src={"https://static.wixstatic.com/media/f33e5c8ff44ad726a15419f6ff97b3fd.png/v1/fill/w_17,h_17,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f33e5c8ff44ad726a15419f6ff97b3fd.png"} target="_blank"/></a>    
                    <a href="http://www.twitter.com/wix"><img src={"https://static.wixstatic.com/media/fe7017590fbd384c7502a64601c7b444.png/v1/fill/w_17,h_17,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/fe7017590fbd384c7502a64601c7b444.png"} target="_blank"/></a>
                    <a href="http://www.pinterest.com/wixcom/"><img src={"https://static.wixstatic.com/media/a0a5617532c029a9bcc4b6490606cc49.png/v1/fill/w_17,h_17,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/a0a5617532c029a9bcc4b6490606cc49.png"} target="_blank"/></a>
                </div>
            </footer>
        </div>
    )
}

export default Body