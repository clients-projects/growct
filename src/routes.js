import Dashboard from './views/Dashboard'
import UserSettings from './views/UserSettings'
import InvestmentHistory from './views/InvestmentHistory'
import Withdraw from './views/Withdraw'
import WithdrawalHistory from './views/WithdrawalHistory'
import Deposit from './views/Deposit'
import Referrals from './views/Referrals'

//siteOwner routes

import siteOwnerDashboard from './views/siteOwner/Dashboard'
import AccountSettings from './views/siteOwner/AccountSettings'
import DepositHistory from './views/siteOwner/DepositHistory'
import siteOwnerWithdrawalHistory from './views/siteOwner/WithdrawalHistory'
import InvestmentRequest from './views/siteOwner/InvestmentRequest'
import siteOwnerWithdrawalRequest from './views/siteOwner/WithdrawalRequests'
import Members from './views/siteOwner/Members'

export const dashboardRoutes = [
    {
        path: '/dashboard',
        name: 'Dashboard',
        icon: 'pe-7s-graph',
        component: Dashboard,
        layout: '/admin',
    },

    {
        path: '/settings',
        name: 'Security Settings',
        icon: 'pe-7s-user',
        component: UserSettings,
        layout: '/admin',
    },
    {
        path: '/deposit',
        name: 'Invest Now',
        icon: 'pe-7s-note2',
        component: Deposit,
        layout: '/admin',
    },
    {
        path: '/withdraw',
        name: 'Withdraw',
        icon: 'pe-7s-news-paper',
        component: Withdraw,
        layout: '/admin',
    },

    {
        path: '/investmentHistory',
        name: 'Investment History',
        icon: 'pe-7s-refresh',
        component: InvestmentHistory,
        layout: '/admin',
    },
    {
        path: '/referrals',
        name: 'Referrals',
        icon: 'pe-7s-refresh',
        component: Referrals,
        layout: '/admin',
    },
    {
        path: '/WithdrawalHistory',
        name: 'Withdrawal History',
        icon: 'pe-7s-refresh',
        component: WithdrawalHistory,
        layout: '/admin',
    },
]

export const siteOwnerDashboardRoutes = [
    {
        path: '/dashboard',
        name: 'Dashboard',
        icon: 'pe-7s-graph',
        component: siteOwnerDashboard,
        layout: '/admin',
    },

    {
        path: '/settings',
        name: 'Account Settings',
        icon: 'pe-7s-user',
        component: AccountSettings,
        layout: '/admin',
    },
    {
        path: '/members',
        name: 'Members',
        icon: 'pe-7s-news-paper',
        component: Members,
        layout: '/admin',
    },
    {
        path: '/withdrawalRequest',
        name: 'Withdrawal Request',
        icon: 'pe-7s-refresh',
        component: siteOwnerWithdrawalRequest,
        layout: '/admin',
    },
    {
        path: '/InvestmentRequest',
        name: 'Investment Request',
        icon: 'pe-7s-refresh',
        component: InvestmentRequest,
        layout: '/admin',
    },
 
    {
        path: '/withdrawalHistory',
        name: 'Withdrawal History',
        icon: 'pe-7s-note2',
        component: siteOwnerWithdrawalHistory,
        layout: '/admin',
    },
 
    {
        path: '/depositHistory',
        name: 'Deposit History',
        icon: 'pe-7s-refresh',
        component: DepositHistory,
        layout: '/admin',
    }
]
