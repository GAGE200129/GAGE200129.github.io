import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { kich_hoat_mqtt, mqtt_temperature, mqtt_humidity, mqtt_luminance } from './mqtt.js';

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

export const mqtt_client = kich_hoat_mqtt();

var onAppend = function (elem, f) {
    var observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (m) {
            if (m.addedNodes.length) {
                f(m.addedNodes)
            }
        })
    })
    observer.observe(elem, { childList: true })
}
onAppend(document.getElementById("inspector"), function (added) {
    const room1_light_on_btn = document.getElementById("room1_light_on");
    if (room1_light_on_btn) {
        room1_light_on_btn.addEventListener("click", () => {
            mqtt_client.publish("home/light_control", "ON");
        });
    }

    const room1_light_off_btn = document.getElementById("room1_light_off");
    if (room1_light_off_btn) {
        room1_light_off_btn.addEventListener("click", () => {
            mqtt_client.publish("home/light_control", "OFF");
        });
    }

    const room1_fan_on_btn = document.getElementById("room1_fan_on");
    if (room1_fan_on_btn) {
        room1_fan_on_btn.addEventListener("click", () => {
            mqtt_client.publish("home/fan_control", "ON");
        });
    }

    const room1_fan_off_btn = document.getElementById("room1_fan_off");
    if (room1_fan_off_btn) {
        room1_fan_off_btn.addEventListener("click", () => {
            mqtt_client.publish("home/fan_control", "OFF");
        });
    }

    const room1_conditioner_on_btn = document.getElementById("room1_conditioner_on");
    if (room1_conditioner_on_btn) {
        room1_conditioner_on_btn.addEventListener("click", () => {
            mqtt_client.publish("home/aircondition_control", "ON");
        });
    }

    const room1_conditioner_off_btn = document.getElementById("room1_conditioner_off");
    if (room1_conditioner_off_btn) {
        room1_conditioner_off_btn.addEventListener("click", () => {
            mqtt_client.publish("home/aircondition_control", "OFF");
        });
    }


})

loader.load('low_poly_house_interior.glb', function (gltf) {
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




let accumulated_time = 0.0;
function animate() {
    requestAnimationFrame(animate);

    if (camera_target != undefined) {
        camera.position.lerp(camera_target.position, 0.0016 * 20);
        camera.quaternion.slerp(camera_target.quaternion, 0.0016 * 20);
    }

    light1.lookAt(camera.position);
    light2.lookAt(camera.position);
    light3.lookAt(camera.position);
    light4.lookAt(camera.position);


    accumulated_time += 0.016;
    if (accumulated_time > 1) {
        const min_temp = 5;
        const max_temp = 50;
        $(".stem-perct").css("height", (mqtt_temperature - min_temp) / max_temp * 100 + '%');
        $("p#temprature_str").html(mqtt_temperature + '&deg;C');
        $("p#humidity_str").html(mqtt_humidity + '%');
        $("p#luminance_str").html(mqtt_luminance + ' lux');



        accumulated_time = 0;
    }

    renderer.render(scene, camera);
}
animate();


function updateInspector() {
    let inspector = document.getElementById("inspector");
    switch (camera_target) {
        case conditioner1_view:
        case light1_view:
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

            var do_am_phong = document.createElement("div");
            do_am_phong.innerHTML = `
                <p style="font-size:35px;">Độ ẩm phòng</p>
                <div>
                <p id="humidity_str" style="font-size:20px"> 80%; </p>
                </div>
            `;
            do_am_phong.classList.add("inspector-attribute");

            var do_sang_phong = document.createElement("div");
            do_sang_phong.innerHTML = `
                <p style="font-size:35px;">Độ sáng phòng</p>
                <div>
                <p id="luminance_str" style="font-size:20px"> 80 lux; </p>
                </div>
            `;
            do_sang_phong.classList.add("inspector-attribute");

            var controls = document.createElement("div");
            controls.innerHTML = `
            <p style="font-size:35px;">Điều khiển phòng</p>
            <div class="inspector-control-element">
                <p style="font-size:35px;">Đèn</p>
                <button id="room1_light_on" class="button-30" role="button">On</button>
                <button id="room1_light_off"  class="button-30" role="button">Off</button>
            </div>

            <div class="inspector-control-element">
                <p style="font-size:35px;">Quạt</p>
                <button id="room1_fan_on"  class="button-30" role="button">On</button>
                <button id="room1_fan_off" class="button-30" role="button">Off</button>
            </div>

            <div class="inspector-control-element">
                <p style="font-size:35px;">Điều hòa</p>
                <button id="room1_conditioner_on"  class="button-30" role="button">On</button>
                <button id="room1_conditioner_off" class="button-30" role="button">Off</button>
            </div>
            `;
            controls.classList.add("inspector-attribute");

            inspector.innerHTML = '';
            inspector.appendChild(nhiet_do_phong);
            inspector.appendChild(do_am_phong);
            inspector.appendChild(do_sang_phong);
            inspector.appendChild(controls);

            break;

        default:
            inspector.innerHTML = '';
            break;
    }
}







