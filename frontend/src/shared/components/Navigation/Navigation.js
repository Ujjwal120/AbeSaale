import React from 'react';

import Header from './Header';
import './Navigation.css'

const Navigation = () => {
    return (
        <Header>
            {/* Logo NW */}
            <div className = "inge-lao">
                <div>
                    <svg
                        className = "border-lagao"
                        xmlns="http://www.w3.org/2000/svg"
                        width="78" height="62"
                        viewBox="0 0 20.6375 17.991666">
                        <g
                            id="layer1"
                            transform="translate(-0.07190851,0.75648259)"
                            display = "inline">
                            <text
                                lineHeight = "1.25" opacity = "1"
                                x="-0.26950112"
                                y="15.177261"
                                id="text3462"
                                transform="scale(0.98404441,1.0162143)">
                            <tspan
                                id="tspan3460"
                                className = "anim-N-1"
                                fontStyle = "normal" fontVariant = "normal" fontWeight = "normal" fontStretch = "normal" fontSize = "20.2779px" fontFamily = 'Cascadia Code PL' fill = "#d40000" fill-Opacity = "1" stroke = "none" strokeWidth = "0.53351" strokeLinejoin = "round" strokeMiterlimit = "4" strokeOpacity = "0">N</tspan></text>
                            <text
                                lineHeight = "1.25" opacity = "0.992647"
                                id="text3466"
                                transform="scale(0.98404441,1.0162143)">
                            <tspan
                                className = "anim-N-2"
                                id="tspan3464"
                                x="8.2441244"
                                y="15.177261"
                                fontStyle = "normal" fontVariant = "normal" fontWeight = "normal" fontStretch = "normal" fontSize = "20.2779px" fontFamily = 'Cascadia Code PL' fill = "#ffffff" fill-Opacity = "0.902857" stroke = "none" strokeWidth = "0.53351" strokeLinejoin = "round" strokeMiterlimit = "4" strokeOpacity = "0">W</tspan></text>
                        </g>
                    </svg>
                </div>
            </div>

            {/* bell icon */}
            <div className = "hvr-icon-buzz unge-lejao">
                <div className = "hvr-icon">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="31.829262"
                        height="31.75"
                        viewBox="0 0 8.4214915 8.4005202">
                        <g
                            id="layer1"
                            transform="translate(0.77649728,2.0046166)"
                            display = "inline">
                            <path
                                opacity = "0.839344" fill = "#ffffff" fillOpacity = "1" fillRule = "evenodd" strokeWidth = "0.189"
                                id="path2768"
                                d="m 6.5537888,12.190227 c 0.074987,0.160608 0.1249703,0.330809 0.1799209,0.498799 0.045859,0.127376 0.1077706,0.247998 0.165777,0.370065 0,0 0.2929729,-0.166637 0.2929729,-0.166637 v 0 C 7.1314887,12.773777 7.0673704,12.655844 7.0259655,12.528461 6.971859,12.357608 6.9170654,12.187127 6.8540863,12.019242 c 0,0 -0.3002975,0.170985 -0.3002975,0.170985 z" />
                            <g
                                id="g2785"
                                fill = "none" fillRule = "evenodd" stroke = "none" strokeWidth = "1" 
                                transform="matrix(0.35089549,0,0,0.35002167,-0.77649728,-2.0046166)">
                            <path
                                id="Path"
                                d="M 0,0 H 24 V 24 H 0 Z" />
                            <path
                                d="m 12.045858,23.663067 c 1.432835,0 2.605155,-1.050894 2.605155,-2.33532 H 9.4407029 c 0,1.284426 1.1592941,2.33532 2.6051551,2.33532 z m 7.815466,-7.005959 v -5.8383 c 0,-3.5847146 -2.136227,-6.5856003 -5.861599,-7.3796089 V 2.6451904 c 0,-0.9691575 -0.872727,-1.75148963 -1.953867,-1.75148963 -1.081139,0 -1.953866,0.78233213 -1.953866,1.75148963 V 3.4391991 C 6.353594,4.2332077 4.2303925,7.2224168 4.2303925,10.818808 v 5.8383 l -1.6803251,1.506281 c -0.820624,0.735626 -0.2474897,1.996698 0.9118043,1.996698 H 20.616819 c 1.159294,0 1.745454,-1.261072 0.92483,-1.996698 z"
                                id="zuzu"
                                fill="#ffffff"
                                strokeWidth = "1.23327" />
                            </g>
                        </g>
                    </svg>
                </div>
            </div>

            {/* search icon */}
            <div className = "hvr-icon-bounce unge-lejao">
                <div className = "hvr-icon">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30.736561"
                        height="28.834112"
                        viewBox="0 0 8.1323817 7.6290256">
                        <g
                            transform="translate(-147.095,-113.94586)">
                            <path
                            fill = 'white'
                            stroke = '#2b0000'
                            strokeWidth = '0.019705'
                            d="m 153.44928,120.42622 c -0.68084,-0.62509 -1.24529,-1.13656 -1.25433,-1.13656 -0.009,0 -0.0756,0.0359 -0.14788,0.0796 -1.50541,0.91123 -3.50983,0.47406 -4.48808,-0.97886 -0.96602,-1.43473 -0.33753,-3.36545 1.3446,-4.13058 0.52005,-0.23655 0.83769,-0.30511 1.41363,-0.30511 0.31934,0 0.41121,0.007 0.58512,0.0382 1.85981,0.34397 3.01617,2.04682 2.50825,3.69362 -0.10058,0.3261 -0.31639,0.71933 -0.53407,0.97318 -0.0508,0.0593 -0.10067,0.11839 -0.11079,0.1314 -0.0143,0.0183 0.26073,0.27993 1.21508,1.15616 l 1.23348,1.13253 -0.26357,0.24152 -0.26355,0.24155 z m -2.52505,-0.98222 c 1.55246,-0.31641 2.49395,-1.67177 2.16521,-3.11709 -0.34277,-1.50686 -2.0602,-2.39408 -3.68692,-1.90459 -1.22921,0.36984 -2.01759,1.47475 -1.91113,2.67841 0.10858,1.22772 1.04727,2.16458 2.37309,2.36848 0.22633,0.0348 0.83646,0.0203 1.05975,-0.0253 z"
                            id="path26" />
                        </g>
                    </svg>          
                </div>
            </div>

            {/* Help icon */}
            <div className = "hvr-icon-bounce unge-lejao">
                <div className = "hvr-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17.020618" height="28.228424" viewBox="0 0 4.5033716 7.4687699">
                        <g id="layer1" transform="translate(0.01582028,2.4676375)" display = 'inline'>
                            <path
                                fill = '#ffffff' fillOpacity = '1' stroke = 'none' strokeWidth = '0.0133869'
                                d="m 3.1003825,2.4610424 c 0,-0.2012128 0.0051,-0.402167 0.07875,-0.5888874 0.168379,-0.4268572 0.588108,-0.6941116 0.854906,-1.03414376 0.296893,-0.37838172 0.480867,-0.86305043 0.450186,-1.37885843 -0.06054,-1.01746821 -0.741477,-1.67043521 -1.571004,-1.86146311 -1.044059,-0.2404341 -2.28667795,0.175217 -2.74668335,1.3731174 -0.084071,0.21893691 -0.1378474,0.46616911 -0.1611046,0.70379231 -0.005230001,0.0533301 -0.037841,0.17409529 -0.010394,0.22119192 0.021213,0.0363964 0.089848,0.0337967 0.1233115,0.0392114 0.1040095,0.0168478 0.2082925,0.0348161 0.3119275,0.054436 0.274047,0.0518655 0.549454,0.0937768 0.82348795,0.14592922 0.183551,0.0349311 0.433754,0.0674635 0.607423,-0.0403319 0.05342,-0.03315 0.04771,-0.18661989 0.05698,-0.24807965 0.02575,-0.17064809 0.06373,-0.41075619 0.184573,-0.52873469 0.109325,-0.1067467 0.278215,0.062134 0.331766,0.169657 0.111845,0.2245387 -0.0016,0.44982409 -0.13479,0.61755646 -0.116399,0.14658987 -0.259761,0.26547336 -0.384669,0.40222447 -0.382685,0.41894316 -0.685155,0.82942636 -0.698905,1.46503696 -0.002,0.091795 -0.06092,0.3794159 0.0077,0.4450697 0.08853,0.084656 0.344181,0.072002 0.454129,0.072002 0.187968,0 0.374251,-0.00437 0.56147,-0.013803 0.285164,-0.014378 0.575893,-0.014923 0.86092,-0.014923 m -1.272664,2.4417282 c -0.05364,0.014865 -0.02513,-0.106643 0,0 0.02006,0.085216 -0.06079,-0.011013 3e-6,0 0.271314,0.049179 0.383951,0.1244947 0.656027,0.089302 0.0882,-0.011403 0.196295,0.00834 0.267277,-0.060575 0.08992,-0.087284 0.0461,0.00462 0,0 0.165359,-0.1368657 0.28474,-0.3130148 0.35929,-0.5314347 0.05737,-0.1681066 0.06856,-0.3383956 0.06475,-0.5170727 -0.01167,-0.546861 -0.411071,-0.8272144 -0.823302,-0.9221115 -0.165422,-0.038077 -0.328909,-0.086092 -0.499084,-0.066487 -0.33944,0.039082 -0.598839,0.3636882 -0.680277,0.7300624 -0.02915,0.1311782 -0.03844,0.2682597 -0.02182,0.402167 0.01926,0.1552221 0.05949,0.3007779 0.137809,0.4308934 0.132245,0.2196838 0.346501,0.3143506 0.539336,0.4452559 z"
                                id="path2730" />
                            <path
                                opacity = '0.839344' fill = '#ffffff' fillOpacity = '1' fillRule = 'evenodd' strokeWidth = '0.189'
                                id="path2768"
                                d="m 6.5537888,12.190227 c 0.074987,0.160608 0.1249703,0.330809 0.1799209,0.498799 0.045859,0.127376 0.1077706,0.247998 0.165777,0.370065 0,0 0.2929729,-0.166637 0.2929729,-0.166637 v 0 C 7.1314887,12.773777 7.0673704,12.655844 7.0259655,12.528461 6.971859,12.357608 6.9170654,12.187127 6.8540863,12.019242 c 0,0 -0.3002975,0.170985 -0.3002975,0.170985 z" />
                        </g>
                    </svg>
                </div>
            </div>

            {/* hashtags icon */}
            <div className = "hvr-icon-bounce unge-lejao">
                <div className = "hvr-icon">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="35.965046"
                        height="36.937851"
                        viewBox="0 0 11.103251 11.360639" >
                        <g
                            id="layer1"
                            transform="translate(0.08486223,1.3229622)"
                            display = "inline">
                            <path
                                d="M 9.6140085,3.1444289 9.7950585,2.409423 H 7.6464645 L 8.1928235,0.20440569 H 7.3917115 L 6.8453465,2.409423 h -2.002788 l 0.54636,-2.20501731 H 4.5878035 L 4.0414405,2.409423 h -2.477052 l -0.181054,0.7350059 h 2.476253 L 3.3132255,5.3494464 H 1.1662335 L 0.98277749,6.0844522 H 3.1313715 l -0.54636,2.2050173 h 0.801114 l 0.546363,-2.2050173 h 2.002792 l -0.546362,2.2050173 h 0.801116 l 0.54636,-2.2050173 h 2.477455 l 0.180651,-0.7350058 h -2.47625 l 0.546359,-2.2050175 z m -3.496876,2.2050175 h -2.00279 l 0.546363,-2.2050175 h 2.00279 z"
                                id="path3253"
                                fill = "#ffffff" strokeWidth = "0.383674" />
                        </g>
                    </svg>
                </div>
            </div>

            {/* places icon  */}
            <div className = "hvr-icon-drop unge-lejao">
                <div className = "hvr-icon">
                    <svg id="Capa_1" 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="31.597px" height="31.597px" viewBox="0 0 513.597 513.597" >
                        <g>
                            <path d="M263.278,0.107C158.977-3.408,73.323,80.095,73.323,183.602c0,117.469,112.73,202.72,175.915,325.322
                                c3.208,6.225,12.169,6.233,15.388,0.009c57.16-110.317,154.854-184.291,172.959-290.569
                                C456.331,108.387,374.776,3.866,263.278,0.107z M256.923,279.773c-53.113,0-96.171-43.059-96.171-96.171
                                s43.059-96.171,96.171-96.171c53.113,0,96.172,43.059,96.172,96.171S310.036,279.773,256.923,279.773z" 
                            id="path3253"
                            fill = "#ffffff" strokeWidth = "0.383674"/>
                        </g>
                    </svg>
                </div>
            </div>
        </Header>
    );
}

export default Navigation;