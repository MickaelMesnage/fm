import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { SPORTS, type Sport } from '@fm/domain';
import { teamApi } from '../api/teamApi';

export const Route = createFileRoute('/create')({
  component: CreateTeam,
});

function CreateTeam() {
  const [name, setName] = useState('');
  const [sport, setSport] = useState<Sport>(SPORTS.FOOT);
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: teamApi.createTeam,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['teams'] });
      navigate({ to: '/' });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate({ name, sport });
  };

  return (
    <div>
      <h1>Create Team</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label>
            Name:
            <br />
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={{ padding: '5px', width: '200px' }}
            />
          </label>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>
            Sport:
            <br />
            <select
              value={sport}
              onChange={(e) => setSport(e.target.value as Sport)}
              style={{ padding: '5px', width: '210px' }}
            >
              {Object.values(SPORTS).map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </label>
        </div>
        <button type="submit" disabled={mutation.isPending} style={{ padding: '5px 15px' }}>
          {mutation.isPending ? 'Creating...' : 'Create'}
        </button>
        {mutation.isError && (
          <div style={{ color: 'red', marginTop: '10px' }}>
            Error: {mutation.error.message}
          </div>
        )}
      </form>
    </div>
  );
}

