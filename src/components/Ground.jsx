import { usePlane } from '@react-three/cannon'
import { useStore } from '../hooks/useStore.js'
import { groundTexture } from '../images/textures.js'


export function Ground () {
  const [ref] = usePlane(() => {
    rotation: [0,0,0]
    position: [0,0,0]
  })

  return(
    <mesh ref={ref}>
      <planeBufferGeometry attach="geometry" args={[100, 100]}/>
      <meshStandardMaterial attach="material" color="green" />
    </mesh>
  )
}
