import React, { useRef } from 'react'
import styled from 'styled-components'
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import schema from '../schema'

import Label from './Label'
import TextField from './TextField'
import Dropdown from './Dropdown'
import Checkbox from './Checkbox/Checkbox'
import Button from './Button'
import Error from './Error'

const StyledSignUpForm = styled.div`
    min-width: 360px;
    box-shadow: 0px 12px 24px rgba(44, 39, 56, 0.02), 0px 32px 64px rgba(44, 39, 56, 0.04);
    border-radius: 24px;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    padding: 40.41px 30px;
`

const Title = styled.h1`
    margin-bottom: 8.53px;
    font-size: 2.125rem;
    font-weight: 700;
`

const SubTitle = styled.small`
    margin-bottom: 56.59px;
    font-size: 1rem;
    color: #2C2738;
` 
const Link = styled.a`
    color: #0880AE;
    text-decoration: none;
`
const CheckboxContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 6.74px 0 33.43px 0
`

function SignUpForm() {
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema)
    })

    function onSubmit(data) {
        console.log(data)
    }

    return (
        <StyledSignUpForm>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Title>Регистрация</Title>

                <SubTitle>
                    Уже есть аккаунт? <Link>Войти</Link>
                </SubTitle>

                <Label htmlFor="name">Имя</Label>
                <TextField placeholder="Введите Ваше имя" margin="6.74px 0 33.43px 0" id="name" ref={register}/>
                
                {errors.name && (<Error text={errors.name?.message} />)}

                <Label htmlFor="email">Еmail</Label>
                <TextField placeholder="Введите Ваш email" margin="6.74px 0 33.43px 0" id="email" ref={register} />

                {errors.email && (<Error text={errors.email?.message} />)}

                <Label htmlFor="phone">Номер телефона</Label>
                <TextField placeholder="Введите номер телефона" margin="6.74px 0 33.43px 0" id="phone" ref={register} />

                {errors.phone && (<Error text={errors.phone?.message} />)}

                <Label>Язык</Label>
                <Dropdown 
                options={[
                    {value: 'английский', label: 'Английский'}
                ]}
                placeholder="Язык"
                margin="6.74px 0 33.43px 0"
                />

                <CheckboxContainer>
                    <Checkbox id="policyCheckbox"/>
                    <Label htmlFor="policyCheckbox" margin="0 0 0 8px">
                        Принимаю <Link href="#"> условия </Link> использования
                    </Label>
                </CheckboxContainer>

                <Button type="submit">Зарегистрироваться</Button>
            </Form>
        </StyledSignUpForm>
    )
}

export default SignUpForm
