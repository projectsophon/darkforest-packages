# Class: EngineUtils

## Table of contents

### Constructors

- [constructor](EngineUtils.md#constructor)

### Methods

- [fillTexture](EngineUtils.md#filltexture)
- [getNow](EngineUtils.md#getnow)
- [getPlanetZIndex](EngineUtils.md#getplanetzindex)
- [makeDoubleQuadBuffered](EngineUtils.md#makedoublequadbuffered)
- [makeEmptyDoubleQuad](EngineUtils.md#makeemptydoublequad)
- [makeEmptyQuad](EngineUtils.md#makeemptyquad)
- [makeEmptyQuadVec2](EngineUtils.md#makeemptyquadvec2)
- [makeQuad](EngineUtils.md#makequad)
- [makeQuadBuffered](EngineUtils.md#makequadbuffered)
- [makeQuadVec2](EngineUtils.md#makequadvec2)
- [makeQuadVec2Buffered](EngineUtils.md#makequadvec2buffered)
- [rgbVecToHex](EngineUtils.md#rgbvectohex)
- [rotateIndices](EngineUtils.md#rotateindices)
- [rotateQuad](EngineUtils.md#rotatequad)
- [rotateQuadVec2](EngineUtils.md#rotatequadvec2)
- [translateIndices](EngineUtils.md#translateindices)
- [translateQuad](EngineUtils.md#translatequad)
- [translateQuadVec2](EngineUtils.md#translatequadvec2)

## Constructors

### constructor

• **new EngineUtils**()

## Methods

### fillTexture

▸ `Static` **fillTexture**(`gl`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | `WebGL2RenderingContext` |

#### Returns

`void`

___

### getNow

▸ `Static` **getNow**(): `number`

12000 is a nicely divisible number, 2pi ensures periodicity

#### Returns

`number`

the modular of the current unix time by (2 * pi  * 12000) in seconds

___

### getPlanetZIndex

▸ `Static` **getPlanetZIndex**(`planet`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `planet` | `Planet` |

#### Returns

`number`

___

### makeDoubleQuadBuffered

▸ `Static` **makeDoubleQuadBuffered**(`b`, `ax1`, `ay1`, `ax2`, `ay2`, `bx1`, `by1`, `bx2`, `by2`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `number`[] |
| `ax1` | `number` |
| `ay1` | `number` |
| `ax2` | `number` |
| `ay2` | `number` |
| `bx1` | `number` |
| `by1` | `number` |
| `bx2` | `number` |
| `by2` | `number` |

#### Returns

`void`

___

### makeEmptyDoubleQuad

▸ `Static` **makeEmptyDoubleQuad**(): `number`[]

#### Returns

`number`[]

___

### makeEmptyQuad

▸ `Static` **makeEmptyQuad**(): `number`[]

#### Returns

`number`[]

___

### makeEmptyQuadVec2

▸ `Static` **makeEmptyQuadVec2**(): `number`[]

#### Returns

`number`[]

___

### makeQuad

▸ `Static` **makeQuad**(`x1`, `y1`, `x2`, `y2`, `z`): `number`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `x1` | `number` |
| `y1` | `number` |
| `x2` | `number` |
| `y2` | `number` |
| `z` | `number` |

#### Returns

`number`[]

___

### makeQuadBuffered

▸ `Static` **makeQuadBuffered**(`b`, `x1`, `y1`, `x2`, `y2`, `z`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `number`[] |
| `x1` | `number` |
| `y1` | `number` |
| `x2` | `number` |
| `y2` | `number` |
| `z` | `number` |

#### Returns

`void`

___

### makeQuadVec2

▸ `Static` **makeQuadVec2**(`x1`, `y1`, `x2`, `y2`): `number`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `x1` | `number` |
| `y1` | `number` |
| `x2` | `number` |
| `y2` | `number` |

#### Returns

`number`[]

___

### makeQuadVec2Buffered

▸ `Static` **makeQuadVec2Buffered**(`b`, `x1`, `y1`, `x2`, `y2`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `number`[] |
| `x1` | `number` |
| `y1` | `number` |
| `x2` | `number` |
| `y2` | `number` |

#### Returns

`void`

___

### rgbVecToHex

▸ `Static` **rgbVecToHex**(`rgb`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rgb` | `RGBVec` |

#### Returns

`string`

___

### rotateIndices

▸ `Static` `Private` **rotateIndices**(`b`, `i`, `j`, `angle`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `number`[] |
| `i` | `number` |
| `j` | `number` |
| `angle` | `number` |

#### Returns

`void`

___

### rotateQuad

▸ `Static` **rotateQuad**(`b`, `angle`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `number`[] |
| `angle` | `number` |

#### Returns

`void`

___

### rotateQuadVec2

▸ `Static` **rotateQuadVec2**(`b`, `angle`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `number`[] |
| `angle` | `number` |

#### Returns

`void`

___

### translateIndices

▸ `Static` `Private` **translateIndices**(`b`, `i`, `j`, `__namedParameters`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `number`[] |
| `i` | `number` |
| `j` | `number` |
| `__namedParameters` | [`number`, `number`] |

#### Returns

`void`

___

### translateQuad

▸ `Static` **translateQuad**(`b`, `t`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `number`[] |
| `t` | [`number`, `number`] |

#### Returns

`void`

___

### translateQuadVec2

▸ `Static` **translateQuadVec2**(`b`, `t`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `number`[] |
| `t` | [`number`, `number`] |

#### Returns

`void`
