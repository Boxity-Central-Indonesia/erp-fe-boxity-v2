export const SkeletonTable = () => {
    return (
      <div className="animate-pulse mt-6">
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="px-6 py-3 bg-gray-100 border-b border-gray-200">
                  <div className="h-4 bg-gray-300 rounded"></div>
                </th>
                <th className="px-6 py-3 bg-gray-100 border-b border-gray-200">
                  <div className="h-4 bg-gray-300 rounded"></div>
                </th>
                <th className="px-6 py-3 bg-gray-100 border-b border-gray-200">
                  <div className="h-4 bg-gray-300 rounded"></div>
                </th>
                <th className="px-6 py-3 bg-gray-100 border-b border-gray-200">
                  <div className="h-4 bg-gray-300 rounded"></div>
                </th>
              </tr>
            </thead>
            <tbody>
              {[...Array(5)].map((_, i) => (
                <tr key={i}>
                  <td className="px-6 py-4 border-b border-gray-200">
                    <div className="h-4 bg-gray-300 rounded"></div>
                  </td>
                  <td className="px-6 py-4 border-b border-gray-200">
                    <div className="h-4 bg-gray-300 rounded"></div>
                  </td>
                  <td className="px-6 py-4 border-b border-gray-200">
                    <div className="h-4 bg-gray-300 rounded"></div>
                  </td>
                  <td className="px-6 py-4 border-b border-gray-200">
                    <div className="h-4 bg-gray-300 rounded"></div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  