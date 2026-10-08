export default function AuthLayout({ title, subtitle, children, bgImage }) {
  return (
    <div className="min-h-screen flex bg-black">
      {/* ================= Left Panel ================= */}
      <section
        className="relative hidden lg:flex w-1/2 overflow-hidden border-r border-gray-800 bg-cover bg-center"
        style={{
          backgroundImage: bgImage
            ? `url(${bgImage})`
            : "linear-gradient(to bottom right,#000000,#111827,#172554)",
        }}
      >
        {/* Background Overlay */}
        {bgImage && (
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
        )}

        {/* Decorative Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-blue-950/40" />

        {/* Content */}
        <div className="relative z-10 flex h-full w-full flex-col justify-between p-16">
          {/* Brand */}
          <div>
            <h1 className="text-white text-5xl font-bold tracking-tight">
              Visionary
              <span className="text-blue-500">Cart</span>
            </h1>

            <p className="mt-4 text-base font-medium text-gray-300">
              Experience Premium Shopping
            </p>
          </div>

          {/* Welcome Section */}
          <div className="max-w-md">
            <h2 className="text-5xl font-bold leading-tight text-white">
              Welcome Back
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-300">
              Buy your favourite products from thousands of premium brands with
              secure checkout and lightning-fast delivery.
            </p>

            {/* Features */}
            <div className="mt-14 space-y-6">
              <FeatureCard
                icon="🚚"
                title="Fast Delivery"
                description="Delivery within 24 Hours"
              />

              <FeatureCard
                icon="🔒"
                title="Secure Payment"
                description="100% Protected Checkout"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= Right Panel ================= */}
      <section className="flex flex-1 items-center justify-center bg-black px-5 py-10 sm:px-8 lg:px-12">
        <div className="w-full max-w-md rounded-3xl border border-gray-800 bg-[#000000] p-6 shadow-2xl sm:p-10">
          {/* Mobile Logo */}
          <div className="mb-8 text-center lg:hidden">
            <h1 className="text-3xl font-bold">
              Visionary
              <span className="text-blue-500">Cart</span>
            </h1>

            <p className="mt-2 text-sm text-gray-400">
              Experience Premium Shopping
            </p>
          </div>

          {/* Heading */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {title}
            </h2>

            {subtitle && (
              <p className="mt-3 text-sm leading-6 text-gray-400 sm:text-base">
                {subtitle}
              </p>
            )}
          </div>

          {/* Form */}
          <div className="mt-8">{children}</div>
        </div>
      </section>
    </div>
  );
}

/* =======================================================
   Feature Card
======================================================= */

function FeatureCard({ icon, title, description }) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-xl shadow-lg shadow-blue-900/30">
        {icon}
      </div>

      <div>
        <h3 className="text-base font-semibold text-white">{title}</h3>

        <p className="mt-1 text-sm text-white">{description}</p>
      </div>
    </div>
  );
}
