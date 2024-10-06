import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
const mainContentDiv = document.querySelector('.main-content');

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, mainContentDiv.offsetWidth / mainContentDiv.offsetHeight, 0.1, 1000);
const loader = new GLTFLoader();
const renderer = new THREE.WebGLRenderer();
renderer.setSize(mainContentDiv.offsetWidth, mainContentDiv.offsetHeight, true);
renderer.setClearColor(0x67ffe3, 1);
mainContentDiv.appendChild(renderer.domElement);

window.addEventListener('resize', () => {
    camera.aspect = mainContentDiv.clientWidth / mainContentDiv.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(mainContentDiv.clientWidth, mainContentDiv.clientHeight);
});

scene.add(new THREE.AmbientLight(0x646464));

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
scene.add(directionalLight);
scene.add(directionalLight.target);


loader.load('low_poly_house_interior.glb', function (gltf) {
    // gltf.scene.traverse((child) => {
    //     if (child.isMesh) {
    //         child.castShadow = true; // Each mesh should cast shadows
    //         child.receiveShadow = true; // Each mesh should receive shadows
    //     }
    // });
    scene.add(gltf.scene);

}, undefined, undefined);


let camera_target = undefined;

//Conditioner 1
const conditioner1_view = new THREE.Object3D();
conditioner1_view.position.x = 1.66;
conditioner1_view.position.y = 1.5;
conditioner1_view.position.z = 3.92;
conditioner1_view.rotation.x = 2.6984;
conditioner1_view.rotation.y = 0.8586;
conditioner1_view.rotation.z = -2.7966;

loader.load('airconditioner.glb', function (gltf) {
    gltf.scene.position.x = 0.2;
    gltf.scene.position.y = 2.3;
    gltf.scene.position.z = 5.2;
    gltf.scene.scale.x = 0.3;
    gltf.scene.scale.y = 0.3;
    gltf.scene.scale.z = 0.3;

    scene.add(gltf.scene);

}, undefined, undefined);


//Conditioner 2
const conditioner2_view = new THREE.Object3D();
conditioner2_view.position.x = 0.37746430213392757;
conditioner2_view.position.y = 1.6;
conditioner2_view.position.z = 6.767213713031642;
conditioner2_view.rotation.x = 0.4983779141895532;
conditioner2_view.rotation.y = -0.8258772699047969;
conditioner2_view.rotation.z = 0.38056098588918374;

loader.load('airconditioner.glb', function (gltf) {
    gltf.scene.position.x = 1.5;
    gltf.scene.position.y = 2.3;
    gltf.scene.position.z = 5.6;
    gltf.scene.rotation.y = 3.141592;
    gltf.scene.scale.x = 0.3;
    gltf.scene.scale.y = 0.3;
    gltf.scene.scale.z = 0.3;

    scene.add(gltf.scene);

}, undefined, undefined);


//Conditioner 3
const conditioner3_view = new THREE.Object3D();
conditioner3_view.position.x = -0.1797745268734166;
conditioner3_view.position.y = 5.099999999999998;
conditioner3_view.position.z = 5.724249188838972;
conditioner3_view.rotation.x = 0.4434216863727796;
conditioner3_view.rotation.y = -0.5997963818907552;
conditioner3_view.rotation.z = 0.2619465315270376;

loader.load('airconditioner.glb', function (gltf) {
    gltf.scene.position.x = 0.7;
    gltf.scene.position.y = 5.5;
    gltf.scene.position.z = 4.7;
    gltf.scene.rotation.y = 3.141592;
    gltf.scene.scale.x = 0.3;
    gltf.scene.scale.y = 0.3;
    gltf.scene.scale.z = 0.3;

    scene.add(gltf.scene);

}, undefined, undefined);


//Conditioner 4
const conditioner4_view = new THREE.Object3D();
conditioner4_view.position.x = -0.38668219075968785;
conditioner4_view.position.y = 4.699999999999999;
conditioner4_view.position.z = -0.26157165965024215;
conditioner4_view.rotation.x = 2.532560207447809;
conditioner4_view.rotation.y = -0.3803712960157618;
conditioner4_view.rotation.z = 2.8882084015548775;

loader.load('airconditioner.glb', function (gltf) {
    gltf.scene.position.x = 0.4;
    gltf.scene.position.y = 5.5;
    gltf.scene.position.z = 1.0;
    gltf.scene.scale.x = 0.3;
    gltf.scene.scale.y = 0.3;
    gltf.scene.scale.z = 0.3;

    scene.add(gltf.scene);

}, undefined, undefined);



// Load the transparent texture
const textureLoader = new THREE.TextureLoader();
const geometry = new THREE.PlaneGeometry(0.5, 0.5);
const material = new THREE.MeshBasicMaterial({ map: textureLoader.load('bulb_light.png'), transparent: true, side: THREE.DoubleSide });

const light1_view = new THREE.Object3D();
light1_view.position.x = -0.1925849592128019;
light1_view.position.y = 1.1999999999999997;
light1_view.position.z = 4.104125936590119;
light1_view.rotation.x = 0.48056642663748506;
light1_view.rotation.y = -0.6259647218134451;
light1_view.rotation.z = 0.2964374400447827;

const light1 = new THREE.Mesh(geometry, material);
light1.position.x = 0.94;
light1.position.y = 2.3;
light1.position.z = 2.46;
scene.add(light1);
const light1_pl = new THREE.PointLight(0xFFFFFF, 1, 3);
light1_pl.position.x = light1.position.x;
light1_pl.position.y = light1.position.y;
light1_pl.position.z = light1.position.z;
scene.add(light1_pl);

const light2_view = new THREE.Object3D();
light2_view.position.x = 2.6911187509215284;
light2_view.position.y = 0.8999999999999997;
light2_view.position.z = 6.4003306110565505;
light2_view.rotation.x = 1.5461420622073503;
light2_view.rotation.y = 0.6443919854188027;
light2_view.rotation.z = -1.529769337373081;

const light2 = new THREE.Mesh(geometry, material);
light2.position.x = 1.54;
light2.position.y = 2.5;
light2.position.z = 6.64;
scene.add(light2);
const light2_pl = new THREE.PointLight(0xFFFFFF, 1, 10);
light2_pl.position.x = light2.position.x;
light2_pl.position.y = light2.position.y;
light2_pl.position.z = light2.position.z;
scene.add(light2_pl);


const light3_view = new THREE.Object3D();
light3_view.position.x = -0.20702360687375593;
light3_view.position.y = 6.299999999999994;
light3_view.position.z = 7.1299043072809845;
light3_view.rotation.x = -0.4597849135797042;
light3_view.rotation.y = -0.9951075011833763;
light3_view.rotation.z = -0.39368270124933863;

const light3 = new THREE.Mesh(geometry, material);
light3.position.x = 1.3;
light3.position.y = 5;
light3.position.z = 0;
scene.add(light3);
const light3_pl = new THREE.PointLight(0xFFFFFF, 1, 3);
light3_pl.position.x = light3.position.x;
light3_pl.position.y = light3.position.y;
light3_pl.position.z = light3.position.z;
scene.add(light3_pl);


const light4_view = new THREE.Object3D();
light4_view.position.x = 0.4058302580192383;
light4_view.position.y = 5.099999999999998;
light4_view.position.z = -1.1048672463963038;
light4_view.rotation.x = -2.9866040185389253;
light4_view.rotation.y = -0.3774430102160733;
light4_view.rotation.z = -3.0840741241773277;


const light4 = new THREE.Mesh(geometry, material);
light4.position.x = 0.75;
light4.position.y = 6;
light4.position.z = 6.4;
scene.add(light4);
const light4_pl = new THREE.PointLight(0xFFFFFF, 1, 3);
light4_pl.position.x = light4.position.x;
light4_pl.position.y = light4.position.y;
light4_pl.position.z = light4.position.z;
scene.add(light4_pl);


document.getElementById('dieu_hoa1').onclick = function () {
    camera_target = conditioner1_view;
    updateInspector();
}

document.getElementById('dieu_hoa2').onclick = function () {
    camera_target = conditioner2_view;
    updateInspector();
}

document.getElementById('dieu_hoa3').onclick = function () {
    camera_target = conditioner3_view;
    updateInspector();
}

document.getElementById('dieu_hoa4').onclick = function () {
    camera_target = conditioner4_view;
    updateInspector();
}

document.getElementById('den1').onclick = function () {
    camera_target = light1_view;
    updateInspector();
}

document.getElementById('den2').onclick = function () {
    camera_target = light2_view;
    updateInspector();
}

document.getElementById('den3').onclick = function () {
    camera_target = light3_view;
    updateInspector();
}

document.getElementById('den4').onclick = function () {
    camera_target = light4_view;
    updateInspector();
}


let delta = 0.0;

function animate() {
    requestAnimationFrame(animate);

    if (camera_target != undefined) {
        camera.position.lerp(camera_target.position, 0.0016 * 20);
        camera.quaternion.slerp(camera_target.quaternion, 0.0016 * 20);
    }

    let temprature = Math.abs(Math.sin(delta)) * 50;
    let time =  Math.abs(Math.sin(delta)) * 2000;
    let power = Math.abs(Math.sin(delta)) * 2000;
    let power_used = 12;
    const min_temp = 5;
    const max_temp = 50;
    $(".stem-perct").css("height", (temprature - min_temp) / temprature * 100  + '%');
    $("p#temprature_str").html(temprature + '&deg;C');
    $("p#power_str").html("Công suất: " + power.toFixed(2) + " Watt");
    $("p#time_str").html("Thời gian chạy: " + time.toFixed(0) + " phút");
    $("p#enegry_used_str").html("Tiêu thụ: " + power_used + " kW");

    light1.lookAt(camera.position);
    light2.lookAt(camera.position);
    light3.lookAt(camera.position);
    light4.lookAt(camera.position);


    delta += 0.016;
    
    renderer.render(scene, camera);
}
animate();


function updateInspector() {
    let inspector = document.getElementById("inspector");
    switch (camera_target) {
        case conditioner1_view:
        case conditioner2_view:
        case conditioner3_view:
        case conditioner4_view:

            var nhiet_do_phong = document.createElement("div");
            nhiet_do_phong.innerHTML = `
                <p style="font-size:35px;">Nhiệt độ phòng</p>

                <div class="thermometer">
                <div class="stem">
                    <div class="stem-perct"></div>
                </div>
                <div class="bulb"></div>
                </div>

                <div>
                <p id="temprature_str" style="font-size:20px"> 80&deg; </p>
                </div>
            `;
            nhiet_do_phong.classList.add("inspector-attribute");

            var cong_suat = document.createElement("div");
            cong_suat.innerHTML = `
                <p id="power_str" style="font-size:25px"></p>
                <p id="time_str" style="font-size:25px"></p>
                <p id="enegry_used_str" style="font-size:25px;"></p>
            `;
            cong_suat.classList.add("inspector-attribute");

            var trang_thai = document.createElement("div");
            trang_thai.innerHTML = `
                <p style="font-size:40px;">Trạng thái</p>
                <button class="button-30" role="button">On</button>
                <button class="button-30" role="button">Off</button>
            `;
            trang_thai.classList.add("inspector-attribute");



            inspector.innerHTML = '';
            inspector.appendChild(nhiet_do_phong);
            inspector.appendChild(cong_suat);
            inspector.appendChild(trang_thai);

            break;

        case light1_view:
        case light2_view:
        case light3_view:
        case light4_view:
            var cong_suat = document.createElement("div");
            cong_suat.classList.add("inspector-attribute");

            var trang_thai = document.createElement("div");
            trang_thai.classList.add("inspector-attribute");


            inspector.innerHTML = '';
            inspector.appendChild(cong_suat);
            inspector.appendChild(trang_thai);
            break;

        default:
            break;
    }
}






