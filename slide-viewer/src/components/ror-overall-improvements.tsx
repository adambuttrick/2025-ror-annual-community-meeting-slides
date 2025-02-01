import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts';
import { Database, RefreshCcw, FileSearch } from 'lucide-react';

const ROROverallImprovements = () => {
  const curationData = [
    { year: '2023', requests: 5556 },
    { year: '2024', requests: 8000 }
  ];

  return (
    <div className="w-[960px] h-[540px] bg-white p-8 flex flex-col gap-6">
      <h1 className="text-3xl font-bold text">ROR Data: Overall Improvements in 2024</h1>
      
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-gray-50 p-6 rounded-lg flex items-center">
          <FileSearch className="w-12 h-12 text-[#5b9e8b] mr-4" />
          <div>
            <div className="text-3xl font-bold">8,000+</div>
            <div className="text-sm text-gray-600">Curation Requests</div>
          </div>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg flex items-center">
          <Database className="w-12 h-12 text-[#5b9e8b] mr-4" />
          <div>
            <div className="text-3xl font-bold">4,000+</div>
            <div className="text-sm text-gray-600">New Records</div>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg flex items-center">
          <RefreshCcw className="w-12 h-12 text-[#5b9e8b] mr-4" />
          <div>
            <div className="text-3xl font-bold">~107 K</div>
            <div className="text-sm text-gray-600">Records Updated</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Left Card */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4 text-[#5b9e8b]">Growth</h2>
          <ul className="space-y-3">
            <li>• Organic curation interest from many regions</li>
            <li>• New Curation Board Members</li>
            <li>• New Metadata Curation Lead</li>
          </ul>
        </div>
        
        {/* Center Card: Request Growth */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4 text-[#5b9e8b]">Requests</h2>
          <div className="h-40">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart 
                data={curationData}
                margin={{ top: 5, right: 10, left: 0, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis domain={[0, 10000]} />
                <Tooltip />
                <Bar dataKey="requests" fill="#5b9e8b" name="Requests" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="text-sm text-center mt-2 text-gray-600">
            44% increase from 2023
          </div>
        </div>

        {/* Right Card */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4 text-[#5b9e8b]">Infrastructure</h2>
          <ul className="space-y-3">
            <li>• Curation codebase re-write</li>
            <li>• Improved release workflows</li>
            <li>• Enhanced triage and analysis</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ROROverallImprovements;