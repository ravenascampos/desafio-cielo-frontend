/**
* @vitest-environment jsdom
*/
import '@testing-library/jest-dom';
import { describe, expect, test } from 'vitest'
import { fireEvent, render } from '@testing-library/react'
import { Header } from '.';

describe('Toggle Dark Mode Button', () => {
  test('toggle dark mode when the button is clicked'), () => {
    const { getByTestId, debug } = render(<Header/>);
    {debug}
    const darkModeButton = getByTestId('dark-mode-button');

    fireEvent.click(darkModeButton);

    const darkModeIcon = getByTestId('dark-mode-icon');
    const lightModeIcon = getByTestId('light-mode-icon');

    expect(darkModeIcon).toBeVisible();
    expect(lightModeIcon).not.toBeVisible();
  }
})
