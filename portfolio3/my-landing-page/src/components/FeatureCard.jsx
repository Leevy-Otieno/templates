import React from 'react';

export default function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="p-8 rounded-2xl bg-slate-800/50 border border-slate-800 hover:border-slate-700 transition-all">
      <div className="p-3 w-fit bg-indigo-600/10 text-indigo-400 rounded-xl mb-5">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-slate-400 leading-relaxed">{description}</p>
    </div>
  );
}