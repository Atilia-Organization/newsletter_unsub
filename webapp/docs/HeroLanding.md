# Hero Input Feature

This document describes the structure, usage, and behavior of the `HeroInput` component as implemented in the feature branch.

---

## Component: `HeroInput`

###  Purpose
A reusable input wrapper that supports:
- Custom subscribe button text
- Optional privacy message
- Flexible layout via children
- Conditional back button slot

###  Props
| Name           | Type      | Description                               |
|----------------|-----------|-------------------------------------------|
| `subscribeText`| `string`  | Text on the right-side button             |
| `optional`     | `boolean` | If true, shows privacy message            |
| `children`     | `React Node` | Input field and optional back button |

### Behavior
1. The component expects 1-2 children.
2. If a second child (back button) is passed, it’s placed as an absolute element.
3. Submit button is always shown.

### Usage

```jsx
<HeroInput subscribeText="Enter" optional={true}>
  <input ... />
  <button onClick={() => setStep(1)}>Back</button>
</HeroInput>
