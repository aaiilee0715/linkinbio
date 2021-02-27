import React, { Component } from 'react';
import '../components/styles/style.css';

import MainHomePageCardComponent from '../components/homeUI';
import AnothayPix from '../components/images/Anothay_Chansy.jpg';
import GitHubPix from '../components/images/github+icon-1320168274457504277.png';

class MainPageDisplay extends Component {
    render() {
        return (
            <>
                <div className="container">
                    <MainHomePageCardComponent
                        imgsrc={AnothayPix}
                    />
                    <a
                        href="https://www.instagram.com/_ann.codes"
                        target="_blank"
                        class="ig-link"
                    >
                        @_ann.codes
			</a>
                    <div className="link-list">
                        <a
                            href="anothayc.dev"
                            target="_blank"

                        >
                            <div className="link-list-item light">
                                ABOUT ME
					</div>
                        </a>
                        <a
                            href="https://www.buymeacoffee.com/ann.codes"
                            target="_blank"
                            

                        >
                            <div className="link-list-item bright">
                                ☕ Buy me a coffee
					</div>
                        </a>
                        <a href="mailto:design@anothayc.dev">
                            <div className="link-list-item light">
                                💌 Contact me
					</div>
                        </a>
                    </div>
                    <div className="icon-list">
                    </div>
                </div>
            </>
        );
    }
}
export default MainPageDisplay;