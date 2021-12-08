import * as THREE from 'three';
import { extend } from '@react-three/fiber';

export class ParticleShaderMaterial extends THREE.RawShaderMaterial {
  constructor() {
    super({
      uniforms: {
        time: { type: 'f', value: 0 },
      },
      fragmentShader: `
        precision highp float;
        varying vec3 vNormal;
  
        void main () {
          gl_FragColor = vec4(vNormal, 0.5);
        }
      `,
      vertexShader: `
        attribute vec4 position;
        attribute vec3 normal;
        
        uniform mat4 projectionMatrix;
        uniform mat4 modelViewMatrix;
        
        varying vec3 vNormal;
        
        void main () {
          vNormal = normal;
        
          vec4 offset = position;
          float dist = 0.9;
          offset.xyz += normal * dist;
          gl_Position = projectionMatrix * modelViewMatrix * offset;
        }
      `,
    });
  }

  get time() {
    return this.uniforms.time.value;
  }

  set time(v) {
    this.uniforms.time.value = v;
  }
}

extend({ ParticleShaderMaterial });
