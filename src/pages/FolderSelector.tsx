import React, {useCallback, useEffect, useState} from 'react'
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DataGrid from '../components/DataGrid'
import prettyBytes from 'pretty-bytes';

declare module 'react' {
    interface InputHTMLAttributes<T> extends HTMLAttributes<T> {
      directory?: string;
      webkitdirectory?: string;
    }
  }

const FolderSelector: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [folderData, setFolderData] = useState([])
  const [totalFiles, setTotalFiles] = useState(0)
  const [rowsData, setRowsData] = useState([])
  const [fileTypesData, setFileTypesData] = useState([])
  let rowData: any = [] 
  let typeArr: any = []
  let typeCountsArr: any = []
  let typesData: any = []

  const getFileTypes = useCallback((files: any) => {
    for (let j=0; j<files.length; j++) {
      typeArr.push(files[j].type)
    }
    typeCountsArr = typeArr.reduce((count: any, item: number) => (count[item] = count[item] + 1 || 1, count), {});
  }, [])

  const getTypesData = useCallback(() => {
    let typesDataArr = []
    let entries = Object.entries(typeCountsArr)
    for (let i=0; i<entries.length; i++) {
        let rowsObj = {
            id: i+1,
            t1: entries[i][0],
            t2: entries[i][1]
        }
        typesDataArr.push(rowsObj)    
    }
    typesData = typesDataArr
    
  }, [])

  const getRowsData = useCallback((files: any) => {
    let rowsDataArr = []
    for (let i=0; i<files.length; i++) {
        let rowsObj = {
            id: i+1,
            c1: files[i].name,
            c2: files[i].type,
            c3: prettyBytes(files[i].size),
            c4: files[i].lastModifiedDate,
            c5: files[i].webkitRelativePath
        }
        rowsDataArr.push(rowsObj)    
    }
    rowData = rowsDataArr
  }, [])

  const inputHandler = useCallback((e: any) => {
    typeArr = []
    typeCountsArr = []
    typesData = []
    setFileTypesData([])
    setFolderData(e.target.files)
    setIsLoaded(true)
    getRowsData(e.target.files)
    getFileTypes(e.target.files)
    setRowsData(rowData)
    getTypesData()
    setFileTypesData(typesData)
  }, [])
  
  useEffect(() => {
    const fDataLength = folderData.length
    setTotalFiles(fDataLength)
  }, [folderData])

    return (
      <>
        <div className="container-align">
          <Stack direction="row" alignItems="center" spacing={2}>
            <Button variant="contained" component="label">
              Select Folder
              <input hidden type="file" id="folderSelector" placeholder="Select Folder" webkitdirectory="true" multiple onChange={(e: any) => inputHandler(e)} />
            </Button>
            <IconButton color="primary" aria-label="upload picture" component="label">
              <input hidden accept="image/*" type="file" />
            </IconButton>
          </Stack>
          <p>Only "folder(s)" can be selected. The folder(s) may contain sub-folders.</p>
        </div>
          {isLoaded && 
            <div className="data-container">
              <span>Total number of files in selected folder(s): {totalFiles}</span>
              <h4>Folder/File Metadata</h4>
              <DataGrid rowsData={rowsData} typesData={null} />
              <h4>Total File Types</h4>
              <DataGrid rowsData={null} typesData={fileTypesData} />
            </div>
          }
      </>
  )
}

export default FolderSelector

