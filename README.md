# Emojis-Box
Emojis-Box is a React component library that provides a reusable Emoji component for rendering emojis based on their names.

## Installation
You can install Emojis-Box using npm or Yarn.
```
npm install emojis-box
```
or
```
yarn add emojis-box
```
### Usage
To use the Emoji component, import it into your React application and provide the name of the emoji as a prop.

```javascript 
import React from 'react';
import Emoji from 'emojis-box';

function App() {
  return (
    <div>
      <h1>Emojis-Box Demo</h1>
      <Emoji name="smile" />
      <Emoji name="heart" />
      <Emoji name="unicorn" />
    </div>
  );
}
export default App;
```
In the above example, the Emoji component will render the corresponding emoji based on the provided name. If the specified emoji does not exist, it will fall back to rendering the 'prohibited' emoji.

## Props
The Emoji component accepts the following prop:

- `name` (required): The name of the emoji to be rendered. It should be one of the valid names from the emoji dataset.

## Contributing
Contributions to Emojis-Box are welcome! If you find a bug or want to add a new feature, please open an issue or submit a pull request on the GitHub repository.

## License
Emojis-Box is released under the MIT License.
