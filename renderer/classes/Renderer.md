# Class: Renderer

## Table of contents

### Constructors

- [constructor](Renderer.md#constructor)

### Properties

- [asteroidRenderer](Renderer.md#asteroidrenderer)
- [beltRenderer](Renderer.md#beltrenderer)
- [bgRenderer](Renderer.md#bgrenderer)
- [blackDomainRenderer](Renderer.md#blackdomainrenderer)
- [bufferCanvas](Renderer.md#buffercanvas)
- [canvas](Renderer.md#canvas)
- [captureZoneRenderer](Renderer.md#capturezonerenderer)
- [circleRenderer](Renderer.md#circlerenderer)
- [config](Renderer.md#config)
- [context](Renderer.md#context)
- [frameCount](Renderer.md#framecount)
- [frameRequestId](Renderer.md#framerequestid)
- [glCanvas](Renderer.md#glcanvas)
- [glManager](Renderer.md#glmanager)
- [lineRenderer](Renderer.md#linerenderer)
- [mineBodyRenderer](Renderer.md#minebodyrenderer)
- [mineRenderer](Renderer.md#minerenderer)
- [now](Renderer.md#now)
- [overlay2dRenderer](Renderer.md#overlay2drenderer)
- [perlinRenderer](Renderer.md#perlinrenderer)
- [planetRenderManager](Renderer.md#planetrendermanager)
- [planetRenderer](Renderer.md#planetrenderer)
- [previousRenderTimestamp](Renderer.md#previousrendertimestamp)
- [quasarBodyRenderer](Renderer.md#quasarbodyrenderer)
- [quasarRayRenderer](Renderer.md#quasarrayrenderer)
- [quasarRenderer](Renderer.md#quasarrenderer)
- [rectRenderer](Renderer.md#rectrenderer)
- [rendererStack](Renderer.md#rendererstack)
- [ringRenderer](Renderer.md#ringrenderer)
- [ruinsRenderer](Renderer.md#ruinsrenderer)
- [spaceRenderer](Renderer.md#spacerenderer)
- [spacetimeRipRenderer](Renderer.md#spacetimeriprenderer)
- [spriteRenderer](Renderer.md#spriterenderer)
- [textRenderer](Renderer.md#textrenderer)
- [uiRenderManager](Renderer.md#uirendermanager)
- [unminedRenderer](Renderer.md#unminedrenderer)
- [viewport](Renderer.md#viewport)
- [voyageRenderManager](Renderer.md#voyagerendermanager)
- [wormholeRenderManager](Renderer.md#wormholerendermanager)
- [instance](Renderer.md#instance)

### Methods

- [addCustomRenderer](Renderer.md#addcustomrenderer)
- [draw](Renderer.md#draw)
- [get2DRenderer](Renderer.md#get2drenderer)
- [getViewport](Renderer.md#getviewport)
- [loop](Renderer.md#loop)
- [recordRender](Renderer.md#recordrender)
- [removeCustomRenderer](Renderer.md#removecustomrenderer)
- [setRenderer](Renderer.md#setrenderer)
- [setup](Renderer.md#setup)
- [destroy](Renderer.md#destroy)
- [initialize](Renderer.md#initialize)

## Constructors

### constructor

• `Private` **new Renderer**(`canvas`, `glCanvas`, `bufferCanvas`, `viewport`, `context`, `config`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | `HTMLCanvasElement` |
| `glCanvas` | `HTMLCanvasElement` |
| `bufferCanvas` | `HTMLCanvasElement` |
| `viewport` | `GameViewport` |
| `context` | [`RendererGameContext`](../interfaces/RendererGameContext.md) |
| `config` | `IRendererConfig` |

## Properties

### asteroidRenderer

• **asteroidRenderer**: `AsteroidRendererType`

___

### beltRenderer

• **beltRenderer**: `BeltRendererType`

___

### bgRenderer

• **bgRenderer**: `BackgroundRendererType`

___

### blackDomainRenderer

• **blackDomainRenderer**: `BlackDomainRendererType`

___

### bufferCanvas

• **bufferCanvas**: `HTMLCanvasElement`

___

### canvas

• **canvas**: `HTMLCanvasElement`

___

### captureZoneRenderer

• **captureZoneRenderer**: `CaptureZoneRendererType`

___

### circleRenderer

• **circleRenderer**: `CircleRendererType`

___

### config

• **config**: `IRendererConfig`

___

### context

• **context**: [`RendererGameContext`](../interfaces/RendererGameContext.md)

___

### frameCount

• **frameCount**: `number`

___

### frameRequestId

• **frameRequestId**: `number`

___

### glCanvas

• **glCanvas**: `HTMLCanvasElement`

___

### glManager

• **glManager**: [`GameGLManager`](GameGLManager.md)

___

### lineRenderer

• **lineRenderer**: `LineRendererType`

___

### mineBodyRenderer

• **mineBodyRenderer**: `MineBodyRendererType`

___

### mineRenderer

• **mineRenderer**: `MineRendererType`

___

### now

• **now**: `number`

___

### overlay2dRenderer

• **overlay2dRenderer**: `Overlay2DRenderer`

___

### perlinRenderer

• **perlinRenderer**: `PerlinRendererType`

___

### planetRenderManager

• **planetRenderManager**: `PlanetRenderManagerType`

___

### planetRenderer

• **planetRenderer**: `PlanetRendererType`

___

### previousRenderTimestamp

• `Private` **previousRenderTimestamp**: `number`

___

### quasarBodyRenderer

• **quasarBodyRenderer**: `QuasarBodyRendererType`

___

### quasarRayRenderer

• **quasarRayRenderer**: `QuasarRayRendererType`

___

### quasarRenderer

• **quasarRenderer**: `QuasarRendererType`

___

### rectRenderer

• **rectRenderer**: `RectRendererType`

___

### rendererStack

• **rendererStack**: `BaseRenderer`[]

___

### ringRenderer

• **ringRenderer**: `RingRendererType`

___

### ruinsRenderer

• **ruinsRenderer**: `RuinsRendererType`

___

### spaceRenderer

• **spaceRenderer**: `SpaceRendererType`

___

### spacetimeRipRenderer

• **spacetimeRipRenderer**: `SpacetimeRipRendererType`

___

### spriteRenderer

• **spriteRenderer**: `SpriteRendererType`

___

### textRenderer

• **textRenderer**: `TextRendererType`

___

### uiRenderManager

• **uiRenderManager**: `UIRendererType`

___

### unminedRenderer

• **unminedRenderer**: `UnminedRendererType`

___

### viewport

• `Private` **viewport**: `GameViewport`

___

### voyageRenderManager

• **voyageRenderManager**: `VoyageRendererType`

___

### wormholeRenderManager

• **wormholeRenderManager**: `WormholeRendererType`

___

### instance

▪ `Static` **instance**: ``null`` \| [`Renderer`](Renderer.md)

## Methods

### addCustomRenderer

▸ **addCustomRenderer**(`renderer`): `void`

Called by GameUIManager to add custom renderer into the game.
The function automatically determines what kind of renderer it is based on the type property.
The renderer is then added onto the rendering stack
The renderer stack is a data structure used to determine which renderer to draw with.
The most recently added renderers to the stack will be the ones to be used.

#### Parameters

| Name | Type |
| :------ | :------ |
| `renderer` | `BaseRenderer` |

#### Returns

`void`

___

### draw

▸ `Private` **draw**(): `void`

#### Returns

`void`

___

### get2DRenderer

▸ **get2DRenderer**(): `CanvasRenderingContext2D`

#### Returns

`CanvasRenderingContext2D`

___

### getViewport

▸ **getViewport**(): `GameViewport`

#### Returns

`GameViewport`

___

### loop

▸ `Private` **loop**(): `void`

#### Returns

`void`

___

### recordRender

▸ `Private` **recordRender**(`now`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `now` | `number` |

#### Returns

`void`

___

### removeCustomRenderer

▸ **removeCustomRenderer**(`renderer`): `void`

Called by GameUIManager to remove the passed in renderers from the game.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `renderer` | `BaseRenderer` | passed in renderer |

#### Returns

`void`

___

### setRenderer

▸ `Private` **setRenderer**(`renderer`): `boolean`

Determines the type of the passed in renderer and replaces the
current renderer of the same type with the one passed in.
If the renderer is determined to not follow any of the renderer
types it will print a message into the console

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `renderer` | `BaseRenderer` | an unknown renderer |

#### Returns

`boolean`

___

### setup

▸ `Private` **setup**(): `void`

#### Returns

`void`

___

### destroy

▸ `Static` **destroy**(): `void`

#### Returns

`void`

___

### initialize

▸ `Static` **initialize**(`canvas`, `glCanvas`, `bufferCanvas`, `viewport`, `context`, `config`): [`Renderer`](Renderer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | `HTMLCanvasElement` |
| `glCanvas` | `HTMLCanvasElement` |
| `bufferCanvas` | `HTMLCanvasElement` |
| `viewport` | `GameViewport` |
| `context` | [`RendererGameContext`](../interfaces/RendererGameContext.md) |
| `config` | `IRendererConfig` |

#### Returns

[`Renderer`](Renderer.md)
