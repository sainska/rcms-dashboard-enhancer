import { Card } from "../ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { role: "Masons", allocated: 15, available: 5 },
  { role: "Carpenters", allocated: 12, available: 3 },
  { role: "Electricians", allocated: 8, available: 2 },
  { role: "Plumbers", allocated: 6, available: 4 },
  { role: "Engineers", allocated: 4, available: 1 },
  { role: "Supervisors", allocated: 3, available: 2 },
];

export function WorkerAllocationChart() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Worker Allocation</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} layout="vertical">
          <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
          <XAxis type="number" />
          <YAxis dataKey="role" type="category" width={100} />
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(var(--card))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "8px",
            }}
          />
          <Bar dataKey="allocated" fill="hsl(var(--primary))" name="Allocated" />
          <Bar dataKey="available" fill="hsl(var(--success))" name="Available" />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
}
