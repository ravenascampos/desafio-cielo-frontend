/**
* @vitest-environment jsdom
*/
import '@testing-library/jest-dom';
import '@testing-library/jest-dom';
import { describe, test } from 'vitest'
 import { render } from '@testing-library/react'
 import App from './App';

 describe('App component', () => {
  test('checks if the App is rendering', () => {
    const {debug} = render(<App/>)

    debug()
  })
 })