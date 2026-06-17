import { Button, buttonVariants } from "@/components/retroui/Button";
import { Card } from "@/components/retroui/Card";
import { Text } from "@/components/retroui/Text";

const TOOLS = [
  { name: "GitIngest", blurb: "Flatten the whole repo into prompt-friendly text for any AI.", color: "var(--color-green)" },
  { name: "GitMCP", blurb: "Turn the repo into a live MCP server so your AI reads real code.", color: "var(--color-pink)" },
  { name: "GitDiagram", blurb: "Clickable architecture diagram of the entire repo.", color: "var(--color-yellow)" },
  { name: "DeepWiki", blurb: "Auto-generated wiki you can ask questions, with citations.", color: "var(--color-purple)" },
  { name: "GitHub.gg", blurb: "Control panel: copy-for-AI, security scan, quality score.", color: "var(--color-orange)" },
  { name: "StackBlitz", blurb: "Boot the repo in a real dev environment in your browser.", color: "var(--color-blue)" },
  { name: "Star History", blurb: "Star-growth chart that tells you if a repo is actually alive.", color: "var(--color-green)" },
];

function ArrowMark({ size = 56 }: { size?: number }) {
  return (
    <span
      aria-hidden
      className="border-2 border-black shadow inline-grid place-items-center font-head bg-green"
      style={{
        width: size,
        height: size,
        borderRadius: "var(--radius)",
        fontSize: size * 0.55,
        lineHeight: 1,
      }}
    >
      ↗
    </span>
  );
}

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-5 py-10 sm:py-16">
      {/* Header */}
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <ArrowMark size={44} />
          <Text as="h3" className="text-xl tracking-tight m-0">Repo Swap</Text>
        </div>
        <a
          href="#install"
          className={buttonVariants({ size: "sm", variant: "default", className: "text-sm px-4" })}
        >
          Install
        </a>
      </header>

      {/* Hero */}
      <section className="mt-14 sm:mt-20">
        <span
          className="border-2 border-black inline-block font-head text-xs uppercase tracking-wider px-2 py-1 bg-accent"
          style={{ borderRadius: "var(--radius)", boxShadow: "var(--shadow-xs)" }}
        >
          GitHub Switchboard
        </span>
        <Text as="h1" className="mt-5 text-5xl sm:text-7xl leading-[0.9] tracking-tight">
          Change one word in
          <br /> a GitHub URL.
        </Text>
        <Text as="p" className="mt-6 max-w-2xl text-lg sm:text-xl font-medium leading-relaxed">
          Every repo is just <code className="border-2 border-black px-1.5 py-0.5 rounded bg-yellow">github.com/owner/repo</code>.
          A whole ecosystem of tools reuses that shape. <strong>Repo Swap</strong> swaps the
          domain for you — one click, no tracking, no account.
        </Text>

        <div className="mt-8 flex flex-wrap gap-4 items-center" id="install">
          <a
            href="#"
            className={buttonVariants({ size: "lg", variant: "default" })}
          >
            Add to Chrome
          </a>
          <a
            href="#"
            className={buttonVariants({ size: "lg", variant: "outline", className: "bg-white" })}
          >
            Get for Firefox
          </a>
          <Text as="p" className="text-sm font-medium opacity-70 m-0">
            Works in Chrome · Brave · Arc · Edge · Firefox
          </Text>
        </div>
      </section>

      {/* Tool grid */}
      <section className="mt-16 sm:mt-24">
        <Text as="h2" className="text-2xl sm:text-3xl tracking-tight">Seven superpowers</Text>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TOOLS.map((t) => (
            <Card
              key={t.name}
              className="p-0 flex flex-col justify-stretch"
              style={{ borderRadius: "var(--radius)", backgroundColor: t.color }}
            >
              <Card.Header className="p-4 flex-1">
                <Card.Title className="text-lg font-bold m-0">{t.name}</Card.Title>
                <Card.Description className="mt-2 text-sm font-semibold text-black leading-snug">
                  {t.blurb}
                </Card.Description>
              </Card.Header>
            </Card>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="mt-16 sm:mt-24">
        <Text as="h2" className="text-2xl sm:text-3xl tracking-tight">How it works</Text>
        <ol className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            ["Open any repo", "Land on a github.com/owner/repo page."],
            ["Click Repo Swap", "Pick a destination from the popup."],
            ["You're there", "Same repo, different superpower — new tab or window."],
          ].map(([title, body], i) => (
            <Card
              key={title}
              className="bg-white p-0 flex flex-col justify-stretch"
              style={{ borderRadius: "var(--radius)" }}
            >
              <Card.Content className="p-5 flex-1">
                <Text as="h1" className="text-3xl text-primary font-bold">{i + 1}</Text>
                <Card.Title className="mt-3 text-lg font-bold m-0">{title}</Card.Title>
                <Card.Description className="mt-1 text-sm font-semibold text-black leading-snug">
                  {body}
                </Card.Description>
              </Card.Content>
            </Card>
          ))}
        </ol>
      </section>

      {/* Safety */}
      <section className="mt-16 sm:mt-20">
        <Card
          className="bg-accent p-0 w-full"
          style={{ borderRadius: "var(--radius)" }}
        >
          <Card.Content className="p-5">
            <Text as="h4" className="text-sm uppercase tracking-wide font-bold m-0">Heads up</Text>
            <Text as="p" className="mt-1 text-sm font-semibold m-0 leading-snug">
              Third-party tools are best for <strong>public</strong> repos. Don&apos;t send
              private or client code, secrets, or API keys to them.
            </Text>
          </Card.Content>
        </Card>
      </section>

      <footer className="mt-16 border-t-2 pt-6 text-sm font-medium opacity-70 border-black">
        Repo Swap — no backend, no tracking. Built for people who&apos;d rather learn the move than chase the hype.
      </footer>
    </main>
  );
}
