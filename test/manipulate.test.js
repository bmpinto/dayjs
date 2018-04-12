import moment from 'moment'
import dayjs from '../src'

test('StartOf Year', () => {
  expect(dayjs().startOf('year').unix()).toBe(moment().startOf('year').unix())
})

test('StartOf Month', () => {
  expect(dayjs().startOf('month').unix()).toBe(moment().startOf('month').unix())
})

test('StartOf Other', () => {
  expect(dayjs().startOf('otherString').unix()).toBe(moment().startOf('otherString').unix())
})

test('Add Time days', () => {
  expect(dayjs().add(1, 's').unix()).toBe(moment().add(1, 's').unix())
  expect(dayjs().add(1, 'seconds').unix()).toBe(moment().add(1, 'seconds').unix())
  expect(dayjs().add(1, 'm').unix()).toBe(moment().add(1, 'm').unix())
  expect(dayjs().add(1, 'minutes').unix()).toBe(moment().add(1, 'minutes').unix())
  expect(dayjs().add(1, 'h').unix()).toBe(moment().add(1, 'h').unix())
  expect(dayjs().add(1, 'hours').unix()).toBe(moment().add(1, 'hours').unix())
  expect(dayjs().add(1, 'w').unix()).toBe(moment().add(1, 'w').unix())
  expect(dayjs().add(1, 'weeks').unix()).toBe(moment().add(1, 'weeks').unix())
  expect(dayjs().add(1, 'd').unix()).toBe(moment().add(1, 'd').unix())
  expect(dayjs().add(1, 'days').unix()).toBe(moment().add(1, 'days').unix())
})

test('Subtract Time days', () => {
  expect(dayjs().subtract(1, 'days').unix()).toBe(moment().subtract(1, 'days').unix())
})