import { Team } from '@/types/dashboard';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

interface TeamsListProps {
  teams: Team[];
}

export default function TeamsList({ teams }: TeamsListProps) {
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const getRoleBadgeVariant = (role: string) => {
    switch (role.toLowerCase()) {
      case 'tech lead':
        return 'default';
      case 'senior developer':
        return 'secondary';
      case 'devops engineer':
      case 'cloud architect':
      case 'sre':
        return 'outline';
      default:
        return 'secondary';
    }
  };

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {teams.map((team) => (
        <Card key={team.id} className="h-fit">
          <CardHeader>
            <div className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${team.color}`} />
              <CardTitle className="text-lg">{team.name}</CardTitle>
            </div>
            <CardDescription>{team.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <h4 className="text-sm font-medium text-muted-foreground">
                Membros ({team.members.length})
              </h4>
              <div className="space-y-3">
                {team.members.map((member) => (
                  <div key={member.id} className="flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="text-xs">
                        {getInitials(member.name)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium leading-none">
                        {member.name}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {member.email}
                      </p>
                    </div>
                    <Badge variant={getRoleBadgeVariant(member.role)} className="text-xs">
                      {member.role}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}