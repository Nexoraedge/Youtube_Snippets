

export type User = {
    id: string;
    email: string;
    username: string;
    created_at: string;
  }

export async function getUsers() {
  const res = await fetch('/api/users', {
    method: 'GET',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch users');
  }

  const data = await res.json();
  return data.users;
}


