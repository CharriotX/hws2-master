import React, { ChangeEvent, KeyboardEvent } from 'react'
import s from './Greeting.module.css'
import { UserType } from './HW3'
import { Box, Button, TextField } from '@mui/material'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void// need to fix any
    addUser: () => void // need to fix any
    onBlur: () => void // need to fix any
    onEnter: (e: KeyboardEvent) => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    lastUserName?: string // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {
        name,
        setNameCallback,
        addUser,
        onEnter,
        onBlur,
        error,
        totalUsers,
        lastUserName,
    } // деструктуризация пропсов
) => {
    const inputClass = error.length !== 0 ? s.errorInput : '' // need to fix with (?:)
    console.log(Boolean(error.length !== 0))
    return (
        <Box id={'hw3-form'} className={s.greetingForm} marginBottom={8}>
            <Box className={s.text} color={"lightgray"}>
                {'Людей добавили: '}
                <span id={'hw3-users-total'}>
                    {totalUsers}
                </span>
            </Box>

            <Box className={s.inputAndButtonContainer} display={"flex"}>
                <Box marginRight={2} width={"400px"}>
                    <TextField
                        id={'hw3-input'}
                        value={name}
                        onChange={setNameCallback}
                        className={inputClass}
                        onKeyDown={onEnter}
                        onBlur={onBlur}
                        size={"small"}
                        fullWidth={true}
                        variant='outlined'
                    />
                    <div id={'hw3-error'} className={s.error}>
                        {error}
                    </div>
                </Box>
                <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
                    <Button
                        id={'hw3-button'}
                        onClick={addUser}
                        className={s.button}
                        disabled={!name.trim()}
                        variant='contained'
                    >
                        add
                    </Button>
                </Box>
            </Box>

            {lastUserName && (
                <Box className={s.greeting} marginTop={3}>
                    Привет <span id={'hw3-last-user'}>{lastUserName}</span>!
                </Box>
            )}
        </Box>
    )
}

export default Greeting
