import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import { useForm, Controller } from "react-hook-form"
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
const FormField = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 34px;
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
    margin: 6.74px 0 0 0
`

function SignUpForm() {
    const { register, handleSubmit, errors, control, formState } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange'
    })

    const languageOptions = [
        {value: 'Русский', label: 'Русский'},
        {value: 'Английский', label: 'Английский'},
        {value: 'Китайский', label: 'Китайский'},
        {value: 'Испанский', label: 'Испанский'}
    ]

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

                <FormField>
                    <Label htmlFor="name">Имя</Label>
                    <TextField 
                    placeholder="Введите Ваше имя" 
                    margin="6.74px 0 0 0" 
                    id="name" 
                    ref={register}
                    />
                    {errors.name && (<Error text={errors.name?.message} margin="8px 0 0 0" />)}
                </FormField>
                

                <FormField>
                    <Label htmlFor="email">Еmail</Label>
                    <TextField 
                    placeholder="Введите Ваш email" 
                    margin="6.74px 0 0 0" 
                    id="email" 
                    ref={register} 
                    />
                    {errors.email && (<Error text={errors.email?.message} margin="8px 0 0 0" />)}
                </FormField>

                <FormField>
                    <Label htmlFor="phone">Номер телефона</Label>
                    <TextField placeholder="Введите номер телефона" margin="6.74px 0 0 0" id="phone" ref={register} />
                    {errors.phone && (<Error text={errors.phone?.message} margin="8px 0 0 0" />)}
                </FormField>

                <FormField>
                    <Label>Язык</Label>
                    <Controller
                    name="language"
                    as={Dropdown}
                    options={languageOptions}
                    placeholder="Язык"
                    margin="6.74px 0 0 0"
                    control={control}
                    defaultValue=""
                    />
                </FormField>

                <FormField>
                    <CheckboxContainer>
                        <Checkbox id="policyCheckbox" ref={register} />
                        <Label htmlFor="policyCheckbox" margin="0 0 0 8px">
                            Принимаю <Link href="#"> условия </Link> использования
                        </Label>
                    </CheckboxContainer>
                </FormField>

                <Button type="submit" disabled={!formState.isValid}>Зарегистрироваться</Button>
            </Form>
        </StyledSignUpForm>
    )
}

export default SignUpForm
