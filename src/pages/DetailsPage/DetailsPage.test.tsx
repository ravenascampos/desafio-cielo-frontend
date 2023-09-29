/**
* @vitest-environment jsdom
*/
import '@testing-library/jest-dom';
import { describe, expect, test } from 'vitest'
 import { render } from '@testing-library/react'
 import { DetailsPage } from '.'

describe('DetailsPage', () => {
  test('renderiza o componente DetailsPage corretamente', () => {
    const { getByText, debug } = render(<DetailsPage/>)
    {debug}
    expect(getByText('Detalhes')).toBeInTheDocument();
    expect(getByText('Data')).toBeInTheDocument();

    // const mockTransaction = {
    //   "id": "114606514478703",
    //   "merchantId": "2000463023",
    //   "paymentNode": 485173,
    //   "cnpjRoot": 485116,
    //   "date": "26/05/2021",
    //   "paymentType": "Crédito à vista",
    //   "cardBrand": "Mastercard",
    //   "authorizationCode": "378216",
    //   "truncatedCardNumber": "1014",
    //   "grossAmount": 80,
    //   "netAmount": 76.88,
    //   "terminal": "00032668",
    //   "administrationFee": 3.9,
    //   "channelCode": 15,
    //   "channel": "Super Link / Digitada",
    //   "withdrawAmount": 0,
    //   "minimumMDRAmmount": -3.12,
    //   "mdrTaxAmount": 0,
    //   "mdrFeeAmount": -3.12,
    //   "status": "Aprovada"
    // }


  //  await act(async () => {
  //   expect(screen.getByText(`Detalhes`)).toBeInTheDocument();
  //   expect(screen.getByText(`Data: 26/05/2021`)).toBeInTheDocument();
  //   expect(screen.getByText(`Status: Aprovada`)).toBeInTheDocument();
   })
  })