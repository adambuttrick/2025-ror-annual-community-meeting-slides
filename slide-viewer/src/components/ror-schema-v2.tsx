import React from 'react';
import { Languages, AtSign } from 'lucide-react';

const RORSchemaV2 = () => {
  const beforeAfterData = {
    alias: {
      before: {
        tagged: 453,
        total: 28518,
        percentage: 1.59
      },
      after: {
        tagged: 26098,
        total: 28518,
        percentage: 91.51
      }
    },
    label: {
      before: {
        tagged: 28169,
        total: 106708,
        percentage: 26.40
      },
      after: {
        tagged: 104555,
        total: 106708,
        percentage: 97.98
      }
    }
  };

  return (
    <div className="w-[960px] h-[540px] bg-white p-8 flex flex-col gap-6">
      <h1 className="text-3xl font-bold text">ROR Data: Schema v2 Improvements</h1>
      
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-gray-50 p-6 rounded-lg flex items-center">
          <Languages className="w-12 h-12 text-[#5b9e8b] mr-4" />
          <div>
            <div className="text-3xl font-bold">98%</div>
            <div className="text-sm text-gray-600">Labels Language Tagged</div>
          </div>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg flex items-center">
          <AtSign className="w-12 h-12 text-[#5b9e8b] mr-4" />
          <div>
            <div className="text-3xl font-bold">~8,000</div>
            <div className="text-sm text-gray-600">Domains Added</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4 text-[#5b9e8b]">Language Tagging</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Aliases</h3>
              <div className="space-y-2">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Before</span>
                    <span className="font-medium">{beforeAfterData.alias.before.percentage}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gray-400 rounded-full transition-all duration-1000" 
                      style={{ width: `${beforeAfterData.alias.before.percentage}%` }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">After</span>
                    <span className="font-medium text-[#5b9e8b]">{beforeAfterData.alias.after.percentage}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-[#5b9e8b] rounded-full transition-all duration-1000" 
                      style={{ width: `${beforeAfterData.alias.after.percentage}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Labels</h3>
              <div className="space-y-2">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Before</span>
                    <span className="font-medium">{beforeAfterData.label.before.percentage}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gray-400 rounded-full transition-all duration-1000" 
                      style={{ width: `${beforeAfterData.label.before.percentage}%` }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">After</span>
                    <span className="font-medium text-[#5b9e8b]">{beforeAfterData.label.after.percentage}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-[#5b9e8b] rounded-full transition-all duration-1000" 
                      style={{ width: `${beforeAfterData.label.after.percentage}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4 text-[#5b9e8b]">Improvements</h2>
          <ul className="space-y-3">
            <li>• Domain data from many sources</li>
            <li>• Link corrections</li>
            <li>• Added New Funder type</li>
            <li>• Rationalized location data</li>
          </ul>
        </div>
      </div>

      <div className="text-sm text-gray-600 text-center mt-2">
        * Language tagging statistics exclude records of type "company"
      </div>
    </div>
  );
};

export default RORSchemaV2;
