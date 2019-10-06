import * as THREE from 'three';

export default class Bumi {
    constructor() {
        this.bumi = new THREE.Object3D;
        this.createBumi();
    }

    createBumi() {
        //body
        const bodyGeometry = new THREE.CylinderGeometry(.52, 1.1, 1.2, 32);
        const bodyMaterial = new THREE.MeshLambertMaterial({color: 0xF5F5F5, wireframe: false });
        this.bumi.body = new THREE.Mesh(bodyGeometry, bodyMaterial);
        this.bumi.body.position.y = -.5;
        this.bumi.add(this.bumi.body);

        //head
        const headGeometry = new THREE.BoxGeometry( 1.15, 0.8, 1 );
        const headMaterial = new THREE.MeshLambertMaterial( { color: 0xF5F5F5, wireframe: false } );
        this.bumi.head = new THREE.Mesh( headGeometry, headMaterial );
        this.bumi.body.add(this.bumi.head);
        this.bumi.head.position.y = .7;
        this.bumi.head.position.z = .1;

        //face
        const faceGeometry = new THREE.BoxGeometry(0.9, .6, .3);
        const faceMaterial = new THREE.MeshLambertMaterial({color: 0x585858, wireframe: false });
        this.bumi.face = new THREE.Mesh(faceGeometry, faceMaterial);
        this.bumi.head.add(this.bumi.face);
        this.bumi.face.position.z = 0.4;

        //right ear
        const rightEarGeometry = new THREE.TetrahedronGeometry(.245, 0);
        const rightEarMaterial = new THREE.MeshLambertMaterial({color: 0x585858, wireframe: false });
        this.bumi.rightEar = new THREE.Mesh(rightEarGeometry, rightEarMaterial);
        this.bumi.head.add(this.bumi.rightEar);
        this.bumi.rightEar.position.y = .4;
        this.bumi.rightEar.position.x = .38;
        this.bumi.rightEar.position.z = .2;
        this.bumi.rightEar.rotateX(-.8);
        this.bumi.rightEar.rotateY(-.8);

        //left ear
        const leftEarGeometry = new THREE.TetrahedronGeometry(.245, 0);
        const leftEarMaterial = new THREE.MeshLambertMaterial({color: 0x585858, wireframe: false });
        this.bumi.leftEar = new THREE.Mesh(leftEarGeometry, leftEarMaterial);
        this.bumi.head.add(this.bumi.leftEar);
        this.bumi.leftEar.position.y = .4;
        this.bumi.leftEar.position.x = -.38;
        this.bumi.leftEar.position.z = .2;
        this.bumi.leftEar.rotateX(-.8);
        this.bumi.leftEar.rotateY(-.8);

        //right leg
        const rightLegGeometry = new THREE.CylinderGeometry(.16, .05, .3, 6);
        const rightLegMaterial = new THREE.MeshLambertMaterial({color: 0x585858, wireframe: false });
        this.bumi.rightLeg = new THREE.Mesh(rightLegGeometry, rightLegMaterial);
        this.bumi.body.add(this.bumi.rightLeg);
        this.bumi.rightLeg.rotateX(-0.7);
        this.bumi.rightLeg.position.z = 1.04;
        this.bumi.rightLeg.position.y = -.48;
        this.bumi.rightLeg.position.x = .09;

        //left leg
        const leftLegGeometry = new THREE.CylinderGeometry(.16, .05, .3, 6);
        const leftLegMaterial = new THREE.MeshLambertMaterial({color: 0x585858, wireframe: false });
        this.bumi.leftLeg = new THREE.Mesh(leftLegGeometry, leftLegMaterial);
        this.bumi.body.add(this.bumi.leftLeg);
        this.bumi.leftLeg.rotateX(-0.7);
        this.bumi.leftLeg.position.z = 1.04;
        this.bumi.leftLeg.position.y = -.48;
        this.bumi.leftLeg.position.x = -.09;

        //tail
        const tailBaseGeometry = new THREE.BoxGeometry( 0.5, 0.5, .5 );
        const tailBaseMaterial = new THREE.MeshLambertMaterial( { color: 0x585858, wireframe: false } );
        this.bumi.tailBase = new THREE.Mesh( tailBaseGeometry, tailBaseMaterial );
        this.bumi.body.add(this.bumi.tailBase);
        this.bumi.tailBase.position.z = -.8;
        this.bumi.tailBase.position.y = -.3;

        const tailMiddleGeometry = new THREE.BoxGeometry( 0.5, 0.5, 1.5 );
        const tailMiddleMaterial = new THREE.MeshLambertMaterial( { color: 0x585858, wireframe: false } );
        this.bumi.tailMiddle = new THREE.Mesh( tailMiddleGeometry, tailMiddleMaterial );
        this.bumi.tailBase.add(this.bumi.tailMiddle);
        this.bumi.tailMiddle.position.z = -.5;
        this.bumi.tailMiddle.position.x = -.47;
        this.bumi.tailMiddle.rotateY(1.5);

        //whiskers left side
        const whiskerGeometry = new THREE.Geometry();
        const whiskerMaterial = new THREE.MeshLambertMaterial({ color: 0xFFFFFF, wireframe: false });
        whiskerGeometry.vertices.push(new THREE.Vector3( -0.2, 0, 0) );
        whiskerGeometry.vertices.push(new THREE.Vector3( 0, 0.2, 0) );
        this.bumi.whisker = new THREE.Line(whiskerGeometry, whiskerMaterial);
        this.bumi.face.add(this.bumi.whisker);
        this.bumi.whisker.position.z = 0.16;
        this.bumi.whisker.position.y = -0.25;

        const whisker2Geometry = new THREE.Geometry();
        const whisker2Material = new THREE.MeshLambertMaterial({ color: 0xFFFFFF, wireframe: false });
        whisker2Geometry.vertices.push(new THREE.Vector3( -0.2, 0, 0) );
        whisker2Geometry.vertices.push(new THREE.Vector3( 0, 0.2, 0) );
        this.bumi.whisker2 = new THREE.Line(whisker2Geometry, whisker2Material);
        this.bumi.face.add(this.bumi.whisker2);
        this.bumi.whisker2.position.z = 0.16;
        this.bumi.whisker2.position.y = -.18;
        this.bumi.whisker2.position.x = -.15;
        this.bumi.whisker2.rotateZ(-0.8);

        const whisker3Geometry = new THREE.Geometry();
        const whisker3Material = new THREE.MeshLambertMaterial({ color: 0xFFFFFF, wireframe: false });
        whisker3Geometry.vertices.push(new THREE.Vector3( -0.25, 0, 0) );
        whisker3Geometry.vertices.push(new THREE.Vector3( 0, 0.2, 0) );
        this.bumi.whisker3 = new THREE.Line(whisker3Geometry, whisker3Material);
        this.bumi.face.add(this.bumi.whisker3);
        this.bumi.whisker3.position.z = 0.16;
        this.bumi.whisker3.position.y = -.24;
        this.bumi.whisker3.position.x = -.08;
        this.bumi.whisker3.rotateZ(-0.3);

        //whiskers right side
        const whisker4Geometry = new THREE.Geometry();
        const whisker4Material = new THREE.MeshLambertMaterial({ color: 0xFFFFFF, wireframe: false });
        whisker4Geometry.vertices.push(new THREE.Vector3( 0.2, 0, 0) );
        whisker4Geometry.vertices.push(new THREE.Vector3( 0, 0.2, 0) );
        this.bumi.whisker4 = new THREE.Line(whisker4Geometry, whisker4Material);
        this.bumi.face.add(this.bumi.whisker4);
        this.bumi.whisker4.position.z = 0.16;
        this.bumi.whisker4.position.y = -0.25;

        const whisker5Geometry = new THREE.Geometry();
        const whisker5Material = new THREE.MeshLambertMaterial({ color: 0xFFFFFF, wireframe: false });
        whisker5Geometry.vertices.push(new THREE.Vector3( -0.2, 0, 0) );
        whisker5Geometry.vertices.push(new THREE.Vector3( 0, 0.2, 0) );
        this.bumi.whisker5 = new THREE.Line(whisker5Geometry, whisker5Material);
        this.bumi.face.add(this.bumi.whisker5);
        this.bumi.whisker5.position.z = 0.16;
        this.bumi.whisker5.position.y = -.18;
        this.bumi.whisker5.position.x = .15;
        this.bumi.whisker5.rotateZ(-0.77);

        const whisker6Geometry = new THREE.Geometry();
        const whisker6Material = new THREE.MeshLambertMaterial({ color: 0xFFFFFF, wireframe: false });
        whisker6Geometry.vertices.push(new THREE.Vector3( -0.25, 0, 0) );
        whisker6Geometry.vertices.push(new THREE.Vector3( 0, 0.2, 0) );
        this.bumi.whisker6 = new THREE.Line(whisker6Geometry, whisker6Material);
        this.bumi.face.add(this.bumi.whisker6);
        this.bumi.whisker6.position.z = 0.16;
        this.bumi.whisker6.position.y = -.26;
        this.bumi.whisker6.position.x = .15;
        this.bumi.whisker6.rotateZ(-1);

        //nose
        const noseGeometry = new THREE.BoxGeometry(.06, .04, .01);
        const noseMaterial = new THREE.MeshLambertMaterial({color: 0x00000, wireframe: false });
        this.bumi.nose = new THREE.Mesh(noseGeometry, noseMaterial);
        this.bumi.face.add(this.bumi.nose);
        this.bumi.nose.position.z = 0.17;
        this.bumi.nose.position.y = -0.05;

        //right eye
        const rightEyeGeometry = new THREE.BoxGeometry(.2, .08, .01);
        const rightEyeMaterial = new THREE.MeshLambertMaterial({color: 0x008ECC, wireframe: false });
        this.bumi.rightEye = new THREE.Mesh(rightEyeGeometry, rightEyeMaterial);
        this.bumi.face.add(this.bumi.rightEye);
        this.bumi.rightEye.position.z = 0.15;
        this.bumi.rightEye.position.y = 0.05;
        this.bumi.rightEye.position.x = 0.24;

        const rightPupilGeometry = new THREE.BoxGeometry(.17, .07, .01);
        const rightPupilMaterial = new THREE.MeshLambertMaterial({color: 0x000000, wireframe: false });
        this.bumi.rightPupil = new THREE.Mesh(rightPupilGeometry, rightPupilMaterial);
        this.bumi.rightEye.add(this.bumi.rightPupil);
        this.bumi.rightPupil.position.z = 0.01;
        this.bumi.rightPupil.position.y = 0.01;


        //left eye
        const leftEyeGeometry = new THREE.BoxGeometry(.2, .08, .01);
        const leftEyeMaterial = new THREE.MeshLambertMaterial({color: 0x008ECC, wireframe: false });
        this.bumi.leftEye = new THREE.Mesh(leftEyeGeometry, leftEyeMaterial);
        this.bumi.face.add(this.bumi.leftEye);
        this.bumi.leftEye.position.z = 0.15;
        this.bumi.leftEye.position.y = 0.05;
        this.bumi.leftEye.position.x = -0.24;

        const leftPupilGeometry = new THREE.BoxGeometry(.17, .07, .01);
        const leftPupilMaterial = new THREE.MeshLambertMaterial({color: 0x000000, wireframe: false });
        this.bumi.leftPupil = new THREE.Mesh(leftPupilGeometry, leftPupilMaterial);
        this.bumi.leftEye.add(this.bumi.leftPupil);
        this.bumi.leftPupil.position.z = 0.01;
        this.bumi.leftPupil.position.y = 0.01;
    }

    blink() {
        this.bumi.leftEar.position.x += 0.01;
    }
}