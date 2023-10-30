import React from 'react';
import { render, screen } from '@testing-library/react';
import Home, { getStaticProps } from '@/pages/index';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';

// Mocking the TodoList component
jest.mock("@/components/TodoList", () => ({
  __esModule: true,
  default: jest.fn().mockReturnValue(<div data-testid="mockTodoList">TodoList</div>),
}));

describe("Home Page", () => {
  let mockAxios: MockAdapter;

  beforeEach(() => {
    mockAxios = new MockAdapter(axios);
  });

  afterEach(() => {
    mockAxios.reset();
  });

  it("renders properly", async () => {
    const mockData = [
      { id: 1, title: "todo 1", completed: false, userId: 1 },
      { id: 2, title: "todo 2", completed: true, userId: 1 },
    ];
    mockAxios.onGet().reply(200, mockData);

    // Simulate calling getStaticProps
    const staticProps = await getStaticProps({} as any);

    expect(staticProps).toEqual({
      props: {
        data: mockData,
      },
    });

    if ('props' in staticProps) {
      const { props } = staticProps;
      render(<Home data={[]} {...props} />);
    
      // Verify if TodoList component is loaded correctly
      expect(screen.getByTestId("mockTodoList")).toBeInTheDocument();
    }

  });
});
