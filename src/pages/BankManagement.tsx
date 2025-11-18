import { DashboardLayout } from "@/components/DashboardLayout";
import { EnhancedButton } from "@/components/ui/enhanced-button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Landmark, 
  DollarSign, 
  TrendingUp, 
  TrendingDown,
  Clock,
  CheckCircle,
  ArrowUpRight,
  ArrowDownLeft,
  FileText
} from "lucide-react";
import { FinancialAnalyticsChart } from "@/components/charts/FinancialAnalyticsChart";
import { BudgetBreakdownChart } from "@/components/charts/BudgetBreakdownChart";

const BankManagement = () => {
  const transactions = [
    { id: 1, type: "deposit", amount: "$250,000", project: "Residential Complex A", date: "2025-11-15", status: "Completed" },
    { id: 2, type: "withdrawal", amount: "$120,000", project: "Commercial Tower B", date: "2025-11-14", status: "Pending" },
    { id: 3, type: "deposit", amount: "$180,000", project: "Infrastructure Project C", date: "2025-11-13", status: "Completed" },
    { id: 4, type: "withdrawal", amount: "$95,000", project: "Residential Complex A", date: "2025-11-12", status: "Completed" },
  ];

  const stats = [
    { label: "Total Deposits", value: "$5.2M", change: "+12.5%", icon: TrendingUp, trending: "up" },
    { label: "Total Withdrawals", value: "$3.8M", change: "+8.2%", icon: TrendingDown, trending: "down" },
    { label: "Available Balance", value: "$1.4M", change: "+4.3%", icon: DollarSign, trending: "up" },
    { label: "Pending Approvals", value: "8", change: "-2", icon: Clock, trending: "down" },
  ];

  return (
    <DashboardLayout title="Bank Management">
      <div className="space-y-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="hover:shadow-accent transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <Icon className="h-5 w-5 text-primary-accent" />
                  </div>
                  <p className="text-3xl font-bold mb-1">{stat.value}</p>
                  <p className={`text-sm font-medium ${stat.trending === 'up' ? 'text-success' : 'text-destructive'}`}>
                    {stat.change}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-3">
          <EnhancedButton icon={<CheckCircle className="h-4 w-4" />}>
            Approve Payments
          </EnhancedButton>
          <EnhancedButton variant="outline" icon={<FileText className="h-4 w-4" />}>
            Generate Report
          </EnhancedButton>
          <EnhancedButton variant="secondary" icon={<TrendingUp className="h-4 w-4" />}>
            View Analytics
          </EnhancedButton>
        </div>

      {/* Financial Analytics */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Financial Analytics</h2>
        <div className="grid gap-6 md:grid-cols-2 mb-8">
          <FinancialAnalyticsChart />
          <BudgetBreakdownChart />
        </div>
      </section>

      {/* Transactions */}
      <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Landmark className="h-5 w-5 text-primary-accent" />
              Recent Transactions
            </CardTitle>
            <CardDescription>Monitor and manage project milestone payments</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {transactions.map((transaction) => (
                <div 
                  key={transaction.id} 
                  className="flex flex-col lg:flex-row lg:items-center justify-between p-4 rounded-lg border border-border hover:border-primary-accent transition-all duration-300 hover:shadow-primary gap-4"
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-full ${
                      transaction.type === 'deposit' 
                        ? 'bg-success/10' 
                        : 'bg-warning/10'
                    }`}>
                      {transaction.type === 'deposit' ? (
                        <ArrowDownLeft className={`h-5 w-5 text-success`} />
                      ) : (
                        <ArrowUpRight className={`h-5 w-5 text-warning`} />
                      )}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">
                        {transaction.type === 'deposit' ? 'Deposit' : 'Withdrawal'}
                      </h3>
                      <p className="text-sm text-muted-foreground">{transaction.project}</p>
                      <p className="text-xs text-muted-foreground mt-1">{transaction.date}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-start lg:items-end gap-3">
                    <p className={`text-2xl font-bold ${
                      transaction.type === 'deposit' ? 'text-success' : 'text-warning'
                    }`}>
                      {transaction.type === 'deposit' ? '+' : '-'}{transaction.amount}
                    </p>
                    <div className="flex items-center gap-2">
                      <Badge 
                        variant={transaction.status === "Completed" ? "default" : "secondary"}
                        className={
                          transaction.status === "Completed" 
                            ? "bg-success text-white" 
                            : "bg-warning text-white"
                        }
                      >
                        {transaction.status}
                      </Badge>
                      <EnhancedButton size="sm" variant="outline">
                        Details
                      </EnhancedButton>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="hover:shadow-accent transition-shadow duration-300 cursor-pointer">
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="mx-auto w-12 h-12 bg-primary-accent/10 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-primary-accent" />
                </div>
                <h3 className="font-semibold mb-2">Pending Approvals</h3>
                <p className="text-2xl font-bold mb-3">8</p>
                <EnhancedButton size="sm" variant="outline" className="w-full">
                  Review Now
                </EnhancedButton>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-accent transition-shadow duration-300 cursor-pointer">
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="mx-auto w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mb-4">
                  <DollarSign className="h-6 w-6 text-success" />
                </div>
                <h3 className="font-semibold mb-2">Escrow Balance</h3>
                <p className="text-2xl font-bold mb-3">$2.8M</p>
                <EnhancedButton size="sm" variant="outline" className="w-full">
                  Manage Escrow
                </EnhancedButton>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-accent transition-shadow duration-300 cursor-pointer">
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="mx-auto w-12 h-12 bg-info/10 rounded-full flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-info" />
                </div>
                <h3 className="font-semibold mb-2">Monthly Reports</h3>
                <p className="text-2xl font-bold mb-3">12</p>
                <EnhancedButton size="sm" variant="outline" className="w-full">
                  View Reports
                </EnhancedButton>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default BankManagement;
