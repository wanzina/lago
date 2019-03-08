let baseUrl = ''

process.env.NODE_ENV === 'development' ? baseUrl = '/fire-doge' : baseUrl = 'http://localhost:5000'

export default baseUrl