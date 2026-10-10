import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DuuKswjj.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var NAV = [
	["overview", "Overview"],
	["legacy", "Legacy IoT/OT"],
	["deepfake", "Deepfake"],
	["llm", "LLM Protection"],
	["backups", "Backups"],
	["api", "API Misuse"],
	["quantum", "Quantum"],
	["questions", "Questions"],
	["flow", "Meeting Flow"]
];
var SCORE_ROWS = [
	"Legacy IoT/OT",
	"Deepfake & money fraud",
	"LLM application security",
	"Backups & logging",
	"API misuse",
	"Quantum / PQC"
];
var CRITERIA = [
	["acute", "Acute"],
	["real", "Realistic"],
	["buyer", "Buyer"]
];
function loadScores() {
	try {
		return JSON.parse(localStorage.getItem("ct-scores") || "{}");
	} catch {
		return {};
	}
}
function Home() {
	const [scores, setScores] = (0, import_react.useState)({});
	(0, import_react.useEffect)(() => {
		setScores(loadScores());
		const nodes = document.querySelectorAll("[data-reveal]");
		const io = new IntersectionObserver((entries) => {
			for (const entry of entries) if (entry.isIntersecting) entry.target.classList.add("is-in");
		}, {
			threshold: .12,
			rootMargin: "0px 0px -8% 0px"
		});
		nodes.forEach((node) => io.observe(node));
		return () => io.disconnect();
	}, []);
	function setScore(row, key, n) {
		const id = `${row}:${key}`;
		setScores((prev) => {
			const next = {
				...prev,
				[id]: prev[id] === n ? 0 : n
			};
			localStorage.setItem("ct-scores", JSON.stringify(next));
			return next;
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "page-bg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "noise",
			"aria-hidden": true
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "wrap",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "nav",
					"aria-label": "Sections",
					children: NAV.map(([id, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						className: "pill",
						href: `#${id}`,
						children: label
					}, id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					"data-reveal": true,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "kicker",
							children: "TUMO Labs · CyberTech Ideathon"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "CyberTech · Week 1" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "lede",
							children: "Problem Discovery · Technical Mentor Prep · 11 October 2026"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "lede",
							children: "Team shortlist of candidate problems + technical questions for mentors"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "overview",
					"data-reveal": true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "card",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Overview" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "muted",
							children: "We are in Problem Discovery week. We have researched several cybersecurity problems and narrowed them to a shortlist. The goal of these technical sessions is to understand which problems are most acute, which are realistic for a small student team to tackle, and what a realistic MVP could look like."
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "legacy",
					"data-reveal": true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "card",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "tag tag-priority",
								children: "Priority"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Legacy IoT / OT Security" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "muted",
								children: "Old industrial and IoT devices (cameras, PLCs, SCADA, routers) often cannot be patched, are poorly visible on the network, and are actively used by attackers. Direction: protect the network around the devices — inventory, risk scoring, isolation and monitoring — instead of trying to patch the devices themselves."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "clean",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Many organizations have no current list of OT/IoT devices." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Devices stay in service for 10–20 years." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Recommended focus: industrial / critical infrastructure visibility (Option A)." })
								]
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "deepfake",
					"data-reveal": true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "card",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Deepfake & Money Fraud" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "muted",
								children: "AI voice and video clones are used for financial fraud. A few seconds of audio are enough. Who feels it: banks, telecoms, finance teams, SMBs, and older adults."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "callout",
								children: "Possible angles: real-time detection, especially inside a telecom network, and continuous authentication that does not depend on “I recognize the voice.”"
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "llm",
					"data-reveal": true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "card",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "LLM Application Protection" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "muted",
								children: "Companies ship chatbots, RAG systems, and AI agents faster than they secure them. In the OWASP Top 10 for LLM Applications 2026, prompt injection stays at #1 and excessive agency has risen sharply."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "clean",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Prompt injection (direct and indirect)" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Sensitive data leakage through retrieval and tools" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Agents taking unintended real-world actions" })
								]
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "backups",
					"data-reveal": true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "card",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Backups & Tamper-Proof Logging" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "muted",
								children: "Attackers deliberately corrupt logs and backups so investigation and recovery fail. Direction: cryptographic anchoring — Merkle roots with off-chain storage, or blockchain-based integrity — for logs and backup states."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "muted",
								children: "Pain sits with CISOs, SOC and forensics teams, and regulated industries that must prove a log was not rewritten after a breach."
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "api",
					"data-reveal": true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "card",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "API Misuse" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "muted",
							children: "Incomplete API inventories, weak object-level authorization, overly broad permissions, and little monitoring of how APIs are actually used. The surface grows with every AI agent and internal service."
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "quantum",
					"data-reveal": true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "card",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "tag tag-support",
								children: "Supporting"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Quantum / Post-Quantum Cryptography" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "muted",
								children: "Not a standalone main problem. Realistic for this team: cryptographic inventory, and a quantum-risk layer on top of the legacy IoT/OT direction. Pure QKD and building quantum computers are low priority."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "callout",
								children: "Framing: the tool shows not only which devices are vulnerable today, but which ones will not survive a post-quantum transition."
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "questions",
					"data-reveal": true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "card",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Technical questions" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "muted",
								children: "Start of the meeting: ask the mentor to score each problem from 1 to 5. Tap a number to keep the score on this device."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								style: { overflowX: "auto" },
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
									className: "score",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Problem" }), CRITERIA.map(([k, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: label }, k))] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: SCORE_ROWS.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: row }), CRITERIA.map(([k]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "scores",
										children: [
											1,
											2,
											3,
											4,
											5
										].map((n) => {
											const id = `${row}:${k}`;
											const on = scores[id] === n;
											return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												className: on ? "dot on" : "dot",
												"aria-label": `${row} ${k} ${n}`,
												"aria-pressed": on,
												onClick: () => setScore(row, k, n),
												children: n
											}, n);
										})
									}) }, k))] }, row)) })]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "muted",
								style: { marginTop: "0.8rem" },
								children: "Criteria: how acute is it (especially in our context)? How realistic is it for a small student team? Is there a clear buyer who would pay?"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "clean",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Why did this problem get the highest or lowest scores?" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "If you were in our place, which one problem would you start with?" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								style: { marginTop: "1.2rem" },
								children: "Deep questions"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
								className: "qs",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "For Legacy IoT/OT visibility — is a purely passive network-listening approach realistic as an MVP, or do we need some form of agent or active scanning from the start?" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "What are practical ways to fingerprint and identify unknown industrial/IoT devices without having signatures for every vendor?" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "How should we prioritise devices (CVEs + exposure + criticality of the process they control)?" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "In real industrial environments, how do companies actually isolate risky legacy devices without breaking production? What usually goes wrong?" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Given our current skill mix, which technical direction is most realistic to prototype in 4–6 weeks?" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "What is the smallest useful thing we could show as an MVP (discovery + inventory dashboard, risk report, something else)?" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Are there open datasets, traffic captures or lab environments you would recommend for testing OT/IoT discovery ideas?" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "For deepfake voice detection — what approaches can realistically run with low latency (edge / network-level)?" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "For LLM application security — where do you still see meaningful gaps that a small team could address?" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Which two problems could realistically be combined into one stronger solution?" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "For which problem is it easiest to quickly validate reality with 5 interviews in one week?" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Who should we talk to next, and could you introduce us?" })
								]
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: "flow",
					"data-reveal": true,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Meeting flow" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "muted",
							style: { marginTop: 0 },
							children: "Suggested 30–40 minutes. Two sessions together are about one hour — split the deep questions, don’t repeat the whole shortlist twice."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flow",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
									className: "card step",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "0–5 min" }), "Context and the goal of the session."]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
									className: "card step",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "5–15 min" }), "Quick overview of the two or three strongest problems."]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
									className: "card step",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "15–35 min" }), "Scoring, then the technical questions."]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
									className: "card step",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Last 5 min" }), "Clear next steps and possible introductions."]
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
					className: "foot",
					children: ["Combined from team research · Prepared for technical mentor sessions · October 2026", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "egg",
						title: "For the people who pointed the way",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "orb",
							"aria-hidden": true
						}), "Thanks to mentors — for the guidance."]
					})]
				})
			]
		})]
	});
}
//#endregion
export { Home as component };
