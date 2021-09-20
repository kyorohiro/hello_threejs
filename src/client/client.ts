import * as THREE from 'three'
import { TetrahedronGeometry } from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const main = () => {
    const width = 960
    const height = 540

    // canvas
    var renderer = new THREE.WebGLRenderer()
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(width, height)
    document.body.appendChild(renderer.domElement)

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 3000)
    camera.position.set(0, 1000, 1000)
    camera.lookAt(0,0,0)


    const geometery = new THREE.BoxGeometry(400,400,400)
    const material = new THREE.MeshNormalMaterial()
    const box = new THREE.Mesh(geometery, material)
    scene.add(box)
    const tick = () =>{
        box.rotation.y += 0.01
        renderer.render(scene, camera)
        requestAnimationFrame(tick)
    }
    tick();


}
main()
