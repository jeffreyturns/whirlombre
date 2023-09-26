export default defineEventHandler(event => {
    if (event.node.req.url === '/docs') {
        event.node.res.writeHead(301, { Location: '/docs/get-started' })
        event.node.res.end()
    }
})
