import { describe, expect, it } from 'vitest';
import { render, screen } from '@Lib/utils/test.utils';
import { link } from '@Tests/mockData';
import Download from '@Pages/download';

const params = {
  id: 'filetest',
};

describe('Home Component tests', () => {
  it('Should render Loading component previous to load data file', () => {
    const providerProps = {
      loading: true,
      setLoading: () => {},
    };

    render(<Download params={params} />, { providerProps });
    expect(screen.getByText(/Checking files.../i)).toBeInTheDocument();
  });

  it('Should render Download component with file loaded', () => {
    const providerProps = {
      loading: false,
      setLoading: () => {},
      link,
    };

    render(<Download params={params} />, { providerProps });
    expect(screen.getByText(/Download your files/i)).toBeInTheDocument();
  });
});
