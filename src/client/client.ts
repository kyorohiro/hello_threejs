import * as THREE from 'three'
import { TetrahedronGeometry } from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const main = () => {
    const width = 960
    const height = 540
    let rot = 0

    // canvas
    var renderer = new THREE.WebGLRenderer()
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(width, height)
    document.body.appendChild(renderer.domElement)

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 10000)
    camera.position.set(0, 1000, 1000)



    // Add Sphere
    const geometery = new THREE.SphereGeometry(300, 30, 30)//new THREE.BoxGeometry(400,400,400)
    const loader = new THREE.TextureLoader()
    const texture = loader.load('img/earthmap1k.jpg')
    const material = new THREE.MeshStandardMaterial({
        // color: 0xFF0000,
        map: texture
    }) //
    //const material =new THREE.MeshNormalMaterial()
    const box = new THREE.Mesh(geometery, material)
    scene.add(box)

    // Add Light
    const directionalLight = new THREE.DirectionalLight(0xFFFFFF)
    directionalLight.position.set(1000, 1000, 1000)
    scene.add(directionalLight)

    const tick = () => {
        rot += 0.5;
        const radian = rot * Math.PI / 180;
        camera.position.x = 1000 * Math.sin(radian);
        camera.position.z = 1000 * Math.cos(radian);
        camera.lookAt(0, 0, 0)
        box.rotation.y += 0.01
        renderer.render(scene, camera)
        requestAnimationFrame(tick)
    }
    tick();


}
main()
