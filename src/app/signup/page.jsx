"use client";

import Link from "next/link";
import Image from "next/image";
import { Eye, EyeOff, CheckCircle2, Circle, ArrowRight } from "lucide-react";
import { use, useState } from "react";

import { useRouter } from "next/navigation";


export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordValue, setPasswordValue] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  // Real-time password criteria tracking
  const hasMinLength = passwordValue.length >= 6;
  const hasUppercase = /[A-Z]/.test(passwordValue);
  const hasLowercase = /[a-z]/.test(passwordValue);

  const validatePassword = (password) => {
    if (!hasMinLength) return "Password must be at least 6 characters";
    if (!hasUppercase) return "Password must contain one uppercase letter";
    if (!hasLowercase) return "Password must contain one lowercase letter";
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");
    const image = formData.get("photoURL");
    //  const

     console.log(name , email , password , image);
     
  


    const { data, error } = await authClient.signUp.email({
      email, // user email address
      password, // user password -> min 8 characters by default
      name, // user display name
      image, // User image URL (optional)
      callbackURL: "/",
    });

    if (!data) {
      alert(error);
    }

    if (data) {
      router.push("/");
    }

    console.log(data, error);
  };







  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-50 text-slate-900 selection:bg-indigo-500 selection:text-white">
      {/* Dynamic Background Blobs */}
      <div className="absolute top-0 -left-4 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
      <div className="absolute top-0 -right-4 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-20 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />

      <div className="container relative mx-auto px-4 py-8 lg:py-16">
        <div className="grid min-h-[85vh] items-center gap-16 lg:grid-cols-12">
          {/* Left Side (Content & Graphic) */}
          <div className="hidden lg:block lg:col-span-6 xl:col-span-7 pr-8">
            <Link
              href="/"
              className="inline-block transition-transform duration-200 hover:scale-105"
            >
              <h1 className="text-3xl font-extrabold tracking-tight">
                <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                  Nex
                </span>
                Learn
              </h1>
            </Link>

            <div className="mt-12">
              <span className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50/50 px-4 py-1.5 text-xs font-semibold text-indigo-700 backdrop-blur-sm">
                📚 Smart Study Room Booking Platform
              </span>

              <h2 className="mt-6 text-5xl xl:text-6xl font-black tracking-tight leading-[1.1] text-slate-900">
                Join NexLearn <br />
                <span className="bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                  and Unlock Your Focus.
                </span>
              </h2>

              <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate-600/90">
                Find the perfect study space, book with ease, and boost your
                productivity with our modern room booking ecosystem.
              </p>

              {/* Feature Cards Grid */}
              <div className="mt-12 grid gap-4 sm:grid-cols-2">
                {[
                  {
                    emoji: "📅",
                    title: "Easy Booking",
                    desc: "Book premium study spaces in seconds.",
                  },
                  {
                    emoji: "🔒",
                    title: "Secure Room Controls",
                    desc: "Your spaces are fully private and secure.",
                  },
                  {
                    emoji: "⚡",
                    title: "Instant Access",
                    desc: "No queues. Real-time availability updates.",
                  },
                ].map((feat, idx) => (
                  <div
                    key={idx}
                    className="flex gap-4 rounded-2xl border border-slate-100 bg-white/60 p-4 shadow-sm backdrop-blur-md transition-all hover:shadow-md"
                  >
                    <span className="text-2xl">{feat.emoji}</span>
                    <div>
                      <h3 className="font-semibold text-slate-900">
                        {feat.title}
                      </h3>
                      <p className="text-xs text-slate-500 mt-0.5">
                        {feat.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Enhanced Graphic Frame */}
              <div className="relative mt-12 group">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-indigo-500 to-cyan-500 opacity-20 blur-xl transition-all duration-300 group-hover:opacity-30" />
                <Image
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                  alt="Students studying"
                  width={700}
                  height={450}
                  className="relative rounded-3xl object-cover shadow-xl border border-white/50 transition-transform duration-500 group-hover:scale-[1.01]"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Right Side (Registration Card) */}
          <div className="mx-auto w-full max-w-xl lg:col-span-6 xl:col-span-5">
            <div className="relative rounded-[2.5rem] border border-white/60 bg-white/80 p-8 shadow-[0_32px_64px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:p-10">
              <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                  Create an account
                </h2>
                <p className="mt-2 text-sm text-slate-500">
                  Let’s get you ready for unhindered focus sessions.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                {/* Inputs Wrapper */}
                <div className="space-y-4">
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="John Doe"
                      className="w-full rounded-2xl border border-slate-200/80 bg-slate-50/50 px-4 py-3 text-sm outline-none transition-all duration-200 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
                    />
                  </div>

                  <div>
                    <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="john@example.com"
                      className="w-full rounded-2xl border border-slate-200/80 bg-slate-50/50 px-4 py-3 text-sm outline-none transition-all duration-200 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
                    />
                  </div>

                  <div>
                    <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Photo URL
                    </label>
                    <input
                      type="url"
                      name="photoURL"
                      required
                      placeholder="https://images.unsplash.com/your-avatar"
                      className="w-full rounded-2xl border border-slate-200/80 bg-slate-50/50 px-4 py-3 text-sm outline-none transition-all duration-200 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
                    />
                  </div>

                  <div>
                    <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Password
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        required
                        value={passwordValue}
                        onChange={(e) => setPasswordValue(e.target.value)}
                        placeholder="••••••••"
                        className="w-full rounded-2xl border border-slate-200/80 bg-slate-50/50 px-4 py-3 pr-12 text-sm outline-none transition-all duration-200 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition"
                      >
                        {showPassword ? (
                          <EyeOff size={18} />
                        ) : (
                          <Eye size={18} />
                        )}
                      </button>
                    </div>

                    {/* Interactive Password Requirements Checklist */}
                    <div className="mt-3 rounded-2xl border border-slate-100 bg-slate-50/50 p-3 text-xs text-slate-600">
                      <p className="font-semibold text-slate-700 mb-2">
                        Password requirements:
                      </p>
                      <ul className="space-y-1.5">
                        <li
                          className={`flex items-center gap-2 transition ${hasMinLength ? "text-emerald-600" : "text-slate-400"}`}
                        >
                          {hasMinLength ? (
                            <CheckCircle2
                              size={14}
                              className="fill-emerald-50"
                            />
                          ) : (
                            <Circle size={14} />
                          )}
                          At least 6 characters
                        </li>
                        <li
                          className={`flex items-center gap-2 transition ${hasUppercase ? "text-emerald-600" : "text-slate-400"}`}
                        >
                          {hasUppercase ? (
                            <CheckCircle2
                              size={14}
                              className="fill-emerald-50"
                            />
                          ) : (
                            <Circle size={14} />
                          )}
                          One uppercase letter (A-Z)
                        </li>
                        <li
                          className={`flex items-center gap-2 transition ${hasLowercase ? "text-emerald-600" : "text-slate-400"}`}
                        >
                          {hasLowercase ? (
                            <CheckCircle2
                              size={14}
                              className="fill-emerald-50"
                            />
                          ) : (
                            <Circle size={14} />
                          )}
                          One lowercase letter (a-z)
                        </li>
                      </ul>
                    </div>

                    {error && (
                      <p className="mt-2 text-xs font-medium text-rose-500 transition-all">
                        ⚠️ {error}
                      </p>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  className="group relative flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 py-3.5 font-semibold text-white shadow-lg shadow-indigo-600/20 transition-all duration-200 hover:brightness-110 active:scale-[0.98]"
                >
                  Create Account
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-200 group-hover:translate-x-0.5"
                  />
                </button>

                {/* Divider */}
                <div className="flex items-center gap-3 py-2">
                  <div className="h-px flex-1 bg-slate-100" />
                  <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                    or
                  </span>
                  <div className="h-px flex-1 bg-slate-100" />
                </div>

                {/* Social Button */}
                <button
                  type="button"
                  className="flex w-full items-center justify-center gap-3 rounded-2xl border border-slate-200/80 bg-white py-3 text-sm font-medium text-slate-700 shadow-sm transition-all duration-200 hover:bg-slate-50 hover:border-slate-300"
                >
                  <Image
                    width={18}
                    height={18}
                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                    alt="Google"
                  />
                  Sign up with Google
                </button>
              </form>

              <p className="mt-8 text-center text-sm text-slate-500">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="font-semibold text-indigo-600 hover:text-indigo-700 hover:underline underline-offset-4"
                >
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
