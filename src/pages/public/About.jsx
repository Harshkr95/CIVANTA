import { Target, Heart, Eye, Users2 } from "lucide-react";
import Card from "../../components/ui/Card";

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="max-w-2xl">
        <div className="text-xs font-semibold tracking-wider text-brand-600 uppercase">
          About CIVANTA
        </div>
        <h1 className="mt-2 text-4xl font-extrabold text-slate-900 tracking-tight">
          Technology that serves people.
        </h1>
        <p className="mt-4 text-slate-600">
          CIVANTA is an intelligent public-impact platform built to bridge the
          gap between citizens and authorities. We combine AI, location
          intelligence and multilingual design to make governance faster,
          transparent and accountable.
        </p>
      </div>

      <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {[
          {
            icon: Target,
            title: "Mission",
            desc: "Make public service delivery faster and transparent.",
          },
          {
            icon: Eye,
            title: "Vision",
            desc: "A nation where every citizen is heard and every issue is resolved.",
          },
          {
            icon: Heart,
            title: "Values",
            desc: "Trust, accessibility, accountability and inclusion.",
          },
          {
            icon: Users2,
            title: "Community",
            desc: "Built for citizens, officers and decision-makers alike.",
          },
        ].map((x) => (
          <Card key={x.title} className="p-6">
            <div className="h-11 w-11 rounded-xl bg-brand-50 flex items-center justify-center">
              <x.icon className="h-5 w-5 text-brand-700" />
            </div>
            <div className="mt-4 font-semibold text-slate-900">{x.title}</div>
            <div className="mt-1 text-sm text-slate-600">{x.desc}</div>
          </Card>
        ))}
      </div>

      <div className="mt-16 grid md:grid-cols-2 gap-6">
        <Card className="p-8">
          <h3 className="text-xl font-bold text-slate-900">Contact</h3>
          <p className="mt-2 text-sm text-slate-600">
            Reach out for partnerships, pilot programs or support.
          </p>
          <div className="mt-4 space-y-2 text-sm">
            <div>
              <span className="text-slate-500">Email:</span> hello@civanta.in
            </div>
            <div>
              <span className="text-slate-500">Phone:</span> +91 98xxxxxx00
            </div>
            <div>
              <span className="text-slate-500">Address:</span> Civic Tech Hub,
              Bengaluru, India
            </div>
          </div>
        </Card>
        <Card className="p-8">
          <h3 className="text-xl font-bold text-slate-900">Send a message</h3>
          <form
            className="mt-4 grid gap-3"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Message sent (demo)");
            }}
          >
            <input
              className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm"
              placeholder="Your name"
            />
            <input
              className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm"
              placeholder="Email"
              type="email"
            />
            <textarea
              className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm"
              rows="4"
              placeholder="Your message"
            />
            <button className="rounded-xl bg-brand-600 text-white px-4 py-2.5 text-sm font-semibold hover:bg-brand-700">
              Send message
            </button>
          </form>
        </Card>
      </div>
    </div>
  );
}
