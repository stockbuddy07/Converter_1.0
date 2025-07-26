'use client';

export default function StatsSection() {
  const stats = [
    {
      number: '1m',
      label: 'Active',
      sublabel: 'Users',
      color: 'text-blue-500'
    },
    {
      number: '10m',
      label: 'Files',
      sublabel: 'Converted',
      color: 'text-blue-500'
    },
    {
      number: '200+',
      label: 'Online',
      sublabel: 'Tools',
      color: 'text-blue-500'
    },
    {
      number: '500k',
      label: 'PDFs',
      sublabel: 'Created',
      color: 'text-blue-500'
    }
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`text-4xl md:text-5xl font-bold ${stat.color} mb-2`}>
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                <div className="font-medium">{stat.label}</div>
                <div className="text-sm">{stat.sublabel}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}