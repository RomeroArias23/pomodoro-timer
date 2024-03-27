import React from 'react';  
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PlayButton from './Buttons/playButton';
import PauseButton from './Buttons/pauseButton';
import SettingsButton from './Buttons/settingsButton';
import './timer.css';

const red = '#f54e4e';
const green = '#4ef54e';   

function Timer () {
    return (
        <div>
            <h1>Hello silly 👿</h1>
            <div className='timer'>
                <CircularProgressbar
                        value={50}
                        text={'50%'}
                        styles={buildStyles({
                            textColor:'#fff',
                            pathColor:red,
                            tailColor:'rgba(255,255,255,.2)',
                            strokeWidth: 5,
                        })}
                    />
            </div>
            <div>
                <PlayButton/>
                <PauseButton/>
                <div>
                    <SettingsButton/>
                </div>
            </div>
        </div>
    );
};

export default Timer;