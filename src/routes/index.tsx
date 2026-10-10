import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({ component: Home });

const NAV = [
  ["overview", "Overview"],
  ["legacy", "Legacy IoT/OT"],
  ["deepfake", "Deepfake"],
  ["llm", "LLM Protection"],
  ["backups", "Backups"],
  ["api", "API Misuse"],
  ["quantum", "Quantum"],
  ["questions", "Questions"],
  ["flow", "Meeting Flow"],
] as const;

const SCORE_ROWS = [
  "Legacy IoT/OT",
  "Deepfake & money fraud",
  "LLM application security",
  "Backups & logging",
  "API misuse",
  "Quantum / PQC",
] as const;

const CRITERIA = [
  ["acute", "Acute"],
  ["real", "Realistic"],
  ["buyer", "Buyer"],
] as const;

const I = {
  eye: "M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12zm10 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
  clock: "M12 7v5l3 2M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z",
  target: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z",
  alert: "M12 9v4M12 17h.01M10.3 4.8 2.8 18a2 2 0 0 0 1.7 3h15a2 2 0 0 0 1.7-3L13.7 4.8a2 2 0 0 0-3.4 0z",
  users: "M16 20v-1a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v1M9.5 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z",
  lock: "M7 11V8a5 5 0 0 1 10 0v3M6 11h12v9H6z",
  shield: "M12 3 5 6v6c0 4.2 2.8 7.4 7 9 4.2-1.6 7-4.8 7-9V6z",
  bolt: "M13 2 4 14h7l-1 8 9-12h-7z",
};

function loadScores(): Record<string, number> {
  try {
    return JSON.parse(localStorage.getItem("ct-scores") || "{}");
  } catch {
    return {};
  }
}

function loadDone(): Record<string, boolean> {
  try {
    return JSON.parse(localStorage.getItem("ct-done") || "{}");
  } catch {
    return {};
  }
}

function Mark({ d }: { d: string }) {
  return (
    <svg className="mark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden>
      <path d={d} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Points({ items }: { items: { icon: keyof typeof I; text: string }[] }) {
  return (
    <ul className="points">
      {items.map((item) => (
        <li key={item.text}>
          <Mark d={I[item.icon]} />
          <span>{item.text}</span>
        </li>
      ))}
    </ul>
  );
}

const QUESTIONS = [
  "For Legacy IoT/OT visibility — is a purely passive network-listening approach realistic as an MVP, or do we need some form of agent or active scanning from the start?",
  "What are practical ways to fingerprint and identify unknown industrial/IoT devices without having signatures for every vendor?",
  "How should we prioritise devices (CVEs + exposure + criticality of the process they control)?",
  "In real industrial environments, how do companies actually isolate risky legacy devices without breaking production? What usually goes wrong?",
  "Given our current skill mix, which technical direction is most realistic to prototype in 4–6 weeks?",
  "What is the smallest useful thing we could show as an MVP (discovery + inventory dashboard, risk report, something else)?",
  "Are there open datasets, traffic captures or lab environments you would recommend for testing OT/IoT discovery ideas?",
  "For deepfake voice detection — what approaches can realistically run with low latency (edge / network-level)?",
  "For LLM application security — where do you still see meaningful gaps that a small team could address?",
  "Which two problems could realistically be combined into one stronger solution?",
  "For which problem is it easiest to quickly validate reality with 5 interviews in one week?",
  "Who should we talk to next, and could you introduce us?",
];

function Home() {
  const [scores, setScores] = useState<Record<string, number>>({});
  const [done, setDone] = useState<Record<string, boolean>>({});

  useEffect(() => {
    setScores(loadScores());
    setDone(loadDone());
    const nodes = document.querySelectorAll("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) entry.target.classList.add("is-in");
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    nodes.forEach((node) => io.observe(node));
    return () => io.disconnect();
  }, []);

  function setScore(row: string, key: string, n: number) {
    const id = `${row}:${key}`;
    setScores((prev) => {
      const next = { ...prev, [id]: prev[id] === n ? 0 : n };
      localStorage.setItem("ct-scores", JSON.stringify(next));
      return next;
    });
  }

  function toggleDone(i: number) {
    const id = String(i);
    setDone((prev) => {
      const next = { ...prev, [id]: !prev[id] };
      localStorage.setItem("ct-done", JSON.stringify(next));
      return next;
    });
  }

  return (
    <div className="page-bg">
      <div className="noise" aria-hidden />
      <div className="wrap">
        <nav className="nav" aria-label="Sections">
          {NAV.map(([id, label]) => (
            <a key={id} className="pill" href={`#${id}`}>
              {label}
            </a>
          ))}
        </nav>

        <header data-reveal>
          <p className="kicker">TUMO Labs · CyberTech Ideathon</p>
          <h1>CyberTech · Week 1</h1>
          <p className="lede">Problem Discovery · Technical Mentor Prep · 11 October 2026</p>
          <p className="lede">Team shortlist of candidate problems + technical questions for mentors</p>
        </header>

        <section id="overview" data-reveal>
          <article className="card">
            <h2>Overview</h2>
            <p className="muted">
              We are in Problem Discovery week. We have researched several
              cybersecurity problems and narrowed them to a shortlist. The goal
              of these technical sessions is to understand which problems are
              most acute, which are realistic for a small student team to
              tackle, and what a realistic MVP could look like.
            </p>
          </article>
        </section>

        <section id="legacy" data-reveal>
          <article className="card">
            <span className="tag tag-priority">Priority</span>
            <h2>Legacy IoT / OT Security</h2>
            <p className="muted">
              Old industrial and IoT devices (cameras, PLCs, SCADA, routers)
              often cannot be patched, are poorly visible on the network, and
              are actively used by attackers. Direction: protect the network
              around the devices — inventory, risk scoring, isolation and
              monitoring — instead of trying to patch the devices themselves.
            </p>
            <Points
              items={[
                { icon: "eye", text: "Many organizations have no current list of OT/IoT devices." },
                { icon: "clock", text: "Devices stay in service for 10–20 years." },
                { icon: "target", text: "Recommended focus: industrial / critical infrastructure visibility (Option A)." },
              ]}
            />
            <div className="grid2 pair">
              <div>
                <h3>Why it hurts</h3>
                <Points
                  items={[
                    { icon: "alert", text: "Unpatched firmware and default passwords are an easy foothold." },
                    { icon: "shield", text: "One device on a flat network can reach production systems." },
                    { icon: "bolt", text: "Compromised cameras and routers feed botnets and ransomware entry." },
                  ]}
                />
              </div>
              <div>
                <h3>Who feels the pain</h3>
                <Points
                  items={[
                    { icon: "users", text: "Energy, water, mining, factories, and hospitals." },
                    { icon: "lock", text: "OT and IT leads who cannot name what is on the network." },
                    { icon: "target", text: "Smaller plants that cannot buy enterprise OT platforms." },
                  ]}
                />
              </div>
            </div>
          </article>
        </section>

        <section id="deepfake" data-reveal>
          <article className="card">
            <h2>Deepfake & Money Fraud</h2>
            <p className="muted">
              AI voice and video clones are used for financial fraud. A few
              seconds of audio are enough. Who feels it: banks, telecoms,
              finance teams, SMBs, and older adults.
            </p>
            <div className="callout">
              Possible angles: real-time detection, especially inside a telecom
              network, and continuous authentication that does not depend on
              “I recognize the voice.”
            </div>
            <div className="grid2 pair">
              <div>
                <h3>Why it hurts</h3>
                <Points
                  items={[
                    { icon: "bolt", text: "A few seconds of audio are enough for a convincing clone." },
                    { icon: "alert", text: "People and voice biometrics both fail under urgency." },
                    { icon: "shield", text: "Money often moves before a callback check happens." },
                  ]}
                />
              </div>
              <div>
                <h3>Who feels the pain</h3>
                <Points
                  items={[
                    { icon: "users", text: "Banks, telecoms, and corporate finance teams." },
                    { icon: "lock", text: "SMBs and older adults targeted by emergency scams." },
                    { icon: "target", text: "Insurers covering rising impersonation claims." },
                  ]}
                />
              </div>
            </div>
          </article>
        </section>

        <section id="llm" data-reveal>
          <article className="card">
            <h2>LLM Application Protection</h2>
            <p className="muted">
              Companies ship chatbots, RAG systems, and AI agents faster than
              they secure them. In the OWASP Top 10 for LLM Applications 2026,
              prompt injection stays at #1 and excessive agency has risen sharply.
            </p>
            <Points
              items={[
                { icon: "alert", text: "Prompt injection (direct and indirect)." },
                { icon: "eye", text: "Sensitive data leakage through retrieval and tools." },
                { icon: "bolt", text: "Agents taking unintended real-world actions." },
              ]}
            />
            <div className="grid2 pair">
              <div>
                <h3>Why it hurts</h3>
                <Points
                  items={[
                    { icon: "shield", text: "The model cannot reliably separate instructions from data." },
                    { icon: "lock", text: "A tool-using agent can leak or act with real privileges." },
                  ]}
                />
              </div>
              <div>
                <h3>Who feels the pain</h3>
                <Points
                  items={[
                    { icon: "users", text: "Teams rolling out internal chatbots, RAG, and agents." },
                    { icon: "target", text: "CTOs and CISOs at banks, telecoms, and software companies." },
                  ]}
                />
              </div>
            </div>
          </article>
        </section>

        <section id="backups" data-reveal>
          <article className="card">
            <h2>Backups & Tamper-Proof Logging</h2>
            <p className="muted">
              Attackers deliberately corrupt logs and backups so investigation
              and recovery fail. Direction: cryptographic anchoring — Merkle
              roots with off-chain storage, or blockchain-based integrity — for
              logs and backup states.
            </p>
            <p className="muted">
              Pain sits with CISOs, SOC and forensics teams, and regulated
              industries that must prove a log was not rewritten after a breach.
            </p>
            <div className="grid2 pair">
              <div>
                <h3>Why it hurts</h3>
                <Points
                  items={[
                    { icon: "alert", text: "Root access lets an attacker rewrite local logs first." },
                    { icon: "shield", text: "A backup that was silently altered cannot be trusted." },
                    { icon: "clock", text: "Most teams discover this only during the incident." },
                  ]}
                />
              </div>
              <div>
                <h3>Who feels the pain</h3>
                <Points
                  items={[
                    { icon: "users", text: "CISOs, SOC analysts, and forensic investigators." },
                    { icon: "lock", text: "Finance, healthcare, and other regulated operators." },
                    { icon: "target", text: "MSPs who must prove integrity to their clients." },
                  ]}
                />
              </div>
            </div>
          </article>
        </section>

        <section id="api" data-reveal>
          <article className="card">
            <h2>API Misuse</h2>
            <p className="muted">
              Incomplete API inventories, weak object-level authorization,
              overly broad permissions, and little monitoring of how APIs are
              actually used. The surface grows with every AI agent and internal
              service.
            </p>
            <div className="grid2 pair">
              <div>
                <h3>Why it hurts</h3>
                <Points
                  items={[
                    { icon: "eye", text: "Teams often do not know which APIs return sensitive data." },
                    { icon: "alert", text: "Shared or long-lived keys collapse accountability." },
                    { icon: "bolt", text: "One broken object check can expose another customer's record." },
                  ]}
                />
              </div>
              <div>
                <h3>Who feels the pain</h3>
                <Points
                  items={[
                    { icon: "users", text: "Product and engineering teams shipping customer APIs." },
                    { icon: "lock", text: "Banks, fintech, and any partner-integration business." },
                    { icon: "shield", text: "Security teams without a dedicated API control layer." },
                  ]}
                />
              </div>
            </div>
          </article>
        </section>

        <section id="quantum" data-reveal>
          <article className="card">
            <span className="tag tag-support">Supporting</span>
            <h2>Quantum / Post-Quantum Cryptography</h2>
            <p className="muted">
              Not a standalone main problem. Realistic for this team:
              cryptographic inventory, and a quantum-risk layer on top of the
              legacy IoT/OT direction. Pure QKD and building quantum computers
              are low priority.
            </p>
            <div className="callout">
              Framing: the tool shows not only which devices are vulnerable
              today, but which ones will not survive a post-quantum transition.
            </div>
            <div className="grid2 pair">
              <div>
                <h3>Why it hurts</h3>
                <Points
                  items={[
                    { icon: "clock", text: "Harvest-now-decrypt-later already applies to long-lived secrets." },
                    { icon: "eye", text: "Most organizations cannot say where RSA and ECC are used." },
                    { icon: "alert", text: "Legacy devices often cannot run larger post-quantum keys." },
                  ]}
                />
              </div>
              <div>
                <h3>Who feels the pain</h3>
                <Points
                  items={[
                    { icon: "lock", text: "Governments, banks, and anyone keeping data for decades." },
                    { icon: "users", text: "OT owners whose devices will still be online at the deadline." },
                    { icon: "target", text: "Not a near-term buyer if the product is quantum hardware itself." },
                  ]}
                />
              </div>
            </div>
          </article>
        </section>

        <section id="questions" data-reveal>
          <article className="card">
            <h2>Technical questions</h2>
            <p className="muted">
              Start of the meeting: ask the mentor to score each problem from 1
              to 5. Tap a number to keep the score on this device.
            </p>
            <div className="scroll-x">
              <table className="score">
                <thead>
                  <tr>
                    <th>Problem</th>
                    {CRITERIA.map(([k, label]) => (
                      <th key={k}>{label}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {SCORE_ROWS.map((row) => (
                    <tr key={row}>
                      <td>{row}</td>
                      {CRITERIA.map(([k]) => (
                        <td key={k}>
                          <div className="scores">
                            {[1, 2, 3, 4, 5].map((n) => {
                              const id = `${row}:${k}`;
                              const on = scores[id] === n;
                              return (
                                <button
                                  key={n}
                                  type="button"
                                  className={on ? "dot on" : "dot"}
                                  aria-label={`${row} ${k} ${n}`}
                                  aria-pressed={on}
                                  onClick={() => setScore(row, k, n)}
                                >
                                  {n}
                                </button>
                              );
                            })}
                          </div>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="muted mt-note">
              Criteria: how acute is it (especially in our context)? How
              realistic is it for a small student team? Is there a clear buyer
              who would pay?
            </p>
            <Points
              items={[
                { icon: "target", text: "Why did this problem get the highest or lowest scores?" },
                { icon: "bolt", text: "If you were in our place, which one problem would you start with?" },
              ]}
            />

            <h3 className="mt-h">Deep questions</h3>
            <p className="muted">Tap a question to cross it off once you have covered it. Tap again to restore it.</p>
            <ol className="qs">
              {QUESTIONS.map((q, i) => (
                <li key={q}>
                  <button
                    type="button"
                    className={done[String(i)] ? "q done" : "q"}
                    aria-pressed={Boolean(done[String(i)])}
                    onClick={() => toggleDone(i)}
                  >
                    <span className="qnum">{i + 1}</span>
                    <span className="qtext">{q}</span>
                    <span className="qx" aria-hidden>
                      ×
                    </span>
                  </button>
                </li>
              ))}
            </ol>
          </article>
        </section>

        <section id="flow" data-reveal>
          <h2>Meeting flow</h2>
          <p className="muted flow-lead">
            Suggested 30–40 minutes. Two sessions together are about one hour —
            split the deep questions, don’t repeat the whole shortlist twice.
          </p>
          <div className="flow">
            <article className="card step">
              <strong>0–5 min</strong>
              Context and the goal of the session.
            </article>
            <article className="card step">
              <strong>5–15 min</strong>
              Quick overview of the two or three strongest problems.
            </article>
            <article className="card step">
              <strong>15–35 min</strong>
              Scoring, then the technical questions.
            </article>
            <article className="card step">
              <strong>Last 5 min</strong>
              Clear next steps and possible introductions.
            </article>
          </div>
        </section>

        <footer className="foot">
          Combined from team research · Prepared for technical mentor sessions · October 2026
          <div className="egg" title="For the people who pointed the way">
            <span className="orb" aria-hidden />
            Thanks to mentors — for the guidance.
          </div>
        </footer>
      </div>
    </div>
  );
}
