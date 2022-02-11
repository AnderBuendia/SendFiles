import { describe, expect, it } from 'vitest';
import { render, screen } from '@Lib/utils/test.utils';
import Home from '@Components/Home';

describe('Home tests', () => {
  it('Should render Home component', () => {
    render(<Home />);
  });
  it.skip('Should show Drag and drop files text', () => {
    render(<Home />);
    expect(screen.getByText(/Drag and drop files/i)).toBeInTheDocument();
  });
});
