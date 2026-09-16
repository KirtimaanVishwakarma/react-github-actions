import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  test('renders the greeting', () => {
    render(<App />)

    expect(screen.getByText('Hello, React!')).toBeInTheDocument()
  })

  test('renders the greeting as a level-one heading', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', { level: 1, name: 'Hello, React!' }),
    ).toBeInTheDocument()
  })
})