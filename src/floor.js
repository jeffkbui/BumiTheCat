import * as THREE from 'three';
import { Mesh } from 'three/build/three';

export default class Floor {
    constructor() {
        this.createFloor();
    }

    createFloor() {
        const floor = new THREE.Object3D;

        const floorGeometry = new THREE.CylinderGeometry(3, 3, 0.5, 32);
        const floorMaterial = new THREE.MeshLambertMaterial({color: 0xD9B382});
        const mainFloor = new THREE.Mesh(floorGeometry, floorMaterial);
        floor.add(mainFloor);
        floor.position.y = -1.33;

        return floor;
    }
}