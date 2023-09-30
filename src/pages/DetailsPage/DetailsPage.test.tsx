/**
* @vitest-environment jsdom
*/
import '@testing-library/jest-dom';
import { describe, expect, test } from 'vitest'
 import { render } from '@testing-library/react'
 import { DetailsPage } from '.'

describe('DetailsPage', () => {
  test('checks if the CardTransactions is rendering', () => {
    const { getByText, debug } = render(<DetailsPage/>)
    {debug}
    expect(getByText('Detalhes')).toBeInTheDocument();
    expect(getByText('Data')).toBeInTheDocument();
   })
  })