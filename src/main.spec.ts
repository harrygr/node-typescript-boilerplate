import sayHello from './main'

it('says hello', () => {
  expect(sayHello()).toBe('Hello, world')
})