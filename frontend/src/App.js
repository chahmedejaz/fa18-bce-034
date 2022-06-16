import Home from './Pages/Home';
import Master_Layout from './Pages/Master_Layout';
import React, { Component } from 'react';
import Services from './Pages/Services';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Invalid from './Pages/Invalid';
import Sales from './Pages/Sales';
import Business_Insights from './Pages/Business_Insights';
import AddService from './Pages/AddService';
import AddNewSale from './Pages/AddNewSale';
import {addNewService, deleteServiceRecord, getServiceRecords, updateServiceRecord } from './Service/servicesAPI.js'
import { getSalesRecord, addNewSale, deleteSaleRecord} from './Service/salesAPI';

class App extends Component {

  state = {
    services: [],
    sales: [],

    initialService: {}
  }

  async componentDidMount() {
    const clone = { ...this.state };
    clone.services = await getServiceRecords();
    clone.sales = await getSalesRecord();

    this.setState(clone);
  }


  handleDelete = async (id, tableName) => {
    let clone = { ...this.state };
    switch (tableName) {
      case 'services':
        clone.services = clone.services.filter((detail) => (detail.id !== id));
        await deleteServiceRecord(id);
        break;
      case 'sales':
        clone.sales = clone.sales.filter((detail) => (detail.id !== id));
        await deleteSaleRecord(id);
        break;

      default:
        break;
    }
    this.setState(clone);
  }

  handleAdd = async (record, tableName) => {
    let clone = { ...this.state };
    let id = 1;
    switch (tableName) {
      case 'services':
        id = getNextID(this.state.services);
        record = { id, ...record };
        
        clone.services.push(record);
        await addNewService(record);
        break;


      case 'sales':
        id = getNextID(this.state.sales);
        record = { id, ...record };

        clone.sales.push(record);
        await addNewSale(record);
        break;

      default:
        break;
    }

    this.setState(clone);
  }

  initializeUpdateService = (id)=>
  {
    const service = this.state.services.filter((service)=>service.id == id);
    let clone = {...this.state};
    clone.initialService = service;
    console.log(clone.initialService);
    this.setState(clone);

  }

  handleUpdate = async (updatedRecord)=>{
    updatedRecord.id = this.state.initialService[0].id;
    await updateServiceRecord(updatedRecord);
  }

  render() {
    
    return (
      <Router>

        <Routes>
          <Route path='/' element={<Master_Layout myComponent={Home} />} />
          <Route path='/services' element={<Master_Layout myComponent={Services} data={this.state.services} deleteMethod={this.handleDelete} initializeUpdateService = {this.initializeUpdateService}/>} />
          <Route path='/sales' element={<Master_Layout myComponent={Sales} data={this.state.sales} deleteMethod={this.handleDelete} />} />
          {/* <Route path='/business-insights' element={<Master_Layout myComponent={Business_Insights} />} /> */}
          <Route path='/services/add-new' element={<Master_Layout myComponent={AddService} data={this.state.services} addMethod={this.handleAdd} initialService = {{name: '', price:''}} title='Add'/>} />
          <Route path='/services/update' element={<Master_Layout myComponent={AddService} data={this.state.services} addMethod={this.handleUpdate} initialService = {this.state.initialService[0]} title='Update'/>} />
          <Route path='/sales/add-new' element={<Master_Layout myComponent={AddNewSale} salesRecord={this.state.sales} data={this.state.services} addMethod={this.handleAdd} />} />

          <Route path='*' element={<Invalid />} />
        </Routes>

      </Router>
    );
  }
}


function getNextID(tempRecords) {
  let id = 0;
  if (tempRecords.length >= 1) {
    id = tempRecords[tempRecords.length - 1].id;
  }
  return (id+1);
}

export default App;