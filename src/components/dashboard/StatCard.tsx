export default function StatCard({
  title,
  value,
}: {
  title: string;
  value: string | number;
}) {
  return (
    <div className="p-6 bg-white rounded-xl shadow border">
      <h4 className="text-sm text-gray-500">{title}</h4>
      <p className="text-2xl font-bold text-blue-600 mt-1">{value}</p>
    </div>
  );
}
