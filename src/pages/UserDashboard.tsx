import { DashboardLayout } from "@/components/DashboardLayout";
import { EnhancedButton } from "@/components/ui/enhanced-button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  FolderOpen, 
  Plus, 
  TrendingUp, 
  Clock, 
  CheckCircle,
  AlertCircle,
  DollarSign
} from "lucide-react";

const UserDashboard = () => {
  const projects = [
    { id: 1, name: "Residential Complex A", status: "In Progress", progress: 65, budget: "$2.5M", company: "BuildTech Inc." },
    { id: 2, name: "Commercial Tower B", status: "Planning", progress: 20, budget: "$5.8M", company: "Construct Pro" },
    { id: 3, name: "Infrastructure Project C", status: "Completed", progress: 100, budget: "$3.2M", company: "Metro Build" },
  ];

  const stats = [
    { label: "Active Projects", value: "2", icon: FolderOpen, color: "text-info" },
    { label: "Completed", value: "1", icon: CheckCircle, color: "text-success" },
    { label: "Total Budget", value: "$11.5M", icon: DollarSign, color: "text-primary-accent" },
    { label: "Pending Reviews", value: "3", icon: AlertCircle, color: "text-warning" },
  ];

  return (
    <DashboardLayout title="User Dashboard">
      <div className="space-y-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="hover:shadow-accent transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                      <p className="text-3xl font-bold mt-1">{stat.value}</p>
                    </div>
                    <Icon className={`h-12 w-12 ${stat.color}`} />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-3">
          <EnhancedButton icon={<Plus className="h-4 w-4" />}>
            Create New Project
          </EnhancedButton>
          <EnhancedButton variant="outline" icon={<FolderOpen className="h-4 w-4" />}>
            Browse Companies
          </EnhancedButton>
          <EnhancedButton variant="secondary" icon={<TrendingUp className="h-4 w-4" />}>
            View Reports
          </EnhancedButton>
        </div>

        {/* Projects List */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FolderOpen className="h-5 w-5 text-primary-accent" />
              My Projects
            </CardTitle>
            <CardDescription>Manage and track your construction projects</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {projects.map((project) => (
                <div 
                  key={project.id} 
                  className="p-4 rounded-lg border border-border hover:border-primary-accent transition-all duration-300 hover:shadow-primary"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2">{project.name}</h3>
                      <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Building2 className="h-4 w-4" />
                          {project.company}
                        </span>
                        <span className="flex items-center gap-1">
                          <DollarSign className="h-4 w-4" />
                          {project.budget}
                        </span>
                      </div>
                      <div className="mt-3">
                        <div className="flex items-center justify-between text-sm mb-1">
                          <span className="text-muted-foreground">Progress</span>
                          <span className="font-medium">{project.progress}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div 
                            className="bg-primary-accent rounded-full h-2 transition-all duration-500" 
                            style={{ width: `${project.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start lg:items-end gap-3">
                      <Badge 
                        variant={project.status === "Completed" ? "default" : "secondary"}
                        className={
                          project.status === "Completed" 
                            ? "bg-success text-white" 
                            : project.status === "In Progress" 
                            ? "bg-info text-white"
                            : "bg-warning text-white"
                        }
                      >
                        {project.status}
                      </Badge>
                      <div className="flex gap-2">
                        <EnhancedButton size="sm" variant="outline">
                          View Details
                        </EnhancedButton>
                        <EnhancedButton size="sm" icon={<Clock className="h-3 w-3" />}>
                          Track
                        </EnhancedButton>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default UserDashboard;

const Building2 = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
    <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
    <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
    <path d="M10 6h4" />
    <path d="M10 10h4" />
    <path d="M10 14h4" />
    <path d="M10 18h4" />
  </svg>
);
