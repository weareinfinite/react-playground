import React from 'react';
import { render } from 'react-dom';

import { tween } from 'popmotion';
import { MotionValue } from 'popmotion-react';

const stateChangeHandlers = {
    on: ({ value }) => tween({
        from : value.get(),
        to: 500
    }).start(value),
    off: ({ value }) => tween({
        from: value.get(),
        to: 0,
        
    }).start(value)
}

const App = () => (
    <MotionValue onStateChange={ stateChangeHandlers }>
        {({v, state, setStateTo}) => (
            <div className="ball" style={{ transform: `translateX(${v}px)`}}  onClick={state === 'on' ? setStateTo.off : setStateTo.on}>
            Hi
            </div>
        )}
    </MotionValue>
)

render(<App/>, document.getElementById('app'))