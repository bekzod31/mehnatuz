import React from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Card, Typography } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import LockIcon from '@material-ui/icons/Lock';
import Button from '@material-ui/core/Button';
import { loginRequest } from '../Requests/Auth';
import { connect } from 'react-redux';
import Divider from '@material-ui/core/Divider';


class Login extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            email: ''
        }
    }


    handleChange(event) {
        let name = event.target.name;
        let value = event.target.value;

        this.setState({
            [name]: value
        })

        if (this.props.isAuth.auth !== '') {
            this.setState({
                username: '',
                password: '',
                email: ''
            })
        }
    }




    render() {
        return (
            <Box style={{ height: '100vh', backgroundColor: '#43acc7' }}>
                <Box style={{ display: 'flex', height: '94vh', justifyContent: 'center', alignItems: 'center' }}>
                    <Card style={{ width: '20%', display: 'flex', justifyContent: 'center', alignItems: 'center', height: 430 }}>
                        <Box px={3}>
                            <form onSubmit={(e) => {
                                e.preventDefault();
                            }}>
                                <Grid>
                                    <Grid item xs={12}>
                                        <Box style={{ display: 'flex', justifyContent: 'center' }}>
                                            <div style={{ width: 110, height: 110, borderRadius: 30 }}>
                                                <img src={require("../Image/logo.jpg")} alt="" style={{ width: "100%", height: "100%", borderRadius: 30 }} />
                                            </div>
                                        </Box>
                                        <Typography align="center" variant="h6" >"Ishga marhamat"</Typography>
                                        <span style={{ fontSize: 14, marginBottom: 18, textAlign: 'center', display: 'block' }}>Мономаркази ягона
                                        интеграциялашган тизими</span>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Box mt={1}>
                                            <TextField
                                                id="input-username"
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
                                        <Box mt={2}>
                                            <TextField
                                                id="input-password"
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
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Box mt={4}>
                                            <Box mt={2}>
                                                <Button variant="contained" type="submit" color="primary" fullWidth onClick={() => this.props.onAdd(this.state)} >
                                                    Кириш
                                        </Button>
                                            </Box>
                                            <Box mt={1}>
                                                <NavLink to="/registration" style={{ textDecoration: 'none' }}>
                                                    <Button variant="contained" color="primary" fullWidth mt={2}>
                                                        Регистрация
                                        </Button>
                                                </NavLink>
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

function mapDispatchToProps(dispatch) {
    return {
        onAdd: (data) => dispatch(loginRequest(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);