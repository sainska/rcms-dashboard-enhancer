import { Card } from "../ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { name: "Planning", completed: 100, remaining: 0 },
  { name: "Foundation", completed: 100, remaining: 0 },
  { name: "Structure", completed: 75, remaining: 25 },
  { name: "Electrical", completed: 45, remaining: 55 },
  { name: "Plumbing", completed: 30, remaining: 70 },
  { name: "Finishing", completed: 0, remaining: 100 },
];

export function ProjectProgressChart() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Project Progress Timeline</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
          <XAxis dataKey="name" className="text-xs" />
          <YAxis />
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(var(--card))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "8px",
            }}
          />
          <Legend />
          <Bar dataKey="completed" fill="hsl(var(--primary))" name="Completed %" />
          <Bar dataKey="remaining" fill="hsl(var(--muted))" name="Remaining %" />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
}
