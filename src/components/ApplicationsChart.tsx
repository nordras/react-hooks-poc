import { ApplicationMetric } from '@/types/dashboard';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface ApplicationsChartProps {
  data: ApplicationMetric[];
}

export default function ApplicationsChart({ data }: ApplicationsChartProps) {
  const maxApplications = Math.max(...data.map(d => d.applications));
  const maxDeployments = Math.max(...data.map(d => d.deployments));

  return (
    <Card>
      <CardHeader>
        <CardTitle>Aplicações & Deployments</CardTitle>
        <CardDescription>
          Quantidade de aplicações criadas e deployments realizados por mês
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Legenda */}
          <div className="flex gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded" />
              <span>Aplicações</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded" />
              <span>Deployments</span>
            </div>
          </div>

          {/* Gráfico */}
          <div className="space-y-4">
            {data.map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <span className="font-medium">{item.month}</span>
                  <div className="flex gap-4 text-xs text-muted-foreground">
                    <span>{item.applications} apps</span>
                    <span>{item.deployments} deploys</span>
                  </div>
                </div>
                <div className="space-y-1">
                  {/* Barra de Aplicações */}
                  <div className="flex items-center gap-2">
                    <div className="w-16 text-xs text-right">Apps:</div>
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                        style={{
                          width: `${(item.applications / maxApplications) * 100}%`,
                        }}
                      />
                    </div>
                  </div>
                  {/* Barra de Deployments */}
                  <div className="flex items-center gap-2">
                    <div className="w-16 text-xs text-right">Deploy:</div>
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-green-500 h-2 rounded-full transition-all duration-300"
                        style={{
                          width: `${(item.deployments / maxDeployments) * 100}%`,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Estatísticas resumidas */}
          <div className="grid grid-cols-2 gap-4 pt-4 border-t">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">
                {data.reduce((sum, item) => sum + item.applications, 0)}
              </div>
              <div className="text-xs text-muted-foreground">Total de Apps</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">
                {data.reduce((sum, item) => sum + item.deployments, 0)}
              </div>
              <div className="text-xs text-muted-foreground">Total de Deploys</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}