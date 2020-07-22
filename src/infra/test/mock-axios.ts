import axios from 'axios'
import faker from 'faker'

export type JestMockType = jest.Mocked<typeof axios>

export const mockAxios = (): JestMockType => {
  const mockedAxios = axios as JestMockType
  mockedAxios.post.mockResolvedValue({
    data: faker.random.objectElement(),
    status: faker.random.number
  })
  return mockedAxios
}
