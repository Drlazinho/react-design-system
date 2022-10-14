import { Meta, StoryObj } from '@storybook/react'
import { SignIn } from './Signin'
import { within, userEvent, waitFor } from '@storybook/testing-library'
import {rest} from 'msw';
import { expect } from '@storybook/jest'

export default {
  title: 'Pages/Sign in',
  component: SignIn,
  // args = props
  args: {},
  argTypes: {},
  parameters: {
    msw: {
      handlers:[
        rest.post('/sessions', (req,res,ctx) => {
          return res(ctx.json({
            message: 'Login realizado com sucesso!'
          }))
        })
      ],
    }
  }
} as Meta

export const Default: StoryObj = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Pegar um elemento
    userEvent.type(
      canvas.getByPlaceholderText('Digite seu e-mail'),
      'lazaropimentel@developer.com.br'
    )
    userEvent.type(canvas.getByPlaceholderText('*******'), '123456')

    userEvent.click(canvas.getByRole('button'))

    await waitFor(() => {
      return expect(
        canvas.getByText('Login realizado com sucesso!')
      ).toBeInTheDocument()
    })
  }
}
