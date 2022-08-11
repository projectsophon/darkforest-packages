# Class: ShaderMixins

these are 'includes' that you can add into shader template strings as in `${include}`

## Table of contents

### Constructors

- [constructor](ShaderMixins.md#constructor)

### Properties

- [PI](ShaderMixins.md#pi)
- [arcTan](ShaderMixins.md#arctan)
- [blend](ShaderMixins.md#blend)
- [desaturate](ShaderMixins.md#desaturate)
- [fade](ShaderMixins.md#fade)
- [hueShift](ShaderMixins.md#hueshift)
- [invertBrightness](ShaderMixins.md#invertbrightness)
- [invertColors](ShaderMixins.md#invertcolors)
- [mod2pi](ShaderMixins.md#mod2pi)
- [modFloat](ShaderMixins.md#modfloat)
- [noiseVec3](ShaderMixins.md#noisevec3)
- [perlin3](ShaderMixins.md#perlin3)
- [radAtAngle](ShaderMixins.md#radatangle)
- [seededRandom](ShaderMixins.md#seededrandom)
- [seededRandomVec2](ShaderMixins.md#seededrandomvec2)
- [simplex4](ShaderMixins.md#simplex4)

## Constructors

### constructor

• **new ShaderMixins**()

## Properties

### PI

▪ `Static` **PI**: `string`

___

### arcTan

▪ `Static` **arcTan**: `string`

Good atan that returns [0, 2Pi)

___

### blend

▪ `Static` **blend**: `string`

1 minus source alpha blend mode

___

### desaturate

▪ `Static` **desaturate**: `string`

___

### fade

▪ `Static` **fade**: `string`

Fade out the last `tail * 100` percent of `value` to 0 - a plateau with a steep dropoff

___

### hueShift

▪ `Static` **hueShift**: `string`

___

### invertBrightness

▪ `Static` **invertBrightness**: `string`

___

### invertColors

▪ `Static` **invertColors**: `string`

___

### mod2pi

▪ `Static` **mod2pi**: `string`

___

### modFloat

▪ `Static` **modFloat**: `string`

___

### noiseVec3

▪ `Static` **noiseVec3**: `string`

___

### perlin3

▪ `Static` **perlin3**: `string`

3d perlin noise - `cnoise(vec3)`, returns `[-1, 1]`
https://gist.github.com/patriciogonzalezvivo/670c22f3966e662d2f83

___

### radAtAngle

▪ `Static` **radAtAngle**: `string`

___

### seededRandom

▪ `Static` **seededRandom**: `string`

___

### seededRandomVec2

▪ `Static` **seededRandomVec2**: `string`

___

### simplex4

▪ `Static` **simplex4**: `string`

4d simplex noise - `snoise(vec4)`, seems to return `[-1, 1]`
https://gist.github.com/patriciogonzalezvivo/670c22f3966e662d2f83
