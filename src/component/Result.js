import { useEffect, useState } from 'react'
import { Answer, AnswerTitle, AnswerValue, CustomerRate, LoadContainer, Loader, RateNumber, RateTitle, ResultContainer, ResultWrapper } from './Elements'

export default function Result({ amount, AUDtoUSD }) {

    const [loading, setLoading] = useState(true)
    const [rate, setRate] = useState()
    const [convertedRate, setConvertedRate] = useState()
    const [message, setMessage] = useState('')


    useEffect(() => {
        fetch('https://api.ofx.com/PublicSite.ApiService/OFX/spotrate/Individual/AUD/GBP/10000?format=json')
            .then(res => res.json())
            .then(data => {
                setMessage(data.Message)
                if (AUDtoUSD) {
                    setRate(data.CustomerRate)
                    setConvertedRate(amount*data.CustomerRate)
                } else if (!AUDtoUSD) {
                    setRate(data.CustomerRateInverse)
                    setConvertedRate(amount*data.CustomerRateInverse)
                }
                setLoading(false)

            })
    }, [amount, AUDtoUSD])

    const showResult = (AUDtoUSD) ? (amount >= 250) : (convertedRate >= 250)

    return (
        <>
            {loading ? 
                <>
                    <LoadContainer>
                        <Loader>
                            Loading...
                        </Loader>
                    </LoadContainer>
                </> :
                showResult ?
                    <ResultContainer>
                        <ResultWrapper>
                            <CustomerRate>
                                <RateTitle>
                                    OFX Customer Rate
                                </RateTitle>
                                <RateNumber>
                                    {rate.toFixed(4)}
                                </RateNumber>
                            </CustomerRate>

                            <Answer>
                                <AnswerTitle>
                                    From
                                </AnswerTitle>
                                <AnswerValue>
                                    {AUDtoUSD ? `AUD ${amount.toFixed(2)}` : `USD ${amount.toFixed(2)}`}
                                </AnswerValue>
                            </Answer>

                            <Answer>
                                <AnswerTitle>
                                    To
                                </AnswerTitle>
                                <AnswerValue>
                                {AUDtoUSD ? `USD ${convertedRate.toFixed(2)}` : `AUD ${convertedRate.toFixed(2)}`}
                                </AnswerValue>
                            </Answer>
                        </ResultWrapper>
                    </ResultContainer> :
                    <h1>{message}</h1>
                }
                

        </>
    )
} 