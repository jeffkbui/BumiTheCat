import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
//normal set up
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
renderer.setClearColor( 0x87ceeb, 1);
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
window.addEventListener('resize', () => {
    const width = window.innerWidth;
    const height = window.innerheight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});

camera.position.z = 5;

//body
const bodyGeometry = new THREE.CylinderGeometry(.52, 1.1, 1.2, 6);
const bodyMaterial = new THREE.MeshLambertMaterial({color: 0xF5F5F5, wireframe: false });
const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
scene.add(body);
body.position.y = -.5;

//head
const headGeometry = new THREE.BoxGeometry( 1.15, 0.8, 1 );
const headMaterial = new THREE.MeshLambertMaterial( { color: 0xF5F5F5, wireframe: false } );
const head = new THREE.Mesh( headGeometry, headMaterial );
body.add(head);
head.position.y = .7;
head.position.z = .1;

//face
const faceGeometry = new THREE.BoxGeometry(0.9, .6, .3);
const faceMaterial = new THREE.MeshLambertMaterial({color: 0x585858, wireframe: false });
const face = new THREE.Mesh(faceGeometry, faceMaterial);
head.add(face);
face.position.z = 0.4;

//right ear
const rightEarGeometry = new THREE.TetrahedronGeometry(.245, 0);
const rightEarMaterial = new THREE.MeshLambertMaterial({color: 0x585858, wireframe: false });
const rightEar = new THREE.Mesh(rightEarGeometry, rightEarMaterial);
head.add(rightEar);
rightEar.position.y = .4;
rightEar.position.x = .38;
rightEar.position.z = .2;
rightEar.rotateX(-.8);
rightEar.rotateY(-.8);

//left ear
const leftEarGeometry = new THREE.TetrahedronGeometry(.245, 0);
const leftEarMaterial = new THREE.MeshLambertMaterial({color: 0x585858, wireframe: false });
const leftEar = new THREE.Mesh(leftEarGeometry, leftEarMaterial);
head.add(leftEar);
leftEar.position.y = .4;
leftEar.position.x = -.38;
leftEar.position.z = .2;
leftEar.rotateX(-.8);
leftEar.rotateY(-.8);

//right leg
const rightLegGeometry = new THREE.CylinderGeometry(.16, .05, .3, 6);
const rightLegMaterial = new THREE.MeshLambertMaterial({color: 0x585858, wireframe: false });
const rightLeg = new THREE.Mesh(rightLegGeometry, rightLegMaterial);
body.add(rightLeg);
rightLeg.position.z = 1.04;
rightLeg.position.y = -.45;
rightLeg.position.x = .09;

//left leg
const leftLegGeometry = new THREE.CylinderGeometry(.16, .05, .3, 6);
const leftLegMaterial = new THREE.MeshLambertMaterial({color: 0x585858, wireframe: false });
const leftLeg = new THREE.Mesh(leftLegGeometry, leftLegMaterial);
body.add(leftLeg);
leftLeg.position.z = 1.04;
leftLeg.position.y = -.45;
leftLeg.position.x = -.09;

//tail
const tailBaseGeometry = new THREE.BoxGeometry( 0.5, 0.5, .5 );
const tailBaseMaterial = new THREE.MeshLambertMaterial( { color: 0x585858, wireframe: false } );
const tailBase = new THREE.Mesh( tailBaseGeometry, tailBaseMaterial );
body.add(tailBase);
tailBase.position.z = -.8
tailBase.position.y = -.3

const tailMiddleGeometry = new THREE.BoxGeometry( 0.5, 0.5, 1.5 );
const tailMiddleMaterial = new THREE.MeshLambertMaterial( { color: 0x585858, wireframe: false } );
const tailMiddle = new THREE.Mesh( tailMiddleGeometry, tailMiddleMaterial );
tailBase.add(tailMiddle);
tailMiddle.position.z = -.5;
tailMiddle.position.x = -.47
tailMiddle.rotateY(1.5);

// const tailEndGeometry = new THREE.BoxGeometry( 0.5, 0.5, 1.3 );
// const tailEndMaterial = new THREE.MeshLambertMaterial( { color: 0x585858, wireframe: false } );
// const tailEnd = new THREE.Mesh( tailEndGeometry, tailEndMaterial );
// tailMiddle.add(tailEnd);
// tailEnd.position.z = -0.4;
// tailEnd.position.y = 0.401;
// tailEnd.rotateX(1.6);

//whiskers left side
const whiskerGeometry = new THREE.Geometry();
const whiskerMaterial = new THREE.MeshLambertMaterial({ color: 0xF5F5F5, wireframe: false });
whiskerGeometry.vertices.push(new THREE.Vector3( -0.2, 0, 0) );
whiskerGeometry.vertices.push(new THREE.Vector3( 0, 0.2, 0) );
const whisker = new THREE.Line(whiskerGeometry, whiskerMaterial);
face.add(whisker);
whisker.position.z = 0.16;
whisker.position.y = -0.25;

const whisker2Geometry = new THREE.Geometry();
const whisker2Material = new THREE.MeshLambertMaterial({ color: 0xF5F5F5, wireframe: false });
whisker2Geometry.vertices.push(new THREE.Vector3( -0.2, 0, 0) );
whisker2Geometry.vertices.push(new THREE.Vector3( 0, 0.2, 0) );
const whisker2 = new THREE.Line(whisker2Geometry, whisker2Material);
face.add(whisker2);
whisker2.position.z = 0.16;
whisker2.position.y = -.18
whisker2.position.x = -.15
whisker2.rotateZ(-0.8);

const whisker3Geometry = new THREE.Geometry();
const whisker3Material = new THREE.MeshLambertMaterial({ color: 0xF5F5F5, wireframe: false });
whisker3Geometry.vertices.push(new THREE.Vector3( -0.25, 0, 0) );
whisker3Geometry.vertices.push(new THREE.Vector3( 0, 0.2, 0) );
const whisker3 = new THREE.Line(whisker3Geometry, whisker3Material);
face.add(whisker3);
whisker3.position.z = 0.16;
whisker3.position.y = -.24
whisker3.position.x = -.08
whisker3.rotateZ(-0.3);

//whiskers right side
const whisker4Geometry = new THREE.Geometry();
const whisker4Material = new THREE.MeshLambertMaterial({ color: 0xF5F5F5, wireframe: false });
whisker4Geometry.vertices.push(new THREE.Vector3( 0.2, 0, 0) );
whisker4Geometry.vertices.push(new THREE.Vector3( 0, 0.2, 0) );
const whisker4 = new THREE.Line(whisker4Geometry, whisker4Material);
face.add(whisker4);
whisker4.position.z = 0.16;
whisker4.position.y = -0.25;

const whisker5Geometry = new THREE.Geometry();
const whisker5Material = new THREE.MeshLambertMaterial({ color: 0xF5F5F5, wireframe: false });
whisker5Geometry.vertices.push(new THREE.Vector3( -0.2, 0, 0) );
whisker5Geometry.vertices.push(new THREE.Vector3( 0, 0.2, 0) );
const whisker5 = new THREE.Line(whisker5Geometry, whisker5Material);
face.add(whisker5);
whisker5.position.z = 0.16;
whisker5.position.y = -.18
whisker5.position.x = .15
whisker5.rotateZ(-0.77);

const whisker6Geometry = new THREE.Geometry();
const whisker6Material = new THREE.MeshLambertMaterial({ color: 0xF5F5F5, wireframe: false });
whisker6Geometry.vertices.push(new THREE.Vector3( -0.25, 0, 0) );
whisker6Geometry.vertices.push(new THREE.Vector3( 0, 0.2, 0) );
const whisker6 = new THREE.Line(whisker6Geometry, whisker6Material);
face.add(whisker6);
whisker6.position.z = 0.16;
whisker6.position.y = -.26;
whisker6.position.x = .15
whisker6.rotateZ(-1);

//nose
const noseGeometry = new THREE.BoxGeometry(.05, .03, .01);
const noseMaterial = new THREE.MeshLambertMaterial({color: 0x00000, wireframe: false });
const nose = new THREE.Mesh(noseGeometry, noseMaterial);
face.add(nose);
nose.position.z = 0.17;
nose.position.y = -0.05

//right eye
const rightEyeGeometry = new THREE.BoxGeometry(.2, .08, .01);
const rightEyeMaterial = new THREE.MeshLambertMaterial({color: 0x008ECC, wireframe: false });
const rightEye = new THREE.Mesh(rightEyeGeometry, rightEyeMaterial);
face.add(rightEye);
rightEye.position.z = 0.15;
rightEye.position.y = 0.05;
rightEye.position.x = 0.24;

const rightPupilGeometry = new THREE.BoxGeometry(.17, .07, .01);
const rightPupilMaterial = new THREE.MeshLambertMaterial({color: 0x000000, wireframe: false });
const rightPupil = new THREE.Mesh(rightPupilGeometry, rightPupilMaterial);
rightEye.add(rightPupil);
rightPupil.position.z = 0.01;
rightPupil.position.y = 0.01;


//left eye
const leftEyeGeometry = new THREE.BoxGeometry(.2, .08, .01);
const leftEyeMaterial = new THREE.MeshLambertMaterial({color: 0x008ECC, wireframe: false });
const leftEye = new THREE.Mesh(leftEyeGeometry, leftEyeMaterial);
face.add(leftEye);
leftEye.position.z = 0.15;
leftEye.position.y = 0.05;
leftEye.position.x = -0.24;

const leftPupilGeometry = new THREE.BoxGeometry(.17, .07, .01);
const leftPupilMaterial = new THREE.MeshLambertMaterial({color: 0x000000, wireframe: false });
const leftPupil = new THREE.Mesh(leftPupilGeometry, leftPupilMaterial);
leftEye.add(leftPupil);
leftPupil.position.z = 0.01;
leftPupil.position.y = 0.01;


//adds light to the scene
// const ambientLight = new THREE.AmbientLight(0xFFFFFF, 1);
// scene.add(ambientLight);


// let globalLight = new THREE.HemisphereLight(0xffffff, 0xffffff, .5)

// let shadowLight = new THREE.DirectionalLight(0xffffff, .9);
// shadowLight.position.set(200, 200, 200);
// shadowLight.castShadow = true;
// shadowLight.shadowDarkness = .2;
// shadowLight.shadowMapWidth = shadowLight.shadowMapHeight = 2048;

// let backLight = new THREE.DirectionalLight(0xffffff, .4);
// backLight.position.set(-100, 100, 100);
// backLight.castShadow = true;
// backLight.shadowDarkness = .1;
// backLight.shadowMapWidth = shadowLight.shadowMapHeight = 2048;

// scene.add(globalLight);
// scene.add(shadowLight);
// scene.add(backLight);

let light = new THREE.HemisphereLight(0xffffff, 0xffffff, .5)
  
let shadowLight = new THREE.DirectionalLight(0xffffff, .8);
shadowLight.position.set(200, 200, 200);
shadowLight.castShadow = true;
shadowLight.shadowDarkness = .2;

let backLight = new THREE.DirectionalLight(0xffffff, .4);
backLight.position.set(-100, 200, 50);
backLight.shadowDarkness = .1;
backLight.castShadow = true;

scene.add(backLight);
scene.add(light);
scene.add(shadowLight);


//controls.update() must be called after any manual changes to the camera's transform
const controls = new OrbitControls( camera, renderer.domElement );
camera.position.set( 0, 0, 5 );
controls.update();


//functions that actualy run the code
const moveHead = (event) => {

};

const render = () => {
    // body.rotation.x += 0.01;
    // body.rotation.y += -0.01;
    
    renderer.render( scene, camera );
};

const GameLoop = () => {
    requestAnimationFrame(GameLoop);
    
    render();
};

GameLoop();


