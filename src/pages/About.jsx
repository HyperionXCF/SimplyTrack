export default function About(){
  return (
    <section>
      <h2 className="text-2xl font-extrabold mb-4">About</h2>
      <p className="text-slate-700">Welcome to <span className="font-bold">SimplyTrack</span>, your all-in-one productivity companion. We combine a simple habit tracker, to-do lists, and an expense tracker into one minimal and easy-to-use app.</p>
      <p className="text-slate-700">Designed for simplicity, <span className="font-bold">SimplyTrack</span> helps you stay organized, build better habits, and manage your finances without overwhelming clutter. Focus on what matters, track your progress, and achieve more every day, all from a single, streamlined interface.</p>
      <p className="text-slate-700 mt-4">Designed for simplicity, <span className="font-bold">SimplyTrack</span> helps you stay organized, build better habits, and manage your finances without overwhelming clutter.</p>

      <h3 className="text-lg font-semibold mt-6">Development Phase</h3>
      <ul className="list-disc pl-6 text-slate-700 mt-2">
        <li>Main layout & routing ✅</li>
        <li>Todos page — open for contributors</li>
        <li>Habits page — open for contributors</li>
        <li>Expenses page — owner will complete</li>
        <li>Backend / persistence — planned</li>
      </ul>

      <h3 className="text-lg font-semibold mt-6">How to contribute</h3>
      <p className="text-slate-700 mt-2">Thanks for helping! Below are step-by-step instructions for getting the code, running it locally, making changes, and submitting them back to GitHub. These examples assume you use GitHub and PowerShell on Windows; adjust commands for macOS/Linux shells if needed.</p>

      <h4 className="font-semibold mt-4">1) Prerequisites</h4>
      <ul className="list-disc pl-6 text-slate-700">
        <li>Node.js 18+ and npm (or pnpm)</li>
        <li>Git (command line)</li>
        <li>A GitHub account (if submitting PRs)</li>
      </ul>

      <h4 className="font-semibold mt-4">2) Clone the repo</h4>
      <pre className="bg-slate-100 rounded p-3 mt-2 overflow-x-auto text-sm">
        {`# clone using HTTPS
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>

# or clone with SSH
git clone git@github.com:<your-username>/<repo-name>.git
cd <repo-name>`}
      </pre>

      <h4 className="font-semibold mt-4">3) Install and run locally</h4>
      <pre className="bg-slate-100 rounded p-3 mt-2 overflow-x-auto text-sm">
        {`# install dependencies
npm install

# start the dev server
npm run dev

# open the app at the URL vite reports (usually http://localhost:5173 or 5174)`}
      </pre>

      <h4 className="font-semibold mt-4">4) Branching and making changes</h4>
      <p className="text-slate-700 mt-2">Create a focused branch for each change/feature. Use descriptive names:</p>
      <pre className="bg-slate-100 rounded p-3 mt-2 overflow-x-auto text-sm">
        {`# create a branch from main
git checkout main
git pull origin main
git checkout -b feat/<your-name>/short-description`}
      </pre>

      <h4 className="font-semibold mt-4">5) Commit and push</h4>
      <pre className="bg-slate-100 rounded p-3 mt-2 overflow-x-auto text-sm">
        {`# stage and commit your work
git add .
git commit -m "feat: short description of your change"

git push -u origin feat/<your-name>/short-description`}
      </pre>

      <h4 className="font-semibold mt-4">6) Open a Pull Request</h4>
      <p className="text-slate-700 mt-2">On GitHub open a PR from your branch into <code>main</code>. In the PR description include:</p>
      <ul className="list-disc pl-6 text-slate-700">
        <li>What you changed</li>
        <li>Screenshots or short demo GIF if relevant</li>
        <li>How to test your change locally</li>
      </ul>

      <h4 className="font-semibold mt-4">7) Review, update, and merge</h4>
      <p className="text-slate-700 mt-2">Project maintainers will review your PR. Please address feedback in the same branch. Once approved, the maintainer will merge the PR. After merge, sync your local main:</p>
      <pre className="bg-slate-100 rounded p-3 mt-2 overflow-x-auto text-sm">
        {`git checkout main
git pull origin main`}
      </pre>

      <h3 className="text-lg font-semibold mt-6">Contributor guidelines</h3>
      <ul className="list-disc pl-6 text-slate-700 mt-2">
        <li>Keep PRs small and focused (one feature/bug per PR).</li>
        <li>Follow existing code style and use Tailwind classes for UI.</li>
        <li>Write clear commit messages (conventional commits are helpful: feat:, fix:, chore:).</li>
        <li>Open an issue first for larger features so we can discuss scope.</li>
      </ul>

      <h3 className="text-lg font-semibold mt-6">Task ownership</h3>
      <p className="text-slate-700 mt-2">Planned ownership for this project:</p>
      <ul className="list-disc pl-6 text-slate-700 mt-2">
        <li><strong>Expenses page</strong> — Yash </li>
        <li><strong>Todos page</strong> — Vipul</li>
        <li><strong>Habits page</strong> - Sanika</li>
        <li><strong>Backend</strong> — All three</li>
      </ul>

      <h3 className="text-lg font-semibold mt-6">Need help?</h3>
      <p className="text-slate-700 mt-2">If you get stuck, please:</p>
      <ul className="list-disc pl-6 text-slate-700">
        <li>Open an issue describing the problem, steps to reproduce, and any error output.</li>
        <li>Include screenshots or logs when possible.</li>
      </ul>

      <p className="text-slate-700 mt-4">Thanks for contributing — your help makes this project better!</p>
    </section>
  )
}

