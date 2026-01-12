export default function GradeBadge({ grade }) {
  if (!grade) return null;

  const styles = {
    A: "bg-green-100 text-green-800",
    B: "bg-yellow-100 text-yellow-800",
    C: "bg-orange-100 text-orange-800",
    D: "bg-red-100 text-red-800",
  };

  return (
    <span
      className={`inline-block rounded-full px-2 py-1 text-xs font-semibold ${
        styles[grade] || "bg-gray-100 text-gray-800"
      }`}
    >
      Grade {grade}
    </span>
  );
}
