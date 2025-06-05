declare module 'react-lazyload' {
  import * as React from 'react';

  interface LazyLoadProps {
    height?: number | string;
    offset?: number | number[];
    once?: boolean;
    placeholder?: React.ReactNode;
    debounce?: boolean | number;
    scrollContainer?: string;
    children?: React.ReactNode;
  }

  export default class LazyLoad extends React.Component<LazyLoadProps> {}
}
