# dile-password-checker

Password checker component, based on LitElement.

```
        <dile-password-checker
          label="Write the password:"
          button-label="Show/hide"
          validate-label="Validate">
        </dile-password-checker>
```

## Install

```
npm install dile-password-checker
```

## Usage

Import the component.

```javascript
import 'dile-password-checker/dile-password-checker.js';
```

Use the component

```html
    <dile-password-checker
        label="Write the password:"
        button-label="Show/hide"
        validate-label="Validate">
    </dile-password-checker>
```

## Properties

- **label**: the element label
- **buttonLabel**: label for button show/hide
- **validateLabel**: label for button validate
- **hidePassword**: Flag to know if the inputs should hide the passwords
- **error**: on true, the element has an error

## Events

### dile-password-checker-error

The `dile-password-checker-error` event is dispatched when passwords do not match.

```
el.addEventListener('dile-password-checker-error', (e) => {
  console.log('dile-password-checker-error event');
});
```

### dile-password-checker-validate

The `dile-password-checker-validate` event is dispatched when passwords match.

```
el.addEventListener('dile-password-checker-validate', (e) => {
  console.log('dile-password-checker-validate event');
});
```