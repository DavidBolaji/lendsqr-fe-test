import { render, screen, waitFor } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest'; // Import mock from vitest
import RootLayout from './layouts/root-layout';
import LoginPage from './pages/login-page/login-page';
import DashboardLayout from './layouts/dashboard/dashboard-layout';
import HomePage from './pages/dashboard/home-page/home-page';
import SingleUserPage from './pages/dashboard/[userId]';
import NotFoundPage from './pages/not-found/not-found-page';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'; // Import useQuery for mocking
import { LendSqrProvider } from './context/context-provider';
import { mockUser } from './components/table/mock-data';


// Mock useQuery hook for fetching users

vi.mock('@tanstack/react-query', async (importActual) => {
  const actual = await importActual<typeof import('@tanstack/react-query')>();
  return {
    ...actual,
    useQuery: vi.fn().mockImplementation(() => ({
      data: mockUser,
      isLoading: false,
      isError: false,
    })),
  };
});
// Mock Context for getting state and setting localstorage to users

vi.mock('./context/context-provider', async (importActual) => {
  const actual = await importActual<typeof LendSqrProvider>();
  return {
    ...actual,
    useLendsqrContext: vi.fn().mockImplementation(() => ({
      getLocalUsers: vi.fn(() => mockUser),
      setUsers: vi.fn(),
    })),
  };
});

const renderWithRouter = (initialRoute: string) => {
  const queryClient = new QueryClient(); // Create a new QueryClient instance for each test

  const router = createMemoryRouter(
    [
      {
        path: '/',
        element: <RootLayout />,
        children: [
          {
            index: true,
            element: <LoginPage />,
          },
        ],
      },
      {
        path: '/dashboard',
        element: <DashboardLayout />,
        children: [
          {
            index: true,
            element: <HomePage />,
          },
          {
            path: ':userId',
            element: <SingleUserPage />,
          },
        ],
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
    { initialEntries: [initialRoute] },
  );

  return render(
    <QueryClientProvider client={queryClient}>
      <LendSqrProvider>
        <RouterProvider router={router} />
      </LendSqrProvider>
    </QueryClientProvider>,
  );
};

describe('App', () => {
  it('renders the root layout and login page on initial load', async () => {
    renderWithRouter('/');
    const headingElement = screen.getByRole('heading', { level: 1 });
    expect(headingElement).toHaveTextContent('Welcome!');
  });

  it('renders the dashboard layout and defaults to the users page /dashboard', async () => {
    renderWithRouter('/dashboard');

    await waitFor(() => {
      const user1Element = screen.getByRole('heading', {
        level: 2,
      });

      expect(user1Element).toHaveTextContent('Users');
    });
  });

  it('renders 404 page on invalid route', () => {
    renderWithRouter('/invalid-route');
    expect(screen.getByText('404 Page Not Found')).toBeInTheDocument();
  });

  it('renders the single user page on /dashboard/:userId', async () => {
    renderWithRouter('/dashboard/667a1faf8ba7cde501747333');
    await waitFor(() => {
      const user1Element = screen.getByText('User Details');

      expect(user1Element).toBeTruthy();
    });
  });
});
