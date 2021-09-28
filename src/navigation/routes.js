import React from 'react'
import { HomePage, PageNotFound } from '../pages'

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage />
    },

    {
        path: '', // Không match với path nào ở phía trên (luôn đặt ở cuối cùng)
        exact: false,
        main: () => <PageNotFound />
    },    
]

export default routes