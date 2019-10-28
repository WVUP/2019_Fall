import React from 'react';
import { action } from '@storybook/addon-actions';

import MyWidget from '../my-widget';

export default {
  title: 'MyWidget',
};

const data = [
  {
    title: 'My Title',
    quote: 'This is a quote, not copy/pasting...'
  },
  {
    title: 'alkjdsfkla jsdflkjas ldkfjasl kdfja sldkfja sdlkfj alsdkjf alskdjf ',
    quote: null
  }
]
export const empty = () => <MyWidget />;
export const loading = () => <MyWidget loading />;
export const basic = () => <MyWidget title={data[0].title} />;
export const basicWithQuote = () => <MyWidget title={data[0].title} quote={data[0].quote} />;
export const basicLongTitle = () => <MyWidget title={data[1].title} quote={data[1].quote} />;
export const multipleWidgets = () => (
  <>
    <MyWidget title={data[0].title} quote={data[0].quote} />
    <MyWidget title={data[1].title} quote={data[1].quote} />
  </>
)
