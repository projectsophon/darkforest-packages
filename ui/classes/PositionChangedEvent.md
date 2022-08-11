# Class: PositionChangedEvent

## Hierarchy

- `Event`

  ↳ **`PositionChangedEvent`**

## Table of contents

### Constructors

- [constructor](PositionChangedEvent.md#constructor)

### Properties

- [AT\_TARGET](PositionChangedEvent.md#at_target)
- [BUBBLING\_PHASE](PositionChangedEvent.md#bubbling_phase)
- [CAPTURING\_PHASE](PositionChangedEvent.md#capturing_phase)
- [NONE](PositionChangedEvent.md#none)
- [bubbles](PositionChangedEvent.md#bubbles)
- [cancelBubble](PositionChangedEvent.md#cancelbubble)
- [cancelable](PositionChangedEvent.md#cancelable)
- [composed](PositionChangedEvent.md#composed)
- [coords](PositionChangedEvent.md#coords)
- [currentTarget](PositionChangedEvent.md#currenttarget)
- [defaultPrevented](PositionChangedEvent.md#defaultprevented)
- [eventPhase](PositionChangedEvent.md#eventphase)
- [isTrusted](PositionChangedEvent.md#istrusted)
- [returnValue](PositionChangedEvent.md#returnvalue)
- [srcElement](PositionChangedEvent.md#srcelement)
- [target](PositionChangedEvent.md#target)
- [timeStamp](PositionChangedEvent.md#timestamp)
- [type](PositionChangedEvent.md#type)
- [AT\_TARGET](PositionChangedEvent.md#at_target-1)
- [BUBBLING\_PHASE](PositionChangedEvent.md#bubbling_phase-1)
- [CAPTURING\_PHASE](PositionChangedEvent.md#capturing_phase-1)
- [NONE](PositionChangedEvent.md#none-1)

### Methods

- [composedPath](PositionChangedEvent.md#composedpath)
- [initEvent](PositionChangedEvent.md#initevent)
- [preventDefault](PositionChangedEvent.md#preventdefault)
- [stopImmediatePropagation](PositionChangedEvent.md#stopimmediatepropagation)
- [stopPropagation](PositionChangedEvent.md#stoppropagation)

## Constructors

### constructor

• **new PositionChangedEvent**(`x`, `y`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Overrides

Event.constructor

## Properties

### AT\_TARGET

• `Readonly` **AT\_TARGET**: `number`

#### Inherited from

Event.AT\_TARGET

___

### BUBBLING\_PHASE

• `Readonly` **BUBBLING\_PHASE**: `number`

#### Inherited from

Event.BUBBLING\_PHASE

___

### CAPTURING\_PHASE

• `Readonly` **CAPTURING\_PHASE**: `number`

#### Inherited from

Event.CAPTURING\_PHASE

___

### NONE

• `Readonly` **NONE**: `number`

#### Inherited from

Event.NONE

___

### bubbles

• `Readonly` **bubbles**: `boolean`

Returns true or false depending on how event was initialized. True if event goes through its target's ancestors in reverse tree order, and false otherwise.

#### Inherited from

Event.bubbles

___

### cancelBubble

• **cancelBubble**: `boolean`

#### Inherited from

Event.cancelBubble

___

### cancelable

• `Readonly` **cancelable**: `boolean`

Returns true or false depending on how event was initialized. Its return value does not always carry meaning, but true can indicate that part of the operation during which event was dispatched, can be canceled by invoking the preventDefault() method.

#### Inherited from

Event.cancelable

___

### composed

• `Readonly` **composed**: `boolean`

Returns true or false depending on how event was initialized. True if event invokes listeners past a ShadowRoot node that is the root of its target, and false otherwise.

#### Inherited from

Event.composed

___

### coords

• **coords**: `Coords`

___

### currentTarget

• `Readonly` **currentTarget**: ``null`` \| `EventTarget`

Returns the object whose event listener's callback is currently being invoked.

#### Inherited from

Event.currentTarget

___

### defaultPrevented

• `Readonly` **defaultPrevented**: `boolean`

Returns true if preventDefault() was invoked successfully to indicate cancelation, and false otherwise.

#### Inherited from

Event.defaultPrevented

___

### eventPhase

• `Readonly` **eventPhase**: `number`

Returns the event's phase, which is one of NONE, CAPTURING_PHASE, AT_TARGET, and BUBBLING_PHASE.

#### Inherited from

Event.eventPhase

___

### isTrusted

• `Readonly` **isTrusted**: `boolean`

Returns true if event was dispatched by the user agent, and false otherwise.

#### Inherited from

Event.isTrusted

___

### returnValue

• **returnValue**: `boolean`

**`Deprecated`**

#### Inherited from

Event.returnValue

___

### srcElement

• `Readonly` **srcElement**: ``null`` \| `EventTarget`

**`Deprecated`**

#### Inherited from

Event.srcElement

___

### target

• `Readonly` **target**: ``null`` \| `EventTarget`

Returns the object to which event is dispatched (its target).

#### Inherited from

Event.target

___

### timeStamp

• `Readonly` **timeStamp**: `number`

Returns the event's timestamp as the number of milliseconds measured relative to the time origin.

#### Inherited from

Event.timeStamp

___

### type

• `Readonly` **type**: `string`

Returns the type of event, e.g. "click", "hashchange", or "submit".

#### Inherited from

Event.type

___

### AT\_TARGET

▪ `Static` `Readonly` **AT\_TARGET**: `number`

#### Inherited from

Event.AT\_TARGET

___

### BUBBLING\_PHASE

▪ `Static` `Readonly` **BUBBLING\_PHASE**: `number`

#### Inherited from

Event.BUBBLING\_PHASE

___

### CAPTURING\_PHASE

▪ `Static` `Readonly` **CAPTURING\_PHASE**: `number`

#### Inherited from

Event.CAPTURING\_PHASE

___

### NONE

▪ `Static` `Readonly` **NONE**: `number`

#### Inherited from

Event.NONE

## Methods

### composedPath

▸ **composedPath**(): `EventTarget`[]

Returns the invocation target objects of event's path (objects on which listeners will be invoked), except for any nodes in shadow trees of which the shadow root's mode is "closed" that are not reachable from event's currentTarget.

#### Returns

`EventTarget`[]

#### Inherited from

Event.composedPath

___

### initEvent

▸ **initEvent**(`type`, `bubbles?`, `cancelable?`): `void`

**`Deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `bubbles?` | `boolean` |
| `cancelable?` | `boolean` |

#### Returns

`void`

#### Inherited from

Event.initEvent

___

### preventDefault

▸ **preventDefault**(): `void`

If invoked when the cancelable attribute value is true, and while executing a listener for the event with passive set to false, signals to the operation that caused event to be dispatched that it needs to be canceled.

#### Returns

`void`

#### Inherited from

Event.preventDefault

___

### stopImmediatePropagation

▸ **stopImmediatePropagation**(): `void`

Invoking this method prevents event from reaching any registered event listeners after the current one finishes running and, when dispatched in a tree, also prevents event from reaching any other objects.

#### Returns

`void`

#### Inherited from

Event.stopImmediatePropagation

___

### stopPropagation

▸ **stopPropagation**(): `void`

When dispatched in a tree, invoking this method prevents event from reaching any objects other than the current object.

#### Returns

`void`

#### Inherited from

Event.stopPropagation
