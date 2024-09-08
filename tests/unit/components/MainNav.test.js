import { render, screen } from '@testing-library/vue'
import userEvent from '@testing-library/user-event'

import MainNav from '@/components/MainNav.vue'

describe('MainNav', () => {
  it('displays company name', () => {
    render(MainNav, {
      global: {
        stubs: {
          // collection of the thing we want to replace
          FontAwesomeIcon: true
        }
      }
    })
    screen.getByText('Bobo Careers')
    const companyName = screen.getByText('Bobo Careers')
    expect(companyName).toBeInTheDocument()
  })

  it('displays menu items for navigation', () => {
    render(MainNav, {
      global: {
        stubs: {
          // collection of the thing we want to replace
          FontAwesomeIcon: true
        }
      }
    })
    // role, is good way to check
    // we can find the role in the list which was printed to test console
    // or in browser roles
    const navigationMenuItems = screen.getAllByRole('listitem')
    const navigationMenuTexts = navigationMenuItems.map((item) => item.textContent)
    expect(navigationMenuTexts).toEqual([
      'Teams',
      'Locations',
      'Life at Bobo Corp',
      'How we hire',
      'Students',
      'Jobs'
    ])
  })

  describe('when the use is logs in', () => {
    it('displays user profile image', async () => {
      render(MainNav, {
        global: {
          stubs: {
            // collection of the thing we want to replace
            FontAwesomeIcon: true
          }
        }
      })

      // screen.debug() // display in console
      // screen.getByRole("img")
      let profileImage = screen.queryByRole('img', {
        name: /user profile image/i // i - case insensetive
      })

      expect(profileImage).not.toBeInTheDocument()

      const loginButton = screen.getByRole('button', {
        name: /Sign In/i
      })

      await userEvent.click(loginButton)

      profileImage = screen.queryByRole('img', {
        name: /user profile image/i
      })

      expect(profileImage).toBeInTheDocument()
    })
  })
})
