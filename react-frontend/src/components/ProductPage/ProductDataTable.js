
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState } from 'react';
import _ from 'lodash';
import { Button } from 'primereact/button';
import { InputSwitch } from 'primereact/inputswitch';
import { Badge } from 'primereact/badge';
import { Calendar } from 'primereact/calendar';


const ProductDataTable = ({ items, onEditRow, onRowDelete, onRowClick }) => {
    
    const pTemplate0 = (rowData, { rowIndex }) => <p >{rowData.Productname}</p>
    const switchTemplate1 = (rowData, { rowIndex }) => <InputSwitch checked={rowData.BooleanProduct}  />
    const badgeTemplate2 = (rowData, { rowIndex }) => <Badge value={rowData.ProductBadge}  ></Badge>
    const calendarTemplate3 = (rowData, { rowIndex }) => <Calendar className="w-20rem" dateFormat="dd/mm/yy" placeholder={"dd/mm/yy"} value={new Date(rowData.Created)} showTime ></Calendar>

    const editTemplate = (rowData, { rowIndex }) => <Button onClick={() => onEditRow(rowData, rowIndex)} icon={`pi ${rowData.isEdit ? "pi-check" : "pi-pencil"}`} className={`p-button-rounded p-button-text ${rowData.isEdit ? "p-button-success" : "p-button-warning"}`} />;
    const deleteTemplate = (rowData, { rowIndex }) => <Button onClick={() => onRowDelete(rowIndex)} icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" />;
    
    return (
        <DataTable value={items} onRowClick={onRowClick} scrollable rowHover paginator rows={10} rowClassName="cursor-pointer">
            <Column field="Productname" header="Product Name" body={pTemplate0} sortable style={{ minWidth: "8rem" }} />
            <Column field="BooleanProduct" header="BooleanProduct" body={switchTemplate1} style={{ minWidth: "8rem" }} />
            <Column field="ProductBadge" header="ProductBadge" body={badgeTemplate2} style={{ minWidth: "8rem" }} />
            <Column field="Created" header="Product Launch" body={calendarTemplate3} style={{ minWidth: "8rem" }} />

            <Column header="Edit" body={editTemplate} />
            <Column header="Delete" body={deleteTemplate} />
        </DataTable>
    );
};

export default ProductDataTable;