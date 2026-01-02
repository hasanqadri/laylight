// components/marketing/footer.tsx
export default function Footer() {
    return (
        <footer className=" py-12">
            <div className="max-w-[1320px] mx-auto px-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-12">

                <div className="col-span-2">
                    <h3 className="text-xl font-semibold mb-4">Laylight</h3>
                    <p className="text-sm">
                        Your personal job coach
                    </p>
                </div>
            </div>

            <div className="max-w-[1320px] mx-auto mt-12 px-6 border-t border-slate-200 pt-6 text-sm">
                © {new Date().getFullYear()} Laylight. All rights reserved.
            </div>
        </footer>
    );
}

function FooterColumn({ title, links }: { title: string; links: string[] }) {
    return (
        <div>
            <h4 className="font-semibold mb-4">{title}</h4>
            <ul className="space-y-2 text-sm">
                {links.map((l) => (
                    <li key={l} className="hover:text-grey transition">
                        <a href={l === "Courses" ? "dashboard" : l.toLowerCase().split(" ")[0]}>{l}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
