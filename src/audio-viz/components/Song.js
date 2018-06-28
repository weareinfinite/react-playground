import React, { Component, createRef } from 'react';
import audioFile from '../brand-new.mp3'
import './Song.css';
export default class Song extends Component {
    constructor(props) {
        super(props);

        this.audio = createRef();

        this.canvasRef = createRef();

        this.audioContext = new AudioContext();


        this.animateViz = this.animateViz.bind(this);

       

    }

    componentDidMount() {
        console.log('>>')
        console.log(this.audio);
        this.audio.current.crossOrigin = "anonymous";
        const self = this;
        this.audio.current.addEventListener('canplay', (e) => {
            console.log(e);
            self.animateViz();
        })

        this.audio.current.addEventListener('playthrough',(e)=>{
            console.log('playthrough')
            //self.audio.current.play();
            //self.animateViz();
        });
       
    }

    animateViz() {

        this.source = this.audioContext.createMediaElementSource(this.audio.current);
        const analyser = this.audioContext.createAnalyser();

        const canvas = this.canvasRef.current;
        const ctx = canvas.getContext('2d');
        this.source.connect(analyser);
        analyser.connect(this.audioContext.destination);


        frameLooper();

        function frameLooper() {
            window.requestAnimationFrame(frameLooper);
            const fbc_array = new Uint8Array(analyser.frequencyBinCount);
            analyser.getByteFrequencyData(fbc_array);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const grd = ctx.createLinearGradient(0,0,0,canvas.height - 20);
            grd.addColorStop(0,'rgba(230, 51, 84, 0.7)');
            grd.addColorStop(1,'white');
            ctx.fillStyle = grd;
            const bars = 150;
            for (var i = 0; i < bars; i++) {
              const bar_x = i * 3;
              const bar_width = 2;
              const bar_height = -(fbc_array[i] / 3);
              //  fillRect( x, y, width, height ) // Explanation of the parameters below
              ctx.fillRect(bar_x, canvas.height, bar_width, bar_height);
            }
          }

    }
    render() {
        return (
            <div>
                <h2>Song </h2>
                
                <audio controls ref={ this.audio } src={ audioFile } autoPlay></audio>
                <canvas width="400" height="100" className="song__bars" id="bars" ref={this.canvasRef} />
            </div>
        );
    }
}