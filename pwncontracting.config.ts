export function projectURLS() {

    if (process.env.NODE_ENV === 'development') {
      return {
        pythonMongoDBServer :'https://fastapi-mongo-production.up.railway.app/api/get-all-blogs',

      }
    }
    else {
      return {
        pythonMongoDBServer :'https://fastapi-mongo-production.up.railway.app/api/get-all-blogs',
 
      }
    }
}