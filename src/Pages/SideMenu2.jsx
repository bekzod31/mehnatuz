import React from 'react';
import { DataGrid, GridColumn, NumberBox, GridColumnGroup, GridHeaderRow } from 'rc-easyui';
import { NavLink} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { Box, Card } from '@material-ui/core';
import axios from 'axios';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import styles from '../style.module.css';
import Grow from '@material-ui/core/Grow';
import LinearProgress from '@material-ui/core/LinearProgress';
import { Typography } from '@material-ui/core';

class SideMenu2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pagination: {
                total: 0,
                pageSize: 20,
                data: this.data_table,
                pagePosition: "bottom",
                operators: ["nofilter", "equal", "notequal", "less", "greater"]
            },
            data_table: [],
            checked: true,
            isData: false
        }
    }


    componentDidMount() {
        axios.get("http://localhost:9000/api/auth/jismoniys").then(res => {
            this.setState({
                data_table: res.data,
                isData: true
            })
        })
    }









    render() {
        return (
            <Grow in={this.state.checked}
                style={{ transformOrigin: '0 0 0' }}
                {...(this.state.checked ? { timeout: 1000 } : {})}>
                <div >
                    <Box mt={2} mb={1} >
                        <Card className={styles.data_top_card}>
                            <NavLink to="/createlegal" style={{ textDecoration: 'none' }}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    startIcon={<AddCircleOutlineIcon />}
                                >
                                    {localStorage.getItem("language") === "ru" ? "Добавить" : "Қўшиш"}
                                </Button>
                            </NavLink>
                        </Card>
                    </Box>
                    {!this.state.isData ?
                        <Box my={4}>
                            <LinearProgress style={{ backgroundColor: '#FAFAFA' }} />
                            <Typography align="center" variant="h6" style={{ marginTop: 10, color: "grey" }}>
                                {localStorage.getItem("language") === "ru" ? "загружается..." : "йукланмоқда..."}
                            </Typography>
                        </Box> :
                        <Card elevation={8} style={{ padding: '8px 4px' }}>
                            <DataGrid
                                filterable
                                data={this.state.data_table}
                                style={{ height: '81vh' }}
                                pagination
                                columnResizing
                                {...this.state}
                            >
                                <GridColumnGroup>
                                    <GridHeaderRow>
                                        <GridColumn rowspan={2} field="id" title="№" width={70}
                                            filterOperators={this.state.operators}
                                            filter={() => <NumberBox></NumberBox>}
                                        >№</GridColumn>
                                        <GridColumn rowspan={2} width={200} field="appliedDate" title="Мурожаат этилган сана" ></GridColumn>
                                        <GridColumn rowspan={2} width={300} field="businesName" title="Корхона номи" ></GridColumn>
                                        <GridColumn rowspan={2} width={200} field="stir" title="СТИР" ></GridColumn>
                                        <GridColumn rowspan={2} width={300} field="fio" title="Ф.И.Ш"  ></GridColumn>
                                        <GridColumn rowspan={2} width={200} field="photo" title="ФОТО" ></GridColumn>
                                        <GridColumn rowspan={2} width={200} field="birthDate" title="Туғилган санаси" ></GridColumn>
                                        <GridColumn rowspan={2} width={100} field="sex" title="Жинси" ></GridColumn>
                                        <GridColumn rowspan={2} width={200} field="branch" title="Филиал" ></GridColumn>
                                        <GridColumn rowspan={2} width={150} field="region" title="Вилоят" ></GridColumn>
                                        <GridColumn rowspan={2} width={200} field="district" title="Шаҳар ёки туман" ></GridColumn>
                                        <GridColumn rowspan={2} width={200} field="address" title="Яшаш манзили" ></GridColumn>
                                        <GridColumn rowspan={2} width={200} field="phone" title="Телефон рақами" ></GridColumn>
                                        <GridColumn rowspan={2} width={200} field="regDate" title="Рўйхатдан ўтилган сана" ></GridColumn>
                                        <GridColumn rowspan={2} width={200} field="idNumber" title="ид Номер" ></GridColumn>
                                        <GridColumn rowspan={2} width={100} field="payType" title="Тўлов тури" ></GridColumn>
                                        <GridColumn colspan={3} width={200} field="" title="Тақдим этилган" ></GridColumn>
                                        <GridColumn rowspan={2} width={300} field="serviceResult" title="Хизмат натижаси" align="center" ></GridColumn>
                                        <GridColumn rowspan={2} width={200} field="perfomer" title="Ижрочи" ></GridColumn>
                                    </GridHeaderRow>
                                    <GridHeaderRow>
                                        <GridColumn width={200} field="document" title="Хужжат" ></GridColumn>
                                        <GridColumn width={200} field="seriaAndNumber" title="Серия рақами" ></GridColumn>
                                        <GridColumn width={200} field="date" title="Санаси" ></GridColumn>
                                    </GridHeaderRow>
                                </GridColumnGroup>
                            </DataGrid>
                        </Card>
                    }
                </div>
            </Grow>
        );
    }
}

export default SideMenu2;