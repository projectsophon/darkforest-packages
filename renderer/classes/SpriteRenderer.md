# Class: SpriteRenderer

Takes in a gl context, program sources (frag and vert shader),
and data about attribs / uniforms and provides:
- attrib managers
- uniform setters
- skeleton code for rendering in our engine via `flush()`

## Hierarchy

- [`GenericRenderer`](GenericRenderer.md)<typeof `SPRITE_PROGRAM_DEFINITION`\>

  ↳ **`SpriteRenderer`**

## Implements

- `SpriteRendererType`

## Table of contents

### Constructors

- [constructor](SpriteRenderer.md#constructor)

### Properties

- [attribData](SpriteRenderer.md#attribdata)
- [attribManagers](SpriteRenderer.md#attribmanagers)
- [flip](SpriteRenderer.md#flip)
- [loaded](SpriteRenderer.md#loaded)
- [manager](SpriteRenderer.md#manager)
- [posBuffer](SpriteRenderer.md#posbuffer)
- [program](SpriteRenderer.md#program)
- [rectposBuffer](SpriteRenderer.md#rectposbuffer)
- [rendererType](SpriteRenderer.md#renderertype)
- [texBuffer](SpriteRenderer.md#texbuffer)
- [texIdx](SpriteRenderer.md#texidx)
- [thumb](SpriteRenderer.md#thumb)
- [uniformData](SpriteRenderer.md#uniformdata)
- [uniformLocs](SpriteRenderer.md#uniformlocs)
- [uniformSetters](SpriteRenderer.md#uniformsetters)
- [verts](SpriteRenderer.md#verts)

### Methods

- [flush](SpriteRenderer.md#flush)
- [loadAtlas](SpriteRenderer.md#loadatlas)
- [loadTexture](SpriteRenderer.md#loadtexture)
- [queueArtifact](SpriteRenderer.md#queueartifact)
- [queueArtifactWorld](SpriteRenderer.md#queueartifactworld)
- [queueIconWorld](SpriteRenderer.md#queueiconworld)
- [queueOutline](SpriteRenderer.md#queueoutline)
- [queueSprite](SpriteRenderer.md#queuesprite)
- [setUniforms](SpriteRenderer.md#setuniforms)

## Constructors

### constructor

• **new SpriteRenderer**(`manager`, `thumb?`, `flip?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `manager` | [`WebGLManager`](WebGLManager.md) | `undefined` |
| `thumb` | `boolean` | `true` |
| `flip` | `boolean` | `true` |

#### Overrides

[GenericRenderer](GenericRenderer.md).[constructor](GenericRenderer.md#constructor)

## Properties

### attribData

• **attribData**: [`AttribData`](../README.md#attribdata)

Uniform data for this program. Typically not used after construction.
Kept for use in inherited classes.

#### Inherited from

[GenericRenderer](GenericRenderer.md).[attribData](GenericRenderer.md#attribdata)

___

### attribManagers

• **attribManagers**: [`AttribManagers`](../README.md#attribmanagers)<{ `attribs`: { `color`: { `dim`: `number` = 4; `name`: `string` = a.color; `normalize`: `boolean` = true; `type`: `AttribType` = AttribType.UByte } ; `invert`: { `dim`: `number` = 1; `name`: `string` = a.invert; `normalize`: `boolean` = false; `type`: `AttribType` = AttribType.Float } ; `mythic`: { `dim`: `number` = 1; `name`: `string` = a.mythic; `normalize`: `boolean` = false; `type`: `AttribType` = AttribType.Float } ; `position`: { `dim`: `number` = 2; `name`: `string` = a.position; `normalize`: `boolean` = false; `type`: `AttribType` = AttribType.Float } ; `rectPos`: { `dim`: `number` = 2; `name`: `string` = a.rectPos; `normalize`: `boolean` = false; `type`: `AttribType` = AttribType.Float } ; `shine`: { `dim`: `number` = 1; `name`: `string` = a.shine; `normalize`: `boolean` = false; `type`: `AttribType` = AttribType.Float } ; `texcoord`: { `dim`: `number` = 2; `name`: `string` = a.texcoord; `normalize`: `boolean` = false; `type`: `AttribType` = AttribType.Float }  } ; `fragmentShader`: `string` ; `uniforms`: { `matrix`: { `name`: `string` = u.matrix; `type`: `UniformType` = UniformType.Mat4 } ; `texture`: { `name`: `string` = u.texture; `type`: `UniformType` = UniformType.Texture }  } ; `vertexShader`: `string`  }\>

A dictionary of attrib managers, keyed by attrib name.

#### Inherited from

[GenericRenderer](GenericRenderer.md).[attribManagers](GenericRenderer.md#attribmanagers)

___

### flip

• `Private` **flip**: `boolean`

___

### loaded

• `Private` **loaded**: `boolean`

___

### manager

• **manager**: [`WebGLManager`](WebGLManager.md)

GameGLManager corresponding to this program.

#### Inherited from

[GenericRenderer](GenericRenderer.md).[manager](GenericRenderer.md#manager)

___

### posBuffer

• `Private` **posBuffer**: `number`[]

___

### program

• **program**: `WebGLProgram`

The program corresponding to this renderer.

#### Inherited from

[GenericRenderer](GenericRenderer.md).[program](GenericRenderer.md#program)

___

### rectposBuffer

• `Private` **rectposBuffer**: `number`[]

___

### rendererType

• **rendererType**: `RendererType` = `RendererType.Sprite`

#### Implementation of

SpriteRendererType.rendererType

___

### texBuffer

• `Private` **texBuffer**: `number`[]

___

### texIdx

• `Private` `Optional` **texIdx**: `number`

___

### thumb

• `Private` **thumb**: `boolean`

___

### uniformData

• **uniformData**: [`UniformData`](../README.md#uniformdata)

Uniform data for this program. Typically not used after construction.
Kept for use in inherited classes.

#### Inherited from

[GenericRenderer](GenericRenderer.md).[uniformData](GenericRenderer.md#uniformdata)

___

### uniformLocs

• **uniformLocs**: [`UniformLocs`](../README.md#uniformlocs)<{ `attribs`: { `color`: { `dim`: `number` = 4; `name`: `string` = a.color; `normalize`: `boolean` = true; `type`: `AttribType` = AttribType.UByte } ; `invert`: { `dim`: `number` = 1; `name`: `string` = a.invert; `normalize`: `boolean` = false; `type`: `AttribType` = AttribType.Float } ; `mythic`: { `dim`: `number` = 1; `name`: `string` = a.mythic; `normalize`: `boolean` = false; `type`: `AttribType` = AttribType.Float } ; `position`: { `dim`: `number` = 2; `name`: `string` = a.position; `normalize`: `boolean` = false; `type`: `AttribType` = AttribType.Float } ; `rectPos`: { `dim`: `number` = 2; `name`: `string` = a.rectPos; `normalize`: `boolean` = false; `type`: `AttribType` = AttribType.Float } ; `shine`: { `dim`: `number` = 1; `name`: `string` = a.shine; `normalize`: `boolean` = false; `type`: `AttribType` = AttribType.Float } ; `texcoord`: { `dim`: `number` = 2; `name`: `string` = a.texcoord; `normalize`: `boolean` = false; `type`: `AttribType` = AttribType.Float }  } ; `fragmentShader`: `string` ; `uniforms`: { `matrix`: { `name`: `string` = u.matrix; `type`: `UniformType` = UniformType.Mat4 } ; `texture`: { `name`: `string` = u.texture; `type`: `UniformType` = UniformType.Texture }  } ; `vertexShader`: `string`  }\>

Uniform locs for this program. Typically not referenced directly,
but rather through generated uniformSetters. Kept for use in inherited classes.

#### Inherited from

[GenericRenderer](GenericRenderer.md).[uniformLocs](GenericRenderer.md#uniformlocs)

___

### uniformSetters

• **uniformSetters**: [`UniformSetters`](../README.md#uniformsetters)<{ `attribs`: { `color`: { `dim`: `number` = 4; `name`: `string` = a.color; `normalize`: `boolean` = true; `type`: `AttribType` = AttribType.UByte } ; `invert`: { `dim`: `number` = 1; `name`: `string` = a.invert; `normalize`: `boolean` = false; `type`: `AttribType` = AttribType.Float } ; `mythic`: { `dim`: `number` = 1; `name`: `string` = a.mythic; `normalize`: `boolean` = false; `type`: `AttribType` = AttribType.Float } ; `position`: { `dim`: `number` = 2; `name`: `string` = a.position; `normalize`: `boolean` = false; `type`: `AttribType` = AttribType.Float } ; `rectPos`: { `dim`: `number` = 2; `name`: `string` = a.rectPos; `normalize`: `boolean` = false; `type`: `AttribType` = AttribType.Float } ; `shine`: { `dim`: `number` = 1; `name`: `string` = a.shine; `normalize`: `boolean` = false; `type`: `AttribType` = AttribType.Float } ; `texcoord`: { `dim`: `number` = 2; `name`: `string` = a.texcoord; `normalize`: `boolean` = false; `type`: `AttribType` = AttribType.Float }  } ; `fragmentShader`: `string` ; `uniforms`: { `matrix`: { `name`: `string` = u.matrix; `type`: `UniformType` = UniformType.Mat4 } ; `texture`: { `name`: `string` = u.texture; `type`: `UniformType` = UniformType.Texture }  } ; `vertexShader`: `string`  }\>

A dictionary of uniform setters, keyed by uniform name.

#### Inherited from

[GenericRenderer](GenericRenderer.md).[uniformSetters](GenericRenderer.md#uniformsetters)

___

### verts

• **verts**: `number`

The number of queued vertices so far. Used for batch rendering.

#### Inherited from

[GenericRenderer](GenericRenderer.md).[verts](GenericRenderer.md#verts)

## Methods

### flush

▸ **flush**(): `void`

Draw all buffered vertices to the screen.

#### Returns

`void`

#### Implementation of

SpriteRendererType.flush

#### Overrides

[GenericRenderer](GenericRenderer.md).[flush](GenericRenderer.md#flush)

___

### loadAtlas

▸ `Private` **loadAtlas**(`thumb`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `thumb` | `boolean` |

#### Returns

`Promise`<`void`\>

___

### loadTexture

▸ `Private` **loadTexture**(`img`, `texIdx`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `img` | `HTMLImageElement` |
| `texIdx` | `number` |

#### Returns

`Promise`<`void`\>

___

### queueArtifact

▸ **queueArtifact**(`artifact`, `pos`, `width?`, `alpha?`, `atFrame?`, `color?`, `theta?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `artifact` | `RenderedArtifact` | `undefined` |
| `pos` | `CanvasCoords` | `undefined` |
| `width` | `number` | `128` |
| `alpha` | `number` | `255` |
| `atFrame` | `undefined` \| `number` | `undefined` |
| `color` | `undefined` \| `RGBVec` | `undefined` |
| `theta` | `undefined` \| `number` | `undefined` |

#### Returns

`void`

#### Implementation of

SpriteRendererType.queueArtifact

___

### queueArtifactWorld

▸ **queueArtifactWorld**(`artifact`, `posW`, `widthW`, `alpha?`, `atFrame?`, `color?`, `theta?`, `viewport`): `void`

Queue artifact to worldcoords, centered

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `artifact` | `RenderedArtifact` | `undefined` |
| `posW` | `CanvasCoords` | `undefined` |
| `widthW` | `number` | `undefined` |
| `alpha` | `number` | `255` |
| `atFrame` | `undefined` \| `number` | `undefined` |
| `color` | `undefined` \| `RGBVec` | `undefined` |
| `theta` | `undefined` \| `number` | `undefined` |
| `viewport` | `GameViewport` | `undefined` |

#### Returns

`void`

#### Implementation of

SpriteRendererType.queueArtifactWorld

___

### queueIconWorld

▸ **queueIconWorld**(`artifact`, `topLeft`, `widthW`, `maxWidth?`, `viewport`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `artifact` | `Artifact` | `undefined` |
| `topLeft` | `WorldCoords` | `undefined` |
| `widthW` | `number` | `undefined` |
| `maxWidth` | `number` | `32` |
| `viewport` | `GameViewport` | `undefined` |

#### Returns

`void`

___

### queueOutline

▸ **queueOutline**(`artifact`, `__namedParameters`, `width`, `alpha`, `theta`, `color?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `artifact` | `RenderedArtifact` | `undefined` |
| `__namedParameters` | `CanvasCoords` | `undefined` |
| `width` | `number` | `undefined` |
| `alpha` | `number` | `undefined` |
| `theta` | `undefined` \| `number` | `undefined` |
| `color` | `RGBVec` | `engineConsts.colors.artifacts.trim` |

#### Returns

`void`

___

### queueSprite

▸ **queueSprite**(`artifact`, `topLeft`, `width`, `alpha`, `color?`, `atFrame?`, `theta?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `artifact` | `RenderedArtifact` | `undefined` |
| `topLeft` | `CanvasCoords` | `undefined` |
| `width` | `number` | `undefined` |
| `alpha` | `number` | `undefined` |
| `color` | `undefined` \| `RGBVec` | `undefined` |
| `atFrame` | `undefined` \| `number` | `undefined` |
| `theta` | `undefined` \| `number` | `undefined` |

#### Returns

`void`

___

### setUniforms

▸ **setUniforms**(): `void`

Run by flush(). Override this in child classes. Programs with uniformss
should always override this.

#### Returns

`void`

#### Overrides

[GenericRenderer](GenericRenderer.md).[setUniforms](GenericRenderer.md#setuniforms)
