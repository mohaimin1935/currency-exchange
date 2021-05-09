import styled from 'styled-components'


// HEADER ELEMENTS
export const HeaderContainer = styled.div`
    min-width: 100%;
    height: 60px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Image = styled.img`
    max-height: 80%;
`

// BODY

export const Container = styled.div`
    margin: 1.5em;
    max-width: 640px;
    background-color: #fff;

    @media (min-width: 640px) {
        margin: 2em auto;
    }
`

export const TitleWrapper = styled.div`
    margin-bottom: 1.5px solid #000;
    border-bottom: 1.5px solid #6c5ce7;
    padding: .8em 1.2em;
`

export const Title = styled.h2`
    font-weight: 700;

    @media (min-width: 640px) {
        font-size: 2rem;
        margin-left: .5em;
    }
`

export const ButtonWrapper = styled.div`
    width: 100%;
    padding: 1.5em 0;
    display: flex;
    justify-content: center;
    align-items: center; 
`

export const Button = styled.button`
    padding: 1em 2.5em;
    background-color: #6c5ce7;
    border-radius: 100vmax;
    border: none;
    outline: none;
    color: #f2f2f2;
    text-transform: uppercase;
    font-weight: 600;

    @media (min-width: 640px) {
        padding: 1.2em 3.5em;
    }
`

export const Required = styled.span`
    color: red;
`

export const LoadContainer = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Loader = styled.div`
    padding: 1em 2.5em;
    background-color: rgba(0,0,0,.2);
    border-radius: 1em;
`


// FORM

export const FormContainer = styled.div`
    padding: 1.8em 1em;

    @media (min-width: 640px) {
        
    }
`

export const NameField = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (min-width: 640px) {
        flex-direction: row;
    }
`

export const HalfPan = styled.div`
    width: 100%;
    margin: .3em 0;

    @media (min-width: 640px) {
        width: 50%;
        padding: .5em 1em;
    }
`

export const FullPan = styled.div`
    width: 100%;
    margin: .3em 0;

    @media (min-width: 640px) {
        padding: .5em 1em;
    }
`

export const Warning = styled.p`
    color: red;
    font-size: .8rem;
`


// Result

export const ResultContainer = styled.div`
    margin: 1em auto;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ResultWrapper = styled.div``

export const CustomerRate = styled.div`
    padding: .3em;
`

export const RateTitle = styled.p`
    font-size: 1.2rem;
`

export const RateNumber = styled.p`
    font-size: 2rem;
    color: #00b894;
`

export const Answer = styled.div`
    padding: .3em;
`

export const AnswerTitle = styled.p`
    font-size: 1.2rem;
`

export const AnswerValue = styled.p`
    font-size: 1.6rem;
    color: #6c5ce7;
`