export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-5xl mx-auto w-full">
      <h2 className="text-3xl font-bold border-b border-slate-800 pb-4 mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Placeholder for mapping your repository/project data arrays */}
        <div className="p-6 border border-slate-800 bg-slate-900/50 rounded-lg min-h-[150px] flex items-center justify-center text-slate-500">
          Project Card Placeholder
        </div>
        <div className="p-6 border border-slate-800 bg-slate-900/50 rounded-lg min-h-[150px] flex items-center justify-center text-slate-500">
          Project Card Placeholder
        </div>
      </div>
    </section>
  );
}