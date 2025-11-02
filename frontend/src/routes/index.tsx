import { createFileRoute } from '@tanstack/react-router';
import { useQuery } from '@tanstack/react-query';
import { teamApi } from '@/api/teamApi';

export const Route = createFileRoute('/')({
  component: TeamList,
});

function TeamList() {
  const { data: teams, isLoading, error } = useQuery({
    queryKey: ['teams'],
    queryFn: teamApi.getTeams,
  });

  if (isLoading) return <div>Loading teams...</div>;
  if (error) return <div>Error loading teams: {error.message}</div>;

  return (
    <div>
      <h1>Teams</h1>
      {teams && teams.length === 0 ? (
        <p>No teams yet. Create one!</p>
      ) : (
        <ul>
          {teams?.map((team) => (
            <li key={team.id}>
              <strong>{team.name}</strong> - {team.sport}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

