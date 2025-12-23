import { useState } from "react";

export default function FloatingChat() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* FLOATING BUTTON */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 bg-green-500 text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2 hover:bg-green-600 transition z-50"
      >
        💬 Let’s Chat!
      </button>

      {/* CHAT POPUP */}
      {open && (
        <div className="fixed bottom-24 right-6 w-[320px] h-[420px] bg-[#ece5dd] rounded-2xl shadow-2xl overflow-hidden z-50">

          {/* HEADER */}
          <div className="bg-lime-400 p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src="https://i.pravatar.cc/40?img=32"
                className="w-10 h-10 rounded-full"
                alt="Customer Care"
              />
              <div>
                <p className="font-semibold text-black">Customer Care</p>
                <p className="text-xs text-black/80">
                  We’ll reply within a few minutes
                </p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-black text-xl"
            >
              ×
            </button>
          </div>

          {/* CHAT BODY */}
          <div className="p-4 space-y-3 h-[250px] overflow-y-auto">
            {/* CTA CARD */}
            <div className="bg-white rounded-xl p-4 shadow-sm mt-4">
              <p className="text-sm font-semibold mb-3">
                Contact us for free Demo
              </p>
              <a
                href="https://wa.me/919650774004"
                target="_blank"
                className="inline-flex items-center gap-2 bg-emerald-500 text-white px-4 py-2 rounded-full text-sm hover:bg-emerald-600 transition"
              >
                Open WhatsApp ↗
              </a>
            </div>
          </div>

          {/* FOOTER */}
          <div className="bg-white p-3 flex items-center justify-between border-t">
            <input
              type="text"
              placeholder="Write here..."
              className="text-sm outline-none flex-1"
            />
            <span className="text-green-500 text-xl">🟢</span>
          </div>

        </div>
      )}
    </>
  );
}
