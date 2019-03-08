let baseUrl = ''

process.env.NODE_ENV === 'development' ? baseUrl = '/fire-doge' : baseUrl = 'http://www.fire-doge.cn:5000'

export default baseUrl