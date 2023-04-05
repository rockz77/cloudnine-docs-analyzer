import React, { useState, useEffect, useCallback } from 'react'
import { DataGrid as Datagrid, GridRowsProp, GridColDef, GridToolbarContainer, GridToolbarExport } from '@mui/x-data-grid';

export interface DataProps {
   rowsData: any;
   typesData: any;
}

const CustomToolbar = () => {
    return (
      <GridToolbarContainer>
        <GridToolbarExport />
      </GridToolbarContainer>
    );
  }

let rows: GridRowsProp
let columns: GridColDef[]

const DataGrid: React.FC<DataProps> = ({ rowsData, typesData }) => {
    if (rowsData !== null) {
        columns = [
            { field: 'c1', headerName: 'File Name', width: 300 },
            { field: 'c2', headerName: 'Type', width: 150 },
            { field: 'c3', headerName: 'Size', width: 100 },
            { field: 'c4', headerName: 'Last Modified', width: 150 },
            { field: 'c5', headerName: 'Folder Path', width: 300 }
          ];
        rows = rowsData
    }
    if (typesData !== null) {
        columns = [
            { field: 't1', headerName: 'File Type', width: 550 },
            { field: 't2', headerName: 'Type Count', width: 150 }
          ];
        rows = typesData
    }
    

    return (
        <div style={{ backgroundColor: '#ffffff', height: 400, width: '100%' }}>
            <Datagrid rows={rows} columns={columns} slots={{
                toolbar: CustomToolbar
            }} />        
        </div>
    )
}

export default DataGrid