import { useState } from "react";
import { NameField, HalfPan, FullPan, ButtonWrapper, Button, Required, Warning } from "./Elements";
import Result from "./Result";

export default function Form() {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneCode, setPhoneCode] = useState('+61')
    const [phone, setPhone] = useState('')
    const [AUDtoUSD, setAUDtoUSD] = useState(true)
    const [amount, setAmount] = useState()
    const [fromQuery, setFromQuery] = useState(1)
    const [toQuery, setToQuery] = useState(1)
    const [showForm, setShowForm] = useState(true)

    const [firstNameWarning, setFirstNameWarning] = useState(false)
    const [lastNameWarning, setLastNameWarning] = useState(false)
    const [currencyWarning, setCurrencyWarning] = useState(false)
    const [amountWarning, setAmountWarning] = useState(false)


    //FromQuery -> 1 means AUD
    //FromQuery -> 2 means USD

    //ToQuery -> 1 means USD
    //ToQuery -> 2 means AUD


    function toggleForm() {
        if (showForm) {

            setFirstNameWarning(false)
            setLastNameWarning(false)
            setCurrencyWarning(false)
            setAmountWarning(false)

            if (!firstName) {
                setFirstNameWarning(true)
            }
            if (!lastName) {
                setLastNameWarning(true)
            }
            if (fromQuery !== toQuery) {
                setCurrencyWarning(true)
            }
            if (!amount) {
                setAmountWarning(true)
            } 
            else if (firstName && lastName && fromQuery === toQuery && amount) {
                setShowForm(!showForm)
            }
        } else {
            setShowForm(!showForm)
            // setFirstName('')
            // setLastName('')
            // setEmail('')
            // setPhoneCode('+61')
            // setPhone()
            // setFromQuery(1)
            // setToQuery(1)

            setFirstNameWarning(false)
            setLastNameWarning(false)
            setCurrencyWarning(false)
            setAmountWarning(false)

            setAmount()
        }
    }

    return (
        <>
        {showForm && (<>
            <NameField>
                <HalfPan>
                    <label className={firstNameWarning ? 'warning' : null}>First Name <Required>*</Required><br></br></label>
                    <input 
                        className={firstNameWarning ? 'warning' : null}
                        type="text"
                        placeholder='First Name'
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <Warning 
                        style={firstNameWarning ? {display: 'block'} : {display: 'none'}} 
                    >
                        First name is required.
                    </Warning>
                </HalfPan>
                <HalfPan>
                    <label className={lastNameWarning ? 'warning' : null}>Last Name <Required>*</Required><br></br></label>
                    <input
                        className={lastNameWarning ? 'warning' : null}
                        type="text"
                        placeholder='Last Name'
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    <Warning 
                        style={lastNameWarning ? {display: 'block'} : {display: 'none'}} 
                    >
                        Last name is required.
                    </Warning>
                </HalfPan>
            </NameField>

            <FullPan>
                <label>Email<br></br></label>
                <input 
                    type="text"
                    placeholder='Email'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </FullPan>

            <FullPan>
                <label>Telephone / Mobile<br></br></label>
                <select
                    style={{width: '20%'}}
                    value={phoneCode}
                    onChange={e => setPhoneCode(e.target.value)}
                >
                    <option value="+61">+61</option>
                    <option value="+1">+1</option>
                </select>
                <input 
                    style={{width: '80%'}}
                    type="text"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                />
            </FullPan>

            <NameField>
                <HalfPan>
                    <label className={currencyWarning ? 'warning' : null}>From Currency <Required>*</Required><br/></label>
                    <select
                        className={currencyWarning ? 'warning' : null}
                        value={fromQuery}
                        onChange={(e) => {
                            setFromQuery(parseInt(e.target.value))
                            if (parseInt(e.target.value)===1) {
                                setAUDtoUSD(true);
                            } else if (parseInt(e.target.value)===2) {
                                setAUDtoUSD(false);
                            }
                        }}
                    >
                        <option 
                            value={1}
                        >
                            Australian Dollar (AUD)
                        </option>
                        <option 
                            value={2}
                        >
                            United States Dollar (USD)
                        </option>
                    </select>
                    <Warning 
                        style={currencyWarning ? {display: 'block'} : {display: 'none'}} 
                    >
                        From currency and to currency cannot be same.
                    </Warning>
                </HalfPan>
                <HalfPan>
                    <label className={currencyWarning ? 'warning' : null}>To Currency <Required>*</Required><br/></label>
                    <select
                        className={currencyWarning ? 'warning' : null}
                        value={toQuery}
                        onChange={(e) => {
                            setToQuery(parseInt(e.target.value))
                            if (parseInt(e.target.value)===1) {
                                setAUDtoUSD(true);
                            } else if (parseInt(e.target.value)===2) {
                                setAUDtoUSD(false);
                            }
                        }}
                    >
                        <option 
                            value={1}
                        >
                            United States Dollar (USD)
                        </option>
                        <option 
                            value={2}
                        >
                            Australian Dollar (AUD)
                        </option>
                    </select>
                </HalfPan>
            </NameField>

            <HalfPan>
                <label className={amountWarning ? 'warning' : null}>Amount <Required>*</Required><br></br></label>
                <input
                    className={amountWarning ? 'warning' : null} 
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(parseFloat(e.target.value))}
                />
                <Warning 
                    style={amountWarning ? {display: 'block'} : {display: 'none'}} 
                >
                    Amount is required.
                </Warning>
            </HalfPan>

            <ButtonWrapper>
                <Button
                    onClick={() => {toggleForm()}}
                >
                    GET QUOTE
                </Button>
            </ButtonWrapper>
        </>)}

        {!showForm && (
        <>
            <Result 
                amount={amount}
                AUDtoUSD={AUDtoUSD}
            />

            <ButtonWrapper>
                <Button
                    onClick={() => {toggleForm()}}
                >
                    START NEW QUOTE
                </Button>
            </ButtonWrapper>
        </>)}
        </>
    )
}