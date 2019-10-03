import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Bumi from './bumi';
import Floor from './floor';

let bumi;
let eyeStatus = 'opened';

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
}

const renderBumi = () => {
    bumi = new Bumi().bumi;
    scene.add(bumi);
}

const blink = () => {
    if (eyeStatus = 'opened') {
        setTimeout(() => bumi.leftEye.scale.y = 0.01, 2000);
        setTimeout(() => bumi.rightEye.scale.y = 0.01, 2000);
        eyeStatus = 'closed';
    } else {
        bumi.leftEye.scale.y = 1;
        eyeStatus = 'opened';
    }
}

const renderFloor = () => {
    const floor = new Floor().createFloor();
    scene.add(floor);
}

const render = () => {
    renderer.render( scene, camera );
    blink();
};

const animate = () => {
    requestAnimationFrame(animate);
    render();
};

renderBumi();
renderFloor();
animate();


