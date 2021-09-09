const canvasSketch = require('canvas-sketch');

const settings = {
    dimensions: [1080, 1080]
};

const sketch = () => {
    return ({ context, width, height }) => {
        context.fillStyle = 'white';
        context.fillRect(0, 0, width, height);
        context.lineWidth = width * 0.01;

        let canvas = document.querySelector('canvas');
        let contex = canvas.getContext('2d');


        const w = width * 0.1;
        const h = height * 0.1;
        const gap = width * 0.03;
        const ix = width * 0.17;
        const iy = height * 0.17;

        const off = width * 0.02;
        let x, y;
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {

                x = ix + (w + gap) * i;
                y = iy + (h + gap) * j;

                contex.beginPath();
                contex.rect(x, y, w, h);
                contex.stroke();

                if (Math.random() < 0.5) {
                    contex.beginPath();
                    contex.rect(x + off / 2, y + off / 2, w - off, h - off);
                    contex.stroke();
                }
            }
        }



    };
};

canvasSketch(sketch, settings);
