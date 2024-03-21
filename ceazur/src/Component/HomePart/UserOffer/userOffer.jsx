import React from 'react'
import { TextField, Button, Box, InputAdornment } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';


const UserOffer = () => {


      return (
            <Box
                  sx={{


                        padding: '20px',
                        display: 'flex',
                        justifyContent: 'end',
                        alignItems: 'end',
                        flexDirection: 'column',
                        height: '100%',
                  }}
            >
                  <div style={{ fontSize: "small", textAlign: "end", marginBottom: "10px", fontFamily: "serif" }}>
                        Sign up now and be the first to know about exclusive offers, latest fashion trends & style tips!
                  </div>
                  <TextField
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                        size="small"
                        InputProps={{
                              endAdornment: (
                                    <InputAdornment position="end">
                                          <Button variant="outlined" size="small" style={{ border: "none" }}>
                                                <MailOutlineIcon style={{ color: "black" }} />
                                          </Button>
                                    </InputAdornment>
                              ),
                        }}
                  />
            </Box>
      )
}

export default UserOffer;

