import React from 'react';
import axios from 'axios';
import { Box, Card, Typography } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import LockIcon from '@material-ui/icons/Lock';
import Button from '@material-ui/core/Button';
// import { loginRequest } from '../Requests/Auth';
import { connect } from 'react-redux';
import Divider from '@material-ui/core/Divider';
import EmailIcon from '@material-ui/icons/Email';
import { Redirect } from "react-router-dom";



class Registration extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            email: '',
            role: [1, 3],
            isRedirect: false
        }
    }


    handleChange(event) {
        let name = event.target.name;
        let value = event.target.value;

        this.setState({
            [name]: value
        })
    }

    onSubmit() {
        let data = {
            username: this.state.username,
            password: this.state.password,
            email: this.state.email,
            role: this.state.role,
        }
        console.log(data)
        axios.post('http://localhost:9000/api/auth/signup', data).then(res => {
            if (res.status === 200) {
                this.setState({
                    username: '',
                    password: '',
                    email: '',
                    isRedirect: true
                })
                console.log(res)
            }
        })

    }



    render() {
        console.log(this.state)
        if (this.state.isRedirect) {
            return <Redirect to="/login"/>
        }
        return (
            <Box style={{ height: '100vh', backgroundColor: '#43acc7' }}>

                <Box style={{ display: 'flex', height: '94vh', justifyContent: 'center', alignItems: 'center' }}>
                    <Card style={{ width: '20%', display: 'flex', justifyContent: 'center', alignItems: 'center', height: 400 }}>
                        {/* {
                                            this.state.isSuccess ?
                                                <Alert variant="filled" severity="success">
                                                    {this.state.successMessage}
                                                </Alert> : null
                                        } */}
                        <Box >
                            <form onSubmit={(e) => {
                                e.preventDefault();
                            }}>
                                <Grid item>

                                    <Grid xs={12}>
                                        <Box style={{ display: 'flex', justifyContent: 'center' }}>
                                            <div style={{ width: 110, height: 110, borderRadius: 30 }}>
                                                <img src={require("../Image/logo.jpg")} alt="" style={{ width: "100%", height: "100%", borderRadius: 30 }} />
                                            </div>
                                        </Box>
                                        <Typography align="center" variant="h6" >Рўйхатдан ўтиш</Typography>
                                    </Grid>
                                    <Grid xs={12}>
                                        <Box mt={1}>
                                            <TextField
                                                id="input-with-icon-textfieldone"
                                                placeholder="Ф.И.О"
                                                type="text"
                                                fullWidth
                                                InputProps={{
                                                    startAdornment: (
                                                        <InputAdornment position="start">
                                                            <AccountCircle />
                                                        </InputAdornment>
                                                    ),
                                                }}
                                            />
                                        </Box>
                                        <Box mt={1}>
                                            <TextField
                                                id="input-with-icon-textfieldtwo"
                                                placeholder="Login"
                                                type="text"
                                                name="username"
                                                value={this.state.username}
                                                onChange={(e) => this.handleChange(e)}
                                                fullWidth
                                                InputProps={{
                                                    startAdornment: (
                                                        <InputAdornment position="start">
                                                            <AccountCircle />
                                                        </InputAdornment>
                                                    ),
                                                }}
                                            />
                                        </Box>
                                        <Box mt={1}>
                                            <FormControl>
                                                <TextField
                                                    id="input-with-icon-textfieldthree"
                                                    placeholder="Password"
                                                    type="password"
                                                    name="password"
                                                    value={this.state.password}
                                                    onChange={(e) => this.handleChange(e)}
                                                    fullWidth
                                                    InputProps={{
                                                        startAdornment: (
                                                            <InputAdornment position="start">
                                                                <LockIcon />
                                                            </InputAdornment>
                                                        ),
                                                    }}
                                                />
                                            </FormControl>
                                        </Box>
                                        <Box mt={1}>
                                            <TextField
                                                id="input-with-icon-textfieldfour"
                                                placeholder="Email"
                                                type="email"
                                                name="email"
                                                value={this.state.email}
                                                onChange={(e) => this.handleChange(e)}
                                                fullWidth
                                                InputProps={{
                                                    startAdornment: (
                                                        <InputAdornment position="start">
                                                            <EmailIcon />
                                                        </InputAdornment>
                                                    ),
                                                }}
                                            />
                                        </Box>
                                    </Grid>
                                    <Grid xs={12}>
                                        <Box mt={4}>
                                            <Box mt={1}>
                                                {/* <NavLink to="/" style={{ textDecoration: 'none' }}> */}
                                                    <Button variant="contained" color="primary" fullWidth mt={2} onClick={() => this.onSubmit()} >
                                                        Рўйхатдан ўтиш
                                                    </Button>
                                                {/* </NavLink> */}
                                            </Box>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </form>
                        </Box>
                    </Card>
                </Box>
                <Divider />
                <Box mt={1} px={2}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', color: 'white', fontSize: 14 }}>
                        <span>Техник ёрдам: +998 (71) 207-69-00 (777)</span>
                        <span>©  {new Date().getFullYear()} Банд бўлмаган аҳолига хизмат кўрсатувчи “Ishga marhamat” Мономаркази</span>
                    </div>
                </Box>
            </Box>
        )
    }
}

function mapStateToProps(state) {
    return {
        isAuth: state.AuthMe
    }
}

// function mapDispatchToProps(dispatch) {
//     return {
//         onAdd: (data) => dispatch(loginRequest(data))
//     }
// }

export default connect(mapStateToProps)(Registration);