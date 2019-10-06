import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Bumi from './bumi';
import Floor from './floor';
import Ball from './ball';

let bumi;
let eyeStatus = 'opened';
let headStatus = 'still';

//normal set up
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
renderer.setClearColor( 0x87ceeb, 1);
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
camera.position.z = 5;
window.addEventListener('resize', () => {
    const width = window.innerWidth;
    const height = window.innerheight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});

//orbit control
const controls = new OrbitControls( camera, renderer.domElement );
camera.position.set( 0, 0, 5 );
controls.update();


//light
const light = new THREE.HemisphereLight(0xffffff, 0xffffff, .5)
const shadowLight = new THREE.DirectionalLight(0xffffff, .8);
shadowLight.position.set(200, 200, 200);
shadowLight.castShadow = true;
shadowLight.shadowDarkness = .2;
const backLight = new THREE.DirectionalLight(0xffffff, .4);
backLight.position.set(-100, 200, 50);
backLight.shadowDarkness = .1;
backLight.castShadow = true;
scene.add(backLight);
scene.add(light);
scene.add(shadowLight);


//functions that actualy run the code

const handleMouseMovement = (event) => {
    let mousePosition = {x:event.clientX, y:event.clientY}
};

const renderBumi = () => {
    bumi = new Bumi().bumi;
    scene.add(bumi);
};

const blink = () => {
    if (eyeStatus === 'opened') {
        setTimeout(() => {
            bumi.leftEye.scale.y = 0.5
            bumi.rightEye.scale.y = 0.5
            setTimeout(() => {
                bumi.leftEye.scale.y = 0.25
                bumi.rightEye.scale.y = 0.25
                setTimeout(() => {
                    bumi.leftEye.scale.y = 0.1
                    bumi.rightEye.scale.y = 0.1
                    setTimeout(() => {
                        bumi.leftEye.scale.y = 0.01
                        bumi.rightEye.scale.y = 0.01
                        setTimeout(() => eyeStatus = 'closed', 50)
                    }, 50)
                }, 50)
            }, 50)
        }, 3000);
        eyeStatus = 'closing';
    } else if (eyeStatus === 'closing' || eyeStatus === 'opening') {

    } else {
        bumi.leftEye.scale.y = 0.1
        bumi.rightEye.scale.y = 0.1
        setTimeout(() => {
            bumi.leftEye.scale.y = 0.25
            bumi.rightEye.scale.y = 0.25
            setTimeout(() => {
                bumi.leftEye.scale.y = 0.5
                bumi.rightEye.scale.y = 0.5
                setTimeout(() => {
                    bumi.leftEye.scale.y = 1
                    bumi.rightEye.scale.y = 1
                    setTimeout(() => eyeStatus = 'opened', 50)
                }, 50)
            }, 50)
        }, 50)
        eyeStatus = 'opening';
    }
};

const headMove = () => {
    if (headStatus === 'down') {
        setTimeout(() => {
            bumi.head.rotateY(0.03);
            bumi.head.rotateX(-0.02);
            setTimeout(() => {
                bumi.head.rotateY(0.03);
                bumi.head.rotateX(-0.02); 
                setTimeout(() => {
                    bumi.head.rotateY(0.03);
                    bumi.head.rotateX(-0.02); 
                    setTimeout(() => {
                        bumi.head.rotateY(0.03);
                        bumi.head.rotateX(-0.02);  
                        setTimeout(() => headStatus = 'up', 4000)
                    }, 65) 
                }, 65)
            }, 65)
        }, 1000)
        headStatus = 'movingUp'
    } else if (headStatus === 'movingUp' || headStatus === 'movingDown') {

    } else {
        bumi.head.rotateY(-0.03);
        bumi.head.rotateX(0.02);
        setTimeout(() => {
            bumi.head.rotateY(-0.03);
            bumi.head.rotateX(0.02); 
            setTimeout(() => {
                bumi.head.rotateY(-0.03);
                bumi.head.rotateX(0.02); 
                setTimeout(() => {
                    bumi.head.rotateY(-0.03);
                    bumi.head.rotateX(0.02);  
                    setTimeout(() => headStatus = 'down', 1000);
                }, 65) 
            }, 65)
        }, 65)
        headStatus = 'movingDown';
    }
};

const renderFloor = () => {
    const floor = new Floor().createFloor();
    scene.add(floor);
};

const renderBall = () => {
    const ball = new Ball().createBall();
    scene.add(ball);
}

const render = () => {
    renderer.render( scene, camera );
    blink();
    headMove();
};

const animate = () => {
    requestAnimationFrame(animate);
    render();
};

renderBumi();
renderFloor();
renderBall();
animate();


