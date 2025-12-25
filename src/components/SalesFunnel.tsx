import React from 'react';
import { Users, DollarSign } from 'lucide-react';

const SalesFunnel = () => {
    // Funnel Visual Constants
    const TRAITS = {
        topWidth: 280,
        bottomWidth: 100,
        height: 200,
        gap: 4,
        sections: 4
    };

    // Calculate dimensions
    const sectionHeight = (TRAITS.height - (TRAITS.sections - 1) * TRAITS.gap) / TRAITS.sections;
    const slope = (TRAITS.topWidth - TRAITS.bottomWidth) / 2 / TRAITS.height;

    const sections = [
        { label: "Leads", color: "#334155", textColor: "text-slate-700" },          // Dark Slate
        { label: "Qualified Lead", color: "#F97316", textColor: "text-slate-700" }, // Orange
        { label: "Offer Presentation", color: "#334155", textColor: "text-slate-700" }, // Dark Slate
        { label: "Negotiation", color: "#F97316", textColor: "text-slate-700" }     // Orange
    ];

    const getPoints = (index: number) => {
        const yTop = index * (sectionHeight + TRAITS.gap);
        const yBottom = yTop + sectionHeight;

        // Width at yTop
        const wTop = TRAITS.topWidth - 2 * (yTop * slope);
        // Width at yBottom
        const wBottom = TRAITS.topWidth - 2 * (yBottom * slope);

        const x1 = (TRAITS.topWidth - wTop) / 2;
        const x2 = x1 + wTop;
        const x3 = (TRAITS.topWidth - wBottom) / 2 + wBottom;
        const x4 = (TRAITS.topWidth - wBottom) / 2;

        return `${x1},${yTop} ${x2},${yTop} ${x3},${yBottom} ${x4},${yBottom}`;
    };

    return (
        <div className="flex flex-col gap-4">
            <h3 className="text-slate-800 text-base font-bold flex items-center gap-2">
                <Users className="text-slate-400" size={24} />
                Sales Funnel
            </h3>
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col items-center justify-center py-10 relative">

                {/* Users Icon at Top */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 text-slate-900">
                    <Users size={32} fill="black" className="text-black" />
                </div>

                <div className="relative mt-8" style={{ width: TRAITS.topWidth, height: TRAITS.height + 60 }}>
                    <svg width={TRAITS.topWidth} height={TRAITS.height} className="overflow-visible">
                        <defs>
                            <filter id="dropShadow" x="-20%" y="-20%" width="140%" height="140%">
                                <feGaussianBlur in="SourceAlpha" stdDeviation="2" />
                                <feOffset dx="0" dy="2" result="offsetblur" />
                                <feFlood floodColor="rgba(0,0,0,0.2)" />
                                <feComposite in2="offsetblur" operator="in" />
                                <feMerge>
                                    <feMergeNode />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                        </defs>
                        {sections.map((section, index) => (
                            <g key={index}>
                                <polygon
                                    points={getPoints(index)}
                                    fill={section.color}
                                    filter="url(#dropShadow)"
                                />
                                {/* Label Line and Text */}
                                <line
                                    x1={TRAITS.topWidth}
                                    y1={index * (sectionHeight + TRAITS.gap) + sectionHeight / 2}
                                    x2={TRAITS.topWidth + 20}
                                    y2={index * (sectionHeight + TRAITS.gap) + sectionHeight / 2}
                                    stroke="#94a3b8"
                                    strokeWidth="1"
                                    strokeDasharray="4 2"
                                />
                                <text
                                    x={TRAITS.topWidth + 30}
                                    y={index * (sectionHeight + TRAITS.gap) + sectionHeight / 2}
                                    dy="0.35em"
                                    className="text-xs font-bold fill-slate-600 uppercase tracking-wide"
                                    style={{ fontSize: '11px', fontWeight: 'bold' }}
                                >
                                    {section.label}
                                </text>
                                {/* Percentage/Count Text inside funnel (optional placeholder) */}
                                <text
                                    x={TRAITS.topWidth / 2}
                                    y={index * (sectionHeight + TRAITS.gap) + sectionHeight / 2}
                                    dy="0.35em"
                                    textAnchor="middle"
                                    fill="white"
                                    style={{ fontSize: '12px', fontWeight: 'bold' }}
                                >
                                    {/* Placeholder values */}
                                    {index === 0 ? '100%' : index === 1 ? '75%' : index === 2 ? '50%' : '25%'}
                                </text>
                            </g>
                        ))}
                    </svg>

                    {/* Closing Icon at Bottom */}
                    <div className="absolute top-[200px] left-1/2 -translate-x-1/2 mt-2 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-green-500 border-4 border-emerald-400 flex items-center justify-center shadow-lg z-20">
                            <DollarSign size={32} className="text-white" strokeWidth={3} />
                        </div>
                        {/* Closing Label */}
                        <div className="absolute left-[100%] ml-4 flex items-center whitespace-nowrap">
                            <div className="w-8 h-[1px] bg-slate-400 mr-2 border-dashed border-t border-slate-300"></div>
                            <span className="text-xs font-bold text-slate-600 uppercase tracking-wide">Closing</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SalesFunnel;
