import { vec3, mat4, quat } from "gl-matrix" 

type GLTFID = number;

enum MeshPrimitiveType {
	POINTS							= 0,
	LINES							= 1,
	LINE_LOOP						= 2,
	LINE_STRIP						= 3,
	TRIANGLES						= 4,
	TRIANGLE_STRIP					= 5,
	TRIANGLE_FAN					= 6
}

enum AccessorComponentType { 
	GL_BYTE 						= 5120, 
	GL_UNSIGNED_BYTE				= 5121,
	GL_SHORT						= 5122,
	GL_UNSIGNED_SHORT				= 5123,
	GL_INT							= 5124,
	GL_UNSIGNED_INT					= 5125,
	GL_FLOAT						= 5126
};

enum AccessorSparseIndicesComponentType {
	GL_UNSIGNED_BYTE				= 5121,
	GL_UNSIGNED_SHORT				= 5123,
	GL_UNSIGNED_INT					= 5125
}

enum BufferViewTarget {
	ARRAY_BUFFER					= 34962,
	ELEMENT_ARRAY_BUFFER			= 34963
}

enum SamplerMagnificationFilter {
	NEAREST							= 9728,
	LINEAR							= 9729
}

enum SamplerMinificationFilter {
	NEAREST							= 9728,
	LINEAR							= 9729,
	NEAREST_MIPMAP_NEAREST			= 9984,
	LINEAR_MIPMAP_NEAREST			= 9985,
	NEAREST_MIPMAP_LINEAR			= 9986,
	LINEAR_MIPMAP_LINEAR			= 9987
}

enum SamplerWrappingMode {
	CLAMP_TO_EDGE					= 33071,
	MIRRORED_REPEAT					= 33648,
	REPEAT							= 10497
}

interface AssetBase {
	copyright	?: string;
	generator	?: string;
	version		:  string;
	minVersion	?: string;
	extensions	?: any;
	extras		?: any;
}
interface SceneBase {
	nodes		:  GLTFID[];
	name		?: string;
	extensions	?: any;
	extras		?: any;
}
interface NodeBase {
	camera		?: GLTFID;
	children	?: GLTFID[];
	skin		?: GLTFID;
	matrix		:  mat4;
	mesh		?: GLTFID;
	translation	?: vec3;
	rotation	?: quat;
	scale		?: vec3;
	weights		?: number[];
	name		?: string;
	extensions	?: any;
	extras		?: any;
}
interface MeshBase {
	primitives	:  MeshPrimitiveBase[];
	weights		?: number[];
	name		?: string;
	extensions	?: any;
	extras		?: any;
}
interface MeshPrimitiveBase {
	attributes	:  {POSITION ?: GLTFID, NORMAL ?: GLTFID, TEXCOORD_0 ?: GLTFID};
	indices		?: GLTFID;
	material	?: GLTFID;
	mode		?: MeshPrimitiveType;
	targets		?: {POSITION ?: GLTFID, NORMAL ?: GLTFID, TANGENT ?: GLTFID}[];
	extensions	?: any;
	extras		?: any;
}
interface AccessorBase {
	bufferView		?: GLTFID;
	byteOffset		?: number;
	componentType	:  AccessorComponentType;
	normalized		?: boolean;
	count			:  number;
	type			:  "SCALAR" | "VEC2" | "VEC3" | "VEC4" | "MAT2" | "MAT3" | "MAT4";
	max				?: number[];
	min				?: number[];
	sparse			?: AccessorSparseBase;
	name			?: string;
	extensions		?: any;
	extras			?: any;
}
interface AccessorSparseBase {
	count			:  number;
	indices			:  AccessorSparseIndicesBase;
	values			:  AccessorSparseValuesBase;
	extensions		?: any;
	extras			?: any;
}
interface AccessorSparseIndicesBase {
	bufferView		:  GLTFID;
	byteOffset		?: number;
	componentType	:  AccessorSparseIndicesComponentType;
	extensions		?: any;
	extras			?: any;
}
interface AccessorSparseValuesBase {
	bufferView		:  GLTFID;
	byteOffset		?: number;
	extensions		?: any;
	extras			?: any;
}
interface BufferViewBase {
	buffer		:  GLTFID;
	byteOffset	?: number;
	byteLength	:  number;
	byteStride	?: number;
	target		?: BufferViewTarget;
	name		?: string;
	extensions	?: any;
	extras		?: any;
}
interface BufferBase {
	uri			?: string;
	byteLength	:  number;
	name		?: string;
	extensions	?: any;
	extras		?: any;
}
interface AnimationBase {
	channels		:  AnimationChannelBase[];
	samplers		:  AnimationSamplerBase[];
	name			?: string;
	extensions		?: any;
	extras			?: any;
}
interface AnimationChannelBase {	
	sampler		:  GLTFID;
	target		:  AnimationChannelTargetBase;
	extensions	?: any;
	extras		?: any;
}
interface AnimationChannelTargetBase{
	node		?: GLTFID;
	path		:  "translation" | "rotation" | "scale" | "weights";
	extensions	?: any;
	extras		?: any;
}
interface AnimationSamplerBase {
	input			:  GLTFID;
	interpolation	?: "LINEAR" | "STEP" | "CUBICSPLINE";
	output			:  GLTFID;
	extensions		?: any;
	extras			?: any;
}
interface CameraBase{
	orthographic	?: CameraOrthographicBase;
	perspective		?: CameraPerspectiveBase;
	type			:  "perspective" | "orthographic";
	name			?: string;
	extensions		?: any;
	extras			?: any;
}
interface CameraOrthographicBase {
	xmag		:  number;
	ymag		:  number;
	zfar		:  number;
	znear		:  number;
	extensions	?: any;
	extras		?: any;
}
interface CameraPerspectiveBase {
	aspectRatio	?: number;
	yfov		:  number;
	zfar		?: number;
	znear		:  number;
	extensions	?: any;
	extras		?: any;
}
interface TextureBase {
	sampler		?: GLTFID;
	source		?: GLTFID;
	name		?: string;
	extensions	?: any;
	extras		?: any;
}
interface ImageBase {
	uri			?: string;
	mimeType	?: "image/jpeg" | "image/png";
	bufferView	?: GLTFID;
	name		?: string;
	extensions	?: any;
	extras		?: any;
}
interface SamplerBase {
	magFilter	:  SamplerMagnificationFilter;
	minFilter	:  SamplerMinificationFilter;
	wrapS		:  SamplerWrappingMode;
	wrapT		:  SamplerWrappingMode;
	name		?: string;
	extensions	?: any;
	extras		?: any;
}
interface MaterialBase {
	name					?: string;
	extensions				?: any;
	extras					?: any;
	pbrMetallicRoughness	?: MaterialPbrMetallicRoughnessBase;
	normalTexture			?: MaterialNormalTextureInfoBase;
	occlusionTexture		?: MaterialOcclusionTextureInfoBase;
	emissiveTexture			?: TextureInfoBase;
	emissiveFactor			?: number[];
	alphaMode				?: "OPAQUE" | "MASK" | "BLEND";
	alphaCutoff				?: number;
	doubleSided				?: boolean;
}
interface MaterialPbrMetallicRoughnessBase {
	baseColorFactor				:  number[];
	baseColorTexture			:  TextureInfoBase;
	metallicFactor				:  number;
	roughnessFactor				:  number;
	metallicRoughnessTexture	:  TextureInfoBase;
	extensions					?: any;
	extras						?: any;
}
interface MaterialNormalTextureInfoBase {
	index		?: any;
	texCoord	?: any;
	scale		?: number;
	extensions	?: any;
	extras		?: any;
}
interface MaterialOcclusionTextureInfoBase {
	index		?: any;
	texCoord	?: any;
	strength	?: number;
	extensions	?: any;
	extras		?: any;
}
interface TextureInfoBase {
	index		:  GLTFID;
	texCoord	?: number;
	extensions	?: any;
	extras		?: any;
}
interface SkinBase {
	inverseBindMatrices	?: GLTFID;
	skeleton			?: GLTFID;
	joints				:  GLTFID[];
	name				?: string;
	extensions			?: any;
	extras				?: any;
}
interface GLTFBase {
	asset				:  AssetBase;
	scenes				?: SceneBase[];
	scene				?: GLTFID;
	nodes				?: NodeBase[];
	meshes				?: MeshBase[];
	accessors			?: AccessorBase[];
	bufferViews			?: BufferViewBase[];
	buffers				?: BufferBase[];
	animations			?: AnimationBase[];
	cameras				?: CameraBase[];
	textures			?: TextureBase[];
	images				?: ImageBase[];
	samplers			?: SamplerBase[];
	materials			?: MaterialBase[];
	skins				?: SkinBase[];
	extensions			?: any;
	extensionsRequired	?: string[];
	extensionsUsed		?: string[];
	extras				?: any;
}
interface BoundingBoxBase {
	min			:  vec3;
	max			:  vec3;
	transform	:  mat4;
}
class Scene {
	nodes		:  Node[];
	name		:  string;
	extensions	:  any;
	extras		:  any;
	boundingBox	:  BoundingBox;
	constructor (sceneBase: SceneBase, gltf: GLTF) {
		const length = sceneBase.nodes.length;
		this.nodes = [];
		for (let i = 0; i < length; i++) {
			this.nodes.push(gltf.nodes[sceneBase.nodes[i]]);
		}
		this.name			= (sceneBase.name		!== undefined) ? sceneBase.name			: null;
		this.extensions		= (sceneBase.extensions	!== undefined) ? sceneBase.extensions	: null;
		this.extras			= (sceneBase.extras		!== undefined) ? sceneBase.extras		: null;
		this.boundingBox	=  null;
	};
};
export class BoundingBox {
	min			:  vec3;
	max			:  vec3;
	transform	:  mat4;
	constructor(min?: vec3, max?: vec3, isClone?: boolean) {
		min = min || vec3.fromValues(Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY);
		max = max || vec3.fromValues(Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY);
		if (isClone === undefined || isClone === true) {
			this.min = vec3.clone(min);
			this.max = vec3.clone(max);
		} else {
			this.min = min;
			this.max = max;
		}
		this.transform = mat4.create();
	};
	updateBoundingBox(boundingBoxBase: BoundingBoxBase): void {
		vec3.min(this.min, this.min, boundingBoxBase.min);
		vec3.max(this.max, this.max, boundingBoxBase.max);
	};
	calculateTransform(): void {
		// transform from a unit cube whose min = (0, 0, 0) and max = (1, 1, 1)
		// scale
		this.transform[0]	= this.max[0] - this.min[0];
		this.transform[5]	= this.max[1] - this.min[1];
		this.transform[10]	= this.max[2] - this.min[2];
		// translate
		this.transform[12]	= this.min[0];
		this.transform[13]	= this.min[1];
		this.transform[14]	= this.min[2];
	};
}
class Accessor {
	bufferView		:  BufferView;
	byteOffset		:  number;
	componentType	:  AccessorComponentType;
	normalized		:  boolean;
	count			:  number;
	type			:  "SCALAR" | "VEC2" | "VEC3" | "VEC4" | "MAT2" | "MAT3" | "MAT4";
	max				:  number[];
	min				:  number[];
	sparse			:  AccessorSparseBase;
	name			:  string;
	extensions		:  any;
	extras			:  any;
	constructor(accessorBase: AccessorBase, bufferView: BufferView) {
		this.bufferView 	=  bufferView;
		this.byteOffset		= (accessorBase.byteOffset	!== undefined) ? accessorBase.byteOffset	: 0;
		this.componentType	=  accessorBase.componentType;
		this.normalized		= (accessorBase.normalized	!== undefined) ? accessorBase.normalized	: false;
		this.count			=  accessorBase.count;
		this.type			=  accessorBase.type;
		this.max			=  accessorBase.max;
		this.min			=  accessorBase.min;
		this.sparse			= (accessorBase.sparse		!== undefined) ? accessorBase.sparse		: null;
		this.name			= (accessorBase.name		!== undefined) ? accessorBase.name			: null;
		this.extensions		= (accessorBase.extensions	!== undefined) ? accessorBase.extensions	: null;
		this.extras			= (accessorBase.extras		!== undefined) ? accessorBase.extras		: null;
	}
	prepareVertexAttribute(gl: WebGL2RenderingContext, location: number): void {
		gl.vertexAttribPointer(
			location,
			glTFLoaderBasic.accessorTypeToNumComponents(this.type),
			this.componentType,
			this.normalized,
			this.bufferView.byteStride,
			this.byteOffset
		)
		gl.enableVertexAttribArray(location)
	}
}
class BufferView {
	buffer		:  WebGLBuffer;
	byteOffset	:  number;
	byteLength	:  number;
	byteStride	:  number;
	target		:  BufferViewTarget;
	name		:  string;
	extensions	:  any;
	extras		:  any;
	data		:  ArrayBuffer;
	constructor(bufferViewBase: BufferViewBase, bufferData: ArrayBuffer) {
		this.buffer		=  null;
		this.byteOffset = (bufferViewBase.byteOffset	!== undefined) ? bufferViewBase.byteOffset	: 0;
		this.byteLength =  bufferViewBase.byteLength;
		this.byteStride = (bufferViewBase.byteStride	!== undefined) ? bufferViewBase.byteStride	: 0;
		this.target		= (bufferViewBase.target		!== undefined) ? bufferViewBase.target		: 0;
		this.name		= (bufferViewBase.name			!== undefined) ? bufferViewBase.name		: null;
		this.extensions	= (bufferViewBase.extensions	!== undefined) ? bufferViewBase.extensions	: null;
		this.extras		= (bufferViewBase.extras		!== undefined) ? bufferViewBase.extras		: null;
		this.data		=  bufferData.slice(this.byteOffset, this.byteOffset + this.byteLength);
	}
	createBuffer(gl: WebGL2RenderingContext): void {
		this.buffer = gl.createBuffer()
	}
	bindData(gl:WebGL2RenderingContext): void {
		const target = this.target || BufferViewTarget.ARRAY_BUFFER
		gl.bindBuffer(target, this.buffer);
		gl.bufferData(target, this.data, gl.STATIC_DRAW);
		gl.bindBuffer(target, null);
	}
}
class Camera {
	orthographic	:  CameraOrthographicBase;
	perspective		:  CameraPerspectiveBase;
	type			:  "perspective" | "orthographic";
	name			:  string;
	extensions		:  any;
	extras			:  any;
	constructor(cameraBase: CameraBase) {
		this.orthographic	= (cameraBase.orthographic	!== undefined) ? cameraBase.orthographic: null;
		this.perspective	= (cameraBase.perspective	!== undefined) ? cameraBase.perspective	: null;
		this.type 			=  cameraBase.type;
		this.name			= (cameraBase.name			!== undefined) ? cameraBase.name		: null;
		this.extensions		= (cameraBase.extensions	!== undefined) ? cameraBase.extensions	: null;
		this.extras			= (cameraBase.extras		!== undefined) ? cameraBase.extras		: null;
	}
}
export class Node {
	camera		:  GLTFID;
	children	:  Node[];
	skin		:  Skin;
	translation	:  vec3;
	rotation	:  quat;
	scale		:  vec3;
	matrix		:  mat4;
	mesh		:  Mesh;
	weights		:  number[];
	name		:  string;
	extensions	:  any;
	extras		:  any;
	nodeID		:  GLTFID;
	childrenID	:  GLTFID[];
	parent		:  Node;	
	skinLink	:  SkinLink;
	modelMatrix	:  mat4;
	worldMatrix	:  mat4;
	aabb		:  BoundingBox;
	bvh			:  BoundingBox;
	constructor(nodeBase: NodeBase, nodeID: GLTFID, currentLoader: GLTFLoader) {
		this.camera			= (nodeBase.camera		!== undefined) ? nodeBase.camera		: null;
		this.children		=  [];
		this.skin			=  null;
		this.translation	= (nodeBase.translation	!== undefined) ? nodeBase.translation	: vec3.create();
		this.rotation		= (nodeBase.rotation	!== undefined) ? nodeBase.rotation		: quat.create();
		this.scale			= (nodeBase.scale		!== undefined) ? nodeBase.scale			: vec3.fromValues(1.0, 1.0, 1.0);
		this.matrix			= (nodeBase.matrix		!== undefined) ? mat4.clone(nodeBase.matrix) : mat4.fromRotationTranslationScale(mat4.create(), this.rotation, this.translation, this.scale);
		this.mesh			= (nodeBase.mesh		!== undefined) ? currentLoader.glTF.meshes[nodeBase.mesh] : null;
		this.weights		= (nodeBase.weights		!== undefined) ? nodeBase.weights		: null;
		this.name			= (nodeBase.name		!== undefined) ? nodeBase.name			: null;
		this.extensions		= (nodeBase.extensions	!== undefined) ? nodeBase.extensions	: null;
		this.extras			= (nodeBase.extras		!== undefined) ? nodeBase.extras		: null;
		this.nodeID			=  nodeID;
		this.childrenID		= (nodeBase.children	!== undefined) ? nodeBase.children		: [];
		this.parent			=  null;
		this.modelMatrix	=  mat4.clone(this.matrix);
		this.worldMatrix	=  mat4.clone(this.matrix);
		if (nodeBase.extensions !== undefined) {
			if (nodeBase.extensions.gl_avatar !== undefined && currentLoader.enableGLAvatar === true) {
				const linkedSkinID 	: number	= currentLoader._glTF.extensions.gl_avatar.skins[nodeBase.extensions.gl_avatar.skin.name];
				const linkedSkin	: Skin		= currentLoader.skeletonGLTF.skins[linkedSkinID];
				this.skinLink = new SkinLink(linkedSkin, currentLoader.glTF, nodeBase.extensions.gl_avatar.skin.inverseBindMatrices);
			} else {
				this.skinLink = null;
			}
		}
		this.aabb			= null;
		this.bvh			= new BoundingBox();
	};
	traverse(traverseFunction: Function, parent?: Node): void {
		parent = (parent === undefined) ? null : parent;
		traverseFunction(this, parent);
		for (let i = 0, len = this.children.length; i < len; i++) {
			this.children[i].traverse(traverseFunction, this);
		}
	};
	traversePostOrder(traverseFunction: Function, parent: Node): void {
		parent = (parent === undefined) ? null : parent;
		for (var i = 0, len = this.children.length; i < len; i++) {
			this.children[i].traversePostOrder(traverseFunction, this);
		}
		traverseFunction(this, parent);
	};
	traverseTwoFunction(traverseFunctionPreOrder: Function, traverseFunctionPostOrder: Function, parent?: Node): void {
		parent = (parent === undefined) ? null : parent;
		traverseFunctionPreOrder(this, parent);
		for (let i = 0, len = this.children.length; i < len; i++) {
			this.children[i].traverseTwoFunction(traverseFunctionPreOrder, traverseFunctionPostOrder, this);
		}
		traverseFunctionPostOrder(this, parent);
	};
}
class Mesh {
	primitives	:  MeshPrimitive[];
	weights		:  number[];
	name		:  string;
	extensions	:  any;
	extras		:  any;
	boundingBox	:  BoundingBox;
	meshID		:  number;
	constructor(meshBase: MeshBase, meshID: number, currentLoader: GLTFLoader) {
		this.primitives		=  [];
		this.weights		= (meshBase.weights		!== undefined) ? meshBase.weights		: null;
		this.name			= (meshBase.name		!== undefined) ? meshBase.name			: null;
		this.extensions		= (meshBase.extensions	!== undefined) ? meshBase.extensions	: null;
		this.extras			= (meshBase.extras		!== undefined) ? meshBase.extras		: null;
		this.boundingBox	=  null;
		let  primitiveBase : MeshPrimitiveBase, primitive : MeshPrimitive;
		for (let i = 0; i < meshBase.primitives.length; i++) {
			primitiveBase = meshBase.primitives[i];
			primitive = new MeshPrimitive(primitiveBase, currentLoader.glTF, currentLoader);
			this.primitives.push(primitive);
			if (primitive.boundingBox) {
				if (!this.boundingBox) {
					this.boundingBox = new BoundingBox()
				}
				this.boundingBox.updateBoundingBox(primitive.boundingBox);
			}
		}
		if (this.boundingBox) {
			this.boundingBox.calculateTransform();
		}
		this.meshID			=  meshID;
	}
}
export class MeshPrimitive {
	attributesID			: {POSITION ?: GLTFID , NORMAL ?: GLTFID, TEXCOORD_0 ?: GLTFID};
	attributes				: {POSITION ?: Accessor , NORMAL ?: Accessor, TEXCOORD_0 ?: Accessor};
	indicesID				:  GLTFID;
	indices					:  Accessor;
	material				:  Material;
	mode					:  MeshPrimitiveType;
	targetsID				: {POSITION ?: GLTFID, NORMAL ?: GLTFID, TANGENT ?: GLTFID}[];
	targets					: {POSITION ?: Accessor, NORMAL ?: Accessor, TANGENT ?: Accessor}[];
	extensions				:  any;
	extras					:  any;
	drawIndices				:  Accessor;
	vertexArray				:  ArrayBuffer;
	vertexBuffer			:  ArrayBuffer;
	shader					:  WebGLShader;
	boundingBox				:  BoundingBox;
	constructor(primitiveBase: MeshPrimitiveBase, gltf: GLTF, currentLoader: GLTFLoader) {
		this.attributesID =  primitiveBase.attributes;
		if (primitiveBase.extensions !== undefined) {
			if (primitiveBase.extensions.gl_avatar !== undefined && currentLoader.enableGLAvatar === true) {
				if (primitiveBase.extensions.gl_avatar.attributes) {
					for (let attributeName in primitiveBase.extensions.gl_avatar.attributes) {
						this.attributesID[attributeName] = primitiveBase.extensions.gl_avatar.attributeName[attributeName];
					}
				}
			}
		}
		this.attributes = {POSITION : null , NORMAL : null, TEXCOORD_0 : null};
		for (let attributeName in this.attributesID) {
			this.attributes[attributeName] = gltf.accessors[this.attributesID[attributeName]];
		}
		if (this.attributes.POSITION !== undefined) {
			let accessor = this.attributes.POSITION;
			if (accessor.max) {
				if (accessor.type === "VEC3") {
					this.boundingBox = new BoundingBox(
						vec3.fromValues(accessor.min[0], accessor.min[1], accessor.min[2]),
						vec3.fromValues(accessor.max[0], accessor.max[1], accessor.max[2]),
						false
					);
					this.boundingBox.calculateTransform();
				}
			}
		}

		this.indicesID	= (primitiveBase.indices	!== undefined) ? primitiveBase.indices		: null;
		if (this.indicesID !== null) {
			this.indices		= gltf.accessors[this.indicesID];
		} else {
			this.drawIndices	= gltf.accessors[this.attributesID.POSITION];
		}

		this.material	= (primitiveBase.material	!== undefined) ? gltf.materials[primitiveBase.material] : null;
		this.mode		= (primitiveBase.mode		!== undefined) ? primitiveBase.mode			: MeshPrimitiveType.TRIANGLES;
		this.targetsID	= (primitiveBase.targets	!== undefined) ? primitiveBase.targets		: null;
		for (let targetID in this.targetsID) {
			const currentTarget = {POSITION : null , NORMAL : null, TEXCOORD_0 : null};
			// for (let attributeName in targetID) {
			// 	this.targets
			// }
		}
		this.extensions	= (primitiveBase.extensions	!== undefined) ? primitiveBase.extensions	: null;
		this.extras		= (primitiveBase.extras		!== undefined) ? primitiveBase.extras		: null;


		this.vertexArray	= null;
		this.vertexBuffer	= null;
		this.shader			= null;
	}
}
class Texture {
	sampler		:  Sampler;
	source		:  ImageBitmap | ImageData | HTMLImageElement;
	name		:  string;
	extensions	:  any;
	extras		:  any;
	texture		:  WebGLTexture;
	constructor(textureBase: TextureBase, currentLoader: GLTFLoader) {
		this.sampler	= (textureBase.sampler		!== undefined) ? currentLoader.glTF.samplers[textureBase.sampler]	: null;
		this.source		= (textureBase.sampler		!== undefined) ? currentLoader.glTF.images[textureBase.source]		: null;
		this.name		= (textureBase.name			!== undefined) ? textureBase.name			: null;
		this.extensions	= (textureBase.extensions	!== undefined) ? textureBase.extensions		: null;
		this.extras		= (textureBase.extras		!== undefined) ? textureBase.extras			: null;
		this.texture	= null;
	}
	createTexture(gl: WebGL2RenderingContext): void {
		this.texture = gl.createTexture();
		gl.bindTexture(gl.TEXTURE_2D, this.texture);
		gl.texImage2D(
			gl.TEXTURE_2D,		// assumed
			0,					// Level of details
			gl.RGBA,			// Internalformat
			gl.RGBA,			// Format
			gl.UNSIGNED_BYTE,	// Size of each channel
			this.source
		);
		gl.generateMipmap(gl.TEXTURE_2D);
		gl.bindTexture(gl.TEXTURE_2D, null);
	}
}
class Sampler {
	magFilter	:  SamplerMagnificationFilter;
	minFilter	:  SamplerMinificationFilter;
	wrapS		:  SamplerWrappingMode;
	wrapT		:  SamplerWrappingMode;
	name		:  string;
	extensions	:  any;
	extras		:  any;
	// FIXME: 
	// 当前版本typescipt不支持接口WebGLSampler 等待升级
	// sampler		:  WebGLSampler;
	sampler		:  any;
	constructor(samplerBase: SamplerBase) {
		this.magFilter	= (samplerBase.magFilter	!== undefined) ? samplerBase.magFilter	: null;
		this.minFilter	= (samplerBase.minFilter	!== undefined) ? samplerBase.minFilter	: null;
		this.wrapS		= (samplerBase.wrapS		!== undefined) ? samplerBase.wrapS		: SamplerWrappingMode.REPEAT;
		this.wrapT		= (samplerBase.wrapT		!== undefined) ? samplerBase.wrapT		: SamplerWrappingMode.REPEAT;
		this.name		= (samplerBase.name			!== undefined) ? samplerBase.name		: null;
		this.extensions	= (samplerBase.extensions	!== undefined) ? samplerBase.extensions	: null;
		this.extras		= (samplerBase.extras		!== undefined) ? samplerBase.extras		: null;
		this.sampler	= null;
	}
	createSampler(gl: WebGL2RenderingContext) {
		this.sampler = gl.createSampler();
		if (this.minFilter) {
			gl.samplerParameteri(this.sampler, gl.TEXTURE_MIN_FILTER, this.minFilter);
		} else {
			gl.samplerParameteri(this.sampler, gl.TEXTURE_MIN_FILTER, gl.NEAREST_MIPMAP_LINEAR);
		}
		if (this.magFilter) {
			gl.samplerParameteri(this.sampler, gl.TEXTURE_MAG_FILTER, this.magFilter);
		} else {
			gl.samplerParameteri(this.sampler, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
		}
		gl.samplerParameteri(this.sampler, gl.TEXTURE_WRAP_S, this.wrapS);
		gl.samplerParameteri(this.sampler, gl.TEXTURE_WRAP_T, this.wrapT);
	}
}
class TextureInfo {
	index		:  GLTFID;
	texCoord	:  number;
	extensions	:  any;
	extras		:  any;
	constructor(textureInfoBase: TextureInfoBase) {
		this.index		= textureInfoBase.index;
		this.texCoord	= (textureInfoBase.texCoord		!== undefined) ? textureInfoBase.texCoord	: 0 ;
		this.extensions	= (textureInfoBase.extensions	!== undefined) ? textureInfoBase.extensions	: null;
		this.extras		= (textureInfoBase.extras		!== undefined) ? textureInfoBase.extras		: null;
	}
}
class Material {
	name					:  string;
	extensions				:  any;
	extras					:  any;
	pbrMetallicRoughness	:  MaterialPbrMetallicRoughness;
	normalTexture			:  MaterialNormalTextureInfo;
	occlusionTexture		:  MaterialOcclusionTextureInfo;
	emissiveTexture			:  TextureInfo;
	emissiveFactor			:  number[];
	alphaMode				:  "OPAQUE" | "MASK" | "BLEND";
	alphaCutoff				:  number;
	doubleSided				:  boolean;
	constructor(materialBase: MaterialBase) {
		this.name					= (materialBase.name					!== undefined) ? materialBase.name				: null;
		this.extensions				= (materialBase.extensions				!== undefined) ? materialBase.extensions		: null;
		this.extras					= (materialBase.extras					!== undefined) ? materialBase.extras			: null;
		this.pbrMetallicRoughness	= (materialBase.pbrMetallicRoughness	!== undefined) ? new MaterialPbrMetallicRoughness(materialBase.pbrMetallicRoughness) : new MaterialPbrMetallicRoughness({
			baseColorFactor				: [1, 1, 1, 1],
			baseColorTexture			: null,
			metallicFactor				: 1,
			roughnessFactor				: 1,
			metallicRoughnessTexture	: null,
		});
		this.normalTexture			= (materialBase.normalTexture			!== undefined) ? new MaterialNormalTextureInfo(materialBase.normalTexture)		: null;
		this.occlusionTexture		= (materialBase.occlusionTexture		!== undefined) ? new MaterialOcclusionTextureInfo(materialBase.occlusionTexture)	: null;
		this.emissiveTexture		= (materialBase.emissiveTexture			!== undefined) ? new TextureInfo(materialBase.emissiveTexture)					: null;
		this.emissiveFactor			= (materialBase.emissiveFactor			!== undefined) ? materialBase.emissiveFactor	: [0, 0, 0];
		this.alphaMode				= (materialBase.alphaMode				!== undefined) ? materialBase.alphaMode			: "OPAQUE";
		this.alphaCutoff			= (materialBase.alphaCutoff				!== undefined) ? materialBase.alphaCutoff		: 0.5;
		this.doubleSided			= !!materialBase.doubleSided;
	}
}
class MaterialPbrMetallicRoughness {
	baseColorFactor				:  number[];
	baseColorTexture			:  TextureInfoBase;
	metallicFactor				:  number;
	roughnessFactor				:  number;
	metallicRoughnessTexture	:  TextureInfoBase;
	extensions					:  any;
	extras						:  any;
	constructor(materialPbrMetallicRoughnessBase: MaterialPbrMetallicRoughnessBase) {
		this.baseColorFactor			= (materialPbrMetallicRoughnessBase.baseColorFactor				!== undefined) ? materialPbrMetallicRoughnessBase.baseColorFactor	: [1, 1, 1, 1];
		this.baseColorTexture			= (materialPbrMetallicRoughnessBase.baseColorTexture			!== undefined) ? new TextureInfo(materialPbrMetallicRoughnessBase.baseColorTexture): null;
		this.metallicFactor				= (materialPbrMetallicRoughnessBase.metallicFactor				!== undefined) ? materialPbrMetallicRoughnessBase.metallicFactor	: 1;
		this.roughnessFactor			= (materialPbrMetallicRoughnessBase.roughnessFactor				!== undefined) ? materialPbrMetallicRoughnessBase.roughnessFactor	: 1;
		this.metallicRoughnessTexture	= (materialPbrMetallicRoughnessBase.metallicRoughnessTexture	!== undefined) ? new TextureInfo(materialPbrMetallicRoughnessBase.metallicRoughnessTexture): null;
		this.extensions					= (materialPbrMetallicRoughnessBase.extensions					!== undefined) ? materialPbrMetallicRoughnessBase.extensions		: null;
		this.extras						= (materialPbrMetallicRoughnessBase.extras						!== undefined) ? materialPbrMetallicRoughnessBase.extras			: null;
	}
}
class MaterialNormalTextureInfo {
	index		:  any;
	texCoord	:  any;
	scale		:  number;
	extensions	:  any;
	extras		:  any;
	constructor(materialNormalTextureInfoBase: MaterialNormalTextureInfoBase) {
		this.index		= (materialNormalTextureInfoBase.index		!== undefined) ? materialNormalTextureInfoBase.index		: 0;
		this.texCoord	= (materialNormalTextureInfoBase.texCoord	!== undefined) ? materialNormalTextureInfoBase.texCoord		: 0;
		this.scale		= (materialNormalTextureInfoBase.scale		!== undefined) ? materialNormalTextureInfoBase.scale		: 1;
		this.extensions	= (materialNormalTextureInfoBase.extensions	!== undefined) ? materialNormalTextureInfoBase.extensions	: null;
		this.extras		= (materialNormalTextureInfoBase.extras		!== undefined) ? materialNormalTextureInfoBase.extras		: null;
	}
}
class MaterialOcclusionTextureInfo {
	index		:  any;
	texCoord	:  any;
	strength	:  number;
	extensions	:  any;
	extras		:  any;
	constructor(materialOcclusionTextureInfoBase: MaterialOcclusionTextureInfoBase) {
		this.index		= (materialOcclusionTextureInfoBase.index		!== undefined) ? materialOcclusionTextureInfoBase.index			: 0;
		this.texCoord	= (materialOcclusionTextureInfoBase.texCoord	!== undefined) ? materialOcclusionTextureInfoBase.texCoord		: 0;
		this.strength	= (materialOcclusionTextureInfoBase.strength	!== undefined) ? materialOcclusionTextureInfoBase.strength		: 1;
		this.extensions	= (materialOcclusionTextureInfoBase.extensions	!== undefined) ? materialOcclusionTextureInfoBase.extensions	: null;
		this.extras		= (materialOcclusionTextureInfoBase.extras		!== undefined) ? materialOcclusionTextureInfoBase.extras		: null;
	}
}
class Skin {
	inverseBindMatrices				:  Accessor;
	skeleton						:  Node;
	joints							:  Node[];
	name							:  string;
	extensions						:  any;
	extras							:  any;
	isLink							:  boolean;
	inverseBindMatricesData			:  Int8Array | Uint8Array | Int16Array | Uint16Array | Int32Array | Uint32Array | Float32Array;
	inverseBindMatrix				:  mat4[];
	constructor(skinBase: SkinBase, gltf: GLTF) {
		this.inverseBindMatrices	= (skinBase.inverseBindMatrices	!== undefined) ? gltf.accessors[skinBase.inverseBindMatrices]	: null;
		this.skeleton				= (skinBase.skeleton			!== undefined) ? gltf.nodes[skinBase.skeleton]					: null;
		this.joints					=  [];
		for (let i = 0; i < skinBase.joints.length; i++) {
			this.joints.push(gltf.nodes[skinBase.joints[i]]);
		}		
		this.name					= (skinBase.name				!== undefined) ? skinBase.name				: null;
		this.extensions				= (skinBase.extensions			!== undefined) ? skinBase.extensions		: null;
		this.extras					= (skinBase.extras				!== undefined) ? skinBase.extras			: null;
		this.isLink					=  false;
		if (this.inverseBindMatrices) {
			this.inverseBindMatricesData = glTFLoaderBasic.getAccessorData(this.inverseBindMatrices);
			this.inverseBindMatrix = [];
			for(let i = 0; i < this.inverseBindMatricesData.length; i += 16) {
				this.inverseBindMatrix.push(
					mat4.fromValues(
						this.inverseBindMatricesData[i],		this.inverseBindMatricesData[i + 1],	this.inverseBindMatricesData[i + 2],	this.inverseBindMatricesData[i + 3],
						this.inverseBindMatricesData[i + 4],	this.inverseBindMatricesData[i + 5],	this.inverseBindMatricesData[i + 6],	this.inverseBindMatricesData[i + 7],
						this.inverseBindMatricesData[i + 8],	this.inverseBindMatricesData[i + 9],	this.inverseBindMatricesData[i + 10],	this.inverseBindMatricesData[i + 11],
						this.inverseBindMatricesData[i + 12],	this.inverseBindMatricesData[i + 13],	this.inverseBindMatricesData[i + 14],	this.inverseBindMatricesData[i + 15],
					)
				);
			}
		}
	}
}
class SkinLink {
	inverseBindMatrices				:  Accessor;
	skeleton						:  Node;
	joints							:  Node[];
	name							:  string;
	extensions						:  any;
	extras							:  any;
	isLink							:  boolean
	inverseBindMatricesData			:  Int8Array | Uint8Array | Int16Array | Uint16Array | Int32Array | Uint32Array | Float32Array;
	inverseBindMatrix				:  mat4[];
	constructor(linkedSkin: Skin, gltf: GLTF, inverseBindMatricesAccessorID?: number) {
		if (!gltf.skins) {
			gltf.skins = [];
		}
		gltf.skins.push(this);
		this.inverseBindMatrices	= (inverseBindMatricesAccessorID	!== undefined) ? gltf.accessors[inverseBindMatricesAccessorID]	: null;
		this.skeleton				=  linkedSkin.skeleton;
		this.joints					=  linkedSkin.joints;		
		this.name					=  linkedSkin.name;
		this.extensions				=  linkedSkin.extensions;
		this.extras					=  linkedSkin.extras;
		this.isLink					=  true;
		if (this.inverseBindMatrices) {
			this.inverseBindMatricesData = glTFLoaderBasic.getAccessorData(this.inverseBindMatrices);
			this.inverseBindMatrix = [];
			for(let i = 0; i < this.inverseBindMatricesData.length; i += 16) {
				this.inverseBindMatrix.push(
					mat4.fromValues(
						this.inverseBindMatricesData[i],		this.inverseBindMatricesData[i + 1],	this.inverseBindMatricesData[i + 2],	this.inverseBindMatricesData[i + 3],
						this.inverseBindMatricesData[i + 4],	this.inverseBindMatricesData[i + 5],	this.inverseBindMatricesData[i + 6],	this.inverseBindMatricesData[i + 7],
						this.inverseBindMatricesData[i + 8],	this.inverseBindMatricesData[i + 9],	this.inverseBindMatricesData[i + 10],	this.inverseBindMatricesData[i + 11],
						this.inverseBindMatricesData[i + 12],	this.inverseBindMatricesData[i + 13],	this.inverseBindMatricesData[i + 14],	this.inverseBindMatricesData[i + 15],
					)
				);
			}
		}
	}
}
export class Animation {
	samplers		:  AnimationSampler[];
	channels		:  AnimationChannel[];
	name			:  string;
	extensions		:  any;
	extras			:  any;
	constructor(animationBase: AnimationBase, gltf: GLTF) {
		this.samplers = [];
		for (let i = 0; i < animationBase.samplers.length; i++) {
			this.samplers.push(new AnimationSampler(animationBase.samplers[i], gltf));
		}
		this.channels = [];
		for (let i = 0; i < animationBase.channels.length; i++) {
			this.channels.push(new AnimationChannel(animationBase.channels[i], this));
		}
		this.name					= (animationBase.name				!== undefined) ? animationBase.name				: null;
		this.extensions				= (animationBase.extensions			!== undefined) ? animationBase.extensions		: null;
		this.extras					= (animationBase.extras				!== undefined) ? animationBase.extras			: null;
	}
}
export class AnimationChannel {
	sampler		:  AnimationSampler;
	target		:  AnimationChannelTarget;
	extensions	:  any;
	extras		:  any;
	constructor(animationChannelBase: AnimationChannelBase, animation: Animation) {
		this.sampler	=  animation.samplers[animationChannelBase.sampler];
		this.target		=  new AnimationChannelTarget(animationChannelBase.target);
		this.extensions	= (animationChannelBase.extensions	!== undefined) ? animationChannelBase.extensions	: null;
		this.extras		= (animationChannelBase.extras		!== undefined) ? animationChannelBase.extras		: null;
	}
}
class AnimationChannelTarget {
	node		:  Node;
	path		:  "translation" | "rotation" | "scale" | "weights";
	extensions	:  any;
	extras		:  any;
	nodeID		:  GLTFID;
	constructor(animationChannelTargetBase: AnimationChannelTargetBase) {
		//id, to be hooked up to object later
		this.nodeID		=  animationChannelTargetBase.node;
		this.path		=  animationChannelTargetBase.path;
		this.extensions	= (animationChannelTargetBase.extensions	!== undefined) ? animationChannelTargetBase.extensions	: null;
		this.extras		= (animationChannelTargetBase.extras		!== undefined) ? animationChannelTargetBase.extras		: null;
	}
}
export class AnimationSampler {
	input				:  Accessor;
	interpolation		:  "LINEAR" | "STEP" | "CUBICSPLINE";
	output				:  Accessor;
	extensions			:  any;
	extras				:  any;
	keyFrameIndices		:  Int8Array | Uint8Array | Int16Array | Uint16Array | Int32Array | Uint32Array | Float32Array;
	keyFrameRaw			:  Int8Array | Uint8Array | Int16Array | Uint16Array | Int32Array | Uint32Array | Float32Array;
	keyFrames			:  {src: Int8Array | Uint8Array | Int16Array | Uint16Array | Int32Array | Uint32Array | Float32Array, dst: Int8Array | Uint8Array | Int16Array | Uint16Array | Int32Array | Uint32Array | Float32Array};
	currentIndex		:  number;
	startTime			:  number;
	endTime				:  number;
	duration			:  number;
	constructor(animationSamplerBase: AnimationSamplerBase, gltf: GLTF) {
		this.input				=  gltf.accessors[animationSamplerBase.input]; 
		this.interpolation		= (animationSamplerBase.interpolation	!== undefined) ? animationSamplerBase.interpolation : "LINEAR";
		this.output				=  gltf.accessors[animationSamplerBase.output];
		this.extensions			= (animationSamplerBase.extensions		!== undefined) ? animationSamplerBase.extensions	: null;
		this.extras				= (animationSamplerBase.extras			!== undefined) ? animationSamplerBase.extras		: null;
		this.keyFrameIndices	=  glTFLoaderBasic.getAccessorData(this.input);
		this.keyFrameRaw		=  glTFLoaderBasic.getAccessorData(this.output);
		this.keyFrames			= {src: null, dst: null};
		this.currentIndex		= 0;
		this.startTime			= this.keyFrameIndices[0];
		this.endTime			= this.keyFrameIndices[this.keyFrameIndices.length - 1];
		this.duration			= this.endTime - this.startTime;
	}
	updateKeyFrames(time: number): void  {
		while (this.currentIndex < this.keyFrameIndices.length - 2 && time >= this.keyFrameIndices[this.currentIndex + 1]) {
			this.currentIndex++;
		}
		const byteLength = glTFLoaderBasic.accessorTypeToNumComponents(this.output.type);
		this.keyFrames.src = this.keyFrameRaw.slice(this.currentIndex * byteLength, (this.currentIndex + 1) * byteLength);
		this.keyFrames.dst = this.keyFrameRaw.slice((this.currentIndex + 1) * byteLength, (this.currentIndex + 2) * byteLength);
		if (time >= this.endTime) {
			this.currentIndex = 0;
		}
	}
}
export class GLTF {
	asset				:  AssetBase;
	scene				?: Scene;
	scenes				?: Scene[];
	nodes				?: Node[];
	meshes				?: Mesh[];
	accessors			?: Accessor[];
	bufferViews			?: BufferView[];
	buffers				?: ArrayBuffer[];
	animations			?: Animation[];
	cameras				?: Camera[];
	textures			?: Texture[];
	images				?: (ImageBitmap | ImageData | HTMLImageElement)[];
	samplers			?: Sampler[];
	materials			?: Material[];
	skins				?: (Skin | SkinLink)[];
	extensions			?: any;
	extensionsUsed		?: string[];
	extensionsRequired	?: string[];
	extras				?: any;
	constructor(glTFBase: GLTFBase) {
		this.asset				=  glTFBase.asset;
		this.scene				=  null;
		this.scenes				= (glTFBase.scenes				!== undefined) ? []								: null;
		this.nodes				= (glTFBase.nodes				!== undefined) ? []								: null;
		this.meshes				= (glTFBase.meshes				!== undefined) ? []								: null;
		this.accessors			= (glTFBase.accessors			!== undefined) ? []								: null;
		this.bufferViews		= (glTFBase.bufferViews			!== undefined) ? []								: null;
		this.buffers			= (glTFBase.buffers				!== undefined) ? []								: null;
		this.animations			= (glTFBase.animations			!== undefined) ? []								: null;
		this.cameras			= (glTFBase.cameras				!== undefined) ? []								: null;
		this.textures			= (glTFBase.textures			!== undefined) ? []								: null;
		this.images				= (glTFBase.images				!== undefined) ? []								: null;
		this.samplers			= (glTFBase.samplers			!== undefined) ? []								: null;
		this.materials			= (glTFBase.materials			!== undefined) ? []								: null;
		this.skins				= (glTFBase.skins				!== undefined) ? []								: null;
		this.extensions			= (glTFBase.extensions			!== undefined) ? glTFBase.extensions			: null;
		this.extensionsUsed		= (glTFBase.extensionsUsed		!== undefined) ? glTFBase.extensionsUsed		: null;
		this.extensionsRequired	= (glTFBase.extensionsRequired	!== undefined) ? glTFBase.extensionsRequired	: null;
		this.extras				= (glTFBase.extras				!== undefined) ? glTFBase.extras				: null;
	}
}

export class GLTFLoader {
	_glTF					:  GLTFBase;
	glTF					:  GLTF;
	baseUri					:  string;
	enableGLAvatar			:  boolean;
	skeletonGLTF			:  GLTF;
	gl						:  WebGL2RenderingContext;

	constructor(gl: WebGL2RenderingContext) {
		this.glTF				= null;
		this.enableGLAvatar		= false;
		this.skeletonGLTF		= null;
		this.gl					= gl;
	}
	/**
	 * Get base URL from the given URL
	 * @param	{url} string The original URL
	 * @returns	{string} The base URL
	 */
	public getBaseUri(uri: string): string {
		// https://github.com/AnalyticalGraphicsInc/cesium/blob/master/Source/Core/getBaseUri.js
		let basePath: string = "";
		if (uri.lastIndexOf('/') !== -1) {
			basePath = uri.substring(0, uri.lastIndexOf('/') + 1);
		}
		return basePath;
	}
	/**
	 * infer attribute target for BufferView whether ARRAY_BUFFER or ELEMENT_ARRAY_BUFFER
	 * @param	{glTF} GLTF The glTF need to be inferred
	 * @returns	{void}
	 */
	private inferBufferViewTarget(): void {
		this._glTF.meshes.forEach((mesh: MeshBase) => {
			mesh.primitives.forEach((primitive: MeshPrimitiveBase) => {
				// set bufferView.target for POSITION, NORMAL, and TEXCOORD_0
				for (const [attributeName, accessorIndex] of Object.entries(primitive.attributes)) {
					if (attributeName === "POSITION" || attributeName === "NORMAL" || attributeName === "TEXCOORD_0") {
						this._glTF.bufferViews[this._glTF.accessors[accessorIndex].bufferView].target = BufferViewTarget.ARRAY_BUFFER
					}
				}
				if (primitive.indices !== undefined) {
					const bufferView = this._glTF.bufferViews[this._glTF.accessors[primitive.indices].bufferView];
					if (bufferView.target !== undefined) {
						if (bufferView.target !== BufferViewTarget.ELEMENT_ARRAY_BUFFER)
							console.warn("BufferView " + primitive.indices + " should have a target equal to ELEMENT_ARRAY_BUFFER");
					} else {
						bufferView.target =  BufferViewTarget.ELEMENT_ARRAY_BUFFER;
					}
				}
			})
		})
	}
	private postProcess():void {
		this.inferBufferViewTarget();
		// 挂载 BufferView
		if (this._glTF.bufferViews !== undefined) {
			for (let i = 0; i < this._glTF.bufferViews.length; i++) {
				const bufferView = new BufferView(this._glTF.bufferViews[i], this.glTF.buffers[this._glTF.bufferViews[i].buffer]);
				bufferView.createBuffer(this.gl);
				bufferView.bindData(this.gl);
				this.glTF.bufferViews.push(bufferView);
			}
		}
		// 挂载 Accessor
		if (this._glTF.accessors !== undefined) {
			for (let i = 0; i < this._glTF.accessors.length; i++) {
				this.glTF.accessors.push(new Accessor(this._glTF.accessors[i], this.glTF.bufferViews[this._glTF.accessors[i].bufferView]));
			}
		}
		// 挂载 Camera
		if (this._glTF.cameras !== undefined) {
			for (let i = 0; i < this._glTF.cameras.length; i++) {
				this.glTF.cameras.push(new Camera(this._glTF.cameras[i]))
			}
		}
		// 挂载 Material
		if (this._glTF.materials !== undefined) {
			for (let i = 0; i < this._glTF.materials.length; i++) {
				this.glTF.materials.push(new Material(this._glTF.materials[i]));
			}
		}
		// 挂载 Sampler
		if (this._glTF.samplers !== undefined) {
			for (let i = 0; i < this._glTF.samplers.length; i++) {
				this.glTF.samplers.push(new Sampler(this._glTF.samplers[i]));
			}
		}
		// 挂载 Texture
		if (this._glTF.textures !== undefined) {
			for (let i = 0; i < this._glTF.textures.length; i++) {
				this.glTF.textures.push(new Texture(this._glTF.textures[i], this));
				this.glTF.textures[i].createTexture(this.gl);
			}
		}
		// 挂载 Mesh
		if (this._glTF.meshes !== undefined) {
			for (let i = 0; i < this._glTF.meshes.length; i++) {
				this.glTF.meshes.push(new Mesh(this._glTF.meshes[i], i, this));
			}
		}
 		// 挂载 Node
		if (this._glTF.nodes !== undefined) {
			for (let i = 0; i < this._glTF.nodes.length; i++) {
				this.glTF.nodes.push(new Node(this._glTF.nodes[i], i, this));
			}
			// 为每个 Node 挂载 Node.children
			this.glTF.nodes.forEach(currentNode => {
				for (let i = 0; i < currentNode.childrenID.length; i++) {
					currentNode.children[i] = this.glTF.nodes[currentNode.childrenID[i]];
					currentNode.children[i].parent = currentNode;
				}
			});
			// 挂载 Scene
			if (this._glTF.scenes !== undefined) {
				for (let i = 0; i < this._glTF.scenes.length; i++) {
					this.glTF.scenes[i] = new Scene(this._glTF.scenes[i], this.glTF);
					this.glTF.scenes[i].boundingBox = new BoundingBox();
					const nodeMatrices : mat4[] = new Array(this.glTF.nodes.length);
					for (let j = 0; j < this.glTF.scenes[i].nodes.length; j++) {
						this.glTF.scenes[i].nodes[j].traverseTwoFunction(
							(node: Node, parent: Node) => {
								if (parent !== null) {
									mat4.multiply(nodeMatrices[node.nodeID], nodeMatrices[parent.nodeID], node.modelMatrix)
								} else {
									nodeMatrices[node.nodeID] = mat4.clone(node.modelMatrix);
								}
							},
							(node: Node, parent: Node) => {
								if (node.mesh) {
									node.worldMatrix = mat4.clone(nodeMatrices[node.nodeID]);
									if (node.mesh.boundingBox) {
										node.aabb = getAABBFromOBB(node.mesh.boundingBox, nodeMatrices[node.nodeID]);
										if (node.children.length === 0) {
											node.bvh.min = vec3.clone(node.aabb.min);
											node.bvh.max = vec3.clone(node.aabb.max);
										}
									}
								}
								if (parent !== null) {
									parent.bvh.min = vec3.min(parent.bvh.min, parent.bvh.min, node.bvh.min);
									parent.bvh.max = vec3.max(parent.bvh.max, parent.bvh.max, node.bvh.max);
								} else {
									vec3.min(this.glTF.scenes[i].boundingBox.min, this.glTF.scenes[i].boundingBox.min, node.bvh.min);
									vec3.max(this.glTF.scenes[i].boundingBox.max, this.glTF.scenes[i].boundingBox.max, node.bvh.max);
								}
							}
						)
					}
					this.glTF.scenes[i].boundingBox.calculateTransform();
				}
				if (this._glTF.scene !== undefined) {
					this.glTF.scene = this.glTF.scenes[this._glTF.scene];
				} else {
					this.glTF.scene = this.glTF.scenes[0];
				}
			}
			for (let i = 0; i < this.glTF.nodes.length; i++) {
				if (this.glTF.nodes[i].bvh !== null) {
					this.glTF.nodes[i].bvh.calculateTransform();
				}
			}
		}
		// 挂载 Animation
		if (this._glTF.animations) {
			for (let i = 0; i < this._glTF.animations.length; i++) {
				this.glTF.animations.push(new Animation(this._glTF.animations[i], this.glTF));
				this.glTF.animations[i].channels.forEach((channel) => {
					channel.target.node = this.glTF.nodes[channel.target.nodeID];
				})
			}
		}
		// 挂载 Skin
		if (this._glTF.skins) {
			for (let i = 0; i < this._glTF.skins.length; i++) {
				this.glTF.skins.push(new Skin(this._glTF.skins[i], this.glTF));
			}
			for (let i = 0; i < this.glTF.nodes.length; i++) {
				if (this.glTF.nodes[i].skin !== null) {
					if (typeof this._glTF.nodes[this.glTF.nodes[i].nodeID].skin) {
						// usual skin, hook up
						this.glTF.nodes[i].skin = this.glTF.skins[this._glTF.nodes[this.glTF.nodes[i].nodeID].skin];
					} else {
						// assume gl_avatar is in use then do nothing
					}
				}
			}
		}
 
	}
	public async loadGLTF(uri: string): Promise<GLTF> {
		this.baseUri = this.getBaseUri(uri);
		try {
			const glTFBase : GLTFBase = await fetch(new Request(uri)).then((response: Response) => {
				if (response.ok) {
					console.log(response)
					return response.json();
				}
				throw Error("LoadingError: Error occured in loading glTF JSON.");
			});
			this._glTF = glTFBase;
			this.glTF = new GLTF(glTFBase);
		} catch (error) {
			console.error(error);
		}
		const loadBuffer : Promise<boolean> = new Promise<boolean>(async (resolve) => {
			if (this._glTF.buffers) {
				const bufferPromises : Promise<ArrayBuffer>[] = [];
				for (const bufferInfo of this._glTF.buffers) {
					try {
						bufferPromises.push(fetch (new Request(this.baseUri + bufferInfo.uri)
						).then((response: Response) => {
							if (response.ok) {
								return response.arrayBuffer();
							}
							throw Error("LoadingError: Error occured in loading buffers.");
						}));
					} catch (error) {
						console.error(error);
					}	
				}
				for (const [bufferID, buffer] of bufferPromises.entries()) {
					this.glTF.buffers[bufferID] = await buffer;
					console.log(`image ${bufferID} complete`); 
				}
			}
			resolve(true);
		});
		const loadImage : Promise<boolean> = new Promise<boolean>(async (resolve) => {
			if (this._glTF.images) {
				const imagePromises : Promise<ImageBitmap>[] = [];
				for (const imageInfo of this._glTF.images) {
					try {
						imagePromises.push(fetch (new Request(this.baseUri + imageInfo.uri)
						).then((response: Response) => {
							if (response.ok) {
								return response.blob();
							}
							throw Error("LoadingError: Error occured in loading images.");
						}).then((imageBlob: Blob) => {
							return createImageBitmap(imageBlob);
						}));
					} catch (error) {
						console.error(error);
					}	
				}
				for (const [imageID, image] of imagePromises.entries()) {
					this.glTF.images[imageID] = await image;
					console.log(`image ${imageID} complete`); 
				}
			}
			resolve(true);
		});
		await loadBuffer;
		await loadImage;
		this.postProcess();
		return this.glTF;
	}
}

export module glTFLoaderBasic {
	/**
	 * Common utilities
	 * @module loaderBasic
	 */
	/**
	 * Get the count of components from the given accessor
	 * @param	{type} string The type of the given accessor
	 * @returns	{number} The count of components
	 */
	export function accessorTypeToNumComponents(type : string): number {
		const accessorMap = new Map<string, number>([
			["SCALAR",	1],
			["VEC2",	2],
			["VEC3",	3],
			["VEC4",	4],
			["MAT2",	4],
			["MAT3",	9],
			["MAT4",	16]
		]);
		if (accessorMap.has(type)) {
			return accessorMap.get(type);
		}
		throw new Error(`NOKEY ERROR: no numComponents for accessorType ${type}`);
	}
	/**
	 * Get the typed array of the given accessor's component
	 * @param	{type} string The component type of the given accessor
	 * @returns	{typedArrayConstructor} The constructor of the component's typed array
	 */
	export function glTypeToTypedArray(type: AccessorComponentType) {
		const typeMap = new Map<number, Int8ArrayConstructor | Uint8ArrayConstructor | Int16ArrayConstructor | Uint16ArrayConstructor | Int32ArrayConstructor | Uint32ArrayConstructor | Float32ArrayConstructor>([
			[5120, Int8Array],		// gl.BYTE
			[5121, Uint8Array],		// gl.UNSIGNED_BYTE
			[5122, Int16Array],		// gl.SHORT
			[5123, Uint16Array],	// gl.UNSIGNED_SHORT
			[5124, Int32Array],		// gl.INT
			[5125, Uint32Array],	// gl.UNSIGNED_INT
			[5126, Float32Array]	// gl.FLOAT
		]);
		if (typeMap.has(type)) {
			return typeMap.get(type);
		}
		throw new Error(`NOKEY ERROR: no typedArray for glType ${type}`);
	}
	/**
	 * Get the typed array of the given accessor's component
	 * @param	{type} string The component type of the given accessor
	 * @returns	{typedArrayConstructor} The constructor of the component's typed array
	 */
	export function getAccessorData(accessor: Accessor): Int8Array | Uint8Array | Int16Array | Uint16Array | Int32Array | Uint32Array | Float32Array {
		const typedArray = glTFLoaderBasic.glTypeToTypedArray(accessor.componentType);
		return new typedArray(
			accessor.bufferView.data, 
			accessor.byteOffset, 
			accessor.count * glTFLoaderBasic.accessorTypeToNumComponents(accessor.type)
		);
	}
}

// get Axis-Aligned Bounding Boxes from Oriented Bounding Boxes
function getAABBFromOBB(obb: BoundingBox, matrix: mat4): BoundingBox{
	let transformRight		: vec3 = vec3.fromValues(matrix[0], matrix[1], matrix[2]);
	let transformUp			: vec3 = vec3.fromValues(matrix[4], matrix[5], matrix[6]);
	let transformBackward	: vec3 = vec3.fromValues(matrix[8], matrix[9], matrix[10]);

	let tmpVec3a 			: vec3 = vec3.create();
	let tmpVec3b 			: vec3 = vec3.create();

	let min = vec3.fromValues(matrix[12], matrix[13], matrix[14]);  // init with matrix translation
	let max = vec3.clone(min);

	vec3.scale(tmpVec3a, transformRight, obb.min[0]);
	vec3.scale(tmpVec3b, transformRight, obb.max[0]);
	vec3.min(transformRight, tmpVec3a, tmpVec3b);
	vec3.add(min, min, transformRight);
	vec3.max(transformRight, tmpVec3a, tmpVec3b);
	vec3.add(max, max, transformRight);

	tmpVec3a			= vec3.scale(tmpVec3a, transformUp, obb.min[1]);
	tmpVec3b 			= vec3.scale(tmpVec3b, transformUp, obb.max[1]);
	vec3.min(transformUp, tmpVec3a, tmpVec3b);
	vec3.add(min, min, transformUp);
	vec3.max(transformUp, tmpVec3a, tmpVec3b);
	vec3.add(max, max, transformUp);

	tmpVec3a			= vec3.scale(tmpVec3a, transformBackward, obb.min[2]);
	tmpVec3b 			= vec3.scale(tmpVec3b, transformBackward, obb.max[2]);
	vec3.min(transformBackward, tmpVec3a, tmpVec3b);
	vec3.add(min, min, transformBackward);
	vec3.max(transformBackward, tmpVec3a, tmpVec3b);
	vec3.add(max, max, transformBackward);

	let axisAlignedBoundingBox = new BoundingBox(min, max, false);
	axisAlignedBoundingBox.calculateTransform();
	return axisAlignedBoundingBox;
}