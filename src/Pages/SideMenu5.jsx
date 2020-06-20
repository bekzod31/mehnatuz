import React from 'react';
import MaterialTable from 'material-table';
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Box, withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import useStyles from '../Constants/Styles';
import { NavLink } from 'react-router-dom';
import Grow from '@material-ui/core/Grow';


class SideMenu5 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedRow: null,
            checked: true
        }
    }

    

    render() {
        const { classes } = this.props;
        const columns = [
            { title: "№", field: "id" },
            { title: "In Time", field: "inTime" },
            { title: "In Date", field: "inDate" },
            { title: "Out Time", field: "outTime" },
            { title: "Out Date", field: "outDate" },
            { title: "Action", field: "action" }
        ];

        const data = [
            {
                table1: "1",
                table2: "15.03.2020",
                table3: "Artel Injenering МЧЖ",
                table5: "Иван Иванов Иванович",
                table6: "4*5",
                table7: "01.01.1985",
                table8: "эркак",
                table9: "АА 000000",
                table10: "77777777",
                table11: "Тошкент",
                table12: "Яшнобод",
                table13: "Яшнобод",
                table14: "90 780 80 80",
                table15: "19,03,2020",
                table16: "Пайвандловчи",
                table17: "Пуллик",
                table18: "сертификат",
                table19: "1111",
                table20: ".jpg",
                table21: "01,01,2020",
                table22: "Фуқароларни касбга ўқитиш",
                table23: "Азимова Юлдуз",
                table24: "Азимова Юлдуз",
                table25: "Азимова Юлдуз",
            },
            {
                table1: "1",
                table2: "15.03.2020",
                table3: "Artel Injenering МЧЖ",
                table5: "Иван Иванов Иванович",
                table6: "4*5",
                table7: "01.01.1985",
                table8: "эркак",
                table9: "АА 000000",
                table10: "77777777",
                table11: "Тошкент",
                table12: "Яшнобод",
                table13: "Яшнобод",
                table14: "90 780 80 80",
                table15: "19,03,2020",
                table16: "Пайвандловчи",
                table17: "Пуллик",
                table18: "сертификат",
                table19: "1111",
                table20: ".jpg",
                table21: "01,01,2020",
                table22: "Фуқароларни касбга ўқитиш",
                table23: "Азимова Юлдуз",
                table24: "Азимова Юлдуз",
                table25: "Азимова Юлдуз",
            },
            {
                table1: "1",
                table2: "15.03.2020",
                table3: "Artel Injenering МЧЖ",
                table5: "Иван Иванов Иванович",
                table6: "4*5",
                table7: "01.01.1985",
                table8: "эркак",
                table9: "АА 000000",
                table10: "77777777",
                table11: "Тошкент",
                table12: "Яшнобод",
                table13: "Яшнобод",
                table14: "90 780 80 80",
                table15: "19,03,2020",
                table16: "Пайвандловчи",
                table17: "Пуллик",
                table18: "сертификат",
                table19: "1111",
                table20: ".jpg",
                table21: "01,01,2020",
                table22: "Фуқароларни касбга ўқитиш",
                table23: "Азимова Юлдуз",
                table24: "Азимова Юлдуз",
                table25: "Азимова Юлдуз",
            }
        ];

        
        return (
            <Grow in={this.state.checked}
            style={{ transformOrigin: '0 0 0' }}
            {...(this.state.checked ? { timeout: 1000 } : {})}>
            <Box>
                <NavLink to="/create" style={{ textDecoration: 'none' }}>
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        startIcon={<AddCircleIcon />}
                    >
                        Create
                 </Button>
                </NavLink>
                <Box mt={2}>
                    <MaterialTable
                        title="Тадбиркорларга кўрсатиладиган хизматлар"
                        style={{padding: 8}}
                        columns={columns}
                        data={data}
                        options={{
                            search:true
                        }}
                        components={{
                            Header: props => {
                                return (
                                    <TableHead style={{backgroundColor: '#FAFAFA', textAlign: 'center'}}>
                                        <TableRow >
                                            <TableCell rowSpan={2} style={{borderWidth:1, borderStyle:'solid', borderColor: 'black'}} >№</TableCell>
                                            <TableCell rowSpan={2} style={{borderWidth:1, borderStyle:'solid', borderColor: 'black'}}>Мурожаат этган сана</TableCell>
                                            <TableCell rowSpan={2} style={{borderWidth:1, borderStyle:'solid', borderColor: 'black'}}>Ф.И.Ш</TableCell>
                                            <TableCell rowSpan={2} style={{borderWidth:1, borderStyle:'solid', borderColor: 'black'}}>ФОТО</TableCell>
                                            <TableCell rowSpan={2} style={{borderWidth:1, borderStyle:'solid', borderColor: 'black'}}>Туғилган санаси</TableCell>
                                            <TableCell rowSpan={2} style={{borderWidth:1, borderStyle:'solid', borderColor: 'black'}}>Жинси</TableCell>
                                            <TableCell rowSpan={2} style={{borderWidth:1, borderStyle:'solid', borderColor: 'black'}}>Паспорт серияси ва рақами</TableCell>
                                            <TableCell rowSpan={2} style={{borderWidth:1, borderStyle:'solid', borderColor: 'black'}}>СТИР</TableCell>
                                            <TableCell rowSpan={2} style={{borderWidth:1, borderStyle:'solid', borderColor: 'black'}}>Вилоят</TableCell>
                                            <TableCell rowSpan={2} style={{borderWidth:1, borderStyle:'solid', borderColor: 'black'}}>Шаҳар ёки туман</TableCell>
                                            <TableCell rowSpan={2} style={{borderWidth:1, borderStyle:'solid', borderColor: 'black'}}>Яшаш манзили</TableCell>
                                            <TableCell rowSpan={2} style={{borderWidth:1, borderStyle:'solid', borderColor: 'black'}}>Телефон рақами</TableCell>
                                            <TableCell colSpan={4} align="center" style={{borderWidth:1, borderStyle:'solid', borderColor: 'black'}}>
                                                АБКМ йўлланма
                                            </TableCell>
                                            <TableCell rowSpan={2} style={{borderWidth:1, borderStyle:'solid', borderColor: 'black'}}>Рўйхатдан ўтган сана</TableCell>
                                            <TableCell rowSpan={2} style={{borderWidth:1, borderStyle:'solid', borderColor: 'black'}}>Йўналиши</TableCell>
                                            <TableCell colSpan={5} align="center" style={{borderWidth:1, borderStyle:'solid', borderColor: 'black'}}>
                                                АБКМга тақдим этилган
                                            </TableCell>
                                            <TableCell rowSpan={2} style={{borderWidth:1, borderStyle:'solid', borderColor: 'black'}}>Хизмат натижаси</TableCell>
                                            <TableCell rowSpan={2} style={{borderWidth:1, borderStyle:'solid', borderColor: 'black'}}>Ижрочи</TableCell>

                                        </TableRow>
                                        <TableRow>
                                            <TableCell align="center" style={{borderWidth:1, borderStyle:'solid', borderColor: 'black'}}>Вилоят</TableCell>
                                            <TableCell align="center" style={{borderWidth:1, borderStyle:'solid', borderColor: 'black'}}>Туман</TableCell>
                                            <TableCell align="center" style={{borderWidth:1, borderStyle:'solid', borderColor: 'black'}}>Серия рақами</TableCell>
                                            <TableCell align="center" style={{borderWidth:1, borderStyle:'solid', borderColor: 'black'}}>Санаси</TableCell>
                                            <TableCell align="center" style={{borderWidth:1, borderStyle:'solid', borderColor: 'black'}}>хужжат</TableCell>
                                            <TableCell align="center" style={{borderWidth:1, borderStyle:'solid', borderColor: 'black'}}>Серия рақами</TableCell>
                                            <TableCell align="center" style={{borderWidth:1, borderStyle:'solid', borderColor: 'black'}}>эл.расм</TableCell>
                                            <TableCell align="center" style={{borderWidth:1, borderStyle:'solid', borderColor: 'black'}}>Санаси</TableCell>
                                            <TableCell align="center" style={{borderWidth:1, borderStyle:'solid', borderColor: 'black'}}>тасдиқловчи варақа</TableCell>
                                        </TableRow>
                                    </TableHead>
                                );
                            },
                            Row: ({ data }) => {
                                return (
                                    <TableRow>
                                        <TableCell style={{borderWidth:1, borderStyle:'solid', borderColor: '#ccc'}}>{data.table1}</TableCell>
                                        <TableCell align="center" style={{borderWidth:1, borderStyle:'solid', borderColor: '#ccc'}}>{data.table2}</TableCell>
                                        <TableCell align="center" style={{borderWidth:1, borderStyle:'solid', borderColor: '#ccc'}}>{data.table3}</TableCell>
                                        <TableCell align="center" style={{borderWidth:1, borderStyle:'solid', borderColor: '#ccc'}}>{data.table4}</TableCell>
                                        <TableCell align="center" style={{borderWidth:1, borderStyle:'solid', borderColor: '#ccc'}}>{data.table5}</TableCell>
                                        <TableCell align="center" style={{borderWidth:1, borderStyle:'solid', borderColor: '#ccc'}}>{data.table6}</TableCell>
                                        <TableCell align="center" style={{borderWidth:1, borderStyle:'solid', borderColor: '#ccc'}}>{data.table7}</TableCell>
                                        <TableCell align="center" style={{borderWidth:1, borderStyle:'solid', borderColor: '#ccc'}}>{data.table8}</TableCell>
                                        <TableCell align="center" style={{borderWidth:1, borderStyle:'solid', borderColor: '#ccc'}}>{data.table9}</TableCell>
                                        <TableCell align="center" style={{borderWidth:1, borderStyle:'solid', borderColor: '#ccc'}}>{data.table10}</TableCell>
                                        <TableCell align="center" style={{borderWidth:1, borderStyle:'solid', borderColor: '#ccc'}}>{data.table11}</TableCell>
                                        <TableCell align="center" style={{borderWidth:1, borderStyle:'solid', borderColor: '#ccc'}}>{data.table12}</TableCell>
                                        <TableCell align="center" style={{borderWidth:1, borderStyle:'solid', borderColor: '#ccc'}}>{data.table13}</TableCell>
                                        <TableCell align="center" style={{borderWidth:1, borderStyle:'solid', borderColor: '#ccc'}}>{data.table14}</TableCell>
                                        <TableCell align="center" style={{borderWidth:1, borderStyle:'solid', borderColor: '#ccc'}}>{data.table15}</TableCell>
                                        <TableCell align="center" style={{borderWidth:1, borderStyle:'solid', borderColor: '#ccc'}}>{data.table16}</TableCell>
                                        <TableCell align="center" style={{borderWidth:1, borderStyle:'solid', borderColor: '#ccc'}}>{data.table17}</TableCell>
                                        <TableCell align="center" style={{borderWidth:1, borderStyle:'solid', borderColor: '#ccc'}}>{data.table18}</TableCell>
                                        <TableCell align="center" style={{borderWidth:1, borderStyle:'solid', borderColor: '#ccc'}}>{data.table19}</TableCell>
                                        <TableCell align="center" style={{borderWidth:1, borderStyle:'solid', borderColor: '#ccc'}}>{data.table20}</TableCell>
                                        <TableCell align="center" style={{borderWidth:1, borderStyle:'solid', borderColor: '#ccc'}}>{data.table21}</TableCell>
                                        <TableCell align="center" style={{borderWidth:1, borderStyle:'solid', borderColor: '#ccc'}}>{data.table22}</TableCell>
                                        <TableCell align="center" style={{borderWidth:1, borderStyle:'solid', borderColor: '#ccc'}}>{data.table23}</TableCell>
                                        <TableCell align="center" style={{borderWidth:1, borderStyle:'solid', borderColor: '#ccc'}}>{data.table24}</TableCell>
                                        <TableCell align="center" style={{borderWidth:1, borderStyle:'solid', borderColor: '#ccc'}}>{data.table25}</TableCell>
                                    </TableRow>
                                );
                            }
                        }}
                    />
                </Box>
            </Box>
            </Grow>
        )
    }
}

export default withStyles(useStyles)(SideMenu5);