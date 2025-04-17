export default function Classes() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-lg mx-auto">
        <h1 className="text-2xl font-bold mb-6 bg-gradient-to-r from-stone-900 to-stone-700 bg-clip-text text-transparent dark:from-stone-100 dark:to-stone-300">
          Classes
        </h1>

        <div className="space-y-8">
          <div className="rounded-lg border border-stone-200 bg-white/50 p-6 backdrop-blur-sm transition-all hover:border-stone-300 dark:border-stone-800 dark:bg-stone-900/50 dark:hover:border-stone-700">
            <h2 className="text-lg font-semibold text-stone-900 dark:text-stone-100">CS 161: Computer Security</h2>
            <p className="mt-1 text-stone-600 dark:text-stone-400">
              Introduction to computer security, including cryptography, authentication, and web security.
            </p>
          </div>

          <div className="rounded-lg border border-stone-200 bg-white/50 p-6 backdrop-blur-sm transition-all hover:border-stone-300 dark:border-stone-800 dark:bg-stone-900/50 dark:hover:border-stone-700">
            <h2 className="text-lg font-semibold text-stone-900 dark:text-stone-100">CS 170: Efficient Algorithms and Intractable Problems</h2>
            <p className="mt-1 text-stone-600 dark:text-stone-400">Design and analysis of algorithms, NP-completeness, and approximation algorithms.</p>
          </div>

          <div className="rounded-lg border border-stone-200 bg-white/50 p-6 backdrop-blur-sm transition-all hover:border-stone-300 dark:border-stone-800 dark:bg-stone-900/50 dark:hover:border-stone-700">
            <h2 className="text-lg font-semibold text-stone-900 dark:text-stone-100">CS 186: Introduction to Database Systems</h2>
            <p className="mt-1 text-stone-600 dark:text-stone-400">Database design, SQL, query optimization, and transaction processing.</p>
          </div>

          <div className="rounded-lg border border-stone-200 bg-white/50 p-6 backdrop-blur-sm transition-all hover:border-stone-300 dark:border-stone-800 dark:bg-stone-900/50 dark:hover:border-stone-700">
            <h2 className="text-lg font-semibold text-stone-900 dark:text-stone-100">CS 188: Introduction to Artificial Intelligence</h2>
            <p className="mt-1 text-stone-600 dark:text-stone-400">Search algorithms, machine learning, neural networks, and reinforcement learning.</p>
          </div>
        </div>
      </div>
    </div>
  );
} 