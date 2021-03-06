import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import lion_text from '../../img/lion_text.png'
import four_text from '../../img/four_text.png'
import nine_text from '../../img/nine_text.png'
import random_text from '../../img/random_text.png'
import icon_lion from '../../img/icon_lion.png'
import icon_four from '../../img/icon_four.png'
import icon_nine from '../../img/icon_nine.png'
import icon_random from '../../img/icon_random.png'



class Main extends React.Component {
    render(){
        return (
            <main className="gf_main" role="main">
                <div className="go_howto">

                </div>
                <div className="row">
                    <div className="col-xs-6">
                        <div className="go_lion linkbox_square">
                            <div className="icon_wrap">
                                <img src= { icon_lion } alt=""/>
                            </div>
                            <div className="text_wrap">
                                <img src={ lion_text } alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="go_four linkbox_square">
                            <div className="icon_wrap">
                                <img src= { icon_four } alt=""/>
                            </div>
                            <div className="text_wrap">
                                <img src={ four_text } alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-6">
                        <div className="go_nine linkbox_square">
                            <div className="icon_wrap">
                                <img src= { icon_nine } alt=""/>
                            </div>
                            <div className="text_wrap">
                                <img src={ nine_text } alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="go_random linkbox_square">
                            <div className="icon_wrap">
                                <img src= { icon_random } alt=""/>
                            </div>
                            <div className="text_wrap">
                                <img src={ random_text } alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="go_add">

                </div>
            </main>
        );
    }
}

export default Main;
