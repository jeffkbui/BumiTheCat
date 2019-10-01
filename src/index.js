// normal set up
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

// adds shape to the scene
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshLambertMaterial( { color: 0xF5F5F5, wireframe: false } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );
camera.position.z = 5;

// adds light to the scene
const ambientLight = new THREE.AmbientLight(0xFFFFFF, 1);
scene.add(ambientLight);

//controls.update() must be called after any manual changes to the camera's transform
// const controls = new THREE.OrbitControls( camera, renderer.domElement );
// camera.position.set( 0, 20, 100 );
// controls.update();


// functions that actualy run the code
const update = () => {

};

const render = () => {
    renderer.render( scene, camera );
};

const GameLoop = () => {
    requestAnimationFrame(GameLoop);
    update();
    render();
};

GameLoop();


