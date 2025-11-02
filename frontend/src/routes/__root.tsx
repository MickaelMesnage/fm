import { createRootRoute, Link, Outlet } from '@tanstack/react-router';

export const Route = createRootRoute({
  component: () => (
    <>
      <div style={{ padding: '20px', borderBottom: '1px solid #ccc' }}>
        <nav>
          <Link to="/" style={{ marginRight: '20px' }}>
            Teams
          </Link>
          <Link to="/create">Create Team</Link>
        </nav>
      </div>
      <div style={{ padding: '20px' }}>
        <Outlet />
      </div>
    </>
  ),
});

