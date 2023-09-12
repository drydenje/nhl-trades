export default {
  request: jest.fn(() =>
    Promise.resolve({ data: { name: "test mock axios" } })
  ),
};
