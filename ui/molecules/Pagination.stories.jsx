import { fn } from 'storybook/test'
import { Pagination } from './Pagination'

const meta = {
  title: 'Molecules/Pagination',
  component: Pagination,
  args: { page: 2, pageCount: 5, onPage: fn() }
}

export default meta

export const Default = {}

export const FirstPage = { args: { page: 1 } }

export const LastPage = { args: { page: 5 } }
