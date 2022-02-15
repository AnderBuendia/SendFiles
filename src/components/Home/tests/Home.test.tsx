import { describe, expect, it } from 'vitest';
import { render, screen } from '@Lib/utils/test.utils';
import { files, link } from '@Tests/mockData';
import Home from '@Components/Home';
import Dropzone from '@Components/Dropzone';

describe('Home Component tests', () => {
  it('Should render Home component', () => {
    render(<Home />);
  });

  it('Should show Share your files easily and privately text', () => {
    render(<Home />);
    expect(
      screen.getByText(/Share your files easily and privately/i)
    ).toBeInTheDocument();
  });
});

describe('Dropzone Component tests', () => {
  it('Should show Drag and Drop files text', () => {
    render(<Dropzone />);

    expect(screen.getByText(/Drag and Drop files/i)).toBeInTheDocument();
  });

  it('Should show the name of a upload file', () => {
    const providerProps = {
      uploadedFiles: [files],
    };

    render(<Dropzone />, { providerProps });

    expect(screen.getByText(/filetest.png/i)).toBeInTheDocument();
  });

  it('Should show the url link to download file', () => {
    const providerProps = {
      link,
    };

    render(<Home />, { providerProps });
    expect(screen.getByText(link.url)).toBeInTheDocument();
  });
});
