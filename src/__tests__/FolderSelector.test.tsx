import { render, fireEvent, screen } from '@testing-library/react'
import FolderSelector from '../pages/FolderSelector'

describe('FolderSelector component outputs the total number of files in selected folder(s). Renders DataGrid components.', () => {
  test('Component correctly renders', () => {
    render(<FolderSelector />)
  });

  test('Display correct number of files when a folder(s) is selected.', () => {
    render(<FolderSelector />)
    const inputElement = screen.getByLabelText('Select Folder')
    fireEvent.change(inputElement, {
      target: {
        files: [
          new File(['testFile1'], 'testFile1.docx'),
          new File(['testFile2'], 'testFile2.txt'),
          new File(['testFile3'], 'testFile3.pptx'),
          new File(['testFile4'], 'testFile4.pdf')
        ],
      },
    });
    const totalFilesText = screen.getByText('Total number of files in selected folder(s): 4')
    expect(totalFilesText).toBeInTheDocument()
  });
});
