import Classes from '@/app/turmas/page';
import { render, screen } from '@testing-library/react';

describe('Classes Component', () => {
  test('renders "Turmas Listagem" inside Content component', () => {
    render(<Classes />);

    expect(screen.getByText('Turmas Listagem')).toBeInTheDocument();
  });
});
