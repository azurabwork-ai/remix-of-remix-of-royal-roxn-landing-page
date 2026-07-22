import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Loader2, LogOut, Mail, Phone, MapPin, Building2, Users, RefreshCw, Trash2 } from "lucide-react";

export const Route = createFileRoute("/admin/dashboard")({
  head: () => ({
    meta: [
      { title: "Admin Dashboard | Royal RoXn" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: AdminDashboard,
});

type Lead = {
  id: string;
  name: string;
  email: string;
  phone: string;
  city: string;
  brokerage: string;
  created_at: string;
};

function AdminDashboard() {
  const navigate = useNavigate();
  const [leads, setLeads] = useState<Lead[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState<string | null>(null);

  async function loadLeads() {
    setLoading(true);
    const { data, error } = await supabase
      .from("leads")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) toast.error(error.message);
    else setLeads(data as Lead[]);
    setLoading(false);
  }

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (!data.session) {
        navigate({ to: "/admin" });
        return;
      }
      setEmail(data.session.user.email ?? null);
      loadLeads();
    });
  }, [navigate]);

  async function handleSignOut() {
    await supabase.auth.signOut();
    navigate({ to: "/admin" });
  }

  async function handleDelete(id: string) {
    if (!confirm("Delete this lead?")) return;
    const { error } = await (supabase as any).from("leads").delete().eq("id", id);
    if (error) toast.error(error.message);
    else {
      toast.success("Deleted");
      setLeads((prev) => prev?.filter((l) => l.id !== id) ?? null);
    }
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-10">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-lg bg-[color:var(--gold)]">
              <Users className="h-5 w-5 text-[color:var(--ink)]" />
            </div>
            <div>
              <h1 className="font-display text-lg font-bold text-[color:var(--ink)]">Lead Submissions</h1>
              <p className="text-xs text-muted-foreground">{email}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={loadLeads} disabled={loading}>
              <RefreshCw className={`mr-2 h-4 w-4 ${loading ? "animate-spin" : ""}`} />
              Refresh
            </Button>
            <Button variant="outline" size="sm" onClick={handleSignOut}>
              <LogOut className="mr-2 h-4 w-4" /> Sign out
            </Button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-10">
        <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <StatCard label="Total leads" value={leads?.length ?? 0} />
          <StatCard label="Today" value={leads?.filter((l) => new Date(l.created_at).toDateString() === new Date().toDateString()).length ?? 0} />
          <StatCard label="Last 7 days" value={leads?.filter((l) => Date.now() - new Date(l.created_at).getTime() < 7 * 864e5).length ?? 0} />
        </div>

        {loading && leads === null ? (
          <div className="grid place-items-center py-24">
            <Loader2 className="h-6 w-6 animate-spin text-[color:var(--gold)]" />
          </div>
        ) : leads && leads.length > 0 ? (
          <div className="space-y-3">
            {leads.map((lead) => (
              <div key={lead.id} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display text-lg font-bold text-[color:var(--ink)]">{lead.name}</h3>
                    <p className="text-xs text-muted-foreground">
                      {new Date(lead.created_at).toLocaleString("en-CA", { dateStyle: "medium", timeStyle: "short" })}
                    </p>
                  </div>
                  <Button variant="ghost" size="sm" onClick={() => handleDelete(lead.id)} className="text-red-600 hover:bg-red-50 hover:text-red-700">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
                <div className="mt-4 grid grid-cols-1 gap-3 text-sm sm:grid-cols-2 lg:grid-cols-4">
                  <InfoItem icon={<Mail className="h-4 w-4" />} label="Email">
                    <a href={`mailto:${lead.email}`} className="hover:text-[color:var(--gold)]">{lead.email}</a>
                  </InfoItem>
                  <InfoItem icon={<Phone className="h-4 w-4" />} label="Phone">
                    <a href={`tel:${lead.phone}`} className="hover:text-[color:var(--gold)]">{lead.phone}</a>
                  </InfoItem>
                  <InfoItem icon={<MapPin className="h-4 w-4" />} label="City">{lead.city}</InfoItem>
                  <InfoItem icon={<Building2 className="h-4 w-4" />} label="Brokerage">{lead.brokerage}</InfoItem>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-16 text-center">
            <p className="text-muted-foreground">No submissions yet. Leads will appear here as soon as someone books a call.</p>
          </div>
        )}
      </main>
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{label}</p>
      <p className="mt-1 font-display text-3xl font-bold text-[color:var(--ink)]">{value}</p>
    </div>
  );
}

function InfoItem({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {icon}
        {label}
      </div>
      <div className="mt-1 text-[color:var(--ink)]">{children}</div>
    </div>
  );
}
