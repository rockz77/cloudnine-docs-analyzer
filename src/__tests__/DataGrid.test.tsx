import Enzyme, { shallow } from 'enzyme';
import DataGrid, { DataProps } from '../components/DataGrid';
import { DataGrid as Datagrid } from '@mui/x-data-grid';
import Adapter from '@cfaester/enzyme-adapter-react-18';

Enzyme.configure({ adapter: new Adapter() });

describe('DataGrid component rendering two different types of file/folder report data within data tables.', () => {
  test('Render rows data table with file/folder metadata. Check row and column data.', () => {
    const mockRowsData: DataProps = {
      rowsData: [
        { id: 1, c1: 'fileName1', c2: 'pdf', c3: 200, c4: '2022-03-31', c5: '/path/to/folder' },
        { id: 2, c1: 'fileName2', c2: 'jpg', c3: 150, c4: '2022-03-29', c5: '/path/to/folder' },
      ],
      typesData: null
    };

    const wrapper = shallow(<DataGrid {...mockRowsData} />);
    const dataRowsTable = wrapper.find(Datagrid);

    expect(dataRowsTable.prop('rows')).toEqual(mockRowsData.rowsData);
    expect(dataRowsTable.prop('columns')).toHaveLength(5);
  });
  test('Render types data table with file types and count. Check row and column data.', () => {
    const mockTypesData: DataProps = {
        rowsData: null,
        typesData: [
            { id: 1, t1: 'docx', t2: 8 },
            { id: 2, t1: 'ppt', t2: 4 }
        ]
    }

    const wrapper = shallow(<DataGrid {...mockTypesData} />)
    const dataTypesTable = wrapper.find(Datagrid)

    expect(dataTypesTable.prop('rows')).toEqual(mockTypesData.typesData)
    expect(dataTypesTable.prop('columns')).toHaveLength(2)
  })
});
