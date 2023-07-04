import React from 'react';
import { emojis } from './assets/emojiData';

// Define the props for the Emoji component
interface EMOJI_PROPS {
  name: keyof typeof emojis;
}

/**
 * The Emoji component is a reusable component that renders an emoji based on the provided name.
 * If the specified emoji does not exist, it falls back to rendering the 'prohibited' emoji.
 *
 * @param {EMOJI_PROPS} props - The props object containing the name of the emoji.
 * @returns {React.ReactNode} The rendered emoji.
 */
function Emoji(props: EMOJI_PROPS) {
  // Retrieve the corresponding emoji from the 'emojis' object using the provided name
  // If the emoji does not exist, fall back to rendering the 'prohibited' emoji
  return <>{emojis[props.name] || emojis['prohibited']}</>;
}

/**
 * The Emoji component is memoized using React.memo.
 * Memoization optimizes rendering performance by caching the rendered output of the component.
 * When the props of the component don't change, the memoized version will be returned instead of re-rendering.
 *
 * @param {React.FunctionComponent} Emoji - The original Emoji component.
 * @returns {React.FunctionComponent} The memoized Emoji component.
 */
export default Emoji;
