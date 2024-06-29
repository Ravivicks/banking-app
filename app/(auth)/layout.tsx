import Image from "next/image";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen w-full justify-between font-inter">
      {children}
      <div className="auth-asset">
        <div>
          <Image
            src="/icons/bg.png"
            alt="Auth image"
            width={700}
            height={1000}
            className="rounded-l-xl object-contain"
          />
        </div>
      </div>
    </main>
  );
}
