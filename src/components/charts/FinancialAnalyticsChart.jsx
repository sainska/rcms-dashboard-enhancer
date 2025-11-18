import { Card } from "../ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", planned: 50000, actual: 48000, remaining: 450000 },
  { month: "Feb", planned: 50000, actual: 52000, remaining: 398000 },
  { month: "Mar", planned: 60000, actual: 58000, remaining: 340000 },
  { month: "Apr", planned: 60000, actual: 62000, remaining: 278000 },
  { month: "May", planned: 70000, actual: 68000, remaining: 210000 },
  { month: "Jun", planned: 70000, actual: 0, remaining: 210000 },
];

export function FinancialAnalyticsChart() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Financial Analytics</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(var(--card))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "8px",
            }}
            formatter={(value) => `$${value.toLocaleString()}`}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="planned"
            stroke="hsl(var(--primary))"
            strokeWidth={2}
            name="Planned Spending"
          />
          <Line
            type="monotone"
            dataKey="actual"
            stroke="hsl(var(--success))"
            strokeWidth={2}
            name="Actual Spending"
          />
          <Line
            type="monotone"
            dataKey="remaining"
            stroke="hsl(var(--warning))"
            strokeWidth={2}
            strokeDasharray="5 5"
            name="Budget Remaining"
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
}
