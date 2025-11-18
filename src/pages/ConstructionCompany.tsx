import { DashboardLayout } from "@/components/DashboardLayout";
import { EnhancedButton } from "@/components/ui/enhanced-button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Building2, 
  Users, 
  HardHat,
  Briefcase,
  Calendar,
  MapPin,
  Star,
  Plus
} from "lucide-react";

const ConstructionCompany = () => {
  const activeProjects = [
    { 
      id: 1, 
      name: "Residential Complex A", 
      location: "Downtown District", 
      workers: 45, 
      progress: 65,
      deadline: "2025-12-30",
      priority: "High"
    },
    { 
      id: 2, 
      name: "Commercial Tower B", 
      location: "Business Park", 
      workers: 32, 
      progress: 20,
      deadline: "2026-03-15",
      priority: "Medium"
    },
    { 
      id: 3, 
      name: "Infrastructure Project C", 
      location: "Metro Area", 
      workers: 28, 
      progress: 85,
      deadline: "2025-11-20",
      priority: "High"
    },
  ];

  const stats = [
    { label: "Active Projects", value: "3", icon: Briefcase, color: "text-info" },
    { label: "Total Workers", value: "105", icon: HardHat, color: "text-primary-accent" },
    { label: "Completed Tasks", value: "287", icon: Building2, color: "text-success" },
    { label: "Client Rating", value: "4.8", icon: Star, color: "text-warning" },
  ];

  return (
    <DashboardLayout title="Construction Company">
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
            Add Project Update
          </EnhancedButton>
          <EnhancedButton variant="outline" icon={<Users className="h-4 w-4" />}>
            Manage Workers
          </EnhancedButton>
          <EnhancedButton variant="secondary" icon={<Calendar className="h-4 w-4" />}>
            Schedule Tasks
          </EnhancedButton>
        </div>

        {/* Projects List */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building2 className="h-5 w-5 text-primary-accent" />
              Active Projects
            </CardTitle>
            <CardDescription>Manage ongoing construction projects and workforce</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {activeProjects.map((project) => (
                <div 
                  key={project.id} 
                  className="p-5 rounded-lg border border-border hover:border-primary-accent transition-all duration-300 hover:shadow-primary"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="font-semibold text-lg">{project.name}</h3>
                        <Badge 
                          className={
                            project.priority === "High" 
                              ? "bg-destructive text-white" 
                              : "bg-warning text-white"
                          }
                        >
                          {project.priority}
                        </Badge>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          {project.location}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <HardHat className="h-4 w-4" />
                          {project.workers} Workers
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          Due: {project.deadline}
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center justify-between text-sm mb-1">
                          <span className="text-muted-foreground">Project Progress</span>
                          <span className="font-medium">{project.progress}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2.5">
                          <div 
                            className={`rounded-full h-2.5 transition-all duration-500 ${
                              project.progress >= 80 ? 'bg-success' : 
                              project.progress >= 50 ? 'bg-primary-accent' : 
                              'bg-warning'
                            }`}
                            style={{ width: `${project.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <EnhancedButton size="sm" variant="outline">
                        View Details
                      </EnhancedButton>
                      <EnhancedButton size="sm">
                        Update Progress
                      </EnhancedButton>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card className="hover:shadow-accent transition-shadow duration-300 cursor-pointer border-2 hover:border-primary-accent">
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="mx-auto w-14 h-14 bg-primary-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-7 w-7 text-primary-accent" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Workforce Management</h3>
                <p className="text-sm text-muted-foreground mb-4">Assign and track workers across projects</p>
                <EnhancedButton size="sm" className="w-full">
                  Manage Team
                </EnhancedButton>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-accent transition-shadow duration-300 cursor-pointer border-2 hover:border-primary-accent">
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="mx-auto w-14 h-14 bg-success/10 rounded-full flex items-center justify-center mb-4">
                  <Calendar className="h-7 w-7 text-success" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Task Scheduling</h3>
                <p className="text-sm text-muted-foreground mb-4">Plan and schedule construction tasks</p>
                <EnhancedButton size="sm" className="w-full">
                  View Schedule
                </EnhancedButton>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-accent transition-shadow duration-300 cursor-pointer border-2 hover:border-primary-accent">
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="mx-auto w-14 h-14 bg-info/10 rounded-full flex items-center justify-center mb-4">
                  <Building2 className="h-7 w-7 text-info" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Project Documentation</h3>
                <p className="text-sm text-muted-foreground mb-4">Access plans, permits, and reports</p>
                <EnhancedButton size="sm" className="w-full">
                  View Documents
                </EnhancedButton>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ConstructionCompany;
