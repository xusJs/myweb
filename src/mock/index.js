import Mock from "mockjs"


Mock.mock(process.env.API_ROOT + '/api/test', (req, res) => {
  return {
    data: ['a', 'b']
  }
})
