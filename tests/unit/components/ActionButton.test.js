import { render, screen } from '@testing-library/vue'

import ActionButton from '@/components/ActionButton.vue'

describe('ActionButton', () => {
  it('renders text', () => {
    // checking the user/business value mostly, not functionality
    render(ActionButton, {
      props: {
        text: 'Click me',
        type: 'primary'
      }
    })

    // const button = screen.getByRole('button');
    const button = screen.getByRole('button', {
      // case insensetive text "Click me"
      name: /click me/i
    })

    expect(button).toBeInTheDocument()
  })

  it('appliest one of several styles to button', () => {
    render(ActionButton, {
      props: {
        text: 'Click me',
        type: 'primary'
      }
    })

    const button = screen.getByRole('button', {
      // case insensetive text "Click me"
      name: /click me/i
    })

    expect(button).toHaveClass('primary')
  })
})
