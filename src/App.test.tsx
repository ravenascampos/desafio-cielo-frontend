/**
* @vitest-environment jsdom
*/
import '@testing-library/jest-dom';
import '@testing-library/jest-dom';
import { describe, test } from 'vitest'
 import { render } from '@testing-library/react'
 import App from './App';

 describe('renderiza o componente App corretamente', () => {
  test('verifica se o App está renderizando', () => {
    const {debug} = render(<App/>)

    debug()
  })
 })