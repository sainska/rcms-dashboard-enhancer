import { DashboardLayout } from "@/components/DashboardLayout";
import { EnhancedButton } from "@/components/ui/enhanced-button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ClipboardCheck, 
  AlertTriangle,
  CheckCircle2,
  Clock,
  FileText,
  Users,
  TrendingUp,
  Settings
} from "lucide-react";
import { ProjectProgressChart } from "@/components/charts/ProjectProgressChart";
import { FinancialAnalyticsChart } from "@/components/charts/FinancialAnalyticsChart";
import { WorkerAllocationChart } from "@/components/charts/WorkerAllocationChart";

const ProjectManager = () => {
  const milestones = [
    { id: 1, name: "Foundation Complete", project: "Residential Complex A", status: "Completed", date: "2025-10-15", payment: "$250,000" },
    { id: 2, name: "Structure Framework", project: "Commercial Tower B", status: "In Review", date: "2025-11-18", payment: "$400,000" },
    { id: 3, name: "Electrical Installation", project: "Residential Complex A", status: "In Progress", date: "2025-11-25", payment: "$180,000" },
    { id: 4, name: "Plumbing Phase 1", project: "Infrastructure Project C", status: "Pending", date: "2025-12-05", payment: "$120,000" },
  ];

  const stats = [
    { label: "Total Milestones", value: "24", icon: ClipboardCheck, color: "text-primary-accent" },
    { label: "In Review", value: "5", icon: Clock, color: "text-warning" },
    { label: "Approved", value: "16", icon: CheckCircle2, color: "text-success" },
    { label: "Issues", value: "3", icon: AlertTriangle, color: "text-destructive" },
  ];

  return (
    <DashboardLayout title="Project Manager">
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
          <EnhancedButton icon={<CheckCircle2 className="h-4 w-4" />}>
            Review Milestones
          </EnhancedButton>
          <EnhancedButton variant="outline" icon={<FileText className="h-4 w-4" />}>
            Generate Reports
          </EnhancedButton>
          <EnhancedButton variant="secondary" icon={<Settings className="h-4 w-4" />}>
            Project Settings
          </EnhancedButton>
        </div>

      {/* Analytics & Progress */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Project Analytics & Progress</h2>
        <div className="grid gap-6 md:grid-cols-2 mb-8">
          <ProjectProgressChart />
          <FinancialAnalyticsChart />
        </div>
        <div className="mb-8">
          <WorkerAllocationChart />
        </div>
      </section>

      {/* Milestones List */}
      <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ClipboardCheck className="h-5 w-5 text-primary-accent" />
              Project Milestones
            </CardTitle>
            <CardDescription>Track and approve construction milestones for payment release</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {milestones.map((milestone) => (
                <div 
                  key={milestone.id} 
                  className="p-4 rounded-lg border border-border hover:border-primary-accent transition-all duration-300 hover:shadow-primary"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-semibold text-lg mb-1">{milestone.name}</h3>
                          <p className="text-sm text-muted-foreground">{milestone.project}</p>
                        </div>
                        <Badge 
                          className={
                            milestone.status === "Completed" 
                              ? "bg-success text-white" 
                              : milestone.status === "In Review"
                              ? "bg-warning text-white"
                              : milestone.status === "In Progress"
                              ? "bg-info text-white"
                              : "bg-muted text-foreground"
                          }
                        >
                          {milestone.status}
                        </Badge>
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {milestone.date}
                        </span>
                        <span className="flex items-center gap-1 font-semibold text-primary-accent">
                          Payment: {milestone.payment}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      {milestone.status === "In Review" && (
                        <>
                          <EnhancedButton size="sm" variant="success">
                            Approve
                          </EnhancedButton>
                          <EnhancedButton size="sm" variant="danger">
                            Reject
                          </EnhancedButton>
                        </>
                      )}
                      {milestone.status !== "In Review" && (
                        <EnhancedButton size="sm" variant="outline">
                          View Details
                        </EnhancedButton>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="border-l-4 border-l-success hover:shadow-accent transition-shadow duration-300">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Approved This Month</p>
                  <p className="text-2xl font-bold">$1.2M</p>
                  <p className="text-xs text-success mt-1">+18% from last month</p>
                </div>
                <TrendingUp className="h-10 w-10 text-success" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-warning hover:shadow-accent transition-shadow duration-300">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Pending Review</p>
                  <p className="text-2xl font-bold">$650K</p>
                  <p className="text-xs text-muted-foreground mt-1">5 milestones</p>
                </div>
                <Clock className="h-10 w-10 text-warning" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-info hover:shadow-accent transition-shadow duration-300">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Active Projects</p>
                  <p className="text-2xl font-bold">12</p>
                  <p className="text-xs text-muted-foreground mt-1">3 companies</p>
                </div>
                <Users className="h-10 w-10 text-info" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ProjectManager;
