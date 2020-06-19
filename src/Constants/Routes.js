import React from 'react';
import DashboardIcon from '@material-ui/icons/Dashboard';
import BarChartIcon from '@material-ui/icons/BarChart';
import PeopleIcon from '@material-ui/icons/People';
import SideMenu1 from '../Pages/SideMenu1';
import SideMenu2 from '../Pages/SideMenu2';
import SideMenu3 from '../Pages/SideMenu3';
import SideMenu4 from '../Pages/SideMenu4';
import SideMenu5 from '../Pages/SideMenu5';
import CreateDataPage from '../Pages/CreateDataPage';
import CreateDataToLegal from '../Pages/CreateDataToLegal';
import CreateDataToABKM from '../Pages/CreateDataToABKM';
import CreateDataToBusinessman from '../Pages/CreateDataToBusinessman';

const Routes = [
    {
      path: '/',
      sidebarNameUz: 'Жисмоний шахсларга кўрсатиладиган хизматлар',
      sidebarNameRu: 'Услуги, предоставляемые физическим лицам',
      component: SideMenu1,
      icon: <DashboardIcon  style={{ fontSize: 20, color: "#1E266D" }} />
    },
    {
      path: '/menuone',
      sidebarNameUz: 'Юридик шахсларга кўрсатиладиган хизматлар',
      sidebarNameRu: 'Услуги, предоставляемые юридическим лицам',
      component: SideMenu2,
      icon: <PeopleIcon style={{ fontSize: 20, color: "#1E266D" }} />
    },
    {
      path: '/menuthree',
      sidebarNameUz: 'Тадбиркорларга кўрсатиладиган хизматлар',
      sidebarNameRu: 'Услуги, предоставляемые предпринимателям',
      component: SideMenu3,
      icon: <BarChartIcon style={{ fontSize: 20, color: "#1E266D" }} />
    },
    {
      path: '/menufour',
      sidebarNameUz: 'АБКМга кўрсатиладиган хизматлар',
      sidebarNameRu: 'Услуги, предоставляемые ABKM',
      component: SideMenu4,
      icon: <DashboardIcon  style={{ fontSize: 20, color: "#1E266D" }} />
    },
    {
      path: '/menufive',
      sidebarNameUz: 'Дашборд',
      sidebarNameRu: 'Дашборд',
      component: SideMenu5,
      icon: <DashboardIcon  style={{ fontSize: 20, color: "#1E266D" }} />
    },
    {
      path: '/menusix',
      sidebarNameUz: 'Хисоботлар',
      sidebarNameRu: 'Отчеты',
      component: SideMenu4,
      icon: <DashboardIcon  style={{ fontSize: 20, color: "#1E266D" }} />
    },
    {
      path: '/create',
      sidebarNameUz: 'Қўшиш',
      sidebarNameRu: 'Добавить',
      component: CreateDataPage,
      icon: null
    },
    {
      path: '/createlegal',
      sidebarNameUz: 'ҚўшишЙуридик',
      sidebarNameRu: 'ДобавитьЙуридик',
      component: CreateDataToLegal,
      icon: null
    },
    {
      path: '/createabkm',
      sidebarNameUz: 'ҚўшишАБКМ',
      sidebarNameRu: 'ДобавитьАБКМ',
      component: CreateDataToABKM,
      icon: null
    },
    {
      path: '/createbusinessman',
      sidebarNameUz: 'ҚўшишБизнес',
      sidebarNameRu: 'ДобавитьАБКМПредприниматель',
      component: CreateDataToBusinessman,
      icon: null
    },
  ];


  export default Routes;