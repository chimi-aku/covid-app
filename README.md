# Covid APP
## Table of contents
### 1. Overview
### 2. How it works


## 1. Overview

This app is created for checking what is actual situation about covid-19.
User can choose country and four periords of time: yesterday, last 7 days, last 30 days and whole time period from the beginning of the covid-19 pandemy.
Informations are divided into confirmed, dead, and recovered cases. They are displayed as numbers and reppresented graphically on a chart with timeline.

All data are fetched from: https://covid19api.com/


Libaries used:

React Select: https://react-select.com/home

React Chart: https://github.com/reactchartjs/react-chartjs-2


Techologies used to created this app:
- HTML
- CSS
- JS
- React

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## 2. How it works

#### App Component

All essential data are in state object.

handleSubmit - if form is fill up properly fetch data and calculate time period.

handleFormChange - updateing state what is in the form.

In return:
HashRouter because Router doesn't work properly on github pages.
Form created by using react-select libary.
Navigation component where are displaing results in Page where is Switch which is responsible for working the SPA.



#### Page Component
Switch with routes. "/" diplays numbers, chart displays chart.
There is defined Error page in case wrong URL.



#### ErrorPage Component
Comunication about wrong URL address.



#### Navigation Component
Two buttons responsible for rediracting to "/" or "/chart". The way how results will be displayed.



#### ChartResult Component
Component resposible for creating linear chart and filling data passed from App Component
Chart is created by using react-chartjs-2 libary



#### Results Component
Displaying all data as numbers
