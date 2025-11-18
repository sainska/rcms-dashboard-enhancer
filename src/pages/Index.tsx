import { Link } from "react-router-dom";
import { EnhancedButton } from "@/components/ui/enhanced-button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Building2, 
  Landmark, 
  ClipboardCheck, 
  User,
  Shield,
  Zap,
  Globe,
  ArrowRight
} from "lucide-react";

const Index = () => {
  const dashboards = [
    {
      title: "User Dashboard",
      description: "Create and manage your construction projects with certified companies",
      icon: User,
      href: "/user-dashboard",
      color: "text-info",
      bgColor: "bg-info/10",
    },
    {
      title: "Bank Management",
      description: "Secure milestone-based payment processing and escrow management",
      icon: Landmark,
      href: "/bank-management",
      color: "text-primary-accent",
      bgColor: "bg-primary-accent/10",
    },
    {
      title: "Construction Company",
      description: "Manage projects, workforce, and deliver quality construction services",
      icon: Building2,
      href: "/construction-company",
      color: "text-success",
      bgColor: "bg-success/10",
    },
    {
      title: "Project Manager",
      description: "Review milestones, approve payments, and track project progress",
      icon: ClipboardCheck,
      href: "/project-manager",
      color: "text-warning",
      bgColor: "bg-warning/10",
    },
  ];

  const features = [
    {
      icon: Shield,
      title: "Secure Payments",
      description: "Milestone-based escrow ensures safe and transparent transactions",
    },
    {
      icon: Zap,
      title: "Real-time Tracking",
      description: "Monitor project progress, budgets, and updates instantly",
    },
    {
      icon: Globe,
      title: "Remote Management",
      description: "Manage construction projects from anywhere in the world",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16 lg:py-24">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <Building2 className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-primary">Remote Construction Management System</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-accent to-primary bg-clip-text text-transparent">
            RCMS Platform
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Connect with certified construction firms, track project progress in real-time, 
            and ensure secure milestone payments through our comprehensive management platform.
          </p>
          
          <div className="flex items-center justify-center gap-4 mb-12">
            <Link to="/register">
              <EnhancedButton size="lg" variant="default">
                Get Started
              </EnhancedButton>
            </Link>
            <Link to="/login">
              <EnhancedButton size="lg" variant="outline">
                Sign In
              </EnhancedButton>
            </Link>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="border-2 hover:border-primary-accent transition-all duration-300 hover:shadow-accent">
                <CardContent className="pt-6 text-center">
                  <div className="mx-auto w-12 h-12 bg-primary-accent/10 rounded-full flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary-accent" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </header>

      {/* Dashboards Section */}
      <section className="container mx-auto px-4 pb-16 lg:pb-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Dashboard</h2>
          <p className="text-lg text-muted-foreground">Select your role to access the appropriate management interface</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {dashboards.map((dashboard, index) => {
            const Icon = dashboard.icon;
            return (
              <Link key={index} to={dashboard.href}>
                <Card className="h-full border-2 hover:border-primary-accent transition-all duration-300 hover:shadow-accent hover:scale-[1.02] cursor-pointer group">
                  <CardHeader>
                    <div className={`w-16 h-16 ${dashboard.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`h-8 w-8 ${dashboard.color}`} />
                    </div>
                    <CardTitle className="text-2xl flex items-center justify-between">
                      {dashboard.title}
                      <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary-accent group-hover:translate-x-1 transition-all duration-300" />
                    </CardTitle>
                    <CardDescription className="text-base">
                      {dashboard.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <EnhancedButton variant="outline" className="w-full group-hover:bg-primary-accent group-hover:text-white group-hover:border-primary-accent">
                      Access Dashboard
                    </EnhancedButton>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/30 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 RCMS - Remote Construction Management System. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
