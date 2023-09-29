/**
* @vitest-environment jsdom
*/
import '@testing-library/jest-dom';
import { describe, expect, test } from 'vitest'
import { fireEvent, render } from '@testing-library/react'
import { Header } from '.';

describe('Toggle Dark Mode Button', () => {
  test('toggle dark mode when the button is clicked'), () => {
    const { getByTextId, debug } = render(<Header/>);
    {debug}
    const darkModeButton = getByTextId('dark-mode-button');

    fireEvent.click(darkModeButton);

    const darkModeIcon = getByTextId('dark-mode-icon');
    const lightModeIcon = getByTextId('light-mode-icon');

    expect(darkModeIcon).toBeVisible();
    expect(lightModeIcon).not.toBeVisible();
  }
})
