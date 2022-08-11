# Interface: GameViewport

## Table of contents

### Properties

- [centerWorldCoords](GameViewport.md#centerworldcoords)
- [scale](GameViewport.md#scale)
- [viewportHeight](GameViewport.md#viewportheight)
- [viewportWidth](GameViewport.md#viewportwidth)

### Methods

- [canvasToWorldCoords](GameViewport.md#canvastoworldcoords)
- [intersectsViewport](GameViewport.md#intersectsviewport)
- [worldToCanvasCoords](GameViewport.md#worldtocanvascoords)
- [worldToCanvasDist](GameViewport.md#worldtocanvasdist)

## Properties

### centerWorldCoords

• **centerWorldCoords**: [`WorldCoords`](../README.md#worldcoords)

___

### scale

• **scale**: `number`

___

### viewportHeight

• **viewportHeight**: `number`

___

### viewportWidth

• **viewportWidth**: `number`

## Methods

### canvasToWorldCoords

▸ **canvasToWorldCoords**(`canvasCoord`): [`WorldCoords`](../README.md#worldcoords)

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvasCoord` | [`CanvasCoords`](CanvasCoords.md) |

#### Returns

[`WorldCoords`](../README.md#worldcoords)

___

### intersectsViewport

▸ **intersectsViewport**(`chunk`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | [`Chunk`](Chunk.md) |

#### Returns

`boolean`

___

### worldToCanvasCoords

▸ **worldToCanvasCoords**(`worldCoords`): [`CanvasCoords`](CanvasCoords.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `worldCoords` | [`WorldCoords`](../README.md#worldcoords) |

#### Returns

[`CanvasCoords`](CanvasCoords.md)

___

### worldToCanvasDist

▸ **worldToCanvasDist**(`dist`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dist` | `number` |

#### Returns

`number`
