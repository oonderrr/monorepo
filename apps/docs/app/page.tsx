export default function Page() {
  return (
    <main className="min-h-dvh flex items-center justify-center p-6 bg-slate-50">
      <article className="w-full max-w-[860px] bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
        <header className="mb-4">
          <h1 className="m-0 text-[28px] leading-tight">
            Dokümantasyon (Örnek)
          </h1>
          <p className="mt-2 text-slate-500">
            Bu sayfa, basit bir sahte dokümantasyon örneğidir.
          </p>
        </header>

        <section className="grid gap-4">
          <div>
            <h2 className="m-0 mb-2 text-[20px] leading-snug">Giriş</h2>
            <p className="m-0 leading-7 text-slate-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              id nisl a velit molestie volutpat. Vestibulum ante ipsum primis in
              faucibus orci luctus et ultrices posuere cubilia curae; Sed
              posuere, justo vel dictum gravida, lorem lorem posuere mi, non
              volutpat augue quam sit amet tortor.
            </p>
          </div>

          <div>
            <h2 className="m-0 mb-2 text-[20px] leading-snug">Kurulum</h2>
            <p className="m-0 mb-2 leading-7 text-slate-700">
              Praesent at lectus id velit fringilla porttitor. Cras nec sem
              vitae urna accumsan laoreet. In non dui vitae massa gravida
              faucibus. Morbi mattis, orci at suscipit malesuada, velit nisl
              vehicula dui, at elementum lectus augue ac ipsum.
            </p>
            <pre className="m-0 p-3 bg-slate-900 text-slate-200 rounded-lg overflow-x-auto text-sm font-mono">
              {`# yükleme
pnpm install

# geliştirme
pnpm dev`}
            </pre>
          </div>

          <div>
            <h2 className="m-0 mb-2 text-[20px] leading-snug">Kullanım</h2>
            <p className="m-0 mb-2 leading-7 text-slate-700">
              Curabitur vitae efficitur nisl. Integer congue, justo sed
              pellentesque interdum, arcu massa mattis massa, sed gravida enim
              mauris vitae leo. Donec ornare, nisl at vulputate tincidunt,
              ligula dolor finibus odio, non luctus nibh justo vitae nisl.
            </p>
            <ul className="m-0 pl-5 text-slate-700 list-disc">
              <li>Adım 1: Lorem ipsum dolor sit amet</li>
              <li>Adım 2: Consectetur adipiscing elit</li>
              <li>Adım 3: Integer id nisl a velit</li>
            </ul>
          </div>
        </section>

        <hr className="my-6 border-slate-200" />

        <footer className="text-slate-500 text-sm">
          <span>© {new Date().getFullYear()} Örnek Doküman</span>
        </footer>
      </article>
    </main>
  );
}
