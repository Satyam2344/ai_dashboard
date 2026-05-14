import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const axisStyle = { fontSize: 11, fill: "oklch(0.45 0.01 80)" };

const tooltipStyle = {
  background: "white",
  border: "1px solid oklch(0.9 0.01 80)",
  borderRadius: 8,
  fontSize: 12,
  boxShadow: "0 8px 24px -8px rgba(0,0,0,0.12)",
};

export function GoldGradientDef({ id }: { id: string }) {
  return (
    <defs>
      <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#c4b07a" stopOpacity={0.5} />
        <stop offset="100%" stopColor="#a6905f" stopOpacity={0.02} />
      </linearGradient>
      <linearGradient id={`${id}-line`} x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#a6905f" />
        <stop offset="50%" stopColor="#c4b07a" />
        <stop offset="100%" stopColor="#a6905f" />
      </linearGradient>
    </defs>
  );
}

export function TrendArea({
  data,
  dataKey,
  height = 240,
}: {
  data: any[];
  dataKey: string;
  height?: number;
}) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <AreaChart data={data} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
        <GoldGradientDef id="trendArea" />
        <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.92 0.01 80)" vertical={false} />
        <XAxis dataKey="name" tick={axisStyle} axisLine={false} tickLine={false} />
        <YAxis tick={axisStyle} axisLine={false} tickLine={false} />
        <Tooltip contentStyle={tooltipStyle} />
        <Area
          type="monotone"
          dataKey={dataKey}
          stroke="url(#trendArea-line)"
          strokeWidth={2.5}
          fill="url(#trendArea)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export function MultiLine({
  data,
  series,
  height = 260,
}: {
  data: any[];
  series: { key: string; color: string; label: string }[];
  height?: number;
}) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <LineChart data={data} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.92 0.01 80)" vertical={false} />
        <XAxis dataKey="name" tick={axisStyle} axisLine={false} tickLine={false} />
        <YAxis tick={axisStyle} axisLine={false} tickLine={false} />
        <Tooltip contentStyle={tooltipStyle} />
        {series.map((s) => (
          <Line
            key={s.key}
            type="monotone"
            dataKey={s.key}
            stroke={s.color}
            strokeWidth={2.25}
            dot={false}
            activeDot={{ r: 4 }}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
}

export function BarsCompare({
  data,
  series,
  height = 280,
}: {
  data: any[];
  series: { key: string; color: string; label: string }[];
  height?: number;
}) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <BarChart data={data} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.92 0.01 80)" vertical={false} />
        <XAxis dataKey="name" tick={axisStyle} axisLine={false} tickLine={false} />
        <YAxis tick={axisStyle} axisLine={false} tickLine={false} />
        <Tooltip contentStyle={tooltipStyle} cursor={{ fill: "oklch(0.96 0.005 80 / 0.5)" }} />
        {series.map((s) => (
          <Bar key={s.key} dataKey={s.key} fill={s.color} radius={[4, 4, 0, 0]} maxBarSize={28} />
        ))}
      </BarChart>
    </ResponsiveContainer>
  );
}

export function DonutChart({
  data,
  height = 240,
}: {
  data: { name: string; value: number; color: string }[];
  height?: number;
}) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <PieChart>
        <Tooltip contentStyle={tooltipStyle} />
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          innerRadius={60}
          outerRadius={90}
          paddingAngle={2}
          stroke="white"
          strokeWidth={2}
        >
          {data.map((d, i) => (
            <Cell key={i} fill={d.color} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}

export function PerformanceRadar({
  data,
  height = 280,
}: {
  data: { metric: string; value: number; benchmark: number }[];
  height?: number;
}) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <RadarChart data={data} outerRadius="75%">
        <PolarGrid stroke="oklch(0.88 0.01 80)" />
        <PolarAngleAxis dataKey="metric" tick={{ fontSize: 10, fill: "oklch(0.35 0.01 80)" }} />
        <PolarRadiusAxis tick={false} axisLine={false} />
        <Tooltip contentStyle={tooltipStyle} />
        <Radar name="Benchmark" dataKey="benchmark" stroke="#1a1a1a" fill="#1a1a1a" fillOpacity={0.08} />
        <Radar name="You" dataKey="value" stroke="#a6905f" fill="#c4b07a" fillOpacity={0.45} strokeWidth={2} />
      </RadarChart>
    </ResponsiveContainer>
  );
}

export function GoalRadial({
  data,
  height = 220,
}: {
  data: { name: string; value: number; fill: string }[];
  height?: number;
}) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <RadialBarChart innerRadius="40%" outerRadius="100%" data={data} startAngle={90} endAngle={-270}>
        <RadialBar background={{ fill: "oklch(0.94 0.005 80)" }} dataKey="value" cornerRadius={8} />
        <Tooltip contentStyle={tooltipStyle} />
      </RadialBarChart>
    </ResponsiveContainer>
  );
}
