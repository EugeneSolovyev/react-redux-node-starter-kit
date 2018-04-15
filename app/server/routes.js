const routes = [
    '/',
    `/${process.env.ACCOUNT || 'account'}`,
    `/${process.env.CRM || 'crm'}`,
];

export default routes;
