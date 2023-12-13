"use client"
import React, { useState, useEffect, useContext } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { MyContext } from '@/context/my-context';

import "primereact/resources/themes/lara-light-cyan/theme.css";



export default function Allexpenses() {
  
  const { items } = useContext(MyContext);
  

  return (
    <div className="card pt-20 pl-10 bg-slate-600 h-screen container " >
      <DataTable value={items}  className='w-full '  >
        <Column field="id" header="ID" sortable style={{ width: '25%' }} ></Column>
        <Column field="itemName" header="Gider" sortable style={{ width: '25%' }} ></Column>
        <Column field="itemPrice"header="Fiyat" sortable style={{ width: '25%' }}></Column>
        <Column field="itemDate" header="Tarih" sortable style={{ width: '25%' }}></Column>
      </DataTable> 
    </div>
  );
}
