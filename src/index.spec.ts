import sayHello from './index'

it('says hello', () => {
  expect(sayHello()).toBe('Hello, world')
})
