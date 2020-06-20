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


class CreateDataToABKM extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            adress: '',
            appliedDate: '',
            birthDate: '',
            branch: '',
            date: '',
            district: '',
            document: '',
            electronPhoto: '',
            executeDate: '',
            fio: '',
            idNumber: '',
            performer: '',
            phone: '',
            photo: '',
            rDate: '',
            rDistrict: '',
            rRegion: '',
            rSeriaNumber: '',
            regDate: '',
            region: '',
            seriaAndNumber: '',
            serviceResult: '',
            sex: 'Эркак',
            stir: '',
            isRedirect: false,
            checked: true
        }
    }
    componentDidMount() {
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
        const data = this.state;
        delete data.isRedirect;
        delete data.checked;
        axios.post('http://localhost:9000/api/auth/createAbmk', data).then(res => {
            console.log(res)
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
            return <Redirect to="/menufour" />
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
                                    <NavLink to="/menufour" style={{ textDecoration: 'none' }}>
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
                                        {/* <Paper className={classes.paper}> */}
                                        <FormControl fullWidth className={classes.margin}>
                                            <InputLabel htmlFor="standard-adornment-amount">appliedDate</InputLabel>
                                            <Input
                                                id="standard-adornment-amount"
                                                type="text"
                                                name="appliedDate"
                                                value={this.state.appliedDate}
                                                onChange={(e) => this.handleChange(e)}
                                                endAdornment={<InputAdornment position="end"></InputAdornment>}
                                            />
                                        </FormControl>
                                        <FormControl fullWidth className={classes.margin}>
                                            <InputLabel htmlFor="standard-adornment-amount">fio</InputLabel>
                                            <Input
                                                id="standard-adornment-amount"
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
                                            <InputLabel htmlFor="standard-adornment-amount">district</InputLabel>
                                            <Input
                                                id="standard-adornment-amount"
                                                name="district"
                                                value={this.state.district}
                                                onChange={(e) => this.handleChange(e)}
                                                type="text"
                                                endAdornment={<InputAdornment position="end"></InputAdornment>}
                                            />
                                        </FormControl>
                                        <FormControl fullWidth className={classes.margin}>
                                            <InputLabel htmlFor="standard-adornment-amount">region</InputLabel>
                                            <Input
                                                id="standard-adornment-amount"
                                                name="region"
                                                value={this.state.region}
                                                onChange={(e) => this.handleChange(e)}
                                                endAdornment={<InputAdornment position="end"></InputAdornment>}
                                            />
                                        </FormControl>

                                        {/* </Paper> */}
                                    </Grid>
                                    <Grid item xs={3}>
                                        <FormControl fullWidth className={classes.margin}>
                                            <InputLabel htmlFor="standard-adornment-amount">stir</InputLabel>
                                            <Input
                                                id="standard-adornment-amount"
                                                name="stir"
                                                value={this.state.stir}
                                                onChange={(e) => this.handleChange(e)}
                                                endAdornment={<InputAdornment position="end"></InputAdornment>}
                                            />
                                        </FormControl>
                                        <FormControl fullWidth className={classes.margin}>
                                            <InputLabel htmlFor="standard-adornment-amount">branch</InputLabel>
                                            <Input
                                                id="standard-adornment-amount"
                                                name="branch"
                                                value={this.state.branch}
                                                onChange={(e) => this.handleChange(e)}
                                                endAdornment={<InputAdornment position="end"></InputAdornment>}
                                            />
                                        </FormControl>
                                        <FormControl fullWidth className={classes.margin}>
                                            <InputLabel shrink htmlFor="age-native-label-placeholder">
                                                sex
                                    </InputLabel>
                                            <NativeSelect
                                                value={this.state.sex}
                                                inputProps={{
                                                    name: 'sex',
                                                    id: 'age-native-label-placeholder',
                                                }}
                                                onChange={(e) => this.handleChange(e)}
                                            >
                                                <option value="Эркак">Эркак</option>
                                                <option value="Аёл">Аёл</option>
                                            </NativeSelect>
                                        </FormControl>
                                        <FormControl fullWidth className={classes.margin}>
                                            <InputLabel htmlFor="standard-adornment-amount">performer</InputLabel>
                                            <Input
                                                id="standard-adornment-amount"
                                                name="performer"
                                                value={this.state.performer}
                                                onChange={(e) => this.handleChange(e)}
                                                endAdornment={<InputAdornment position="end"></InputAdornment>}
                                            />
                                        </FormControl>
                                        <FormControl fullWidth className={classes.margin}>
                                            <TextField
                                                id="date"
                                                name="executeDate"
                                                value={this.state.executeDate}
                                                label="executeDate"
                                                type="date"
                                                onChange={(e) => this.handleChange(e)}
                                                className={classes.textField}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                            />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <FormControl fullWidth className={classes.margin}>
                                            <TextField
                                                id="date"
                                                name="date"
                                                value={this.state.date}
                                                label="date"
                                                type="date"
                                                onChange={(e) => this.handleChange(e)}
                                                className={classes.textField}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                            />
                                        </FormControl>
                                        <FormControl fullWidth className={classes.margin}>
                                            <InputLabel htmlFor="standard-adornment-amount">idNumber</InputLabel>
                                            <Input
                                                id="standard-adornment-amount"
                                                name="idNumber"
                                                value={this.state.idNumber}
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
                                                name="regDate"
                                                value={this.state.regDate}
                                                label="regDate"
                                                type="date"
                                                onChange={(e) => this.handleChange(e)}
                                                className={classes.textField}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                            />
                                        </FormControl>
                                        <FormControl fullWidth className={classes.margin}>
                                            <InputLabel htmlFor="standard-adornment-amount">rRegion</InputLabel>
                                            <Input
                                                id="standard-adornment-amount"
                                                name="rRegion"
                                                value={this.state.rRegion}
                                                onChange={(e) => this.handleChange(e)}
                                                endAdornment={<InputAdornment position="end"></InputAdornment>}
                                            />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={2}>
                                        {/* <Paper className={classes.paper}> */}
                                        <Card className={classes.rootimg}>
                                            {/* <CardActionArea> */}
                                            <CardMedia
                                                component="img"
                                                alt="Contemplative Reptile"
                                                height="180"
                                                image="https://inst.eecs.berkeley.edu/~cs194-26/fa18/upload/files/proj3/cs194-26-adk/randomPerson.jpg"
                                                title="Contemplative Reptile"
                                            />
                                            {/* <CardContent> */}
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
                                        {/* </Paper> */}
                                    </Grid>
                                </Grid>
                            </Box>
                            <Box mt={3}>
                                <Typography>Алоқа маьлумотлари</Typography>
                                <Grid container spacing={3}>
                                    <Grid item xs={3}>
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
                                    <Grid item xs={3}>
                                        <FormControl fullWidth className={classes.margin}>
                                            <InputLabel htmlFor="standard-adornment-amount">seriaAndNumber</InputLabel>
                                            <Input
                                                id="standard-adornment-amount"
                                                type="text"
                                                name="seriaAndNumber"
                                                value={this.state.seriaAndNumber}
                                                onChange={(e) => this.handleChange(e)}
                                                endAdornment={<InputAdornment position="end"></InputAdornment>}
                                            />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <FormControl fullWidth className={classes.margin}>
                                            <TextField
                                                id="Date"
                                                name="rDate"
                                                value={this.state.rDate}
                                                onChange={(e) => this.handleChange(e)}
                                                label="rDate"
                                                type="date"
                                                className={classes.textField}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                            />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <FormControl fullWidth className={classes.margin}>
                                            <InputLabel htmlFor="standard-adornment-amount">rDistrict</InputLabel>
                                            <Input
                                                id="standard-adornment-amount"
                                                type="text"
                                                name="rDistrict"
                                                value={this.state.rDistrict}
                                                onChange={(e) => this.handleChange(e)}
                                                endAdornment={<InputAdornment position="end"></InputAdornment>}
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
                                            <InputLabel htmlFor="standard-adornment-amount">serviceResult</InputLabel>
                                            <Input
                                                id="standard-adornment-amount"
                                                name="serviceResult"
                                                value={this.state.serviceResult}
                                                onChange={(e) => this.handleChange(e)}
                                                type="text"
                                                endAdornment={<InputAdornment position="end"></InputAdornment>}
                                            />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <FormControl fullWidth className={classes.margin}>
                                            <InputLabel htmlFor="standard-adornment-amount">document</InputLabel>
                                            <Input
                                                id="standard-adornment-amount"
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
                                            <InputLabel htmlFor="standard-adornment-amount">rSeriaNumber</InputLabel>
                                            <Input
                                                id="standard-adornment-amount"
                                                name="rSeriaNumber"
                                                value={this.state.rSeriaNumber}
                                                onChange={(e) => this.handleChange(e)}
                                                type="text"
                                                endAdornment={<InputAdornment position="end"></InputAdornment>}
                                            />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Box>
                                            <FormControl fullWidth className={classes.margin}>
                                                <input
                                                    accept="image/*"
                                                    style={{ display: 'none' }}
                                                    id="icon-button-file"
                                                    type="file"
                                                    name="electronPhoto"
                                                    value={this.state.electronPhoto}
                                                    onChange={(e) => this.handleChange(e)}
                                                />
                                                <label htmlFor="icon-button-file">
                                                    <Button variant="contained" color="default" component="span">
                                                        Electron Photo<GetAppIcon />
                                                    </Button>
                                                </label>
                                            </FormControl>
                                        </Box>
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



export default withStyles(useStyles)(CreateDataToABKM);