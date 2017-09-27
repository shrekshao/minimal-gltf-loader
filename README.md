# minimal-gltf-loader
[![Build Status](https://travis-ci.org/shrekshao/minimal-gltf-loader.svg?branch=master)](https://travis-ci.org/shrekshao/minimal-gltf-loader)
[![License](http://img.shields.io/:license-mit-blue.svg)](https://github.com/shrekshao/minimal-gltf-loader/blob/master/LICENSE.md)

A minimal, engine-agnostic JavaScript glTF Loader, with a raw WebGL 2 simple renderer example using the loader.

## Viewer Screenshot
![](img/drone.gif)
![](img/helmet-pbr.png)
![](img/skin.gif)
![](img/viewer-screenshot-buggy-bbox.png)

## Live Demo

[click here for live demo](https://shrekshao.github.io/minimal-gltf-loader/examples/webgl2-renderer.html)

# Usage

```javascript
import {vec3, vec4, quat, mat4} from 'gl-matrix';
var MinimalGLTFLoader = require('build/minimal-gltf-loader.js');

var glTFLoader = new MinimalGLTFLoader.glTFLoader();
glTFLoader.loadGLTF(url, function(glTF){
    //...
});
```


## Loading Features

* [x] Accessors
    - [ ] Progressive loading / rendering
* [x] Buffers
* [x] BufferViews
* [x] Images
* [x] Meshes
* [x] Nodes
* [x] Primitives
* [x] Samplers
* [x] Textures
* [x] ~~Shader Loader~~ (not part of the core of glTF 2.0)
* [x] Animations
* [x] Cameras
* [x] Materials
* [x] Skins

## Formats

* [x] glTF (.gltf) with separate resources: .bin (geometry, animation, skins), .glsl (shaders), and image files
* [ ] glTF (.gltf) with embedded resources
* [ ] Binary glTF (.glb) using the [KHR_binary_glTF](https://github.com/KhronosGroup/glTF/blob/master/extensions/Khronos/KHR_binary_glTF/README.md) extension

## Examples

* [x] WebGL 2 simple renderer
    * [x] baseColorFactor
    * [x] baseColorTexture
    * [x] normalTexture
    * [x] Skybox
    * [x] PBR
    * [x] Animation
    * [ ] Interpolations
        - [x] LINEAR
        - [ ] STEP
        - [ ] CATMULLROMSPLINE
        - [ ] CUBICSPLINE
    * [x] Skin
    * [ ] Camera (from glTF)
    * [ ] Progressive rendering (No plan for this)
    * [ ] Occlusion Culling experiment 
        * [x] Bounding Box
            * [x] AABB (Axis Aligned Bounding Box, *static)
            * [x] OBB (Object/Oriented Bounding Box)
        * [x] Scene Bounding Box (fast iterated) And auto centered and scaled
        * [ ] Build octree
        * [ ] Occlusion Query with hierarchy


## Credits

* [glTF sample Model](https://github.com/KhronosGroup/glTF-Sample-Models) and [Buster Drone By LaVADraGoN](https://sketchfab.com/models/294e79652f494130ad2ab00a13fdbafd)
* Great thanks to Trung Le ([@trungtle](https://github.com/trungtle)) and Patrick Cozzi ([@pjcozzi](https://github.com/pjcozzi)) for contributing and advising. 
* gl-Matrix by Brandon Jones ([@toji](https://github.com/toji)) and Colin MacKenzie IV ([@sinisterchipmunk](https://github.com/sinisterchipmunk))
* [glTF-WebGL-PBR](https://github.com/KhronosGroup/glTF-WebGL-PBR)