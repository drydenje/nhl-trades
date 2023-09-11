export default {
  get: jest.fn(() => Promise.resolve({ data: { name: "test mock axios" } })),
};
