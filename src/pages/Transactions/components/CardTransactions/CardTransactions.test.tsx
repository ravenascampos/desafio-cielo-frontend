/**
* @vitest-environment jsdom
*/
import '@testing-library/jest-dom';
import { describe, expect, test } from 'vitest'
import { render } from '@testing-library/react'
import {CardTransactions} from '.'

describe('CardTransactions', () => {
  test('renderiza o componente CardTransactions corretamente', () => {
    const {getByText, debug} = render(<CardTransactions 
      id='114606514478703'
      cardBrand='Mastercard'
      date='26/05/2021'
      netAmount='76.88'
      paymentType='Crédito à vista'
      status='Aprovada'
      key={114606514478703}
      />)
    {debug}
    expect(getByText('Ganhos')).toBeInTheDocument();
    expect(getByText('114606514478703')).toBeInTheDocument();
    expect(getByText('Mastercard')).toBeInTheDocument();
    expect(getByText('26/05/2021')).toBeInTheDocument();
    expect(getByText('Crédito à vista')).toBeInTheDocument();
    expect(getByText('Aprovada')).toBeInTheDocument();
    expect(getByText('R$76,88')).toBeInTheDocument();
  })
})