'use client';
import React from 'react'
import '@/app/globals.css'
import TextField from '@mui/material/TextField';
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';

const SignUP = () => {
    return (
        <div className='w-full h-full flex justify-center items-center'>
            <div className='w-[420px] h-[600px] bg-white rounded-3xl p-4 flex items-center flex-col'>
                <div className='w-full flex justify-start'>
                    <h1 className='text-3xl font-medium font-primary m-6'>SIGN UP</h1>
                </div>
                <div className='w-full flex justify-center flex-col' >
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                    <FormControl variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            // type={showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        // onClick={handleClickShowPassword}
                                        // onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {/* {showPassword ? <VisibilityOff /> : <Visibility />} */}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                        />
                    </FormControl>
                </div>
            </div>
        </div>
    )
}

export default SignUP