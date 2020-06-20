import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Card, TextField, Box } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles'
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import NativeSelect from '@material-ui/core/NativeSelect';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { NavLink } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import GetAppIcon from '@material-ui/icons/GetApp';
import axios from 'axios';
import { Redirect } from "react-router-dom";
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import Grow from '@material-ui/core/Grow';
import styles from '../style.module.css';




const useStyles = (theme) => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(2),
        backgroundColor: '#FAFCFD'
    },
    rootimg: {
        padding: theme.spacing(1),
        marginTop: theme.spacing(1)
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    rootUpload: {
        '& > *': {
            marginTop: theme.spacing(3),
            display: 'flex',
            justifyContent: 'flex-end'
        },
    },
    inputUpload: {
        display: 'none',
    },
    margin: {
        marginTop: theme.spacing(1)
    }
});


class CreateDataPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dateOfApplication: '',
            businesName: '',
            stir: '',
            fio: '',
            photo: '',
            birthDate: '',
            gender: 'эркак',
            passportNumber: '',
            region: '',
            district: '',
            address: '',
            phone: '',
            registerDate: '',
            direction: '',
            payType: 'Бепул',
            document: '',
            docSeria: '',
            image: '',
            date: '',
            serviceResult: '',
            execution: '',
            isRedirect: false,
            checked: true
        }
    }

    componentDidMount(){
        sessionStorage.setItem("pathname", window.location.pathname)
    }


    handleChange(event) {
        let name = event.target.name;
        let value = event.target.value;

        this.setState({
            [name]: value
        })
    }

    onHandleSubmit() {
        let data = this.state;
        delete data.isRedirect;
        delete data.checked;
        axios.post('http://localhost:9000/api/auth/createPhisical', data).then(res => {
            if (res.data === 'success') {
                this.setState({
                    isRedirect: true
                })
            }

        })
    }

    render() {
        const { classes } = this.props;
        if (this.state.isRedirect) {
            return <Redirect to="/" />
        }
        return (
            <Grow in={this.state.checked}
                style={{ transformOrigin: '0 0 0' }}
                {...(this.state.checked ? { timeout: 1000 } : {})}>
                <Box>
                    <Card className={classes.root} style={{ height: '90vh' }}>
                        <Box>
                            <Grid container spacing={1}>
                                <Grid item xs={12} className={styles.createDataTop}>
                                    <NavLink to="/" style={{ textDecoration: 'none' }}>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            className={classes.button}
                                            startIcon={<ArrowBackIcon />}
                                        >
                                            Back
                                    </Button>
                                    </NavLink>
                                    <div className={styles.createDataTopName} style={{ backgroundColor: '#3F51B5', color: 'white', width: '100%', marginLeft: 10, borderRadius: 4, fontSize: 24, paddingLeft: 20 }}>Шахсий маьлумотлар</div>
                                </Grid>
                            </Grid>
                        </Box>
                        <form onSubmit={(e) => {
                            e.preventDefault();
                        }}>
                            <Box mt={2}>
                                <Typography>Паспорт/Шахсиу маьлумотлар</Typography>
                                <Grid container spacing={3}>
                                    <Grid item xs={3}>
                                        <FormControl fullWidth className={classes.margin}>
                                            <InputLabel htmlFor="passwordNumber">passportNumber</InputLabel>
                                            <Input
                                                id="passwordNumber"
                                                type="text"
                                                name="passportNumber"
                                                value={this.state.passportNumber}
                                                onChange={(e) => this.handleChange(e)}
                                                endAdornment={<InputAdornment position="end"></InputAdornment>}
                                            />
                                        </FormControl>
                                        <FormControl fullWidth className={classes.margin}>
                                            <InputLabel htmlFor="fio">fio</InputLabel>
                                            <Input
                                                id="fio"
                                                type="text"
                                                name="fio"
                                                value={this.state.fio}
                                                onChange={(e) => this.handleChange(e)}
                                                endAdornment={<InputAdornment position="end"></InputAdornment>}
                                            />
                                        </FormControl>
                                        <FormControl fullWidth className={classes.margin}>
                                            <TextField
                                                id="date"
                                                name="birthDate"
                                                value={this.state.birthDate}
                                                label="birthDate"
                                                type="date"
                                                onChange={(e) => this.handleChange(e)}
                                                className={classes.textField}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                            />
                                        </FormControl>
                                        <FormControl fullWidth className={classes.margin}>
                                            <InputLabel htmlFor="district">district</InputLabel>
                                            <Input
                                                id="district"
                                                name="district"
                                                value={this.state.district}
                                                onChange={(e) => this.handleChange(e)}
                                                type="text"
                                                endAdornment={<InputAdornment position="end"></InputAdornment>}
                                            />
                                        </FormControl>
                                        <FormControl fullWidth className={classes.margin}>
                                            <InputLabel htmlFor="region">region</InputLabel>
                                            <Input
                                                id="region"
                                                name="region"
                                                value={this.state.region}
                                                onChange={(e) => this.handleChange(e)}
                                                endAdornment={<InputAdornment position="end"></InputAdornment>}
                                            />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <FormControl fullWidth className={classes.margin}>
                                            <InputLabel htmlFor="stir">stir</InputLabel>
                                            <Input
                                                id="stir"
                                                name="stir"
                                                value={this.state.stir}
                                                onChange={(e) => this.handleChange(e)}
                                                endAdornment={<InputAdornment position="end"></InputAdornment>}
                                            />
                                        </FormControl>
                                        <FormControl fullWidth className={classes.margin}>
                                            <InputLabel htmlFor="buinesName">businesName</InputLabel>
                                            <Input
                                                id="buinesName"
                                                name="businesName"
                                                value={this.state.businesName}
                                                onChange={(e) => this.handleChange(e)}
                                                endAdornment={<InputAdornment position="end"></InputAdornment>}
                                            />
                                        </FormControl>
                                        <FormControl fullWidth className={classes.margin}>
                                            <InputLabel shrink htmlFor="gender">
                                                gender
                                    </InputLabel>
                                            <NativeSelect
                                                value={this.props.gender}
                                                inputProps={{
                                                    name: 'gender',
                                                    id: 'gender',
                                                }}
                                                onChange={(e) => this.handleChange(e)}
                                            >
                                                <option value="эркак">Эркак</option>
                                                <option value="аёл">Аёл</option>
                                            </NativeSelect>
                                        </FormControl>
                                        <FormControl fullWidth className={classes.margin}>
                                            <InputLabel htmlFor="direction">direction</InputLabel>
                                            <Input
                                                id="direction"
                                                name="direction"
                                                value={this.state.direction}
                                                onChange={(e) => this.handleChange(e)}
                                                endAdornment={<InputAdornment position="end"></InputAdornment>}
                                            />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <FormControl fullWidth className={classes.margin}>
                                            <TextField
                                                id="date"
                                                name="dateOfApplication"
                                                value={this.state.dateOfApplication}
                                                label="dateOfApplication"
                                                type="date"
                                                onChange={(e) => this.handleChange(e)}
                                                className={classes.textField}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                            />
                                        </FormControl>
                                        <FormControl fullWidth className={classes.margin}>
                                            <InputLabel htmlFor="standard-adornment-amount">execution</InputLabel>
                                            <Input
                                                id="standard-adornment-amount"
                                                name="execution"
                                                value={this.state.execution}
                                                onChange={(e) => this.handleChange(e)}
                                                endAdornment={<InputAdornment position="end"></InputAdornment>}
                                            />
                                        </FormControl>
                                        <FormControl fullWidth className={classes.margin}>
                                            <InputLabel htmlFor="standard-adornment-amount">address</InputLabel>
                                            <Input
                                                id="standard-adornment-amount"
                                                name="address"
                                                value={this.state.address}
                                                onChange={(e) => this.handleChange(e)}
                                                endAdornment={<InputAdornment position="end"></InputAdornment>}
                                            />
                                        </FormControl>
                                        <FormControl fullWidth className={classes.margin}>
                                            <TextField
                                                id="date"
                                                name="registerDate"
                                                value={this.state.registerDate}
                                                label="registerDate"
                                                type="date"
                                                onChange={(e) => this.handleChange(e)}
                                                className={classes.textField}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                            />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Card className={classes.rootimg}>
                                            <CardMedia
                                                component="img"
                                                alt="Contemplative Reptile"
                                                height="180"
                                                image="https://inst.eecs.berkeley.edu/~cs194-26/fa18/upload/files/proj3/cs194-26-adk/randomPerson.jpg"
                                                title="Contemplative Reptile"
                                            />
                                            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                                <Box mt={1}>
                                                    <input
                                                        accept="image/*"
                                                        style={{ display: 'none' }}
                                                        id="icon-button-file"
                                                        type="file"
                                                        name="photo"
                                                        value={this.state.photo}
                                                        onChange={(e) => this.handleChange(e)}
                                                    />
                                                    <label htmlFor="icon-button-file">
                                                        <Button variant="contained" color="primary" component="span">
                                                            Upload<GetAppIcon />
                                                        </Button>
                                                    </label>
                                                </Box>
                                            </div>
                                        </Card>
                                    </Grid>
                                </Grid>
                            </Box>
                            <Box mt={3}>
                                <Typography>Алоқа маьлумотлари</Typography>
                                <Grid container spacing={3}>
                                    <Grid item xs={4}>
                                        <FormControl fullWidth className={classes.margin}>
                                            <InputLabel htmlFor="mobile_telephone">phone</InputLabel>
                                            <Input
                                                id="mobile_telephone"
                                                name="phone"
                                                value={this.state.phone}
                                                onChange={(e) => this.handleChange(e)}
                                                type="text"
                                                endAdornment={<InputAdornment position="end"></InputAdornment>}
                                            />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <FormControl fullWidth className={classes.margin}>
                                            <InputLabel htmlFor="docSeria">docSeria</InputLabel>
                                            <Input
                                                id="docSeria"
                                                type="text"
                                                name="docSeria"
                                                value={this.state.docSeria}
                                                onChange={(e) => this.handleChange(e)}
                                                endAdornment={<InputAdornment position="end"></InputAdornment>}
                                            />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <FormControl fullWidth className={classes.margin}>
                                            <TextField
                                                id="date"
                                                name="date"
                                                value={this.state.date}
                                                onChange={(e) => this.handleChange(e)}
                                                label="date"
                                                type="date"
                                                className={classes.textField}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                            />
                                        </FormControl>
                                    </Grid>
                                </Grid>
                            </Box>
                            <Box mt={3}>
                                <Typography>Таьлим/Иш/Ўқиш</Typography>
                                <Grid container direction="row" spacing={3}>
                                    <Grid item xs={3}>
                                        <FormControl fullWidth className={classes.margin}>
                                            <InputLabel shrink htmlFor="payType">
                                                payType
                                            </InputLabel>
                                            <NativeSelect
                                                value={this.state.payType}
                                                inputProps={{
                                                    name: 'payType',
                                                    id: 'payType',
                                                }}
                                                onChange={(e) => this.handleChange(e)}
                                            >
                                                <option value="Бепул">Бепул</option>
                                                <option value="Пуллик">Пуллик</option>
                                            </NativeSelect>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <FormControl fullWidth className={classes.margin}>
                                            <InputLabel htmlFor="document">document</InputLabel>
                                            <Input
                                                id="document"
                                                name="document"
                                                value={this.state.document}
                                                onChange={(e) => this.handleChange(e)}
                                                type="text"
                                                endAdornment={<InputAdornment position="end"></InputAdornment>}
                                            />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <FormControl fullWidth className={classes.margin}>
                                            <InputLabel htmlFor="serviceResult">serviceResult</InputLabel>
                                            <Input
                                                id="serviceResult"
                                                name="serviceResult"
                                                value={this.state.serviceResult}
                                                onChange={(e) => this.handleChange(e)}
                                                type="email"
                                                endAdornment={<InputAdornment position="end"></InputAdornment>}
                                            />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <FormControl fullWidth className={classes.margin}>
                                            <InputLabel htmlFor="image">image</InputLabel>
                                            <Input
                                                id="image"
                                                name="image"
                                                value={this.state.image}
                                                onChange={(e) => this.handleChange(e)}
                                                type="email"
                                                endAdornment={<InputAdornment position="end"></InputAdornment>}
                                            />
                                        </FormControl>
                                    </Grid>
                                </Grid>
                            </Box>
                            <Box mt={3} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    type="submit"
                                    className={classes.button}
                                    startIcon={<SaveAltIcon />}
                                    onClick={() => this.onHandleSubmit()}
                                >
                                    Save
                            </Button>
                            </Box>
                        </form>
                    </Card >
                </Box>
            </Grow>
        );
    }
}



export default withStyles(useStyles)(CreateDataPage);