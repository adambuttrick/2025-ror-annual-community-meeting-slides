import React from 'react';
import { Globe2, Building2, FileText, ListTodo } from 'lucide-react';

const ROR2025Roadmap = () => {
  return (
    <div className="w-[960px] h-[540px] bg-white p-8 flex flex-col gap-6">
      <h1 className="text-3xl font-bold text">ROR Data: 2025 Focus</h1>
      
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-gray-50 p-6 rounded-lg flex items-start">
          <Globe2 className="w-12 h-12 text-[#5b9e8b] mr-4 flex-shrink-0" />
          <div>
            <div className="text-xl font-bold mb-2">Regional Coverage</div>
            <div className="text-gray-600">
              Focused improvement projects, including for Portugal and Japan
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg flex items-start">
          <Building2 className="w-12 h-12 text-[#5b9e8b] mr-4 flex-shrink-0" />
          <div>
            <div className="text-xl font-bold mb-2">Funders, Societies, and Publishers</div>
            <div className="text-gray-600">
              Improved coverage of funders, society organizations, and publishers
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-gray-50 p-6 rounded-lg flex items-start">
          <FileText className="w-12 h-12 text-[#5b9e8b] mr-4 flex-shrink-0" />
          <div>
            <div className="text-xl font-bold mb-2">External Identifiers</div>
            <div className="text-gray-600">
              Enhanced integration and mapping with external identifier systems
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg flex items-start">
          <ListTodo className="w-12 h-12 text-[#5b9e8b] mr-4 flex-shrink-0" />
          <div>
            <div className="text-xl font-bold mb-2">Additional Projects</div>
            <div className="grid gap-y-3">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-[#5b9e8b] rounded-full mr-3"></div>
                <span>Keeping up with curation demand</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-[#5b9e8b] rounded-full mr-3"></div>
                <span>Increased domain coverage</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ROR2025Roadmap;